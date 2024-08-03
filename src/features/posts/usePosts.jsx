import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../service/apiPost";

export function usePosts(interesting_id) {
  const {
    isLoading,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["Posts", interesting_id], // queryKey 允许 React Query 在查询的参数发生变化时，可以自动重新发起查询，只需要把id加入参数即可
    queryFn: () => getPosts(interesting_id),
  });

  return { isLoading, posts, error };
}
