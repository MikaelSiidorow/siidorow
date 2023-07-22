/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        foreground: "var(--foreground)",
        background: "var(--background)",
      },
      boxShadow: {
        solid: "4px 4px var(--foreground)",
        repeat:
          "24px 24px var(--accent-main), 24px 24px 0 4px var(--background)",
      },
    },
  },
  plugins: [],
};
