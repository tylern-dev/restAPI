const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/UserSchema');

const userController = require('../controllers/user');

const router = express.Router();


router.get('/users', userController.users_get_all);

router.post('/signup', userController.users_signup);

router.post('/login', userController.user_login);

module.exports = router;
