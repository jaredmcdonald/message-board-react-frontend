'use strict';

var React = require('react');
var DOM = React.DOM;
var ThreadItem = React.createFactory(require('./ThreadItem'));

module.exports = React.createClass({

  getInitialState : function () {
    return null;
    //...
  },

  componentDidMount : function () {
    //...
  },

  handleClick : function () {
    //...
  },

  render : function () {
    return React.DOM.div({
      children : ThreadItem(this.props.thread.data)
    });
  }

});
