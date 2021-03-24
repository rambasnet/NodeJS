/*
 * GET users listing.
 */

exports.list = function(req, res) {
  // must use render method 
  // render users.jsx view with given context
  res.render('users', {title: "Users List"});
  //res.send('send user data...');
};
