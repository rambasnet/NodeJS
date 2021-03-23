'use strict';

/*
Goal is to render the following HTML:

<p class="text-center"><a href="index.html">Home</a> | <a href="teaching.html">Teaching</a> | 
    <a href="research.html">Research </a> | <a href="resources.html">Resources</a> | <a href="contact.html">
    Contact </a>&nbsp; &nbsp; &nbsp;
    &copy; 2018
</p>
*/

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav_text: ['Home', 'Teaching', 'Research', 'Resources', 'Contact'],
      nav_urls: ['index.html', 'teaching.html', 'research.html', 'resources.html', 'contact.html'],
      current_nav: 0 //current navigation id
    };
    this.year = new Date();
    this.year = this.year.getFullYear();
  }

  render() {
    return (
      <p className="text-center">
        <span>|</span>
        {
          this.state.nav_text.map((text, index) =>
            <span>&nbsp;<a href={this.state.nav_urls[index]}>{text}</a>&nbsp;|</span>
          )}
        <span> &nbsp;&nbsp; &copy; {this.year}</span>
      </p>
    );
  }
}

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);