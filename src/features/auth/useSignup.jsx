import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../service/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success("账户注册成功！请从邮箱里确认新账户。");
      navigate("/app", { replace: true });
    },
  });

  return { signup, isLoading };
}
