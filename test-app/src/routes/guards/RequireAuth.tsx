// React & libraries
import { Navigate, Outlet } from "react-router-dom";

// Store & hooks
import { useAuth } from "../../context/AuthContext";

// Constants & types
import { authPaths } from "../../constants";

const RequireAuth = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={authPaths.navigate.login} replace />
  );
};

export default RequireAuth;
