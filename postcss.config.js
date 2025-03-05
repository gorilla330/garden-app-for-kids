module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({ stage: 3 }),
    require('@tailwindcss/postcss7-compat'),
    require('autoprefixer'),
  ],
}
