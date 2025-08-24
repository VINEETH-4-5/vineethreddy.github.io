module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        accent: '#06b6d4',
        surface: '#0b1220',
        card: '#07102a'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(600px 300px at 10% 10%, rgba(124,58,237,0.12), transparent), radial-gradient(500px 200px at 90% 90%, rgba(6,182,212,0.08), transparent)'
      }
    }
  },
  plugins: []
}
