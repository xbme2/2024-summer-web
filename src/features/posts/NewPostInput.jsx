import { useForm } from "react-hook-form";

import styles from "./NewPostInput.module.css";
import Button from "../../ui/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../../service/apiPost";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "../auth/useUser.jsx";

function NewPostInput() {
  const user = useUser();
  const id = user.user.id;
  const interesting_id = useParams();

  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();

  const { mutate, isLoading: isPosting } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("创建成功！");
      queryClient.invalidateQueries({ queryKey: ["Posts"] });
      reset();
    },
    onError: (err) => {
      toast.success("创建失败！");

      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    console.log(data);
    mutate({
      ...data,
      interesting_id: interesting_id.id,
      likes: 1,
      image: data.image.length ? data.image[0] : null,
      poster_id: id,
    });
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
      <div className={styles.new}>
        <input
          type="text"
          placeholder="来发布你的贴子吧"
          className={styles.input}
          id="contents"
          {...register("contents", {
            required: "帖子内容不能为空",
            validate: (value) => value.length <= 200 || "帖子内容不能超过200字",
          })}
        ></input>
        <div className={styles.group}>
          <input
            type="file"
            id="image"
            accept="image/*"
            className={styles.file}
            {...register("image")}
          ></input>
          {/* <Button variant="primary">发布</Button> */}
          <Button variant="add" disabled={isPosting || !interesting_id}>
            发布
          </Button>
        </div>
      </div>
    </form>
  );
}

export default NewPostInput;
