/**
 * 等比例缩放适配
 */
class Zoom {
    /**
     * @param {Element} element
     * @param {object} [options={}]
     * @param {number} [options.elementWidth] 元素的宽度(画布的宽度)
     * @param {number} [options.elementHeight] 元素的高度(画布的高度)
     * @param {boolean} [options.center=true] 是否需要水平垂直居中
     */
    constructor(element, options = {}) {
        this.element = element;
        this.options = options;

        if (typeof this.options.elementWidth === 'undefined') {
            this.options.elementWidth = this.element.clientWidth;
        }
        if (typeof this.options.elementHeight === 'undefined') {
            this.options.elementHeight = this.element.clientHeight;
        }
        if (typeof this.options.center === 'undefined') {
            this.options.center = true;
        }

        this.scale();
    }

    /**
     * 等比例缩放
     */
    scale() {
        // 注意: 父元素的 display 属性会影响到子元素的 scale, 例如设置为 inline-flex 时
        var containerEl = this.element.parentNode;
        var containerWidth = containerEl.clientWidth;
        var containerHeight = containerEl.clientHeight;
        var elementWidth = this.options.elementWidth;
        var elementHeight = this.options.elementHeight;

        var dim = getScaleRect(containerWidth, containerHeight, elementWidth, elementHeight);

        containerEl.style.overflow = 'hidden';

        this.element.style.width = elementWidth + 'px';
        this.element.style.height = elementHeight + 'px';
        this.element.style.transformOrigin = this.element.style.webkitTransformOrigin = '0 0';
        this.element.style.transform = this.element.style.webkitTransform = 'scale(' + dim.width / elementWidth + ',' + dim.height / elementHeight + ')';

        if (this.options.center) {
            containerEl.style.position = 'relative';

            this.element.style.position = 'absolute';
            this.element.style.top = '50%';
            this.element.style.left = '50%';
            var transform = this.element.style.transform || this.element.style.webkitTransform;
            this.element.style.transform = this.element.style.webkitTransform = transform + ' translate(-50%,-50%)';
        }
    }
}

/**
 * 获取等比缩放后的宽高
 * 
 * @param {number} containerWidth 
 * @param {number} containerHeight 
 * @param {number} contentWidth 
 * @param {number} contentHeight 
 * @return {object}
 */
function getScaleRect(containerWidth, containerHeight, contentWidth, contentHeight) {
    var aspect = contentWidth / contentHeight;

    // 优先高度撑满容器
    var height = containerHeight;
    var width = height * aspect;
    // 如果放不下, 就改为宽度撑满容器
    if (width > containerWidth || height > containerHeight) {
        width = containerWidth;
        height = width / aspect;
    }

    return {
        width: width,
        height: height
    };
}

export default Zoom;