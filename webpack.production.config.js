const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        'hello': './src/hello.js',
        'image': './src/image..js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'production',
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
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(
            {
                cleanOnceBeforeBuildPatterns: [
                    '**/*',
                    path.join(process.cwd(), 'build/**/*')
                ]
            }
        ),
        new HtmlWebpackPlugin({
            filename:'hello.html',
            chunks: ['hello'],
            title: 'Hello Webpack',
            template: 'src/template.hbs',
            description: 'Some Description ABout Webpack'
        }),
        new HtmlWebpackPlugin({
            filename:'image.html',
            chunks: ['image'],
            title: 'Image',
            template: 'src/template.hbs',
            description: 'Displaying image'
        }),
    ]
}   