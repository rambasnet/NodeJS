import React from 'react';
import Layout from './layout';
import Message from './components/message';

function Register(props) {
  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <Message messages={props.errors} />
      <form method="POST" action="/register">
        <label>
          <input type="text" name="firstName" required placeholder="First Name" />
        </label><br />
        <label>
          <input type="text" name="lastName" required placeholder="Last Name" />
        </label><br />
        <label>
          <input type="text" name="email" required placeholder="Email" />
        </label><br />
        <label>
          <input type="password" name="password" required placeholder="Password" />
        </label><br />
        <label>
          <input type="password" name="password1" required placeholder="Re-enter password" />
        </label>
        <br /> <br />
        <button type="submit">Sign up</button>
        <br /> <br />
        <h2>Already have an account? <a href="/login">Log in</a></h2>
      </form>
    </Layout>
  );
}

module.exports = Register;

