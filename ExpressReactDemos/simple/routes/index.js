/*
 * GET home page.
 */

exports.index = function(req, res) {
  // must use render method 
  // render index.js view with given context
  res.render('index', {title: 'Express', foo: {bar: 'baz'}});
};
