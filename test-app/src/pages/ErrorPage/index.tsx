// React & libraries
import { useNavigate } from "react-router-dom";

// Utils & assets
import "./ErrorPage.scss";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/dashboard/users");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="error-page">
      <div className="error-background">
        <div className="error-shape shape-1"></div>
        <div className="error-shape shape-2"></div>
        <div className="error-shape shape-3"></div>
      </div>

      <div className="error-content">
        <div className="error-animation">
          <div className="error-code">404</div>
          <div className="error-icon">
            <span className="icon-part icon-left">😵</span>
            <span className="icon-part icon-right">💫</span>
          </div>
        </div>

        <div className="error-text">
          <h1>Page Not Found</h1>
          <p>Oops! The page you are looking for does not exist.</p>
        </div>

        <div className="error-actions">
          <button onClick={handleGoBack} className="btn-secondary">
            <span className="btn-icon">←</span>
            Go Back
          </button>
          <button onClick={handleGoHome} className="btn-primary">
            <span className="btn-icon">🏠</span>
            Go Home
          </button>
        </div>

        <div className="error-footer">
          <p>If you think this is a mistake, please contact support.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
