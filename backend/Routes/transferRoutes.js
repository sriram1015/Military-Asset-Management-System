const express = require('express');
const { createTransaction } = require('../Controller/transferController');
const Router = express.Router();

Router.post('/create',createTransaction);

module.exports=Router;