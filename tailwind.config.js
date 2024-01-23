/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./module/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./pages/**/**/*.vue",
    "./pages/chap/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}