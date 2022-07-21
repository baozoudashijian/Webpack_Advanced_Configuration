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
          }
        ]
      }
}