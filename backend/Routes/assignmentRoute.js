const express = require('express');
const {  createAssignment, getAllAssignments } = require('../Controller/assignmentController');
const Router = express.Router();

Router.post('/create',createAssignment);
Router.get('/all',getAllAssignments);

module.exports = Router;