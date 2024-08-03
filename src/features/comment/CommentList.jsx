/* eslint-disable react/prop-types */
import Spinner from "../../ui/Spinner";
import styles from "./CommentList.module.css";
import NewCommentInput from "./NewCommentInput";
import SingleComment from "./SingleComment";
import { useComments } from "./useComments";

function CommentList({ post_id }) {
  const { isLoading, comments, error } = useComments(post_id);
  if (error) console.error(error);
  if (isLoading) return <Spinner />;

  //   if (comments.length === 0) return <h1>暂时还没有帖子哦😊</h1>;

  return (
    <ul className={styles.commentList}>
      <li>
        <NewCommentInput post_id={post_id} />
      </li>
      {comments.map((comment) => (
        <SingleComment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

export default CommentList;
