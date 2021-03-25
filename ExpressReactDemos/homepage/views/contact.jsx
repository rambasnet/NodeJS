import React from 'react';
import Layout from './layout'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout {...this.props}>
        <div className="row" style={{ margin: "50px" }}>
          <div className="row">
            <div className="col-sm-4">
              <h2>Contact</h2>
              <div className="profileImg">
                <img src="/assets/contact.jpeg" style={{ "width": "100%" }} alt="Contact" />
              </div>
              <br />
              <hr className="d-sm-none" />
            </div>
            <div className="col-sm-8">
              <h2>Mailing Address</h2>
              <div>
                Colorado Mesa University <br />
            Computer Science and Engineering Department <br />
            1100 North Avenue <br />
            Grand Junction, CO 81501 <br />
              </div>
              <br />
              <h2>Office</h2>
              <div>
                Confluence Hall <br />
              Room: 329 <br />
              Office Hours: <a href="/teaching">See Here</a><br />
                <a href="https://twitter.com/rambuznet" >Twitter </a> <br />
              </div>
              <br />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Contact;