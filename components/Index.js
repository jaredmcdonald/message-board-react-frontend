'use strict';

var React = require('react');
var DOM = React.DOM;
var IndexItem = React.createFactory(require('./IndexItem'));

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
    return DOM.ol({
      children : this.props.items.map(IndexItem)
    });
  }

});
