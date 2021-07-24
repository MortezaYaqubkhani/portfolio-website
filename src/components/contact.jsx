import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Morteza Yaghoubkhani</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              The International Society of City and Regional Planners (ISOCARP)
              is a global member-association of urban and regional planners.
              ISOCARP coordinates various planning activities and research
              initiatives for and with its network of international members,
              including webinars, workshops and publications, amongst many other
              projects.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                {/* phone */}
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <FontAwesomeIcon
                      icon={faPhoneSquare}
                      size="2x"
                      color="black"
                      style={{ paddingRight: "5rem" }}
                    />
                    (+31) 685 082 990
                  </ListItemContent>
                </ListItem>
                {/* mail */}
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <a href="mailto:yaqubkhani.m@gmail.com">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="2x"
                        color="black"
                        style={{ paddingRight: "5rem" }}
                      />
                    </a>
                    yaqubkhani.m@gmail.com
                  </ListItemContent>
                </ListItem>
                {/* skype */}
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <FontAwesomeIcon
                      icon={faSkype}
                      size="2x"
                      color="black"
                      style={{ paddingRight: "5rem" }}
                    />
                    mortezayg
                  </ListItemContent>
                </ListItem>
                {/* location */}
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      size="2x"
                      color="black"
                      style={{ paddingRight: "5rem" }}
                    />
                    Enschede, The Netherlands
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
