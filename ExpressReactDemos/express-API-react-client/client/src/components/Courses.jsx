import React from 'react';


class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      courses: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  callAPI() {
    const url = "http://localhost:9000/courses/all";
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    fetch(url)
    .then(result => result.text() )
    .then(result => {
        this.setState({
        courses: JSON.parse(result),
        isLoaded: true
      })
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    })
  }

  handleClick() {
    this.callAPI();
  }

  render() {
    const { error, isLoaded, courses } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
        <button onClick={this.handleClick}>
            Fetch Data
        </button>
        </div>
      );
    } else {
      return (
        <div>
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
}

export default Courses;