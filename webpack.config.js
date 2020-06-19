const path = require('path')

const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  output: {
    filename: 'mjml.min.js',
    library: 'mjml',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      fs: path.resolve(__dirname, 'src/mocks/fs'),
      'uglify-js': path.resolve(__dirname, 'src/mocks/uglify-js'),
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_fnames: true,
        },
      }),
    ],
  },
}
