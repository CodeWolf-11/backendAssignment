const express = require("express");
const { connectTODB } = require("./config/db");
const mainRouter = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", mainRouter);

app.listen(PORT, () => {
    console.log("server is running on port 5000");
    connectTODB();
});

app.get("/", (req, res) => {
    return res.status(200).json(
        {
            "status": "OK"
        }
    )
});