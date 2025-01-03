const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // Set the publicPath for GitHub Pages
  publicPath: process.env.NODE_ENV === 'production'
  ? '/play2learn-website-2/'
  : '/'
})
