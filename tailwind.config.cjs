/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {
      colors: {
        'accent': {
          'main': '#26bb98',
          'alt': '#bb2649',
        }
      },
      boxShadow: {
        solid: "4px 4px #000",
        'solid-dark': "4px 4px #fff",
        repeat: "24px 24px #26bb98, 24px 24px 0 4px #000",
        'repeat-dark': "24px 24px #bb2649, 24px 24px 0 4px #fff"
      },
    }
  },
  plugins: [],
}
