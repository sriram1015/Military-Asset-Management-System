const express = require('express');
const { registerUser, loginUser } = require('../Controller/authController');
const { baseRegister } = require('../Controller/baseController');

const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/login',loginUser);
authRouter.post('/base',baseRegister);

module.exports=authRouter;