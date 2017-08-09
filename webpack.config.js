var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/app.js',
  output: {
    //build时js存放的路径
    path: path.resolve(__dirname, './dist'),
    //run dev时js存放的路径
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [{
            loader: 'file-loader',
            options: {query: {
                name:'assets/[name].[ext]'
              }
            }
          },{
            loader: 'image-webpack-loader',
            options: {query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: true,
              },
              optipng: {
                optimizationLevel: 7,
              }
            }
          }
        }]
      },
      {   test: /\.css$/, 
          exclude: /node_modules/,
          loader: 'style-loader!css-loader?sourceMap' 
      },
      {
          test: /\.(eot|woff|woff2|ttf)([\\?]?.*)$/,
          loader: "file-loader"
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        },
      },
      { 
          test: /\.(woff|svg|eot|ttf)\??.*$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=50000&name=[path][name].[ext]'
      },
      {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
          // loader: ExtractTextPlugin.extract("style", 'css!sass') //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
      }   
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.ProvidePlugin({
       jQuery: "jquery",
       $: "jquery"
    }) 
  ])
}
