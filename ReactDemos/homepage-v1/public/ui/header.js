'use strict';

/*
// goal is to render this HTML component
  <a href="http://www.coloradomesa.edu" target="_blank">
    <img src="assets/cmu-logo.png" style="position: absolute; top:5px; left:10px; height:75px;" >
  </a>
  <h1>Dr. Ram Basnet</h1>
  <p>Associate Professor of Computer Science</p> 
*/

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dr. Ram Basnet",
      title: "Associate Professor of Computer Science",
      univer_url: 'http://www.coloradomesa.edu',
      univer_logo: 'assets/cmu-logo.png'
    }
  }
  render() {
    const imgStyle = {
      position: "absolute",
      top: "5px",
      left: "10px",
      height: "75px"
    };

    return (
      <div>
        <a href={this.state.univer_url} target="_blank">
          <img src={this.state.univer_logo} style={imgStyle} />
        </a>
        <h1>{this.state.name}</h1>
        <p>{this.state.title}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);