import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav_text: ['Home', 'Teaching', 'Research', 'Resources', 'Contact'],
      //nav_urls:['index', 'teaching.html', 'research.html', 'resources.html', 'contact.html'],
      activeIndex: 0, //current active navigation id
      menu: false
    };
  }

  render() {
    const show = (this.state.menu) ? "show" : "";
    return (
      <nav className="navbar sticky-top navbar-expand-sm bg-dark navbar-dark">
        <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + show} id="collapsibleNavbar">
          <ul className="navbar-nav">
            {
              this.state.nav_text.map((value, i) =>
                (this.props.currentPage === value.toLocaleLowerCase()) ? <a id="currentPage" className="nav-link" href={value.toLocaleLowerCase()}>{value}</a> :
                <a className="nav-link" href={value.toLocaleLowerCase()}>{value}</a> 
              )
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
