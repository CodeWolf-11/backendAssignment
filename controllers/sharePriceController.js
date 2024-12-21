const axios = require("axios");
const SharePrice = require("../model/SharePrice.model");

exports.sharePriceGetController = async (req, res) => {
    try {

        setInterval(async () => {
            try {

                const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${req.query.company}&interval=5min&apikey=demo`);
                const company = req.query.company;
                const data = response.data["Time Series (5min)"];

                let filteredData = [];
                for (val in data) {
                    data[val].companyName = company;
                    data[val]["1. time"] = String(val);
                    filteredData.push(data[val]);
                }

                filteredData = filteredData.map((priceObj) => {
                    const newPriceObj = {};
                    for (val in priceObj) {
                        key = val.split(" ")[1];
                        newPriceObj[key] = priceObj[val];
                    }
                    newPriceObj["companyName"] = company;
                    delete newPriceObj[undefined];
                    return newPriceObj;
                });
                const result = await SharePrice.insertMany(filteredData);

            } catch (error) {
                console.log("GET AXIOS FAILED", error);
            }

        }, 60000)

        return res.status(200).json(
            {
                "message": "Price is being fetched every 1 minutes",
            },
        );

    } catch (e) {
        console.log(["GET SHARE PRICE"], e);

        return res.status(500).json(
            {
                "message": "Something went wrong"
            }
        );
    }
}