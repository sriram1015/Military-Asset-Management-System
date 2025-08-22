const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: "military-asset-management-system-weld.vercel.app",
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const connectDB = require('./Configs/db');
connectDB();

const auth = require('./Routes/authRoute');
const asset = require('./Routes/assetRouter');
const purchase = require('./Routes/purchaseRoutes');
const transaction = require('./Routes/transferRoutes');
const assginment = require('./Routes/assignmentRoute');
const dash = require('./Routes/dashboardRoute');
const audit = require('./Routes/auditRoutes');
app.use('/auth',auth);
app.use('/asset',asset);
app.use('/pur',purchase);
app.use('/trans',transaction);
app.use('/assign',assginment);
app.use('/dash',dash);
app.use('/audit',audit);
app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on port ${process.env.PORT || 5000}`);
})