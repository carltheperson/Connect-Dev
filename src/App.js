import React from 'react';
import './styling/App.css';


// Components
import MainSection from "./components/MainSection";
import Sections from './components/Sections';


function App() {
  return (
    <div className="App">
      <MainSection/>
      <Sections/>
    </div>
  );
}

export default App;
