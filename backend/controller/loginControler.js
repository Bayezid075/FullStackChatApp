const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const loginFunc = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const login = await User.findOne({
    email,
  });

  if (login && (await login.matchPassword(password))) {
    res.json({
      _id: login._id,
      name: login.name,
      email: login.email,
      password: login.password,
      pic: login.pic,
    });
  } else {
    res.status(404);
    res.send("user Not found");
  }
});

module.exports = loginFunc;
