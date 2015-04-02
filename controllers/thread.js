'use strict';

var threadTemplate = require('../templates/thread');
var request = require('../data/thread');

module.exports = function (req, res) {

  request(req.params.id, function (err, response) {
    res.header('Content-Type', 'text/html');

    var body = JSON.parse(response.body);

    var html = threadTemplate({
      thread : body.data,
      loggedIn : body.loggedIn
    });

    res.send(html);
  });

};
