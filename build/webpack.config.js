const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV === 'development'
const Webpack = require('webpack')

const config = {
    mode: devMode ? 'development' : 'production',
    devtool: devMode ? "eval-source-map" : "",
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name].[hash:8].js',
    },
    //配置模块如何解析
    resolve: {
        alias:{
          '@':path.join(__dirname,'../src')
        },
        //自动解析确定的扩展
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
                exclude: path.join(__dirname, '../node_modules')
            },
            {
                test: /\.css|less$/,
                use: [
                  {
                    loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    options: {},
                  },
                  {
                    loader: "css-loader",
                    options: {
                      import: true,
                    },
                  },
                  {
                    loader: "less-loader",
                  },
                ],
            },
            {
                test: /\.(jpg|png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                },
            },
        ]
    },
    // webpack插件
    plugins: [
        // 引入模板文件插件
        new HTMLPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ]
};

if (devMode) {
    // webpack-dev-server配置
    config.devServer = {
        host: 'localhost', // 域名
        port: 8000, // 端口
        contentBase: path.resolve(__dirname, '../dist/'), //静态文件路径
        overlay: true, // 开启错误调试
        proxy: {
            "/": {
              target: "http://localhost:3000",
              changeOrigin: true,
            },
        }
    }
    // 配置hot-module-replacement
    config.plugins.push(new Webpack.HotModuleReplacementPlugin())
}

module.exports = config;
