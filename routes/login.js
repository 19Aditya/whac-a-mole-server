import { Router, urlencoded } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

const router = Router();
const jwt_secret = process.env.jwt_secret;

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
		const token = jwt.sign(payload, jwt_secret);
		res.json({ token });
	} else {
		res.status(411).json({ message: "Incorrect email and/or pass" });
	}
});

export default router;
