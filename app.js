const Server = require('./src/server/server.js')
const port = (process.env.PORT || 8080)
const app = Server.app();
const express  = require('express');
const path = require('path');
const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, 'public'));

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.dev.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}
app.use('/public', publicPath)
app.get('*', function (req, res) { res.sendfile(indexPath) })
app.listen(port)
console.log(`Listening at http://localhost:${port}`)