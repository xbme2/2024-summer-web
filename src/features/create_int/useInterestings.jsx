import { getInterestings } from "../../service/apiInteresting";
import { useQuery } from "@tanstack/react-query";

export function useInteresting() {
  const {
    isLoading,
    data: interestinglists,
    error,
  } = useQuery({
    queryKey: ["Interestings"],
    queryFn: getInterestings,
  });

  return { isLoading, interestinglists, error };
}
