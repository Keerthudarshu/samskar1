module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        'warm-orange': '#FF6B35',
        'deep-green': '#2D6A4F',
        'ivory': '#FFF8F0',
        'soft-cream': '#FFF5E6',
        'coral': '#FF8C61',
        'forest': '#1B4332',
        'mint': '#95D5B2',
        'sunset': '#FF9F7D',
        'emerald': '#52B788'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [],
}
