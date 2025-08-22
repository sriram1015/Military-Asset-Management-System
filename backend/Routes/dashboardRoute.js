const express = require('express');
const { route } = require('./assignmentRoute');
const { dashboard } = require('../Controller/dashboardController');
const Router=express.Router();

Router.get('/',dashboard);

module.exports=Router;