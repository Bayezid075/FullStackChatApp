const express = require("express");
const registerUser = require("../controller/userControle");

const router = express.Router();

router.route("/").post(registerUser);

module.exports = router;
