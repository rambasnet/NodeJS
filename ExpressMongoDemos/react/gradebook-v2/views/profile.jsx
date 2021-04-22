import React from 'react';
import Layout from './layout';
import Message from './components/message';

class Profile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      messages: props.messages,
      title: props.title,
      msg : "",
      email : props.user.email,
      firstName : props.user.firstName,
      lastName : props.user.lastName,
    };
    // this is not working with static server-side rendering React
    //this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <Layout title={this.state.title}>
        <h1>{this.state.title}</h1>
        <h3>Welcome, {this.state.email} | <a href="/dashboard/">Dashboard</a> | <a href="/logout">Log Out</a></h3>
        <Message messages={this.state.messages} />
        <form method="POST" onSubmit={this.handleSubmit}>
          <label>Email: 
            <input type="text" name="email" required value={this.state.email} onChange={this.handleInputChange} /> 
          </label><br />
          <label>First Name: 
            <input type="text" name="fname" required value={this.state.firstName} onChange={this.handleInputChange} />
          </label> <br />
          <label>Last Name:
            <input type="text" name="lname" required value={this.state.lastName} onChange={this.handleInputChange} />
          </label><br /><br />
          <button type="submit">Update</button>
        </form>
      </Layout>
    );
  }

  handleInputChange(event) {
    //const target = event.target;
    //const name = target.name;
    //const value = target.value;
    this.setState({
      // ES6 variable as property name syntax
      [event.target.name] : event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/profile',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        fname: this.state.firstName,
        lname: this.state.lastName
      }),
    })
    .then(result => result.json())
    .then(json => {
      this.setState({
        msg: json.msg,
        email: json.email,
        firstName: json.firstName,
        lastName: json.lastName,
      });
    })
  }
}

module.exports = Profile;