/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveIn1: {
          "0%": { transform: "translateX(-100px) translateY(50px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        moveIn2: {
          "0%": { transform: "translateX(100px) translateY(50px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        moveIn3: {
          "0%": { transform: "translateX(0) translateY(-100px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
      },
      animation: {
        moveIn1: "moveIn1 2s ease-out forwards",
        moveIn2: "moveIn2 2s ease-out forwards",
        moveIn3: "moveIn3 2s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
