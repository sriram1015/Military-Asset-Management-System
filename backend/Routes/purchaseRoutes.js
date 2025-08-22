const express = require('express');
const { createPurchase, getPursh } = require('../Controller/purchaseController');
const Router = express.Router();

Router.post('/purchase',createPurchase);
Router.get('/get',getPursh);

module.exports = Router;