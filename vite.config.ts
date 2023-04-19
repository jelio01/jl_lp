import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const vue = require("@vitejs/plugin-vue");
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ["*.svg", "*.ico", "robots.txt", "*.png"],
      mode: "development",
      base: "/",
      devOptions: {
        enabled: true,
        type: "module",
      },
      srcDir: "src",
      filename: "sw.ts",
      strategies: "injectManifest",
      registerType: "autoUpdate",
      injectRegister: "auto",
      manifest: {
        name: "Jens Lindner Landing Page",
        short_name: "my lp",
        description: "Learn Basics of Vue",
        lang: "de",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/index.html",
        icons: [
          {
            src: "./img/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./img/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      injectManifest: {
        globDirectory: "/",
        globPatterns: [
          "**/*.{json,ico,svg,ttf,woff,css,js,html,txt,jpg,png,woff2,mjs}",
        ],
        swDest: "./sw.js",
        swSrc: "./src/sw.ts",
        maximumFileSizeToCacheInBytes: 30000000,
      },
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        importScripts: ["./src/sw.ts"],
      },
    }),
  ],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
