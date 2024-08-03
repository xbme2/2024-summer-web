import { HiArrowRightOnRectangle } from "react-icons/hi2";
import styles from "./Logout.module.css";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button className={styles.icon} disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </button>
  );
}

export default Logout;
