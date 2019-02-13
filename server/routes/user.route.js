const express = require('express');
const route = express.Router();
const userController = require('../controller/user.controller.js');
const userValidate = require('../validate/user.validate.js')

route.post('/signup', userController.signup);
route.post('/signin', userController.signin);
// route.get('/about')



module.exports = route