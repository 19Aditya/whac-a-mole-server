import { Router, urlencoded } from "express";
import { sign } from "jsonwebtoken";
import { User } from "../models/user.js";

require("dotenv").config();

const router = Router();
const secret = process.env.token_secret;

router.get("/", (req, res) => {
	res.render("login.ejs");
});

router.use(urlencoded({ extended: false }));
router.post("/", async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	const user = await User.find({
		email,
		password,
	});
	if (user) {
		const payload = { email: email };
		const token = sign(payload, secret);
		res.json({ token });
	} else {
		res.status(411).json({ message: "Incorrect email and/or pass" });
	}
});

export default router;
