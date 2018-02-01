const path = require('path')
// const OfflinePlugin = require('offline-plugin');

module.exports = {
    entry: {
        app: './src/client/App.js',
    },
    resolve: {
        extensions: [' ', '.jsx', '.scss', '.js', '.json', '.css'],
        modules: [
            path.resolve(__dirname + '/src/client'),
            'node_modules',
        ],
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'es2016', 'es2017', 'stage-2'],
                },
            },
            {
                test: /(\.scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: '[name]--[local]--[hash:base64:8]'
                        }
                    },
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ],
    },
    plugins: [
        // new OfflinePlugin({
        //   safeToUseOptionalCaches: true,
        //   caches: 'all',
        //   ServiceWorker: {
        //     events: true
        //   },
        //   AppCache: {
        //     events: true
        //   },
        //   externals: [
        //     'index.html',
        //   ]
        // }),
    ]
}