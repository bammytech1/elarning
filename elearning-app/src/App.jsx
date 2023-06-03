

import Header from './componets/Header/Header';
import Hero from './componets/Hero/Hero';
import About from './componets/About/About';
import HowWeWork from './componets/HowWeWork/HowWeWork';
import Features from './componets/Features/Features';

import './style.scss';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Header />
      <Hero />
      <About />
      <HowWeWork />
      <Features />
    </Router>
  )
}

export default App
