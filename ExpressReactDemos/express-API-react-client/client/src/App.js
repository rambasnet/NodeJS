import React from "react";

import logo from './logo.svg';
import './App.css';
import Courses from './components/Courses';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: ""
    };
  }

  callAPI() {
    const url = "http://localhost:9000/testAPI";
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    fetch(url)
    .then(result => result.text() )
    .then(result => {
        this.setState({
        data: result,
        isLoaded: true
      })
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    })
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p className="App-intro">
              Data from API: <em>{data}</em>
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <div>
            <h1>Load Courses Dynamically using API</h1>
            <Courses />
          </div>
        </div>
      );
    }
  }
}

export default App;