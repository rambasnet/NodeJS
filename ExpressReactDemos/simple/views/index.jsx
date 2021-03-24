var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');
import users from '../data/users.json';

// Contrived example to show how one might use Flow type annotations
function countTo(n) {
  var a = [];
  for (var i = 0; i < n; i++) {
    a.push(i + 1);
  }
  return a.join(', ');
}

function Title(props) {
  return (
    <p>Welcome to {props.title}</p>
  );
}

function Index(props) {
  return (
    <Layout title={props.title}>
      <h1>{props.title}</h1>
      <Title {...props} />
      <p>
        I can count to 10:
        {countTo(10)}
      </p>
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
        <h3><a href="/users">Go to Users Page</a></h3>
      </div>
    </Layout>
  );
}

Index.propTypes = {
  title: PropTypes.string,
};

module.exports = Index;
