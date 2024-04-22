const express = require("express")
const router = express.Router()
const {runIndex, createUser} =require("../controllers/app.controller")

router.get("/", runIndex);
router.post("/create-user", createUser);


module.exports = router