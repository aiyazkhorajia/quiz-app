import React from 'react';
import Quiz from './pages/Quiz';
//import CountryDropdown from './components/CountryDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  //const countryCodes =  ["en-US","en-GB","pt-BR", "zh-cn"];
  return (
    <div id="app-container" className="rounded ltr menu-default menu-sub-hidden">
      <main className="default-transition">
      <Quiz />
      {/* <CountryDropdown countryCodes={countryCodes} /> */}
      </main>
    </div>
  );
}

export default App;
