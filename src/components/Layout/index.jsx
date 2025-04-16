import styles from "./Layout.module.css";

import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children, onSearch }) => {
  return (
    <div className={styles.layout}>
      <Header onSearch={onSearch} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
