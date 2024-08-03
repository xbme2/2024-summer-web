import styles from "./PageNav.module.css";
import Logo from "../ui/Logo.jsx";
import { NavLink } from "react-router-dom";

function PageBar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <div>
        <NavLink to="/signup" className={styles.link}>
          注册
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/login" className={styles.link}>
          登录
        </NavLink>
      </div>
    </nav>
  );
}

export default PageBar;
