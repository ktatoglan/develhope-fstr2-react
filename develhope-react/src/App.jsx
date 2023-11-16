import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GithubUsers from "./GithubUsers";
import ShowGithubUser from "./ShowGithubUser";

const IndexMessage = () => {
  return <h3>Add a user and select it</h3>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GithubUsers />} />
        <Route path="/" exact element={<IndexMessage />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </Router>
  );
};

export default App;
