'use strict';

/*
Goal is to generate the following HTML component:
<nav id="navbar" class="navbar sticky-top navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="index.html"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
          <a id="currentPage" class="nav-link" href="">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="teaching.html">Teaching</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="research.html">Research</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="resources.html">Resources</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contact</a>
      </li> 
    </ul>
  </div>  
</nav>
*/

class Navbar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          nav_text:['Home', 'Teaching', 'Research', 'Resources', 'Contact'],
          nav_urls:['index.html', 'teaching.html', 'research.html', 'resources.html', 'contact.html'],
          current_nav:0, //current navigation id
          menu: false
      };
      this.listItems = this.state.nav_text.map( (value, index) =>
          <li className="nav-item">
            <a className="nav-link" href={this.state.nav_urls[index]}>{value}</a>
          </li>
      );
      this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({menu: !this.state.menu})
  }
  
  render() {
    const show = (this.state.menu) ? "show" : "";
      return (
          <nav className="navbar sticky-top navbar-expand-sm bg-dark navbar-dark">
              <a className="navbar-brand" href="index.html"></a>
              <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className={"collapse navbar-collapse "+show} id="collapsibleNavbar">
                  <ul className="navbar-nav">
                      {this.listItems}
                  </ul>
              </div>
          </nav>
      );
  }
}

ReactDOM.render(
    <Navbar />,
    document.getElementById('navbar')
)