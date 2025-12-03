// React & libraries
import { useState, useMemo } from "react";

// Constants & types
import { User, SortConfig, SortDirection, Role } from "../../types";

// Utils & assets
import "./Table.scss";

interface Props {
  data: User[];
  role: Role;
}

const Table = ({ data, role }: Props) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: SortDirection.None,
  });

  const sortedData = useMemo(() => {
    if (!sortConfig.key || sortConfig.direction === SortDirection.None)
      return data;

    return [...data].sort((a, b) => {
      let aValue: any = a[sortConfig.key!];
      let bValue: any = b[sortConfig.key!];

      if (sortConfig.key === "address") {
        aValue = a.address.city;
        bValue = b.address.city;
      } else if (sortConfig.key === "company") {
        aValue = a.company.name;
        bValue = b.company.name;
      }

      const aStr = String(aValue).toLowerCase();
      const bStr = String(bValue).toLowerCase();

      if (aStr < bStr) {
        return sortConfig.direction === SortDirection.Asc ? -1 : 1;
      }
      if (aStr > bStr) {
        return sortConfig.direction === SortDirection.Asc ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key: keyof User) => {
    let direction: SortDirection = SortDirection.Asc;

    if (sortConfig.key === key) {
      if (sortConfig.direction === SortDirection.Asc) {
        direction = SortDirection.Desc;
      } else if (sortConfig.direction === SortDirection.Desc) {
        direction = SortDirection.None;
      }
    }

    setSortConfig({
      key: direction === SortDirection.None ? null : key,
      direction,
    });
  };

  const getSortIcon = (key: keyof User) => {
    if (sortConfig.key !== key) return "⇅";
    if (sortConfig.direction === SortDirection.Asc) return "↑";
    if (sortConfig.direction === SortDirection.Desc) return "↓";
    return "⇅";
  };

  return (
    <div className="table-wrapper">
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th onClick={() => handleSort("id")} className="sortable">
                ID <span className="sort-icon">{getSortIcon("id")}</span>
              </th>
              <th onClick={() => handleSort("name")} className="sortable">
                Name <span className="sort-icon">{getSortIcon("name")}</span>
              </th>
              <th onClick={() => handleSort("username")} className="sortable">
                Username{" "}
                <span className="sort-icon">{getSortIcon("username")}</span>
              </th>
              <th onClick={() => handleSort("email")} className="sortable">
                Email <span className="sort-icon">{getSortIcon("email")}</span>
              </th>
              <th onClick={() => handleSort("phone")} className="sortable">
                Phone <span className="sort-icon">{getSortIcon("phone")}</span>
              </th>
              <th onClick={() => handleSort("address")} className="sortable">
                City <span className="sort-icon">{getSortIcon("address")}</span>
              </th>
              <th onClick={() => handleSort("company")} className="sortable">
                Company{" "}
                <span className="sort-icon">{getSortIcon("company")}</span>
              </th>
              {role === "editor" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td className="email-cell">{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>
                {role === "editor" && (
                  <td>
                    <button className="action-btn edit-btn">✏️ Edit</button>
                    <button className="action-btn delete-btn">🗑️ Delete</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
