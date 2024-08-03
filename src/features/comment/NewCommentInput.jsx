/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import styles from "./NewCommentInput.module.css";
import Button from "../../ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createComment } from "../../service/apiComment";
import { useUser } from "../auth/useUser";

function NewCommentInput({ post_id }) {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();

  const user = useUser();
  const id = user.user.id;
  console.log(user.user.id);
  console.log(id);

  const { mutate, isLoading: isCommenting } = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      toast.success("创建成功！");
      queryClient.invalidateQueries({ queryKey: ["Comments"] });
      reset();
    },
    onError: (err) => {
      toast.error("创建失败！");
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    console.log(data);
    // const nanoid = customAlphabet("1234567890", 4);
    // const id = nanoid();
    mutate({
      ...data,
      likes: 1,
      post_id: post_id,
      commenter_id: id,
    });
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
      <div className={`${styles.new} ${styles.group}`}>
        <input
          type="text"
          placeholder="来发布你的评论吧"
          className={styles.input}
          id="contents"
          {...register("contents", {
            required: "评论内容不能为空",
            validate: (value) => value.length <= 200 || "评论内容不能超过200字",
          })}
        ></input>
        <Button variant="add" disabled={isCommenting}>
          发布
        </Button>
      </div>
    </form>
  );
}

export default NewCommentInput;
