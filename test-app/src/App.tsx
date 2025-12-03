// React & libraries
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

// Pages
import LoginPage from "./pages/LoginPage/LoginPage";

// Utils & assets
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/dashboard" element={<div>dashboard</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<div>error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
