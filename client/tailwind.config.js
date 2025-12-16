/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37', // Gold
        secondary: '#fdfcf0', // Cream
        dark: '#1a1a1a',
        'phone-blue': '#1E5BA8',
        'whatsapp-green': '#25D366',
        'email-red': '#EA4335',
        'maps-green': '#34A853',
        'google-blue': '#4285F4',
        'instagram-pink': '#E4405F',
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
