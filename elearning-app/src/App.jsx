

import Header from './componets/Header/Header';
import Hero from './componets/Hero/Hero';
import About from './componets/About/About';
import HowWeWork from './componets/HowWeWork/HowWeWork';
import Features from './componets/Features/Features';
import Service from './componets/Service/Service';
import Portfolio from './componets/Portfolio/Portfolio';
import FeedBack from './componets/Feedback/FeedBack';
import Pricing from './componets/Pricing/Pricing';
import Faq from './componets/FAQ/Faq';
import ReachUs from './componets/ReachUs/ReachUs';
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
      <FeedBack />
      <Pricing />
      <Faq />
      <ReachUs />
    </Router>
  )
}

export default App
