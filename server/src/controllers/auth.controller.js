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

async function loginUser(req, res) {
  const {username, email, password} = req.body;

  const user = await userModel.findOne({
    $or: [{email}, {username}]
  });

  if(!user) {
    return res.status(404).json({msg: "user does not exist!"});
  }

  const isPasswordValid = await bcrypt.compare(password, user.password.toString());

  if(!isPasswordValid) {
    return res.status(401).json({msg: "Password is wrong"});
  } 

  const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

  res.cookie("login", token);

  res.status(200).json({msg: `Welcome back - ${user.username.toString()}`})
}

export default { registerUser, loginUser };
