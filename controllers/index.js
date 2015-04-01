'use strict';

var indexTemplate = require('../templates/index');

module.exports = function (req, res) {
  res.header('Content-Type', 'text/html');

  // test data for now
  var props = {
    items : [
      {
        _id: "54ac032b7ce3890000c88228",
        created: 1420559147538,
        path: "",
        title: "Project Euler",
        content: "[This](https://projecteuler.net) is Project Euler and you have probably already seen it",
        _author: {
          _id: "54ac02337ce3890000c88225",
          created: 1420558899077,
          username: "Jared",
          __v: 0,
          admin: true,
          bio: "hi"
        },
        parentId: null,
        deleted: false,
        points: 2,
        downvotes: [ ],
        upvotes: [
          "54ac02337ce3890000c88225",
          "54ac02577ce3890000c88227"
        ]
      }, {
        _id: "54ac3c600d2db20000c1356b",
        created: 1420573792604,
        path: "",
        title: "GFM",
        content: "This will render in [Github Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)",
        _author: {
          _id: "54ac02337ce3890000c88225",
          created: 1420558899077,
          username: "Jared",
          __v: 0,
          admin: true,
          bio: "hi"
        },
        parentId: null,
        deleted: false,
        points: 0,
        downvotes: [ ],
        upvotes: [ ]
      }
    ],
    loggedIn : false
  };

  var html = indexTemplate(props);

  res.end(html);
};
