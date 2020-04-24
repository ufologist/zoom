# zoom.js

[![changelog][changelog-image]][changelog-url] [![license][license-image]][license-url]

[license-image]: https://img.shields.io/github/license/ufologist/zoom.svg
[license-url]: https://github.com/ufologist/zoom/blob/master/LICENSE
[changelog-image]: https://img.shields.io/badge/CHANGE-LOG-blue.svg?style=flat-square
[changelog-url]: https://github.com/ufologist/zoom/blob/master/CHANGELOG.md

等比例缩放适配

## 功能

* 让子元素等比例缩放以撑满容器的宽或者高
* 让子元素在缩放之后, 水平垂直居中与容器中

## 示例

```javascript
// 要适配的元素
var element = document.querySelect('.foo');
// 等比例缩放适配
new Zoom(element);
```

详见 [API 文档](https://doc.esdoc.org/github.com/ufologist/zoom)