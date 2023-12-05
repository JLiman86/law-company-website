/** @type {import('tailwindcss').Config} */
export default  {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      body: "Open Sans",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl:"1536px"
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#292A4A",
          darker: "#242546",
          hover: "#383956",
        },

        accent: {
          DEFAULT: "#CF9455",
          hover: "#BB864E",
        },

      },
    

    },
  },
  plugins: [],
};