import tokenAuth from "../middleware/tokenverify.js";
import { Router } from "express";
const router = Router();
import { User } from "../models/user.js";
import { Score } from "../models/score.js"

router.post("/", tokenAuth, async (req, res) => {
    const { score } = req.body;
    const email = req.email;
    const username = await User.findOne({ email });
    try {
        const existingScore = await Score.findOne({ username });
        if (!existingScore || score > existingScore.score) {
  
            if (existingScore) {
                existingScore.score = score;
                await existingScore.save();
            } else {
                const newScore = new Score({
                    username,
                    score,
                });
                await newScore.save();
            }
        } else {
            console.log("Score is not higher than the existing score")    
        }
        } catch (error) {
        console.log("Error saving score ", error);
    }

    
   
});

export default router;
