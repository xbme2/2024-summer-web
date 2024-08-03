/* eslint-disable react/prop-types */

import { TranslateTime } from "../../utils/helper";
import styles from "./SingleComment.module.css";
function SingleComment({ comment }) {
  const { contents, created_at, commenter_id } = comment;
  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <span className={styles.username}>用户 {commenter_id}</span>
        <span className={styles.timestamp}>{TranslateTime(created_at)}</span>
      </div>
      <p className={styles.content}>{contents}</p>
    </div>
  );
}

export default SingleComment;
