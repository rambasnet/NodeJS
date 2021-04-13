import React from 'react';
import Layout from '../layout';
import Message from './message';

function Course(props) {
  let action = "/course/"
  if (props.course) 
    action += props.course._id

  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <Message messages={props.errors} />
      <form method="POST" action={action}>
        <label>
          <input type="text" name="name" required placeholder="name" value={(props.course)? props.course.name : null } />
        </label><br />
        <label>
          <input type="text" name="fullName" required placeholder="Full Name" value={(props.course)?props.course.fullName:null}/>
        </label><br />
        <label>
          <input type="text" name="crn" required placeholder="CRN" value={(props.course)?props.course.crn:null}/>
        </label><br />
        <label>
          <input type="text" name="section" required placeholder="section" value={(props.course)?props.course.section:null}/>
        </label><br />
        <br /> <br />
        <button type="submit">Save</button>
        <br /> <br />
        <a href="/courses/">Cancel</a>
      </form>
    </Layout>
  );
}

module.exports = Course;

