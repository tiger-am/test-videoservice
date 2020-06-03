const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = (env = {}) => {
    const {mode = 'development'} = env

    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]

        if (isProd) {
            plugins.push(
                new MiniCssExtractPlugin({
                    filename: 'css/main-[hash:8].css',
                })
            )
        }

        return plugins
    }

    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            {
                loader: "postcss-loader",
                options: {
                    plugins: [require('autoprefixer')]
                }
            },
        ]
    }

    return {
        mode: isProd ? 'production' : isDev && 'development',

        entry: [
            './src/scripts/index.js',
            './src/styles/main.scss',
        ],

        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: isProd ? 'js/main-[hash:8].js' : undefined,
            publicPath: '/'
        },

        module: {
            rules: [
                {
                    test: /\.(png|jpeg|jpg|gif)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                },
                {
                    test: /\.(woff|woff2)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: getStyleLoaders()
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [...getStyleLoaders(), 'sass-loader']
                },
            ]
        },

        devServer: {
            // contentBase: path.join(__dirname, 'dist'),
            historyApiFallback: true,
            port: 3000,
            open: true
        },

        optimization: {
            minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },

        plugins: getPlugins(),

        resolve: {
            alias: {
                actions: path.resolve(__dirname, `src/scripts/actions`),
                components: path.resolve(__dirname, `src/scripts/components`),
                pages: path.resolve(__dirname, `src/scripts/pages`),
                reducers: path.resolve(__dirname, `src/scripts/reducers`),
                services: path.resolve(__dirname, `src/scripts/services`),
                utils: path.resolve(__dirname, `src/scripts/utils`),
            },
        },
    }
}