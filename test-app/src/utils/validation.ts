export const validateUsername = (username: string): string => {
  if (!username.trim()) return "Username is required";
  return "";
};

export const validatePassword = (pwd: string): string => {
  if (pwd.length < 8) return "Password must be at least 8 characters";
  if (!/[A-Z]/.test(pwd))
    return "Password must contain at least 1 uppercase letter";
  if (!/[a-z]/.test(pwd))
    return "Password must contain at least 1 lowercase letter";
  if (!/[!@#$%^&*()_+\-=[\]{};':\"\\|,.<>/?]/.test(pwd))
    return "Password must contain at least 1 special character";
  return "";
};
