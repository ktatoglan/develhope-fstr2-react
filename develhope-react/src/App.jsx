import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GithubUsers from "./GithubUsers";
import ShowGithubUser from "./ShowGithubUser";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<GithubUsers />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </Router>
  );
};

export default App;
