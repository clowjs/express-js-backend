const express = require("express");
const router = express.Router();
const pokedex = require("../db/pokedex.json");

/* GET All Pokemon */
router.get("/", function (req, res, next) {
  res.json(pokedex);
});

/* GET Pokemon by Id. */
router.get("/:id", function (req, res, next) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid ID"});
    return;
  }

  result = pokedex.find(pokemon => pokemon["id"] === parseInt(req.params.id));

  if (!result) {
    res.status(404).json({ error: "Not found"});
    return
  }

  res.status(200).json(result);
  return;
});

/* GET Pokemon by English Name */
router.get("/name/:name", function (req, res, next) {
  // TODO: Implement this route. See swagger docs for details, by visiting http://localhost:3000/api-docs
  res.status(501).json({ message: "Not Implemented" });
  return;
});

/* GET Pokemon by Type */
router.get("/type/:type", function (req, res, next) {
  // TODO: Implement this route. See swagger docs for details, by visiting http://localhost:3000/api-docs
  res.status(501).json({ message: "Not Implemented" });
  return;
});

/* GET Pokemon by HP */
router.get("/hp", function (req, res, next) {
  // TODO: Implement this route. See swagger docs for details, by visiting http://localhost:3000/api-docs
  res.status(501).json({ message: "Not Implemented" });
  return;
});

module.exports = router;
