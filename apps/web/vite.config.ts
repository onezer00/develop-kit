import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@develop-kit/shared": path.resolve(__dirname, "../../packages/shared/src"),
      "@develop-kit/ui": path.resolve(__dirname, "../../packages/ui/src")
    }
  },
  server: {
    port: 5173,
    host: "127.0.0.1"
  }
});
