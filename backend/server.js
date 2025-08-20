const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const connectDB = require('./Configs/db');
connectDB();

const auth = require('./Routes/authRoute');
const asset = require('./Routes/assetRouter');
app.use('/auth',auth);
app.use('/asset',asset);
app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT || 5000}`);
})