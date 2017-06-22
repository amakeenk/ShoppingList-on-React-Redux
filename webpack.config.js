const path = require('path');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        // path : __dirname + '/public'
        path: path.resolve(__dirname, "public")
    },
    devServer : {
        contentBase : './public'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?$/,
                exclude : /node_modules/,
                use : ['react-hot-loader' , 'babel-loader']
            },
            {
                test : /\.less$/,
                use : ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },
    devtool : 'inline-source-map'
};
