import { useUser } from "../features/auth/useUser";
import styles from "./UserAvatar.module.css";

function UserAvatar() {
  const user = useUser();
  console.log(user);
  console.log(user?.user?.user_metadata);
  const { fullName, avatar } = user.user.user_metadata;

  return (
    <div className={styles.style}>
      <img
        className={styles.avatar}
        src={avatar || "/default-user.jpg"}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName || "Annoy"}</span>
    </div>
  );
}

export default UserAvatar;
