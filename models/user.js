const mongoose = require("mongoose");
mongoose.connect(
	"mongodb+srv://awesomeaditya0:wproject@cluster0.k845zjg.mongodb.net/whac-a-mole",
);

const UserSchema = new mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
