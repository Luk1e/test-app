// React & libraries
import ReactDOM from "react-dom/client";

// Providers
import { AuthProvider } from "./context/AuthContext";

// Components
import App from "./App";

// Utils & assets
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
