/*
 * @Author: 王云飞
 * @Date: 2021-11-09 15:12:06
 * @LastEditTime: 2021-11-09 15:15:40
 * @LastEditors: 王云飞
 * @Description: 
 * 
 */
const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components')
    }
  }
}