import './App.css';
import React from 'react';
import HeaderBar from './components/ui/HeaderBar';
import Home from './components/ui/Home';
import About from './components/ui/About';
import Album from './components/ui/Album';
import RoadMap from './components/ui/RoadMap';
import Teams from './components/ui/Teams';
import Calender from './components/ui/Calender';
import Faq from './components/ui/Faq';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Home />
      <About />
      <Album />
      <RoadMap />
      <Teams />
      <Faq />
      <Calender />
    </div>
  );
}

export default App;
