import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";

import { AUTHOR } from "../../utilities/author";
import Button from "../Button";

const CLOSE_ICON = "x";
const HAMBURGER_ICON = "☰";

const NavBar = () => {
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
        <Link to="/">{AUTHOR.HEADER_LINKS.HOME}</Link>
        <Link to="/blog">{AUTHOR.HEADER_LINKS.BLOG}</Link>
        <Link to="/about">{AUTHOR.HEADER_LINKS.ABOUT}</Link>
      </div>
      <Button
        id="toggle-menu"
        className={styles.hamburger}
        dataTestid="toggle-menu"
        aria-label="Toggle menu"
        ariaExpanded={isMobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? CLOSE_ICON : HAMBURGER_ICON}
      </Button>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={toggleMobileMenu}>
            {AUTHOR.HEADER_LINKS.HOME}
          </Link>
          <Link to="/blog" onClick={toggleMobileMenu}>
            {AUTHOR.HEADER_LINKS.BLOG}
          </Link>
          <Link to="/about" onClick={toggleMobileMenu}>
            {AUTHOR.HEADER_LINKS.ABOUT}
          </Link>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
