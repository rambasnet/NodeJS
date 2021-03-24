var React = require('react');
var ReactDOM = require('react-dom');
//var Content = require('./TodoApp');
var todo = require('./MyTodoApp');

module.exports = function(data, containerId) {
  var container = document.getElementById(containerId || 'content');
  ReactDOM.render(<todo.MyToDo {...data} />, container);
};
