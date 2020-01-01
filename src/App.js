import React from 'react';
import Routes from './routes.js';

import './styles.css';

import Header from './components/Header';


function App() {
  return (
    <div className="App">
     <Header />
     <Routes />
    </div>
  );
}

export default App;
