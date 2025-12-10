import { Link, NavLink } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const isOnline = useOnlineStatus();

    return (
        <header className="header-container">
            <img src={LOGO_URL} alt="logo image in header" className="logo-img" />
            <ul className="nav-links">
                <li>Online Status: {isOnline ? "🟢" : "🔴"}</li>
                <li><NavLink to='/' className={({ isActive }) => isActive ? 'activatedLink' : ''}>🏠 Home</NavLink></li>
                <li><NavLink to='/about-us' className={({ isActive }) => isActive ? 'activatedLink' : ''}>ℹ️ About Us</NavLink></li>
                <li><NavLink to='/contact-us' className={({ isActive }) => isActive ? 'activatedLink' : ''}>📞 Contact Us</NavLink></li>
                <li><NavLink to='/cart' className={({ isActive }) => isActive ? 'activatedLink' : ''}>🛒 Cart</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;