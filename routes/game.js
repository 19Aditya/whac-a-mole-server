import { Router } from "express";
const router = Router();
import tokenAuth from "../middleware/tokenverify.js";

router.get("/", tokenAuth, (req, res) => {
	res.render("game.ejs");
});

export default router;
