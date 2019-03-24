const { injectBabelPlugin } = require("react-app-rewired");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const rewireLess = require("react-app-rewire-less"); // ------------------------- 引入less插件
const {
  addWebpackAlias,
  fixBabelImports,
  override,
  addLessLoader,
  addDecoratorsLegacy,
  enableEslintTypescript,
} = require("customize-cra");
const rewireStyledComponents = require("react-app-rewire-styled-components");
const path = require("path");

module.exports = override(
  fixBabelImports("import", {
    // 按需加载
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1890ff" }
  }),
  enableEslintTypescript(), // 使用ts
  addDecoratorsLegacy(), // 在传统模式下添加装饰器
);
