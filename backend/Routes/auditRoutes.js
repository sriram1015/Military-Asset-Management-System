const { getall } = require("../Controller/auditController");

const express = require('express');
const Router = express.Router();

Router.get('/get',getall);

module.exports = Router;