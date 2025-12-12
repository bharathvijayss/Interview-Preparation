import { Link, NavLink } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const isOnline = useOnlineStatus();
    const context = useContext(UserContext);
    const cartCount = useSelector((state) => state.cart.items.length);

    return (
        <header className="header-container">
            <img src={LOGO_URL} alt="logo image in header" className="logo-img" />
            <ul className="nav-links">
                <li>{context.name}: {isOnline ? "🟢" : "🔴"}</li>
                <li><NavLink to='/' className={({ isActive }) => isActive ? 'activatedLink' : ''}>🏠 Home</NavLink></li>
                <li><NavLink to='/about-us' className={({ isActive }) => isActive ? 'activatedLink' : ''}>ℹ️ About Us</NavLink></li>
                <li><NavLink to='/contact-us' className={({ isActive }) => isActive ? 'activatedLink' : ''}>📞 Contact Us</NavLink></li>
                <li><NavLink to='/cart' className={({ isActive }) => isActive ? 'activatedLink' : ''}>🛒 Cart({cartCount})</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;