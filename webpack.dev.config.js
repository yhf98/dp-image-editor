/*
 * @Author: yaohengfeng 1921934563@qq.com
 * @Date: 2023-04-18 17:30:56
 * @LastEditors: yaohengfeng 1921934563@qq.com
 * @LastEditTime: 2023-04-20 11:28:20
 * @FilePath: \image-editor\webpack.dev.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable */
module.exports = () => ({
  mode: 'development',
  devServer: {
    compress: true,
    open: true,
    hot: true,
    host: '0.0.0.0',
    static: './examples',
    allowedHosts: 'all',
  },
  devtool: 'eval-source-map',
});