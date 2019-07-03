const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const PATH = {
    app:path.join(__dirname,"src/main.js"),
    build:path.join(__dirname,"dist")
}

module.exports = {
    //定义当前的环境
    mode:"development",
    //定义入口文件
    entry:{
        app:PATH.app
    },
    //定义出口配置
    output:{
        // path: path.resolve(__dirname, "dist"),
        filename:"[name].js",
        path:PATH.build 
    },
    module:{
      //打包的一些规则
      rules:[
          //一个对象相当于一个打包规则
          {
             test:/\.(css|scss)$/,
             use:["style-loader","css-loader","sass-loader"] 
          },
          {
              test:/\.(js|jsx)$/,
              use:{
                  loader:"babel-loader",
                  options:{
                      //代码的转换将浏览器不识别的js代码转换成浏览器识别的
                      presets:["@babel/env"]
                  }
              },
              exclude:__dirname+"./node_modules/"
          },
          {
              test:/\.(jpg|gif|png)$/,
              use:{
                  loader:"url-loader",
                  options:{
                      limit:1024
                  }
              }
          },
          {
              test:/\.(eot|woff|ttf|svg)$/,
              use:{
                  loader:"url-loader"
              }

          },
          {
              test:/\.(vue)$/,
              loader:"vue-loader"
          }
      ]
  },
     plugins:[
      new HtmlWebpackPlugin({
          template:"index.html",
          filename:"index.html",
          title:"盛趣游戏-游戏创造世界"
      }),
      new VueLoaderPlugin()
   ]
,
    devServer:{
      proxy:{
          //当你访问这个路径的时候将你的本地域名替换成target中的域名
          "/ajax":{
                  //域名
              target:"http://m.maoyan.com",
              changeOrigin:true
          }
      }
  }
    }