module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': "var(--text-primary)",
        'brand-secondary': "var(--text-secondary)",
        'brand-bg': "var(--bg-primary)"
      },
      fontFamily: {
        'brand': ['"Staatliches"', 'sans-serif']
      },
      borderRadius: {
        'sm': "var(--border-radius-sm)",
        'md': "var(--border-radius-md)"
      }
    }
  },
  plugins: [],
}