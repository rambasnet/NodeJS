import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  // uses Fetch API - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  callAPI() {
    // make sure the server IP and port # and API name are correct
    fetch("http://127.0.0.1:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-intro">{this.state.apiResponse}</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;