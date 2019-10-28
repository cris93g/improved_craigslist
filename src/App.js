import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter } from "react-router-dom";
import SingUp from "./Components/Log/SignUp";
function App() {
  return (
    <HashRouter>
      <div className="App">
        <SingUp />
      </div>
    </HashRouter>
  );
}

export default App;
