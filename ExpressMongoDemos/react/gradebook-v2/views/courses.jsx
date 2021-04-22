import React from 'react'
import course from '../models/course'
import Layout from './layout'

function CoursesTable(props) {
  return (
    <table>
      <tbody>
        <thead>
          <td>Name</td><td>Full name</td><td>CRN</td><td>Section</td>
        </thead>
        {
          props.courses.map(course => (
            <tr><td><a href={"/course/" + course._id}>{course.name}</a></td>
              <td>{course.fullName}</td>
              <td>{course.crn}</td>
              <td>{course.section}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default function Courses(props) {
  let courses;
  if (props.courses.length > 0) 
    courses = <CoursesTable courses={props.courses} />
  else
    courses = <p>No courses found. <a href="/course/">Add a new course</a></p>

  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <a href="/dashboard/">Dashboard</a> | <a href="/users/profile">Profile</a> | <a href="/course/">New Course</a> | <a href="/logout">Log out</a>
      <h3>All Courses</h3>
      {courses}
    </Layout>
  );
}
