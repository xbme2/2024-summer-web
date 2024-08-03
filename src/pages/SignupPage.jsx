import SignupForm from "../features/auth/SignupForm";
import Logo from "../ui/Logo";
import styles from "./SignupPage.module.css";
function SignupPage() {
  return (
    <main className={styles.signuppage}>
      {/* <h1>login</h1> */}
      <div className={styles.logo}>
        <Logo />
      </div>
      <h1>注册成为Acgn-Book会员</h1>
      <SignupForm />
    </main>
  );
}

export default SignupPage;
