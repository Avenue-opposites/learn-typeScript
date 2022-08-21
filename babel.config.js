module.exports = {
    presets:[
        [
            "@babel/preset-env",
            {   
                //要兼容的目标浏览器
                // targets:{
                //     ie:8,
                // },
                useBuiltIns:'usage',//使用自动按需加载
                corejs:3,//指定版本
            }
        ],
    ]
}