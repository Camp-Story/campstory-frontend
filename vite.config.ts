import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/v1": {
        target: "https://openapi.naver.com",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/upload": {
        target: "https://gocamping.or.kr",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/upload/, ""),
      },
      "/pstatic": {
        target: "https://shopping-phinf.pstatic.net",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/pstatic/, ""),
      },
      "/visitkorea": {
        target: "http://tong.visitkorea.or.kr",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/visitkorea/, ""),
      },
    },
  },
});
