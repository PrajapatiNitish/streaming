import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

async function registerUser(req, res) {
  const { username, email, password } = req.body;

  // Validate User
  const isUserExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserExist) {
    return res.status(409).json({ msg: "User already exists" });
  }

  const hash = await bcrypt.hash(password, 10);

  try {
    const user = await userModel.create({
      username,
      email,
      password: hash,
    });

    const token = jwt.sign(
      {
        id: user._id
      },
      process.env.JWT_SECRET,
    );

    res.cookie("token", token);

    res.status(201).json({ msg: `Welcome, ${username}` });
  } catch (err) {
    res.status(500).json({ msg: "Sorry, something went wrong!" });
    throw err
  }
}

export default { registerUser };
