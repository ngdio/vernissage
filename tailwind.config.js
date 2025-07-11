export default {
  mode: "jit",
  content: ["./src/**/*.{html,md,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend:
      {
        fontFamily: {
          'nothingyoucoulddo': ['Nothing You Could Do', 'cursive'],
          'signika': ['Signika', 'sans-serif'],
        },
      },
  },
  plugins: [],
}
