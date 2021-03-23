import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <div>
          <label>Email address</label>
          <input
            type="email"
            id="email"
            aria-describedby="email-help"
            placeholder="Enter email"
          />
          <small id="email-help">It's safe with us. We hate spam!</small>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              id="terms"
            />
            <span>
              I accept the <a href="https://www.example.com"> terms and conditions</a>
            </span>
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;