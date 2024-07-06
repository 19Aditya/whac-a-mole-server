const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

router.get("/", (req, res) => {
	res.render("signup.ejs");
});

router.use(express.urlencoded({ extended: false }));
router.post("/", async (req, res) => {
	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;

	await User.create({ username, email, password });
	res.redirect("/login");
});

module.exports = router;
