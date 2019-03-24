const {
  fixBabelImports,
  override,
  addLessLoader,
  addDecoratorsLegacy,
  enableEslintTypescript,
} = require("customize-cra");

// const path = require("path");

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
