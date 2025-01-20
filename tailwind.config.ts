/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": {
          300: "#F29B30",
          500: "#F85900",
        },
        "primary-green": {
          500: "#1CA673",
        },
        "primary-blue": {
          500: "#1A9EFE",
        },
        gray: {
          0: "#FFFFFF",
          100: "#EAEAEA",
          200: "#B4B4B4",
          300: "#676767",
          400: "#333333",
          500: "#191919",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        highlight: ["40px", { linHeight: "auto", fontWeight: 700 }],
        banner: ["32px", { linHeight: "auto", fontWeight: 400 }],
        title: ["32px", { linHeight: "auto", fontWeight: 600 }],
        "sub-title": ["20px", { linHeight: "auto", fontWeight: 500 }],
        body: ["15px", { linHeight: "auto", fontWeight: 400 }],
        explain: ["13px", { linHeight: "auto", fontWeight: 400 }],
      },
    },
  },
  plugins: [],
};
