import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <input
      type="text"
      placeholder="搜索兴趣圈..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className={styles.search}
    ></input>
  );
}

export default SearchBar;
