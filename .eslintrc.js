/*
 * @Author: zasqw2222
 * @Date: 2021-10-18 14:40:13
 * @Description:
 * @FilePath: /telos-front/.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 7,
    requireConfigFile: false,
    // 开启实验属性
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      // 修饰器
      experimentalDecorators: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  globals: {
    __DEV__: false,
    __dirname: false,
    window: true,
    define: true,
    history: true,
    location: true,
    wxjs: true,
    $: true,
    WeixinJSBridge: true,
    wx: true,
    process: true,
    qq: true
  },
  rules: {
    'no-cond-assign': 2, // 判断等号 当做赋值
    // "no-console": process.env.ATHENA_ENV === 'div' ? 1 : 2, // 不允许提交 有log
    'react/display-name': 0, // 关闭匿名函数
    'no-empty': 2, // 禁止空语句块
    'react/prop-types': 0,
    eqeqeq: 2, // 禁止 ==
    curly: [2, 'all'], //强制所有控制语句使用一致的括号风格
    'no-extra-parens': 0,
    'array-bracket-spacing': [2, 'never'], //指定数组的元素之间要以空格隔开
    // "comma-spacing": [2, { // 控制逗号前后的空格
    //     "before": false,
    //     "after": true
    // }],
    // indent: ["error", 4],
    // 强制 function 定义中最多允许的参数数量
    'max-params': [2, 5],
    'no-debugger': 1,
    'no-unused-vars': 1, // 警告 变量未使用
    'no-alert': 2, //禁止使用alert confirm prompt
    'no-var': 0 //禁用var，用let和const代替
  }
};
