const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/programsActions");

// route to get all the programs
router.get("/", browse);

module.exports = router;
