const express = require("express")
const sharePriceRouter = require("./sharePrice.routes")

const mainRouter = express.Router();
mainRouter.use(sharePriceRouter);

module.exports = mainRouter;

