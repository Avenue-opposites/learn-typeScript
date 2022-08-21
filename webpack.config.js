const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:"./src/index.ts",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].bundle.js",
        // clean:true,
        //环境
        environment:{
            //告诉webpack打包是否使用箭头函数,默认true
                arrowFunction:false,
                // const:false,
            },
    },
    //告诉webpack解析ts文件也可以作为模块使用
    resolve:{
        extensions:['.ts','.js'],
    },
    
    module:{
        rules:[
            {
                test:/\.ts$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            cacheDirectory:true,//开启缓存
                            cacheCompression:false,//关闭缓存的压缩
                            }
                    },
                    "ts-loader"
                ],
            },
            {
                test:/\.less$/,
                include:path.resolve(__dirname,"./src/less"),
                use:[
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"public/index.html"),
            filename:"[name].bundle.html",
            inject:true,
        }),
    ],
    devServer:{
        static:{
            directory:path.resolve(__dirname,"dist")
        },
        hot:true,
        open:true,
        host:"localhost",
        port:3000
    },
    
    mode:"development",
    // mode:"production",
};