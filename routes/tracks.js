const express = require("express");
const router = express.Router();
const {getItems, getItem} = require("../controllers/tracks")
//TODO  htttp://localhost/tracks GET,POST,DELETE,PUT

router.get("/",getItems)

router.get(":/id", getItem);






module.exports= router;