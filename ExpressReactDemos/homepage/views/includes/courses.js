import React from 'react';

import courses from '../../data/courses.json'

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="col-sm-4">
      <h2>Teaching</h2>
      <div className="profileImg">
        <img src="/assets/teaching.png" style={{ "width": "100%" }} alt="Teaching" />
      </div>
      <br />
      <h5>Teaching Interests</h5>
      <ul className="list-group">
        <li className="list-group-item">Cybersecurity</li>
        <li className="list-group-item">Python, C++, JavaScript, Databases</li>
        <li className="list-group-item">Data Science and ML Applications</li>
        <li className="list-group-item">Web Design and Secure Web App Development</li>
      </ul>
      <br />
      <h5>Courses Taught at CMU</h5>
        {
          courses.map( (course) => (
            <div>
            <button className="btn btn-primary" dataToggle="tooltip" dataPlacement="top" title={"Taught " + course.times.toString() + " times"}>
              {course.name} &nbsp;<span className="badge badge-light">{course.times}</span>
            </button>
            <br />
            </div>
          ))
        }
      </div>
    );
  }
}

export default Courses;