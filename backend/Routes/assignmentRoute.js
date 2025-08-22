const express = require('express');
const { createAssingment, getallassginment } = require('../Controller/assignmentController');
const Router = express.Router();

Router.post('/create',createAssingment);
Router.get('/all',getallassginment);

module.exports = Router;