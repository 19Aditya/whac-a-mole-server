import { Schema, connect, model } from "mongoose";
connect(process.env.MONGOOSE_KEY);

const scoreSchema = new Schema({
  username: { type: String, required: true },
  score: { type: Number, required: true }
});

export const Score = model("Score", scoreSchema);