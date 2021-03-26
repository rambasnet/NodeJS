var React = require('react');
var ReactDOM = require('react-dom');
//var Content = require('./TodoApp');
var TodoApp = require('./TodoApp');

module.exports = function(data, containerId) {
  var container = document.getElementById(containerId || 'content');
  ReactDOM.render(<TodoApp {...data} />, container);
};
