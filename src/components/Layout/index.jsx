import styles from "./Layout.module.css";

import NavBar from "../NavBar";
import { AUTHOR } from "../../utilities/author";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>
          &copy;&nbsp;
          {`${new Date().getFullYear()} ${AUTHOR.APP_NAME}. ${
            AUTHOR.ALL_RIGHTS
          } `}
        </p>
      </footer>
    </div>
  );
};

export default Layout;
