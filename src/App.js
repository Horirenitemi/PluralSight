import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./study/About";
import Feed from "../src/study/feed";
import HomePage from "./study/HomePage";
import "antd/dist/antd.css";
import ProjectHeader from "../src/ProjectHeader";

const App = () => {
  return (
    <Router>
      {" "}
      <ProjectHeader />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={About} />
        <Route path="/feed" component={Feed} />
      </Switch>
    </Router>
  );
};

export default App;