import { Link, NavLink } from "react-router";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <header className="header-container">
            <img src={LOGO_URL} alt="logo image in header" className="logo-img" />
            <ul className="nav-links">
                <li><NavLink to='/' className={({ isActive }) => isActive ? 'activatedLink' : ''}>Home</NavLink></li>
                <li><NavLink to='/about-us' className={({ isActive }) => isActive ? 'activatedLink' : ''}>About Us</NavLink></li>
                <li><NavLink to='/contact-us' className={({ isActive }) => isActive ? 'activatedLink' : ''}>Contact Us</NavLink></li>
                <li><NavLink to='/cart' className={({ isActive }) => isActive ? 'activatedLink' : ''}>Cart</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;