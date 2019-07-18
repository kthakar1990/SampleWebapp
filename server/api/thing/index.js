'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
//router.get('/summary', controller.summary);
//router.post('/create', controller.create);

module.exports = router;
