const path = require('path')

const nodeExternals = require('webpack-node-externals')
const { DefinePlugin } = require('webpack')

const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
    target: "node",
    entry: path.resolve(__dirname, '../src/server/server.js'),
    mode: NODE_ENV ? NODE_ENV : 'development',
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: "server.js"
    },
    resolve: {
        extensions: ['.js','.jsx','.json','.ts','.tsx']
    },
    externals: [nodeExternals()],
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
                    presets: ['@babel/preset-env','@babel/preset-typescript' ,'@babel/preset-react']
                }
            }
        },{
            test: /\.css$/i,
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                            exportOnlyLocals: true
                        }
                    }
                },
               //'less-loader'
           ],
            exclude: GLOBAL_CSS_REGEXP
        },{
            test: GLOBAL_CSS_REGEXP,
            use: [ 'css-loader' , 'postcss-loader']
        }]
    },
    optimization: {
        minimize: false
    },
    devtool: isDev ? 'eval' : false,
    plugins: [ new DefinePlugin({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`, 'process.env.CLIENT_SECRET': `'${process.env.CLIENT_SECRET}'`}) ]
}
