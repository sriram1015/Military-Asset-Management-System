const express = require('express');
const { createPurchase } = require('../Controller/purchaseController');
const Router = express.Router();

Router.post('/purchase',createPurchase);

module.exports = Router;