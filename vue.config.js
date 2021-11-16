const path = require('path')

module.exports = {
  // 三种配置方式：对象、方法、链式
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components'
    }
  }
}
