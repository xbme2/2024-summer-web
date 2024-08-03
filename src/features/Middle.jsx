import { Outlet } from "react-router-dom";
import styles from "./Middle.module.css";

import NewPostInput from "./posts/NewPostInput";
function Middle() {
  return (
    <div className={styles.middle}>
      <h1>Middle</h1>
      <NewPostInput />
      <Outlet />
    </div>
  );
}

export default Middle;
