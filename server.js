import cookieParser from "cookie-parser";
import express, { json } from "express";
import gameroute from "./routes/game.js";
import loginroute from "./routes/login.js";
import signuproute from "./routes/signup.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(json());
app.use(cookieParser());

app.use("/signup", signuproute);
app.use("/login", loginroute);
app.use("/game", gameroute);

app.listen(PORT, () => {});
