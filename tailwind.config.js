module.exports = {
  mode: "jit",
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  content: [
    './pages/**/*.{jsx,tsx}', 
    './entities/**/*.{jsx,tsx}',
    './features/**/*.{jsx,tsx}',
    './widgets/**/*.{jsx,tsx}',
    './shared/ui/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}
