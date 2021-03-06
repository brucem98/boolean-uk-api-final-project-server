const express = require("express");

const {getAllRacetracks, updateRacetrackById, getOneRacetrackById, createOneRacetrackAndCompetition} = require("./controller")

const router = express.Router();

router.get("/", getAllRacetracks)

router.get("/:id", getOneRacetrackById)

router.put("/:id", updateRacetrackById)

router.post("/", createOneRacetrackAndCompetition)

module.exports = router;