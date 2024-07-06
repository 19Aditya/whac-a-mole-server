const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "ejs");
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser());

const signuproute = require("./routes/signup");
const loginroute = require("./routes/login");
const gameroute = require("./routes/game");

app.use("/signup", signuproute);
app.use("/login", loginroute);
app.use("/game", gameroute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

