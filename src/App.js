import React from 'react';
import './styling/App.css';

// Components
import MainSection from "./components/MainSection";
import TwitterSection from './components/TwitterSection';
import GithubSection from './components/GithubSection';


function App() {
  return (
    <div className="App">
      <MainSection/>
      <TwitterSection/>
      <GithubSection/>
    </div>
  );
}

export default App;
