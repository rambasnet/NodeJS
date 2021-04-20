import React from 'react'
import Layout from './layout'

function Dashboard(props) {
  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <h2>Student Grades</h2>
      <h3>Welcome, {props.user.email}</h3>
      <a href="/courses/">Courses</a> | <a href="/users/profile">Profile</a> | <a href="/logout">Log out</a>
    </Layout>
  );
}

module.exports = Dashboard;
