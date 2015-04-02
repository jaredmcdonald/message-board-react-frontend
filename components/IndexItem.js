'use strict';

var React = require('react');
var DOM = React.DOM;

module.exports = React.createClass({
  getInitialState : function () {
    return null;
  },

  handleClick : function () {
    // ...
  },

  render: function () {
    return DOM.li({
      onClick: this.handleClick,
      children: [
        DOM.a({
          href: '/thread/' + this.props._id
        }, this.props.title)
      ]
    });
  }
});
