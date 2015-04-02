'use strict';

var indexTemplate = require('../templates/index');
var request = require('../data/index');

module.exports = function (req, res) {
  res.header('Content-Type', 'text/html');

  request(function (err, response) {

    var body = JSON.parse(response.body);

    var html = indexTemplate({
      items : body.data,
      loggedIn : body.loggedIn
    });

    res.end(html);
  });

};
