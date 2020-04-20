const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        'hello': './src/hello.js',
        'image': './src/image..js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            {
                cleanOnceBeforeBuildPatterns: [
                    '**/*',
                    path.join(process.cwd(), 'build/**/*')
                ]
            }
        ),
        new HtmlWebpackPlugin({
            filename: 'hello.html',
            chunks: ['hello'],
            title: 'Hello Webpack',
            template: 'src/template.hbs',
            description: 'Some Description ABout Webpack'
        }),
        new HtmlWebpackPlugin({
            filename: 'image.html',
            chunks: ['image'],
            title: 'Image',
            template: 'src/template.hbs',
            description: 'Displaying image'
        }),
    ]
}   