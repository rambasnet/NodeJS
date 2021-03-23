import React from "react";
import ReactDOM from 'react-dom';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './home';
import Teaching from './teaching';
import PageNoteFound from './page-not-found';

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
        <Router>
          <nav className="navbar sticky-top navbar-expand-sm bg-dark navbar-dark">
              <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className={"collapse navbar-collapse "+show} id="collapsibleNavbar">
                  <ul className="navbar-nav">
                      {this.listItems}
                  </ul>
              </div>
          </nav>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/index">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/teaching">
                <Teaching />
              </Route>
              <Route exact path="/research">
                <h1>Research</h1>
                <h2>Demosntrate it...</h2>
                <p>Hint: create research.js page and use publication.js component in rigth place</p>
              </Route>
              <Route exact path="/resources">
                <h1>Resources</h1>
                <h2>Can you try this? convert resources.html page from homepage-v1 to React component</h2>
              </Route>
              <Route exact path="/contact">
                <h1>Contact</h1>
                <h2>Can you try this? convert contact.html page from homepage-v1 to React component</h2>
              </Route>
              <Route path="*">
              <PageNoteFound />
              </Route>
            </Switch>
          </Router>
        );
    }
}

export default Navbar;

ReactDOM.render(
  <Navbar />,
  document.getElementById("navbar")
);
