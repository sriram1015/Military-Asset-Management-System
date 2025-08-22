const express = require('express');
const { route } = require('./assignmentRoute');
const { getDashboard } = require('../Controller/dashboardController');
const Router=express.Router();

Router.get('/',getDashboard);

module.exports=Router;