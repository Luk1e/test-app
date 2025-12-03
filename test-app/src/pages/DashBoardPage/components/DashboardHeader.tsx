// Constants & types
import { Role } from "../../../types";

type Props = {
  onLogout: () => void;
  role: Role | null;
};

const DashboardHeader = ({ role, onLogout }: Props) => {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <h1>User Dashboard</h1>
        <div className="user-info">
          <span className="role-badge">{role?.toUpperCase()}</span>
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
