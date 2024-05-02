import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: "./src/main.jsx",
      plugins: [react()],
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
