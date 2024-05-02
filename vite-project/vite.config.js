import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: "index.js",
      plugins: [react()],
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
