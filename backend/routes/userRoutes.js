const express = require("express");
const registerUser = require("../controller/userControle");
const loginFunc = require("../controller/loginControler");
const searchUser = require("../controller/searchUserControl");

const router = express.Router();

router.route("/signup").post(registerUser);
router.route("/login").post(loginFunc);
router.route("/user").get(searchUser);

module.exports = router;
