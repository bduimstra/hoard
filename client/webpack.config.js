const path = require('path');

module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        ignored: /node_modules/
    },
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
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ],
            }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './public/dist')
    }
}
