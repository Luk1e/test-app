// React & libraries
import { useState } from "react";

// Components
import {
  PasswordField,
  UsernameField,
  SubmitButton,
  LoginHeader,
} from "./components";

// Utils & assets
import { validatePassword, validateUsername } from "../../utils";
import "./LoginForm.scss";

interface Props {
  onLogin: (username: string, password: string) => void;
}

const LoginForm = ({ onLogin }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);

    setErrors({ username: usernameError, password: passwordError });

    if (!usernameError && !passwordError) {
      onLogin(username, password);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <LoginHeader />
      <UsernameField
        value={username}
        error={errors.username}
        onChange={setUsername}
      />
      <PasswordField
        value={password}
        error={errors.password}
        onChange={setPassword}
      />
      <SubmitButton />
    </form>
  );
};

export default LoginForm;
