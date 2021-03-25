let React = require('react');
import Banner from './includes/banner';
import Navigation from './includes/navigation';
import Footer from './includes/footer';

function Layout(props) {
  let iconUrl = process.env.PUBLIC_URL+"/assets/favicon_32.ico"
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <meta charset="utf-8" />
        
        <link rel="icon" href={iconUrl} type="image/gif" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/style.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          // This is making use of ES6 template strings, which allow for
          // multiline strings. We specified "{jsx: {harmony: true}}" when
          // creating the engine in app.js to get this feature.
          console.log("hello world");
        `,
          }}
        />
      </head>
      <div id="banner" className="jumbotron text-center" style={{"height":"200px"}}>
        <Banner />
      </div>
      <div id="navbar" style={{"margin-top": "-30px"}}>
        <Navigation currentPage={props.currentPage} />
      </div>
      <body>
        <div>
          {props.children}
        </div>
      </body>
      <div id="footer">
        <Footer />
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script> 
    </html>
  );
}

module.exports = Layout;
