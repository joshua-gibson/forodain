import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react({ include: ["**/*.tsx"] })],
  server: {
    proxy: {
      "/api": {
        target: "https://forodain-api.luthien-labs.net",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
