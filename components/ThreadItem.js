'use strict';

var React = require('react');
var DOM = React.DOM;

var ThreadItem = React.createClass({
  getInitialState : function () {
    return null;
  },

  handleClick : function () {
    console.log(this.props._id);
  },

  render: function () {
    var factory = React.createFactory(ThreadItem);
    var children = (this.props.children || []).map(function (child) {
      return factory(child);
    });

    return DOM.div({ onClick: this.handleClick },
      DOM.span(null, 'item ' + this.props._id),
      DOM.div({ children : children })
    );
  }
});

module.exports = ThreadItem;
