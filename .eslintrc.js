module.exports = {
  env: {
    node: true,
    browser: true,
  },
  parser: "vue-eslint-parser", // 指定解析器
  parserOptions: {
    parser: "@typescript-eslint/parser", // 指定插件
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 2020,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-this-alias": "off",
    "vue/multi-word-component-names": "off",
  },
};
