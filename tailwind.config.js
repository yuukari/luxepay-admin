module.exports = {
  mode: "jit",
  darkMode: true,
  content: [
    './pages/**/*.{ts,tsx}', 
    './entities/**/*.{ts,tsx}',
    './features/**/*.{ts,tsx}',
    './widgets/**/*.{ts,tsx}',
    './shared/ui/**/*.{ts,tsx}'
  ],
  daisyui: {
    themes: ['dark']
  },
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
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out forwards',
        'fade-out': 'fadeOut 0.3s ease-in-out forwards',
        'pulse-fast': 'pulse 1.5s infinite linear'
      },

      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}
