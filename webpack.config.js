const path = require('path')

module.exports = {
    mode: 'production',
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src/')
        }
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
              "style-loader",
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