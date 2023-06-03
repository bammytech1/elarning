

import { HashLink as Link } from "react-router-hash-link";
import "./HowWeWork.scss";
import play from "../../assets/play.png";
import playVideo from "../../assets/music-preview.mp4"

function HowWeWork() {
  return (
    <div className="how-we-work">
        <div className="how-container">
            <div className="left">
                <h4>How we work</h4>
                <h2>Making Your Projects Look Awesome</h2>
                <p>Ability to put themselves in the marchants shoe. it is meant to partner on the long run. and work as an extension of the marchants team.</p>
                <div className="btn-group">
                    <Link className="" to='/'>Read More</Link>
                </div>
            </div>
            <div className="right-side">
                <ul className="list-details">1
                    <li>Full service range including</li>
                </ul>
                <ul className="list-details">2
                    <li>Full service range including</li>
                </ul>
                <ul className="list-details">3
                    <li>Full service range including</li>
                </ul>
            </div>
        </div>
        <div className="video-container">
            <video controls width="100%" >
                    <source  src={playVideo} type="video/webm" />
                    <source allow="autoplay" src={playVideo} type="video/mp4"/>
            </video>
            {/* <video src={playVideo}></video> */}
            <div className="overlay">
                <p>VIDEO REEL</p>
                <img src={play} alt="" />
                <h3>Unlock the Greatest Value Possible</h3>
            </div>
        </div>
        <span></span>
    </div>
  )
}

export default HowWeWork