import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Login as LoginApi } from "../../service/apiAuth";
import { toast } from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => LoginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/app", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("输入的邮箱地址或密码错误");
    },
  });

  return { login, isLoading };
}
