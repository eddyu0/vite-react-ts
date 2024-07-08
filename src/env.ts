const API_URL = import.meta.env.VITE_API_URL as string;
const ENABLE_MSW = import.meta.env.VITE_ENABLE_MSW === "true";

export const env = {
  API_URL,
  ENABLE_MSW,
} as const;
