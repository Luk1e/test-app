// React & libraries
import { useMemo } from "react";

// Constants & types
import { User, SortConfig, SortDirection } from "../types";

export const useSortedUsers = (data: User[], sortConfig: SortConfig) => {
  return useMemo(() => {
    if (!sortConfig.key || sortConfig.direction === SortDirection.None) {
      return data;
    }

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

      if (typeof aValue === "number" && typeof bValue === "number") {
        if (aValue < bValue) {
          return sortConfig.direction === SortDirection.Asc ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === SortDirection.Asc ? 1 : -1;
        }
        return 0;
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
};
