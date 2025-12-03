// React & libraries
import { Navigate, Outlet } from "react-router-dom";

// Store & hooks
import { useAuth } from "../../context/AuthContext";

// Constants & types
import { dashboardPaths } from "../../constants";

const RequireGuest = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={dashboardPaths.navigate.users} replace />;
  }

  return <Outlet />;
};

export default RequireGuest;
