const express = require("express");
const { sharePriceGetController } = require("../controllers/sharePriceController");

const sharePriceRouter = express.Router();

sharePriceRouter.get("/sharePrice", sharePriceGetController);

module.exports = sharePriceRouter;