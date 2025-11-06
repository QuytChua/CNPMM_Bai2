import User from "../models/userModel.js";

let createNewUser = async (data) => {
  await User.create(data);
};

let getAllUsers = async () => {
  return await User.find();
};

let getUserById = async (id) => {
  return await User.findById(id);
};

let updateUserData = async (data) => {
  await User.findByIdAndUpdate(data.id, data);
};

let deleteUserById = async (id) => {
  await User.findByIdAndDelete(id);
};

export default {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUserData,
  deleteUserById,
};
