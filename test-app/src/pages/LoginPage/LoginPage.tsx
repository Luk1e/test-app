// Components
import { LoginForm } from "../../components";

// Utils & assets
import "./LoginPage.scss";

const LoginPage = () => {
  const handleLogin = (username: string, password: string) => {
    console.log(username, password);
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
