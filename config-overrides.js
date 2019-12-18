// 实现按需加载并定制主题
const { override, fixBabelImports, addLessLoader, addWebpackPlugin  } = require('customize-cra')
// 使用 Day.js 替换 momentjs 优化打包大小
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#1DA57A'}
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
)
