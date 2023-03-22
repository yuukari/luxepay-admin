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
    container: {
      padding: '1rem',
      screens: {
        sm: '565px',
        md: '767px',
        lg: '993px',
        xl: '1200px',
        '2xl': '1440px',
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}
