import Logout from "../features/auth/Logout.jsx";
import styles from "./AppNav.module.css";
import Header from "./Header.jsx";
import Logo from "./Logo.jsx";
//import { HiOutlineHome } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
function AppNav() {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      {/* <Logout /> */}
      <Header />
    </nav>
  );
}

export default AppNav;
/* <ul>
        {}
        <li>
          <NavLink to="/login" className={styles.link}>
            注册
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.link}>
            登录
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={styles.link}>
            <span>
              主页
            </span>
          </NavLink>
        </li>
      </ul> */
