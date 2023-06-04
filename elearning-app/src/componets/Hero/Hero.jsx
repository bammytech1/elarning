
import heroImage from '../../assets/pic.svg';
import "./Hero.scss";

// import { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { motion} from "framer-motion";




const Hero = () => {


  return (
    <div  className="hero-section">
        <div className="container">
            <motion.picture
            initial={{x: "2rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition = {{
              duration: 2,
              type: "spring"
            }}>
            <img src={heroImage} className="hero-image" alt="" />
            </motion.picture>
            <motion.div
            initial={{y: "2rem", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition = {{
              duration: 2,
              type: "spring"
            }}
             className="hero-content">
                <h4>#WE PROVIDE IT SERVICES</h4>
                <h1>We Help <br></br> TO Build Your Dream Project</h1>
                <p>Elearning provides a full service range including technical skils, design, business understanding</p>
                <div className="btn-group">
                    <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="btn-sec" to='#howWeWork'><Link to="#howWeWork">HOW WE WORK</Link></motion.div>
                    <Link className='btn-opt' to='/'>Contact Us</Link>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero