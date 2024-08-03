import { useState } from "react";
import styles from "./LeftSideBar.module.css";

import InterestingList from "./create_int/InterestingList";
import Button from "../ui/Button";
import AddInterestingForm from "./create_int/AddInterestingForm";

function LeftSideBar() {
  const [showForm, setShowForm] = useState(false);

  function handleCLick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <div className={styles.leftbar}>
      <h1>
        <strong>推荐的兴趣圈</strong>
      </h1>
      <InterestingList />
      <Button variant="add" onClick={handleCLick}>
        {!showForm ? "+创建新的兴趣圈" : "收起"}
      </Button>
      {showForm && <AddInterestingForm />}
    </div>
  );
}
export default LeftSideBar;
