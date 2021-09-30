var path = require('path');

module.exports = {
    context: path.resolve('src'),
    entry: ['./utils','./app'],
    output: { 
        path:path.resolve('build/js'),
        publicPath: path.resolve('/public/assets/js/'),
        filename: 'bundle.js' 
    },
    watch: true,
    mode:'development',

    devServer: {
        static: {
            publicPath: '/',
        },
    },

    module:{
        rules: [
            {
                test: /.js/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: {
                    loader: 'jshint-loader',
                }
                        
            },
            {
                test: /\.es6$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
            
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    }
}