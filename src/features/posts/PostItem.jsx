/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./PostItem.module.css";
import { TranslateTime } from "../../utils/helper";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { HiHeart } from "react-icons/hi2";
import CommentList from "../comment/CommentList";
function PostItem({ post }) {
  const [showComments, setShowComments] = useState(false);

  const { id, created_at, contents, postor_id, image } = post;

  function onClick() {
    setShowComments((showComments) => !showComments);
  }

  return (
    <>
      <div className={styles.tweetItem}>
        <div className={styles.userInfo}>
          <div className={styles.userDetails}>
            <span className={styles.username}>{postor_id}</span>
            <span className={styles.timestamp}>
              {TranslateTime(created_at)}
            </span>
          </div>
        </div>
        <div className={styles.tweetContent}>{contents}</div>
        <img src={image} alt={image} className={styles.img}></img>
        <div className={styles.actions}>
          <span className={styles.actionItem}>
            <span className={styles.actionText}>
              <HiChatBubbleOvalLeft onClick={onClick} />
            </span>
          </span>
          <span className={styles.actionItem}>
            <span className={styles.actionText}>
              <HiHeart />
            </span>
            <strong>{post.likes}</strong>
          </span>
        </div>
      </div>
      {showComments && <CommentList post_id={id} />}
    </>
  );
}

export default PostItem;
