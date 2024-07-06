import { Router, urlencoded } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

const router = Router();
const jwtSecret = process.env.jwt_secret;

router.get("/", (_req, res) => {
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
		const token = jwt.sign(payload, jwtSecret);
		res.json({ token });
	} else {
		res.status(411).json({ message: "Incorrect email and/or pass" });
	}
});

export default router;
