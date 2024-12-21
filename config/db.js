const mongoose = require("mongoose");


exports.connectTODB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL);

        console.log("Connection to database was successfull");

    } catch (e) {
        console.log(e);
    }
}