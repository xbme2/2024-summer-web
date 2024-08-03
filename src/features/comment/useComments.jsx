import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../service/apiComment";

export function useComments(post_id) {
  const {
    isLoading,
    data: comments,
    error,
  } = useQuery({
    queryKey: ["Comments", post_id],
    queryFn: () => getComments(post_id),
  });

  return { isLoading, comments, error };
}
