// Constants & types
import { API_BASE_URL } from "../constants";
import { User } from "../types";

export const fetchUsers = async (page: number = 1): Promise<User[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users?page=${page}`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
