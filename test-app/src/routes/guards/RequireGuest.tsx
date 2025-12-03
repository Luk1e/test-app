// React & libraries
import { Navigate, Outlet } from "react-router-dom";

// Store & hooks
import { useAuth } from "../../context/AuthContext";

// Constants & types
import { errorPaths } from "../../constants";

const RequireGuest = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={errorPaths.navigate.notFound} replace />;
  }

  return <Outlet />;
};

export default RequireGuest;
