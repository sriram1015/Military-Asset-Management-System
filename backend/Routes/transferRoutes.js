const express = require('express');
const { createTransaction, getTransaction } = require('../Controller/transferController');
const Router = express.Router();

Router.post('/create',createTransaction);
Router.get('/get',getTransaction);

module.exports=Router;