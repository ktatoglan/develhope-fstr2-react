import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
};

export default App;
