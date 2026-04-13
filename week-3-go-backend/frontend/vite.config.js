import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // This proxy sends any /api requests to the Go backend.
    // So when your code does fetch("/api/questions"), Vite forwards it
    // to http://localhost:8080/api/questions automatically.
    proxy: {
      "/api": "http://localhost:8080",
    },
  },
});
