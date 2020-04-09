// 引入模块
var webpack = require('webpack')
var path = require('path') // 引入路径模块

// path.resolve(__dirname, 'dist/') 绝对路径
// 暴露webpack配置对象
module.exports = {
    // 入口文件
    entry: './src/a.js',
    // 出口
    output:{
        path: path.resolve(__dirname, 'dist/'),
        filename: 'bundle.js',
    },
    // 插件
    plugins:[
        new webpack.BannerPlugin('这是注释插件！！！')
    ],
    // 模块加载器件（所有的非js的模块，都应该添加对应的模块加载器）
    module:{
        rules:[
            {
                test: /\.css$/, // 匹配的文件类型
                use: ['style-loader','css-loader'],
                // css-loader加载样式文件
                // style-loader把样式加载到DOM节点中
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" }, 
                    { loader: "css-loader" }, 
                    { loader: "less-loader" },
                ]
            },
        ]
    },//所有的loader的数组

    // 观察者 true打开
    watch: true,
}