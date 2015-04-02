'use strict';

var request = require('request');
var url = process.env.BASE_API_URL || 'http://localhost:3001' + require('../config/api.json').index;

module.exports = function (callback) {
  request(url, callback);
};
