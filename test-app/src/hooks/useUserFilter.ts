// React & libraries
import { useMemo } from "react";

// Constants & types
import { User } from "../types";

export function useUserFilter(users: User[], searchQuery: string) {
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return users;

    return users.filter((u) => {
      const fields = [
        u.name,
        u.username,
        u.email,
        u.phone,
        u.address?.city,
        u.company?.name,
      ]
        .filter(Boolean)
        .map((s) => String(s).toLowerCase());

      return fields.some((f) => f.includes(q));
    });
  }, [users, searchQuery]);

  return filtered;
}
