import { Router, urlencoded } from "express";
import { User } from "../models/user.js";

const router = Router();
router.get("/", (_req, res) => {
	res.render("signup.ejs");
});

router.use(urlencoded({ extended: false }));
router.post("/", async (req, res) => {
	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;

	await User.create({ username, email, password });
	res.redirect("/login");
});

export default router;
