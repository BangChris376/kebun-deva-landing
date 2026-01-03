import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // Pengaturan GitHub Pages tetap aman
  base: "/kebun-deva-landing/",
  
  server: {
    host: "::",
    port: 8080,
  },
  
  // Plugin Lovable sudah dihapus dari sini
  plugins: [
    react(),
  ],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));