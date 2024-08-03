import UserAvatar from "./UserAvatar";
import styles from "./Header.module.css";
import Logout from "../features/auth/Logout";

function Header() {
  return (
    <header className={styles.header}>
      <UserAvatar />
      <Logout />
    </header>
  );
}

export default Header;
