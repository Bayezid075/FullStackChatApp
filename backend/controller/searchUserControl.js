const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const searchUser = asyncHandler(async (req, res) => {
  const search = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const searchedUsers = await User.find(search);
  res.send(searchedUsers);
});

module.exports = searchUser;
