const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = async() => {
    mongoose.connect(`${ process.env.mongoenv }military-assets`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("MongoDB is connected sucessfully");
        })
        .catch((err) => {
            console.error("MongoDB connection failed:", err);
        });
}

module.exports = connectDb;