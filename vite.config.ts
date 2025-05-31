import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
      allowedHosts: [
        "localhost",
        "127.0.0.1",
        "b6c5-2a01-b747-3a-314-b482-b199-3557-7e26.ngrok-free.app" // 👈 Add your exact ngrok domain
      ]
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
