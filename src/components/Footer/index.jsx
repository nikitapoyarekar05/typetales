import styles from "./Footer.module.css";

import { AUTHOR } from "../../utilities/author";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy;&nbsp;
        {`${new Date().getFullYear()} ${AUTHOR.APP_NAME}. ${
          AUTHOR.ALL_RIGHTS
        } `}
      </p>
    </footer>
  );
}

export default Footer;
