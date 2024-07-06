const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.token_secret;

router.get("/", (req, res) => {
  res.render("login.ejs");
});

router.use(express.urlencoded({ extended: false }));
router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.find({
    email,
    password,
  });
  if (user) {
    const payload = { email: email };
    const token = jwt.sign(payload, secret);
    res.json({ token } );
  } else {
    res.status(411).json({ message: "Incorrect email and/or pass" });
  }
});

module.exports = router;
