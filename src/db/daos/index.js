const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false);
const conection = process.env.db;
mongoose.connect(conection, error => {
    if (error) {
        process.exit()
    }
})
