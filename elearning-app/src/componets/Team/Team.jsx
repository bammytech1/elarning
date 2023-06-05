// import { HashLink as Link } from "react-router-hash-link"
import "./Team.scss"
import ceo from "../../assets/ceo-avatar.svg"
import shape from "../../assets/Shape.svg"
import teamData from '../../teamdata'
import {motion} from 'framer-motion'

const aboutVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

function Team() {
  return (
    <div id="team" className="team-section">
            <div className="team-container">
                    <h4>OUR TEAM</h4>
                    <h2>Team of Designer<br></br> and Developers</h2>
            </div>
            <div className="team-cards">
            {teamData.map(data => {
                return (
                    <TeamCard {...data} key={data.id}/>
                )
            })}
                
            </div>
            <motion.div
            variants={aboutVariants}
            initial="offscreen"
            whileInView="onscreen"
            id="about" 
            className="founder-section">
                <div className="founder-container">
                    <motion.picture
                    initial={{x: "2rem", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition = {{
                    delay: 1.1,
                    duration: 5,
                    type: "spring"
                    }}>
                    <img src={ceo} className="founder-image" alt="" />
                    </motion.picture>
                    <div className="founder-content">
                        <h4>FOUNDER WORD</h4>
                        <h2>Developing The  Powerful<br></br> Brands And Identities</h2>
                        <h5>Tolu Owolabi</h5>
                        <p>Founder</p>
                        <img className="shape" src={shape} alt="" />
                    </div>
                </div>
            </motion.div>
    </div>
  )
}

const TeamCard = (props) => {
    const { avatar, name, position} = props
    return (
        <div className="card">
            <img src={avatar} alt="" />
            <div className="card-info">
                <h2>{name}</h2>
                <p>{position}</p>

            </div>

        </div>
    )
}

export default Team