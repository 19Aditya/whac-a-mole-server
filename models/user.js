import { Schema, connect, model } from "mongoose";
connect(
	"mongodb+srv://awesomeaditya0:wproject@cluster0.k845zjg.mongodb.net/whac-a-mole",
);

const UserSchema = new Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

export const User = model("User", UserSchema);
