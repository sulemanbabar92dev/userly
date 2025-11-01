/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#800080",
        secondary: "#22c55e",        
        muted: "#6B7280",
        accent: "#10B981",       
        brand: {
          light: "#93C5FD",
          DEFAULT: "#3B82F6",
          dark: "#1E3A8A",
        },
      },
    },
  },
  plugins: [],
};
