import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

async function registerUser(req, res) {
  const { username, email, password, role = "user" } = await req.body;

  //Authenticate to the user without validate user for now
  const isUserExist = userModel.find({
    $or: [{ username, email }],
  });

  if (isUserExist) {
    res.status(409).json({ msg: "user already exists" });
  }

  const hash = await bcrypt.hash(password, 10);

  //Try to create user in db
  try {
    const user = await userModel.create({
      username,
      email,
      password: hash,
      role,
    });

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);

    res
      .status(201)
      .json({ msg: "User successfully created", user: user.toObject() });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong" });
  }
}

export default { registerUser };
