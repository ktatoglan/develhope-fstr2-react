import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GithubUsers from "./GithubUsers";
import ShowGithubUser from "./ShowGithubUser";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users" component={GithubUsers} />
        <Route path="/users/:username" component={ShowGithubUser} />
      </Routes>
    </Router>
  );
};

export default App;
