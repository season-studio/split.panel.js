/**
 * generate a instance as type of the splitpanel
 * @param {String} _type "vertical" or "horizontal"
 * @returns {Object} the object of the type
 */
export default function (_type) {
    (_type instanceof Array) && (_type = _type[0]);
    (_type === "vertical") || (_type = "horizontal");
    const ret = {
        s: _type,
        toString: function () { return _type; }
    };
    Object.defineProperties(ret, {
        isHorizontal: {
            value: (_type === "horizontal"),
            writable: false
        },
        isVertical: {
            value: (_type !== "horizontal"),
            writable: false
        },
        minSize: {
            value: (_type === "horizontal") ? "minWidth" : "minHeight",
            writable: false
        },
        maxSize: {
            value: (_type === "horizontal") ? "maxWidth" : "maxHeight",
            writable: false
        },
        clientSize: {
            value: (_type === "horizontal") ? "clientWidth" : "clientHeight",
            writable: false
        },
        size: {
            value: (_type === "horizontal") ? "width" : "height",
            writable: false
        },
        start: {
            value: (_type === "horizontal") ? "offsetLeft" : "offsetTop",
            writable: false
        },
        setStart: {
            value: (_type === "horizontal") ? "left" : "top",
            writable: false
        },
        beginMargin: {
            value: (_type === "horizontal") ? "marginLeft" : "marginTop",
            writable: false
        },
        endMargin: {
            value: (_type === "horizontal") ? "marginRight" : "marginBottom",
            writable: false
        },
        eventPos: {
            value: (_type === "horizontal") ? "x" : "y",
            writable: false
        }
    });
    return ret;
}