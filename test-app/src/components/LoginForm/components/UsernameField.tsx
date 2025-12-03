interface Props {
  onChange: (v: string) => void;
  value: string;
  error: string;
}

const UsernameField = ({ value, error, onChange }: Props) => (
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter your username"
      className={error ? "error" : ""}
      value={value}
      id="username"
      type="text"
    />
    {error && <span className="error-message">{error}</span>}
  </div>
);

export default UsernameField;
