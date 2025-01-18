import axios from "axios";

const generateHashedString = async (input: string): Promise<string> => {
    const date = new Date().toISOString().split("T")[0]; // Get the current date in YYYY-MM-DD format
    const combinedString = `${input}-${date}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(combinedString);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
    return hashHex;
};

const api = axios.create({
    baseURL: import.meta.env.MODE === "development"
        ? "/api"
        : import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

generateHashedString(import.meta.env.VITE_API_KEY).then((hashedKey) => {
    api.defaults.headers.common["x-api-key"] = hashedKey;
});

export default api;
