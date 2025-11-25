/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F7F5',
          500: '#8DA399',
        },
        emerald: {
          900: '#064E3B',
        },
        terracotta: {
          600: '#E07A5F',
        },
        anthracite: {
          800: '#374151',
        },
        gunmetal: {
          900: '#111827',
        },
        brass: {
          400: '#D4AF37',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      }
    },
  },
  plugins: [],
}
