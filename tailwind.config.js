/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "xl:ml-[300px]",
    "xl:ml-72",
    "xl:ml-16",
    "w-16",
    "w-60",
    "w-72",
    "w-0",
    "h-0",
    "h-2/4",
    "h-72",
    "xl:ml-[72px]",
    "hidden",
    "fixed",
  ]
}

