const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const genToken = require("../config/genToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Fillup all the feld");
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("Email Already Exist");
  }

  const useris = User.create({
    name,
    email,
    password,
    pic,
  });

  if (useris) {
    res.status(201).json({
      _id: User._id,
      name: User.name,
      password: User.password,
      pic: User.pic,
      token: genToken(User._id),
    });
  } else {
    res.status(404);
    throw new Error("user not create");
  }
});

module.exports = registerUser;
