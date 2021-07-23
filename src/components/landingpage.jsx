import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/data/2015/09/24/106427_man_512x512.png"
              alt="avatar"
              className="avatar-img"
            ></img>
            <div className="banner-text">
              <h1>Full Stack Web (GIS) Developer</h1>

              <hr />
              <p>
                HTML/CSS | Bootstrap | JavaScript | React | Node | Express |
                MongoDB
              </p>
              <div className="social-links">
                {/* linkedin */}
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="nonopener noreferrer"
                >
                  <i aria-hidden="true">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="6x"
                      color="white"
                    />
                  </i>
                </a>
                {/* github */}
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="nonopener noreferrer"
                >
                  <i aria-hidden="true">
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      size="6x"
                      color="white"
                    />
                  </i>
                </a>
                {/* e-mail */}
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="nonopener noreferrer"
                >
                  <i aria-hidden="true">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="6x"
                      color="white"
                    />
                  </i>
                </a>
              </div>

              
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
