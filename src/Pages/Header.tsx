import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../Components/Card";
import logo from "../logo.svg";
import Config from "../config";

export const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Card title="Hey there" paragraph="Yo"></Card>
      <Link to="/weather">View Weather</Link>
      <p>{Config.weatherService}</p>
    </header>
  );
};
