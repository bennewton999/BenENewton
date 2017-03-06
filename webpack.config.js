const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/scripts/app.js',
  output: {
    path:  __dirname + '/dist',
    filename: './scripts/bundle.js'
  },
  module: {
    rules: [
      // {
      // test: /\.css$/,
      // use: [{
      //   loader: 'style-loader'
      // }, {
      //   loader: 'css-loader'
      // }, {
      //   loader: 'postcss-loader'
      // }]

//{ test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader') }
{
  test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader'
      }]
        })
}
    // }
    , {
      test: /\.png$/,
      use: { loader: 'url-loader', options: { limit: 100000 } },
    }, {
      test: /\.jpg$/,
      use: [ 'file-loader' ]
    }, {
      test: /\.svg$/,
      use: { loader: 'svg-url-loader', options: { limit: 100000 } }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    
    new DashboardPlugin(),
    new ExtractTextPlugin("styles.css")
  ],
  devServer: {
    contentBase: './src',
    hot: true
  }

};
