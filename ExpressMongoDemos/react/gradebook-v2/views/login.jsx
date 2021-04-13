import React from 'react';
import Layout from './layout';
import Message from './components/message'


function Login(props) {
  return (
    <Layout title={props.title}>
      <h1>Log in</h1>
      <Message messages={props.errors} />
      <form method="POST" action="/login">
        <label>Email:
          <input type="text" name="email" required placeholder="Email" />
        </label><br />
        <label>Password:
          <input type="password" name="password" required placeholder="Password" />
        </label>
        <br /><br />
        <button type="submit">Log in</button> <br />
        <h2>Don't have an account yet?
          <a href="/register"> Sign up</a>
        </h2>
      </form>
    </Layout>
  );
}

module.exports = Login;