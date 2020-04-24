# Zoom

[![changelog][changelog-image]][changelog-url] [![license][license-image]][license-url]

[license-image]: https://img.shields.io/github/license/ufologist/zoom.svg
[license-url]: https://github.com/ufologist/zoom/blob/master/LICENSE
[changelog-image]: https://img.shields.io/badge/CHANGE-LOG-blue.svg?style=flat-square
[changelog-url]: https://github.com/ufologist/zoom/blob/master/CHANGELOG.md

等比例缩放适配

![适配示例](https://user-images.githubusercontent.com/167221/80206541-132db880-865f-11ea-9bd1-c6a1e93992c6.png)

## 功能

* 让元素等比例缩放以撑满其父容器的宽或者高
* 让元素缩放之后是水平垂直居中于父容器的

## 使用方法

推荐将 [dist/zoom.js](./dist/zoom.js) 内嵌到 `<head>` 中

## 示例

```javascript
// 要适配的元素
var element = document.querySelector('.foo');
// 等比例缩放适配
new Zoom(element);
```

* [等比例缩放适配示例](https://ghcdn.rawgit.org/ufologist/zoom/master/test/zoom.html)
* [API 文档](https://ghcdn.rawgit.org/ufologist/zoom/master/docs/index.html)