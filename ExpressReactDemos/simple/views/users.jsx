const React = require('react')
import users from '../data/users.json';
import Layout from './layout';

class Users extends React.Component {
  constructor(props) {
      super(props);
      this.state = 
      { 
      };
  }

  render() {
    return (
      <Layout title={this.props.title}>
        <table className="table table-striped">
          <tbody>
              {users.map( (user) => (
                <tr>
                  <td>{ user.id }</td>
                  <td>{ user.email} </td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                </tr>
              ))}    
          </tbody>
        </table>

        <div>
          <h3><a href="/">Go to Home Page</a></h3>
        </div>
      </Layout>
    );
  }
}

module.exports = Users;