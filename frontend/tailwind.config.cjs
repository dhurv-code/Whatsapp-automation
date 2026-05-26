module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.06)'
      },
      colors: {
        whatsapp: {
          500: '#2f855a',
          600: '#276749'
        }
      }
    }
  },
  plugins: []
}
