import config from "@brighthr/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@brighthr/*/dist/**/*.js",
  ],
  theme: {
    extend: { ...config },
  },
  plugins: [],
};
