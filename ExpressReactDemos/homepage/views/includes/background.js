import React from 'react'
import background from '../../data/background.json';

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = background;
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.map((b) => (
              <tr>
                <td>{ b.date} </td>
                <td> {b.position }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default Background