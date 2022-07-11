const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const loginFunc = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const login = await User.findOne({
    email,
    password,
  });

  if (login) {
    res.status(200).json({
      email: User.email,
      password: User.password,
    });
  } else {
    res.status(404);
    throw new Error("User Not found");
  }
});

module.exports = loginFunc;
