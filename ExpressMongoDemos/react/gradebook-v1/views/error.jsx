import React from 'react';
import Layout from './layout'

function Error(props) {
  return (
    <Layout title='Error'> 
      <h1> {props.title}.</h1>
      <p>{props.message}</p>
    </Layout>
  )
} 

module.exports = Error;