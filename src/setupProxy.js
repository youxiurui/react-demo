const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://rui.youxiurui.top/', // 要代理的服务器地址
            changeOrigin: true,
            pathRewrite:{
                '^/api':''
            }
        })
    )
}