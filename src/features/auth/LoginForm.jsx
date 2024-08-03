import { useState } from "react";
import Button from "../../ui/Button";
import styles from "./LoginForm.module.css";
import { useLogin } from "./useLojin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formrow}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          disabled={isLoading}
        />
      </div>
      <div className={styles.formrow}>
        <label htmlFor="email">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          disabled={isLoading}
        />
      </div>
      <div className={styles.formrow}>
        <Button variant="add">
          {!isLoading ? "Log in" : <SpinnerMini />}
          {/* Log in */}
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
