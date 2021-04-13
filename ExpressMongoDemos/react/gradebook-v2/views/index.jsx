import React from 'react'
import Layout from './layout'

function Index(props) {
  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <a href="/login">Log in</a>
    </Layout>
  );
}

module.exports = Index;