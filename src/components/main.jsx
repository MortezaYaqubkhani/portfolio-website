import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./landingpage";
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={LandingPage} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  );
};

export default Main;
