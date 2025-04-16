import styles from "./Header.module.css";

import NavBar from "../NavBar";

function Header({ onSearch }) {
  return (
    <header className={styles.header}>
      <NavBar onSearch={onSearch} />
    </header>
  );
}

export default Header;
