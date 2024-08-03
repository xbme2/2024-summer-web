import LoginForm from "../features/auth/LoginForm";
import Logo from "../ui/Logo";
import styles from "./LoginPage.module.css";
function LoginPage() {
  return (
    <main className={styles.loginpage}>
      {/* <h1>login</h1> */}
      <div className={styles.logo}>
        <Logo />
      </div>
      <h1>请登入你的账号</h1>
      <LoginForm />
    </main>
  );
}
export default LoginPage;
