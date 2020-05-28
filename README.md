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

## 适用场景

* 固定了画布宽高的场景
* 就好比给你一张纸, 让你在这张纸上摆放元素
* 例如设计类软件的画布(舞台), 基于这个画布布置出一个 `1920*1080` 宽高的数据大屏
* 我们需要将这个画布(纸)塞进任意尺寸的屏幕里
* 即让数据大屏在任何屏幕下都是适配的

## 使用方法

推荐将 [dist/zoom.js](./dist/zoom.js) 内嵌到 `<head>` 中

## 示例

```javascript
// 要适配的元素
var element = document.querySelector('.foo');
// 等比例缩放适配
new Zoom(element);
```

* [等比例缩放适配测试示例](https://ghcdn.rawgit.org/ufologist/zoom/master/test/zoom.html)
* [等比例缩放适配示例](https://ghcdn.rawgit.org/ufologist/zoom/master/test/face.html)
* [API 文档](https://ghcdn.rawgit.org/ufologist/zoom/master/docs/index.html)

## 参考

* [阿里云-数据大屏](https://data.aliyun.com/visual/datav)
* [腾讯云-数据大屏](https://cloud.tencent.com/product/tcv)
* [百度云-数据大屏](https://cloud.baidu.com/product/sugar.html)
* [网易七鱼-数据大屏](https://qiyukf.com/datamonitor)
* [网易有数-数据大屏](https://youdata.163.com/index/screen)
* [帆软-数据大屏](https://www.fanruan.com/finemax)
* [大数据可视化交互系统](https://www.raykite.com/productDetail/pro)
* [数据可视化-大屏](https://zhuanlan.zhihu.com/p/58762212)
* [CSS Grid Generator](https://github.com/sdras/cssgridgenerator "块状(网格)布局")