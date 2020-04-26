const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch') ,
            config.optimization.minimize(true);
            config.optimization.splitChunks({
            chunks: 'all'
        })

        // 或者
        // 修改它的选项：
        // config.plugin('prefetch').tap(options => {
        //     options[0].fileBlacklist = options[0].fileBlacklist || [];
        //     options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/);
        //     return options;
        // })
    },

    configureWebpack: {
        externals:{

            //cnd引入需在此注册
           "echarts":"echarts",
            "jquery":"$",
            "axios":"axios"

        },
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
            }
        },
        plugins: [
            // new webpack.ProvidePlugin({
            //     $:"jquery",
            //     jQuery:"jquery",
            //     "windows.jQuery":"jquery"
            // }),

            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            // new UglifyJsPlugin({
            //     uglifyOptions: {
            //         compress: {
            //             drop_debugger: true,
            //             drop_console: true
            //         }
            //     },
            //     sourceMap: false,
            //     parallel: true
            // }),
            // 配置compression-webpack-plugin压缩
            new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            })

        ]

    },
    /* 部署应用包的基本URL */
    /* baseUrl 从 Vue CLI 3.3 起已弃用 ，请使用publicPath */
    //  baseUrl: process.env.NODE_ENV === "production" ? "./" : "./",
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",

    /* 生产环境构建文件的目录 defalut: dist */

    outputDir: "dist",

    /* 放置生成的静态文件目录（js css img） */

    assetsDir: "static",

    /* 指定生成的index.html 输出路径 相对 default: index.html */

    indexPath: "index.html",

    /* 指定生成文件名中包含hash default: true */

    filenameHashing: true,

    /* 多页模式下 */

    /* pages: {

      index: {

        // page 的入口

        entry: "src/index/main.js",

        // 模板来源

        template: "public/index.html",

        // 在 dist/index.html 的输出

        filename: "index.html",

        // 当使用 title 选项时，

        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>

        // title: "Index Page",

        // 在这个页面中包含的块，默认情况下会包含

        // 提取出来的通用 chunk 和 vendor chunk。

        chunks: ["chunk-vendors", "chunk-common", "index"]

      },

      // 当使用只有入口的字符串格式时，

      // 模板会被推导为 `public/subpage.html`

      // 并且如果找不到的话，就回退到 `public/index.html`。

      // 输出文件名会被推导为 `subpage.html`。

      // subpage: "src/subpage/main.js"

    } */

    /* 是否保存时 lint 代码 */

    lintOnSave: process.env.NODE_ENV === "production",

    /* 是否使用编译器 default: false */

    runtimeCompiler: false,

    /* 默认babel-loader会忽略node_modules中的文件，你想显示的话在这个选项中列出来 */

    // transpileDependencies: [],

    /* 生产环境的source map */

    productionSourceMap:false,

    // crossorigin: "",

    integrity: false,



    // css相关配置

    css: {

        // 是否使用css分离插件 ExtractTextPlugin

        extract: true,

        // 开启 CSS source maps?

        sourceMap: false,

        // css预设器配置项

        loaderOptions: {},

        // 启用 CSS modules for all css / pre-processor files.

        modules: false

    },
    /* webpack-dev-server 相关配置 */
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        /* 使用代理 */
        // proxy: {
        //     '/api': {
        //         /* 目标代理服务器地址 */
        //         // target: 'http://47.100.47.3/',
        //         /* 允许跨域 */
        //         // changeOrigin: true,
        //     },
        // },
    },
}