const path = require('path')
const resolve = filePath => path.join(__dirname, './', filePath);
module.exports = {
    publicPath: './',
    devServer: {
        host: 'localhost'
    },
    // configureWebpack: {
    //     devtool: "inline-source-map"
    // },
    chainWebpack: config => {
        // 因为这个两个插件会在我们的index单页面中的script标签加上 defer以及async属性，导致我们demo示例页面按需加载失效，去掉就好了。
        config.plugins
            .delete('prefetch-index')
            .delete('preload-index');
        // store目录用来存放调试组件库的demo
        config.resolve.alias
            .set('@', resolve('src'))
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "src/common/style/variable.scss";`
            }
        }
    }
};