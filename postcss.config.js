module.exports = ctx => ({
  map: !ctx.env || ctx.env !== 'production' ? { inline: false } : false,
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')({
      cascade: false
    }),
    require('postcss-discard-comments'),
  ]
});
