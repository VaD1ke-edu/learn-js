var env               = process.env.NODE_ENV || 'development',
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack           = require('webpack'),
    devUrl            = 'http://localhost:8080/dist/', // Absolute url for development
    prodPath          = '/dist/',                      // Relative path for production
    extractLess       = new ExtractTextPlugin({
        filename: "css/[name].css",
        disable: process.env.NODE_ENV === "development"
    }),
    prodPlugins  = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            sourceMap: false
        })
    ];

function isProduction() {
    return env === 'production';
}

function getPublicPath() {
    return isProduction() ? prodPath : devUrl;
}

module.exports = {
    context: __dirname + '/src',

    entry: {
      common: './common/index'
    },

    output: {
      path: __dirname + '/dist',
      publicPath: getPublicPath(),
      filename: 'js/[name].js'
    },

    module: {
        rules: [{
            test: /\.less$/,
            use: extractLess.extract({
                use: [
                    {loader: "css-loader",options: {minimize: isProduction()}},
                    {loader: "less-loader",options: {minimize: isProduction()}}
                ],
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractLess,
        new webpack.optimize.ModuleConcatenationPlugin(),

    ].concat(isProduction() ? prodPlugins : [])
};
