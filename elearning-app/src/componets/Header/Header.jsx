import logo from "../../assets/Elearning_logo.png"; 
import "./Header.scss";
import { HashLink as Link} from 'react-router-hash-link';
import { useState } from "react";
import { motion } from "framer-motion";





function Header() {

    const [show, setShow] = useState(false);

    function showMenu() {
       return setShow(!show);
    }

    function closeMenu() {
        return setShow(false);
    }

  return (
    <header className="header">
        <nav className="nav">
            <Link onClick={() => closeMenu()}  to='/#' smooth><img className="logo" src={logo} alt="dd" /></Link>
            <div className={show ? "links active" : "links"}>
                <Link onClick={() => showMenu()} to='#about' smooth>About</Link>
                <Link onClick={() => showMenu()} to='#howWeWork'>Service</Link>
                <Link onClick={() => showMenu()} to='/'>Pricing</Link>
                <Link to='#contact' className="btn-pry">CONTACT</Link>
            </div>
            <motion.div
               whileHover={{ scale: 1.3 }}
               whileTap={{ scale: 0.9 }}
              className={show && "menu-icon active" || "menu-icon"} onClick={() => showMenu()}>
                <span></span>
                <span></span>
                <span></span>
            </motion.div>
        </nav>
    </header>
  )
}

export default Header