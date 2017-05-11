const path = require('path');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'ts-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
    test: /\.html$/,
    use: [{
      loader: 'html-loader'
    }]
  }
    ]
  }/*,
  plugins: [
    new WebpackBrowserPlugin() // to lanunch browser
  ]*/
};
