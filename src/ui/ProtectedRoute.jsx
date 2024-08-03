import { useUser } from "../features/auth/useUser.jsx";
import Spinner from "./Spinner";
import styles from "./ProtectedRoute.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <div className={styles.fullpage}>
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
