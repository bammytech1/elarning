import logo from "../../assets/Elearning_logo.png"; 
import "./Header.scss";
import { HashLink as Link} from 'react-router-hash-link';
import { useState } from "react";

function Header() {

    const [show, setShow] = useState(false);

    function showMenu() {
       return setShow(!show);
    }

  return (
    <header className="header">
        <nav className="nav">
            <img className="logo" src={logo} alt="dd" />
            <div className={show ? "links active" : "links"}>
                <Link onClick={() => showMenu()} to='#about' smooth>About</Link>
                <Link onClick={() => showMenu()} to='/'>Service</Link>
                <Link onClick={() => showMenu()} to='/'>Pricing</Link>
                <button className="btn-pry">CONTACT</button>
            </div>
            <div  className={show ? "menu-icon active" : "menu-icon"} onClick={() => showMenu()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
  )
}

export default Header