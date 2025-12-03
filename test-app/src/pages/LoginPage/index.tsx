// React & libraries
import { useNavigate } from "react-router-dom";

// Store & hooks
import { useAuth } from "../../context/AuthContext";

// Components
import { LoginForm } from "../../components";

// Utils & assets
import { dashboardPaths } from "../../constants";
import "./LoginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (username: string, password: string) => {
    login(username, password);
    navigate(dashboardPaths.navigate.users);
  };

  return (
    <div className="login-page">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="login-container">
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
