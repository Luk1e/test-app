// Components
import { SearchBar } from "../../../components";

type Props = {
  onSearchChange: (v: string) => void;
  searchQuery: string;
  filtered: number;
  total: number;
};

const DashboardControls = ({
  onSearchChange,
  searchQuery,
  filtered,
  total,
}: Props) => {
  return (
    <div className="controls">
      <SearchBar value={searchQuery} onChange={onSearchChange} />
      <div className="results-count">
        Showing {filtered} of {total} users
      </div>
    </div>
  );
};

export default DashboardControls;
