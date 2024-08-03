import { Link } from "react-router-dom";
import PageNav from "../features/PageNav";
import styles from "./HomePage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      {<PageNav />}

      <section>
        <h1>
          You have the hobbies
          <br />
          Acgn Book makes you and hobbies together
        </h1>
        <h2>
          A hobbies app that makes you dive into your hobiies developed during
          the past years. Here you will make friends with who share the common
          hobbies with you.
        </h2>
        <Link to="/app" className="cta">
          开始探索吧
        </Link>
      </section>
    </main>
  );
}
