// top-level React "template" function for the server to generate static container markup
// TODO: maybe replace w/ JSX?
'use strict';

var React = require('react');
var App = React.createFactory(require('../components/Index'));
var DOM = React.DOM;
var safeStringify = require('../utils/safe-stringify');

module.exports = function (props) {
  return React.renderToStaticMarkup(DOM.body(null,

    DOM.div({
      id: 'content',
      dangerouslySetInnerHTML : {
        __html: React.renderToString(App(props))
      }}),

    // pass props to client-side React
    DOM.script({
      dangerouslySetInnerHTML : {
        __html: 'var APP_PROPS = ' + safeStringify(props) + ';'
      }}),

    // get React from CDN
    DOM.script({
      src : '//fb.me/react-0.13.1.min.js'
    }),

    // include browserified client-side bundle
    DOM.script({
      src : '/js/index.js'
    })

  ));
};
