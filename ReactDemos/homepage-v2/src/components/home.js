
import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row" style={{margin: "50px"}}>
        <div className="col-sm-4">
          <h2>About Me</h2>
          <h5><a href="https://www.coloradomesa.edu/directory/computer-science-mathematics-statistics/ram-basnet.html" target="_blank" rel="noreferrer">CMU Profile</a></h5>
          <h5><a href="https://www.linkedin.com/in/rambasnet/" target="_blank" rel="noreferrer"> LinkedIn Profile</a></h5>
          <div id="profileImg">
            <img src={ process.env.PUBLIC_URL + "/assets/profile.png"} style={{"width":"100%"}} alt="Profile pic"/>
          </div>
          <p>I am a faculty of Computer Science at <a href="http://www.coloradomesa.edu" target="_blank" rel="noreferrer">Colorado Mesa University (CMU)</a>.</p>
          <p>I'm a Certified Ethical Hacker (CEH) and have been practicing ethical hacking since I was a graduate student at New Mexico Tech (NMT).</p>
          <p>I discovered and responsibly disclosed several critical security flaws in a web application used by major health insurance providers in Colorado and
          "hopefully" helped protecting
          electronic personal health information of tens of thousands of Coloradoans.
          </p>
          <hr className="d-sm-none" />
        </div>
        <div className="col-sm-8">
          <h2>CURRENT SCHEDULE</h2>
          <h5><a href="teaching.html">This Semester's Schedule</a></h5>
          <br />
          <h2>BRIEF BACKGROUND</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2018 - Present</td>
                <td>Associate Professor, CMU</td>
              </tr>
              <tr>
                <td>2013 - 2017</td>
                <td>Assistant Professor, CMU</td>
              </tr>
              <tr>
                <td>2014 - Present</td>
                <td><a href="http://www.colemanfoundation.org/what_we_fund/entrepreneurship/overview.html" target="_blank" rel="noreferrer">
                  Coleman Fellow of Entrepreneurship Education</a></td>
              </tr>
              <tr>
                <td>2013 - 2017</td>
                <td>Founder &amps; Principal Consultant, iSecureUs, LLC</td>
              </tr>
              <tr>
                <td>2012 - 2013</td>
                <td> CTO, Sage Technology Partners, Inc.</td>
              </tr>
              <tr>
                <td>2010 - 2011</td>
                <td> PhD, New Mexico Tech, (Detecting Phishing Attacks)</td>
              </tr>
              <tr>
                <td>2008 - 2010</td>
                <td> Research Scientist II, ICASA, New Mexico Tech</td>
              </tr>
              <tr>
                <td>2005 - 2007
                            </td><td> MS, Computer Science, New Mexico Tech</td>
              </tr>
              <tr>
                <td>2001 - 2004</td>
                <td> BS, Computer Science, Colorado Mesa University (Minor in Math)</td>
              </tr>
            </tbody>
          </table>
          <br />
          <h2>LEISURE</h2>
          <h5>Grand Mesa, CO, Spring 2017</h5>
          <div><img src="/assets/honda.jpg" width="100%" alt="Honda Shadoow" /></div>
          <p>I enjoy riding my Honda Phantom when I can.</p>
          <p>I follow the mantra "work hard, play hard!"</p>
          <br />
          <h5>Everest Base Camp, Nepal, Spring 2018</h5>
          <div><img src="/assets/EBC.JPG" width="100%" alt="Everest Base Camp" /></div>
          <p>I love hiking. I've done one 14er of Colorado and would like to do all 50! </p>
          <p>I did an epic trek to the Everest Base Camp and Chhola and Renjo Passes of Khumbu region of Nepal along with 3 friends in the Spring 2018.</p>
          <p>I play soccer in Grand Valley Adult Soccer league.</p>
        </div>
      </div>
    );
  }
}

export default Home;