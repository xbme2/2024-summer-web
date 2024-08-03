import { useForm } from "react-hook-form";
import styles from "./SignupForm.module.css";
import Button from "../../ui/Button";
import { useSignup } from "./useSignup";
function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password, avatar }) {
    signup(
      { fullName, email, password, avatar },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formrow}>
        <label htmlFor="Full name">设置昵称</label>{" "}
        {/*error={errors?.fullName?.message}>*/}
        <input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "请输入你想使用的昵称" })}
        />
        {errors?.fullName?.message && (
          <span className={styles.error}>{errors.fullName.message}!</span>
        )}
      </div>

      <div className={styles.formrow}>
        <label htmlFor="Email address">你的 Email 地址</label>
        {/* error={errors?.email?.message} */}
        <input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "请输入正确的Emial地址",
            },
          })}
        />
        {errors?.email?.message && (
          <span className={styles.error}>{errors.email.message}!</span>
        )}
      </div>

      <div className={styles.formrow}>
        <label htmlFor="Password (min 8 characters)">
          设置密码 (不少于8个字符)
        </label>
        {/* error={errors?.password?.message} */}
        <input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "确认密码",
            minLength: {
              value: 8,
              message: "请设置至少8位以上的密码",
            },
          })}
        />
        {errors?.password?.message && (
          <span className={styles.error}>{errors.password.message}!</span>
        )}
      </div>

      <div className={styles.formrow}>
        {" "}
        <label htmlFor="Repeat password">确认密码</label>
        {/* error={errors?.passwordConfirm?.message}> */}
        <input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "请再次输入你的密码",
          })}
        />
        {errors?.passwordConfirm?.message && (
          <span className={styles.error}>
            {errors.passwordConfirm.message}!
          </span>
        )}
      </div>
      <div className={styles.formrow}>
        <label htmlFor="avatar">头像</label>
        <input
          type="file"
          id="avatar"
          accept="image/*"
          className={styles.file}
          {...register("avatar")}
        />
        {errors?.avatar?.message && (
          <span className={styles.error}>{errors.avatar.message}!</span>
        )}
      </div>
      <div className={styles.formrow}>
        {/* type is an HTML attribute! */}
        <Button variant="primary" type="reset" disabled={isLoading}>
          Cancel
        </Button>
        <Button variant="primary" disabled={isLoading}>
          Create new user
        </Button>
      </div>
    </form>
  );
}

export default SignupForm;
