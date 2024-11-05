/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#FF5200",
        "custom-gray": "#F2F2F4",
        "custom-green": "#1BA672",
        "custom-light-green": "#C8F9E5",
        "custom-black": "#161B1F",
        "custom-gray2":"#F0F0F5",

      },
    },
  },
  plugins: [],
};
