

import Header from './componets/Header/Header';
import Hero from './componets/Hero/Hero';
import About from './componets/About/About';
import HowWeWork from './componets/HowWeWork/HowWeWork';
import Features from './componets/Features/Features';
import Service from './componets/Service/Service';
import Portfolio from './componets/Portfolio/Portfolio';
// import Slider from './Slider/Slider';

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
      <Service />
      <Portfolio />
      {/* <Slider /> */}
    </Router>
  )
}

export default App
