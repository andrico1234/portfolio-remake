const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const glob = require('glob');
const path = require('path');

module.exports = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(localEnv)
        );
        
        config.module.rules.push(
            {
                test: /\.(css|scss)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            }
            ,
            {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader']
            }
            ,
            {
                test: /\.s(a|c)ss$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader',
                    { loader: 'sass-loader',
                        options: {
                            includePaths: ['styles', 'node_modules']
                                .map((d) => path.join(__dirname, d))
                                .map((g) => glob.sync(g))
                                .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            }
        );
        return config
    },
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        }
    },
    assetPrefix: ''
};