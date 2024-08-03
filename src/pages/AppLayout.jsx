import LeftSideBar from "../features/LeftSideBar";
import Middle from "../features/Middle";
import RightSideBar from "../features/RightSideBar";
import styles from "./AppLayout.module.css";
import AppNav from "../ui/AppNav";

export default function AppLayout() {
  return (
    <>
      <AppNav />
      <div className={styles.app}>
        <LeftSideBar />
        <Middle />
        <RightSideBar />
      </div>
    </>
  );
}
