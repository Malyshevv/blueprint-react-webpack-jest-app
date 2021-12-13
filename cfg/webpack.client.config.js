const path = require('path')
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'
const isProd = NODE_ENV === 'production'
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const DEV_PLUGINS = [
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin()
]
const COMMON_PLUGINS = [
    new DefinePlugin({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`, 'process.env.CLIENT_SECRET': `'${process.env.CLIENT_SECRET}'`})
]



function setupDevTool() {
    if(isProd) {
        return false
    }
    if(isDev) {
        return 'eval'
    }
}

function getEntry() {
    if(isProd) {
        return [path.resolve(__dirname, '../src/client/index.tsx')]
    }
    return [
        path.resolve(__dirname,'../src/client/index.tsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
    ]
}

module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    resolve: {
        extensions: ['.js','.jsx','.json','.ts','.tsx'],
        alias: {
            'react-dom' : isDev ? '@hot-loader/react-dom' : 'react-dom'
        }
    },
    entry: getEntry(),
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/'
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'image/',
                    postTransformPublicPath: (p) => p,
                },
            }],
        },{
            test: /\.[jt]sx?$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-typescript' ,'@babel/preset-react']
                }
            }
        },{
            test: /\.css$/i,
            use: [
                'style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }
                },
               // 'less-loader'
            ],
            exclude: GLOBAL_CSS_REGEXP
        },{
            test: GLOBAL_CSS_REGEXP,
            use: ['style-loader','css-loader', 'postcss-loader' ],
        }]
    },
    devtool: setupDevTool(),
    plugins: isDev ?  DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS
}
