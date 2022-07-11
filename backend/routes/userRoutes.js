const express = require("express");
const registerUser = require("../controller/userControle");
const loginFunc = require("../controller/loginControler");

const router = express.Router();

router.route("/signup").post(registerUser);
router.route("/login").get(loginFunc);

module.exports = router;
