import React from 'react';
import publications from '../../data/publications.json';

class Publication extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        pub: publications
      };
  }

  render() {
    return (
      <div class="col-sm-8">
        <h2>PUBLICATIONS</h2>
        <br />
        <table className="table table-striped">
          <tbody>
            {
              this.state.pub.map((pub) => (
                <tr>
                  <td>
                    <a href={pub.url} target="_blank" rel="noreferrer">{pub.title}</a><br />
                    {pub.author}<br />
                    <em>{pub.pub_info}</em>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Publication;