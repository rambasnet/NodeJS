
import React from "react";
import Background from './includes/background';
import Layout from './layout';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout title="About" currentPage="home">
        <div className="row" style={{ margin: "50px" }}>
          <div className="col-sm-4">
            <h2>About Me</h2>
            <h5><a href="https://www.coloradomesa.edu/directory/computer-science-mathematics-statistics/ram-basnet.html" target="_blank" rel="noreferrer">CMU Profile</a></h5>
            <h5><a href="https://www.linkedin.com/in/rambasnet/" target="_blank" rel="noreferrer"> LinkedIn Profile</a></h5>
            <div id="profileImg">
              <img src="/assets/profile.png" style={{ "width": "100%" }} alt="Profile pic" />
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
            <h5><a href="/teaching">This Semester's Schedule</a></h5>
            <br />
            <h2>BRIEF BACKGROUND</h2>
            <Background />
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
      </Layout>
    );
  }
}

module.exports = Index;