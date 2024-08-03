import styles from "./AppNav.module.css";
import Header from "./Header.jsx";
import Logo from "./Logo.jsx";
function AppNav() {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <Header />
    </nav>
  );
}

export default AppNav;
