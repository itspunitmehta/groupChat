const express = require('express');

const userControllers = require('../controllers/user');

const router = express.Router();

router.post('/signup', userControllers.userSignup);

router.use('/login', userControllers.userLogin);



module.exports = router;