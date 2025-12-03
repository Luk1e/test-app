// React & libraries
import { useEffect, useState } from "react";

// Store & hooks
import { fetchUsers } from "../services";

// Constants & types
import { User } from "../types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError("");

    fetchUsers()
      .then((data) => setUsers(data))
      .catch(() => setError("Failed to load users"))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error, setUsers, setError };
}
