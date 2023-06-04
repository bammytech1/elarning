import "../componets/HowWeWork/HowWeWork.scss";
import { motion, AnimatePresence} from 'framer-motion'
import video from "../assets/music-preview.mp4"

import { useState } from "react";




const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
  



function Videoplay() {
    const [ closeBtn, setCloseBtn] = useState(false);
    function close()  {
        return setCloseBtn(!false);
    }
    return (
    <AnimatePresence initial={false} 
    exitBeforeENter>
        { closeBtn || <motion.div
            positionTransition
            initial={{ opacity: 0, y: 400, scale: 0.3 }}
            animate={{ opacity: 1, y: -50, x: 350, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className=" video-show ">
            <video className="" controls width="100%" >
                <source  src={video} type="video/webm" />
                <source allow="autoplay" src={video} type="video/mp4"/>
            </video>
            <button className="btn1" onClick={() => close()} >
                <svg width="23" height="23" viewBox="0 0 23 23">
                    <Path d="M 3 16.5 L 17 2.5" />
                    <Path d="M 3 2.5 L 17 16.346" />
                </svg>
            </button>
        </motion.div>}
    </AnimatePresence>
  )
}

export default Videoplay