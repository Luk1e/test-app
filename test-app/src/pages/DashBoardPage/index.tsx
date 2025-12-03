// React & libraries
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Store & hooks
import { useUserFilter, useUsers } from "../../hooks";
import { useAuth } from "../../context/AuthContext";

// Components
import { DashboardControls, DashboardHeader } from "./components";
import { Table } from "../../components";

// Constants & types
import { authPaths } from "../../constants";

// Utils & assets
import "./DashboardPage.scss";

const DashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { users, loading, error } = useUsers();
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const filteredUsers = useUserFilter(users, searchQuery);

  const handleLogout = () => {
    logout();
    navigate(authPaths.navigate.login);
  };

  if (loading) {
    return (
      <div className="dashboard-page loading">
        <div className="spinner"></div>
        <p>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-page error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <DashboardHeader role={role} onLogout={handleLogout} />

      <div className="dashboard-content">
        <DashboardControls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          total={users.length}
          filtered={filteredUsers.length}
        />

        <Table data={filteredUsers} role={role!} />
      </div>
    </div>
  );
};

export default DashboardPage;
