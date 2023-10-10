module.exports = {
  plugins: [
    require('postcss-import'),
    // require('postcss-preset-env')({stage: 1}), <-- if you just want to support a specific stage of the spec
    require('postcss-preset-env'),
    require('cssnano'),
  ],
}