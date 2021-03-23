import React from 'react';

class Teaching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row" style={{ margin: "50px" }}>
        <div className="col-sm-4">
          <h2>Teaching</h2>
          <div className="profileImg">
            <img src="assets/teaching.png" style={{"width":"100%"}} alt="Teaching" />
              </div>
            <br />
            <h5>Teaching Interests</h5>
            <ul className="list-group">
              <li className="list-group-item">Cyber Security</li>
              <li className="list-group-item">Python, C++, Java, Database, JavaScript</li>
              <li className="list-group-item">Data Science</li>
              <li className="list-group-item">Web Design and Secure Web App Development</li>
            </ul>
            <br />
            <h5>Courses Taught at CMU</h5>
            <button className="btn btn-primary" dataToggle="tooltip" dataPlacement="top" title="Taught 6 times">
              CSCI 106: Web Page I <span className="badge badge-light">6</span>
            </button>
            <button className="btn btn-primary" dataToggle="tooltip" dataPlacement="top" title="Taught 4 times">
              CSCI 110: Beg. Prog. Python &amp; Lab <span className="badge badge-light">4</span>
            </button>
            <div className="btn btn-primary" dataToggle="tooltip" dataPlacement="top" title="Taught 5 times">
              CSCI 111: CS1 - Foundations of CS <span className="badge badge-light">5</span>
            </div>
            <div className="btn btn-primary" dataToggle="tooltip" dataPlacement="top" title="Taught 4 times">
              CSCI 112: CS2 - Data Structures <span className="badge badge-light">4</span>
            </div>
            <div className="btn btn-primary" dataToggle="tooltip" dataPlacement="top" title="Taught 1 time">
              CSCI 206: Web Page II <span className="badge badge-light">1</span>
            </div>
            <div className="btn btn-primary" dataToggle="tooltip" dataPlacement="top" title="Taught 5 times">
              CSCI 310: Adv. Prog. Python <span className="badge badge-light">5</span>
            </div>
            <div className="btn btn-primary" dataToggle="tooltip" dataPlacement="top" title="Taught 5 times">
              CSCI 370: Computer Security <span className="badge badge-light">5</span>
            </div>
            <div className="btn btn-primary" dataToggle="tooltip" dataPlacement="top" title="Taught 3 times">
              CSCI 420: Cyber Security <span className="badge badge-light">3</span>
            </div>
            <div className="btn btn-primary" dataToggle="tooltip" dataPlacement="top" title="Taught 3 times">
              CSCI 465: Net/App Security <span className="badge badge-light">3</span>
            </div>
            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-8">
            <h2>CURRENT SCHEDULE</h2>
            <br />
              <div className="table-responsive-sm">
                <table className="table table-sm table-bordered">
                  <thead>
                    <tr>
                      <th width="16%"></th>
                      <th width="16%">Mon</th>
                      <th width="16%">Tues</th>
                      <th width="16%">Wed</th>
                      <th width="16%">Thurs</th>
                      <th width="16%">Fri</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        8:00
                            </th>
                      <td width="16%" className="schedule" rowspan="2">Beg Python<br />WS 120</td>
                      <td width="16%" className="schedule" rowspan="2">Python Lab<br />WS 120</td>
                      <td width="16%" className="schedule" rowspan="2">Beg Python <br />WS 120</td>
                      <td width="16%" className="schedule" rowspan="2">Python Lab <br />WS 120</td>
                      <td width="16%" className="schedule" rowspan="2">Beg Python <br />WS 120</td>
                    </tr>
                    <tr>
                      <th>
                        8:30
                            </th>
                    </tr>
                    <tr>
                      <th>
                        9:00
                            </th>
                      <td width="16%" className="schedule" rowspan="2">Web 2<br />WS 118</td>
                      <td width="16%" className="schedule" rowspan="2">Adv Python<br />WS 118</td>
                      <td width="16%" className="schedule" rowspan="2">Web 2 <br />WS 118</td>
                      <td width="16%" className="schedule" rowspan="2">Adv Python <br />WS 118</td>
                      <td width="16%" className="schedule" rowspan="2">Web 2 <br />WS 118</td>
                    </tr>
                    <tr>
                      <th>
                        9:30
                                        </th>
                    </tr>
                    <tr>
                      <th>
                        10:00
                            </th>
                      <td width="16%" rowspan="2" className="officehour">Office Hr <br />WS 119 B</td>
                      <td width="16%" rowspan="2" className="officehour">Office Hr <br />WS 119 B</td>
                      <td width="16%" rowspan="2" className="officehour">Office Hr <br />WS 119 B</td>
                      <td width="16%" rowspan="2" className="officehour">Office Hr <br />WS 119 B</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <th>
                        10:30
                            </th>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <th>
                        11:00
                            </th>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <th>
                        11:30
                            </th>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <th>
                        12:00
                            </th>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <th>
                        12:30
                            </th>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <th>
                        13:00
                            </th>
                      <td width="16%" rowspan="2" className="schedule">CS 1 <br />WS 120</td>
                      <td width="16%" rowspan="2" className="schedule">CS 1 <br />WS 120</td>
                      <td width="16%" rowspan="2" className="schedule">CS 1 <br />WS 120</td>
                      <td width="16%" rowspan="2" className="schedule">CS 1 <br />WS 120</td>
                      <td width="16%" rowspan="2" className="officehour">Office Hr <br />WS 119 B</td>
                    </tr>
                    <tr>
                      <th>
                        13:30
                                        </th>
                    </tr>
                    <tr>
                      <th>
                        14:00
                            </th>
                      <td>&nbsp;</td>
                      <td width="16%">&nbsp;</td>
                      <td>&nbsp;</td>
                      <td width="16%">&nbsp;</td>
                      <td width="16%">&nbsp;</td>
                    </tr>
                    <tr>
                      <th>
                        14:30
                            </th>
                      <td width="16%">&nbsp;</td>
                      <td width="16%">&nbsp;</td>
                      <td width="16%">&nbsp;</td>
                      <td width="16%">&nbsp;</td>
                      <td width="16%">&nbsp;</td>
                    </tr>
                    <tr>
                      <th>
                        15:00
                            </th>
                      <td width="16%" rowspan="2" className="schedule">Net App Sec <br />WS 118</td>
                      <td width="16%">&nbsp;</td>
                      <td width="16%" rowspan="2" className="schedule">Net App Sec <br />WS 118</td>
                      <td width="16%">&nbsp;</td>
                      <td width="16%" rowspan="2" className="schedule">Net App Sec <br />WS 118</td>
                    </tr>
                    <tr>
                      <th>
                        15:30
                            </th>
                      <td width="16%">&nbsp;</td>
                      <td width="16%">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
            </div>
          </div>
        );
    }
}

export default Teaching;