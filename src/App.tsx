import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from "./Components/Card";
import Counter from "./Components/Counter";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { WeatherPage } from "./Pages/WeatherPage";
import { Header } from "./Pages/Header";

function App() {
  return (
    <Router>
      {/* other routes */}
      <Routes>
        <Route path="" element={<Header></Header>}></Route>
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
      {/* other routes */}
    </Router>
  );
}

export default App;
