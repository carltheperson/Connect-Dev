import React from 'react';
import './styling/App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

// Components
import MainSection from "./components/MainSection";
import Sections from "./components/Sections";
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Route exact path="/">
          <MainSection/>
          <Sections/>
        </Route>

        <Route exact path="/how-it-works">
          <HowItWorks/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
