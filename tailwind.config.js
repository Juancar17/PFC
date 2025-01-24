/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Habilitar modo oscuro basado en clase
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial": "linear-gradient(to top, #d7d2cc 0%, #304352 100%)",
      },

      animation: {
        bounceInDown: "bounceInDown 1s ease-in-out forwards",
        slideInRight: "slideInRight 1s ease-in-out forwards",
        slideDown: "slideDown 1s ease-in-out forwards",
        slideUp: "slideUp 1s ease-in-out forwards",
        fadeIn: "fadeIn 1s ease-in-out forwards",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        bounceInDown: {
          "0%": { transform: "translateY(-100%)" },
          "60%": { transform: "translateY(25%)" },
          "80%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },

        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        lightBackground: "#ffffff",
        darkBackground: "#1a202c",
        lightText: "#000000",
        darkText: "#f7fafc",
      },
    },
  },
  plugins: [],
};
