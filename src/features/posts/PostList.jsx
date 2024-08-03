import styles from "./PostItem.module.css";

import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import PostItem from "./PostItem";
import { usePosts } from "./usePosts";
import { CompareTime } from "../../utils/helper";

function PostList() {
  const { id } = useParams();

  let { isLoading, posts, error } = usePosts(id); // queryKey 允许 React Query 在查询的参数发生变化时，可以自动重新发起查询，只需要把id加入参数即可
  if (error) console.error(error);
  if (isLoading) return <Spinner />;

  posts.sort(CompareTime);
  //   console.log(posts);

  if (posts.length === 0) {
    return <h1>暂时还没有帖子哦😊</h1>;
  }
  return (
    <ul className={styles.postList}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default PostList;
