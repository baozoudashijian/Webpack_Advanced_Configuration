const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = 'production'

module.exports = {
  mode,
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    mode === 'production' && new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin()
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src/')
    }
  },
  optimization: {
    runtimeChunk: 'single'
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          mode === 'production' ? MiniCssExtractPlugin.loader : "style-loader",
          // Translates CSS into CommonJS
          // Compiles Sass to CSS
          {
            loader: "css-loader",
            options: {
              modules: {
                compileType: 'icss'
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: `
                    @import "~@/vars.scss";
                  `,
              sassOptions: {
                includePaths: [__dirname]
              }
            }
          }
        ],
      }
    ]
  }
}