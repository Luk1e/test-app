// React & libraries
import { useContext } from "react";

// Store & hooks
import { useAuth } from "../../context/AuthContext";

// Components
import { LoginForm } from "../../components";

// Utils & assets
import "./LoginPage.scss";

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = (username: string, password: string) => {
    login(username, password);
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
