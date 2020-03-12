import React from 'react';
import './styling/App.css';

// Components
import MainSection from "./components/MainSection";
import TwitterSection from './components/TwitterSection';


function App() {
  return (
    <div className="App">
      <MainSection/>
      <TwitterSection/>
    </div>
  );
}

export default App;
