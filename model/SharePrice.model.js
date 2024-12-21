const mongoose = require("mongoose");

const SharePriceSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true
        },
        open: {
            type: Number, required: true
        },
        high: {
            type: Number, required: true
        },
        low: {
            type: Number, required: true
        },
        close: {
            type: Number, required: true
        },
        time: {
            type: String,
            required: true,
        },
        volume: {
            type: Number, required: true
        }
    },
    {
        timestamps: true
    }
);

const SharePrice = mongoose.model("SharePrice", SharePriceSchema);

module.exports = SharePrice;