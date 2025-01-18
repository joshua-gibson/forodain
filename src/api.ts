import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.MODE === "development"
        ? "/api"
        : import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
    },
});

export default api;
