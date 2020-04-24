# zoom.js

[![NPM version][npm-image]][npm-url] [![changelog][changelog-image]][changelog-url] [![license][license-image]][license-url]

[npm-image]: https://img.shields.io/npm/v/zoom.js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/zoom.js
[license-image]: https://img.shields.io/github/license/ufologist/zoom.svg
[license-url]: https://github.com/ufologist/zoom/blob/master/LICENSE
[changelog-image]: https://img.shields.io/badge/CHANGE-LOG-blue.svg?style=flat-square
[changelog-url]: https://github.com/ufologist/zoom/blob/master/CHANGELOG.md

等比例缩放适配

## 功能

* 让元素等比例缩放以撑满其父容器的宽或者高
* 让元素缩放之后是水平垂直居中于父容器的

## 使用方法

推荐将 [dist/zoom.js](./dist/zoom.js) 内嵌到 `<head>` 中

## 示例

```javascript
// 要适配的元素
var element = document.querySelect('.foo');
// 等比例缩放适配
new Zoom(element);
```

* [等比例缩放适配示例](https://ghcdn.rawgit.org/ufologist/zoom/master/test/zoom.html)
* [API 文档](https://ghcdn.rawgit.org/ufologist/zoom/master/docs/index.html)