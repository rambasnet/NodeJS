var express = require('express');
var reactViews = require('express-react-views');

var app = express();

app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  var initialState = {
    items: [
      {id: 1, text: '1. document your code'},
      {id: 2, text: '2. learn express and react'},
      {id: 3, text: '3. test your code for XSS vulnerability'},
      {id: 4, text: '4. </script><script>alert(666)</script>'},
    ],
    text: '',
  };
  // passing data to Html jsx view
  res.render('Html', {data: initialState});
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Dynamic react example listening on port ' + port);
});
