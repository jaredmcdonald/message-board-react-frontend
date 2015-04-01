'use strict';

var React = require('react');
var App = React.createFactory(require('../components/Index'));

React.render(App(window.APP_PROPS), document.getElementById('content'));
