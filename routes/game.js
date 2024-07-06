const express = require("express");
const router = express.Router();
const tokenAuth = require("../middleware/tokenverify")

router.get('/', tokenAuth, (req, res) => {
    res.render("game.ejs")
})

module.exports = router