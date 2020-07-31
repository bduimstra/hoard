const path = require('path');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, './index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './public/dist')
    }
}
