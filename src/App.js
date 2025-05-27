// src/App.js
import React from 'react';
import SideBar from './components/SideBar'; // Make sure the casing matches the file name
import Header from './components/Header';
import Dashboardmin from './components/Dashboardmin';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <div className="main-content">
        <Header />
        <Dashboardmin />
      </div>
    </div>
  );
}

export default App;

