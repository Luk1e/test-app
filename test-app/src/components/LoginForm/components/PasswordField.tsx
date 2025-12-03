// React & libraries
import { useState } from "react";

interface Props {
  onChange: (v: string) => void;
  value: string;
  error: string;
}

const PasswordField = ({ value, error, onChange }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <div className="password-input-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your password"
          className={error ? "error" : ""}
          value={value}
          id="password"
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="toggle-password"
          type="button"
        >
          {showPassword ? "🙈" : "🐵"}
        </button>
      </div>
      {error && <span className="error-message">{error}</span>}
      <div className="password-requirements">
        <small>
          Min 8 chars, 1 uppercase, 1 lowercase, 1 special character
        </small>
      </div>
    </div>
  );
};

export default PasswordField;
