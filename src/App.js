import React from 'react';
import Quiz from './pages/Quiz';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div id="app-container" className="rounded ltr menu-default menu-sub-hidden">
      <main className="default-transition">
        <Quiz />
      </main>
    </div>
  );
}

export default App;
