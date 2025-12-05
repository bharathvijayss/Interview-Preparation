import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <header className="header-container">
            <img src={LOGO_URL} alt="logo image in header" className="logo-img" />
            <input type='search' placeholder="Search for restaurants and food" className="search-input" />
            <ul className="nav-links">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </header>
    );
}

export default Header;