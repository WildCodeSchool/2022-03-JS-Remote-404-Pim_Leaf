/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@retailersC": path.resolve(__dirname, "src/components/retailers"),
      "@suppliersC": path.resolve(__dirname, "src/components/suppliers"),
      "@services": path.resolve(__dirname, "src/services"),
      "@data": path.resolve(__dirname, "src/data"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@retailersP": path.resolve(__dirname, "src/pages/retailers"),
      "@suppliersP": path.resolve(__dirname, "src/pages/suppliers"),
    },
  },
});
