const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        // tell webpack to not handle any server request, just render index route:
        publicPath: '/'
    },
    mode: process.env.NODE_ENV === 'production'
        ? 'production'
        : 'development',
    plugins: [
        /**
         * netlify needs to 'know' what to do with redirects;
         * this is similar to the `historyApiFallback` setting for
         * development mode
         */
        new CopyPlugin([
            { from: '_redirects' }
        ]),
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    /**
      * since we're using `ReactRouter`, we want *all* of our route requests
      * to initially redirect to the index page, that way React can load the
      * entire app, and only *then* can the actual requested route be loaded
      * 
      * this is because otherwise, if we try to navigate directly to e.g.
      * `/battle`, the GET request will fail. this is because React isn't yet loaded,
      * so that route does not exist -- all of this is done only after our
      * `index.html` file is loaded.
      * 
      * that's what `historyApiFallback` does, and it "falls back" to what we
      * define above, in `module.exports.output.publicPath`
      */
    devServer: {
        historyApiFallback: true
    }
}