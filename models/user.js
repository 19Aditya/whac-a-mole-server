import { Schema, connect, model } from "mongoose";
connect(process.env.MONGOOSE_KEY);

const UserSchema = new Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

export const User = model("User", UserSchema);
