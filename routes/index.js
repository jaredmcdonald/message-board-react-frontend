'use strict';

var express = require('express');
var router = express.Router();
var React = require('react');
var indexController = require('../controllers/index');
var threadController = require('../controllers/thread');

router.get('/', indexController);
router.get('/thread/:id', threadController);

module.exports = router;
