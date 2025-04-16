import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

import { AUTHOR, ICONS } from "../../utilities/author";
import Button from "../Button";
import SearchBar from "../SearchBar";

const NavBar = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navBar}>
      <Link to="/" className={styles.logo}>
        {AUTHOR.APP_NAME}
      </Link>
      <div className={styles.links}>
        <SearchBar
          id="web-searchBar"
          dataTestId="web-searchBar"
          onSearch={onSearch}
        />
        <Link to="/">{AUTHOR.HEADER_LINKS.HOME}</Link>
        <Link to="/add">{AUTHOR.HEADER_LINKS.NEW_POST}</Link>
      </div>
      <span className={styles.mobileView}>
        <SearchBar
          id="mobile-searchBar"
          dataTestId="mobile-searchBar"
          onSearch={onSearch}
        />
        <Button
          id="toggle-menu"
          className={styles.hamburger}
          dataTestId="toggle-menu"
          aria-label="Toggle menu"
          ariaExpanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? ICONS.CLOSE : ICONS.HAMBURGER}
        </Button>
      </span>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={toggleMobileMenu}>
            {AUTHOR.HEADER_LINKS.HOME}
          </Link>
          <Link to="/add" onClick={toggleMobileMenu}>
            {AUTHOR.HEADER_LINKS.NEW_POST}
          </Link>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
