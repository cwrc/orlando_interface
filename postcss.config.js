module.exports = ctx => ({
  map: !ctx.env || ctx.env !== 'production' ? { inline: false } : false,
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-custom-properties')({
      preserve: false,
    }),
    require('autoprefixer')({
      cascade: false
    }),
    require('postcss-discard-comments'),
  ]
});
