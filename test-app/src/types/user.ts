// Constants & types
import { SortDirection } from "./enums";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
}

export interface SortConfig {
  key: keyof User | null;
  direction: SortDirection;
}
