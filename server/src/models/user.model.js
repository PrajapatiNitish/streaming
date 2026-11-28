import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    unique: true,
    default: null,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["creator", "user"],
    default: "user",
  },

  isSign: {
    type: Boolean,
  }
});

const userModel = mongoose.model("users", userSchema);

export default userModel;
