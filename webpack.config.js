module.exports = {
    entry: ['./src/utils.js','./src/app.js'],
    output: { filename: 'bundle.js' },
    watch: true,
    mode:'development',

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