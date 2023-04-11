const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/Pagina_1/index.js',
        Pagina2: './src/Pagina_2/libros-populares.js',
        Pagina3: './src/Pagina_3/nuevos-lanzamientos.js',
        Pagina4: './src/Pagina_4/DAY_NIGHT.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist_webpack_babel'),
      filename: '[name].js'
      
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'Imagenes/'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/Pagina_1/index.html',
            chunks: ['index']
        }),
        new htmlWebpackPlugin({
            filename: 'libros-populares.html',
            template: './src/Pagina_2/libros-populares.html',
            chunks: ['Pagina2']
        }),
        new htmlWebpackPlugin({
            filename: 'nuevos-lanzamientos.html',
            template: './src/Pagina_3/nuevos-lanzamientos.html',
            chunks: ['Pagina3']
        }),
        new htmlWebpackPlugin({
            filename: 'DAY_NIGHT.html',
            template: './src/Pagina_4/DAY_NIGHT.html',
            chunks: ['Pagina4']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]

    };