import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customAlphabet } from "nanoid";

import Button from "../../ui/Button";
import styles from "./AddInterestingForm.module.css";
import { createInteresting } from "../../service/apiInteresting.jsx";

function AddInterestingForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createInteresting,
    onSuccess: () => {
      toast.success("创建成功！");
      queryClient.invalidateQueries({ queryKey: ["Interestings"] });
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    const nanoid = customAlphabet("1234567890", 4);
    const id = nanoid();

    mutate({
      ...data,
      id: Number(id),
      followingNums: 1,
      image: data.image[0],
    });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)}>
      <div className={styles.formrow}>
        <label htmlFor="name">名字</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "这是必填项",
            validate: (value) => value.length <= 8 || "名字不能超过8个字符",
          })}
        />
        {errors?.name?.message && (
          <span className={styles.error}>{errors.name.message}!</span>
        )}
      </div>
      <div className={styles.formrow}>
        <label htmlFor="image">图片</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className={styles.file}
          //   accept="image/*"
          {...register("image", {
            required: "这是必填项",
          })}
        />
        {errors?.image?.message && (
          <span className={styles.error}>{errors.image.message}!</span>
        )}
      </div>
      <div className={styles.formrow}>
        <label htmlFor="description">描述</label>
        <textarea
          type="textarea"
          className={styles.textarea}
          id="description"
          defaultValue=""
          {...register("description", {
            required: "这是必填项",
            validate: (value) => value.length <= 150 || "描述不能超过150个字符",
          })}
        />
        {errors?.description?.message && (
          <span className={styles.error}>{errors.description.message}!</span>
        )}
      </div>
      <div className={styles.formrow}>
        <Button variant="primary" type="reset">
          重置
        </Button>
        <Button variant="primary" disabled={isCreating}>
          创建
        </Button>
      </div>
    </form>
  );
}

export default AddInterestingForm;
