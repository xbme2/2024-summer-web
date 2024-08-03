import { HiOutlineSun, HiOutlineUser } from "react-icons/hi2";
import styles from "./HeaderMenu.module.css";
import Logout from "../features/auth/Logout";

function HeaderMenu() {
  return (
    <ul className={styles.ul}>
      <li>
        <button className={styles.icon}>
          <HiOutlineUser />
        </button>
      </li>
      <li>
        <button className={styles.icon}>
          <HiOutlineSun />
        </button>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
