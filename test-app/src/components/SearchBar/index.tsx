// Utils & assets
import "./SearchBar.scss";

interface Props {
  onChange: (value: string) => void;
  value: string;
}

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, username, email, phone, city, or company..."
        className="search-input"
      />
      {value && (
        <button className="clear-btn" onClick={() => onChange("")}>
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
