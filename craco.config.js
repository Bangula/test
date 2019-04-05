const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@components': path.resolve(__dirname, 'src/components/common'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@constants': path.resolve(__dirname, 'src/constants'),
    },
  },
}
