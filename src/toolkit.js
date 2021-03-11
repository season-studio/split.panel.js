/**
 * get the top z-index in the given element
 * @param {HTMLElement} _element the container element, document.body will be taken as default if this parameter is ignored
 * @returns {Number} the top z-index
 */
export function getTopZIndex(_element) {
    return [...(_element || document.body).querySelectorAll("*")].reduce((r, e) => 
                Math.max(r, Number(window.getComputedStyle(e).zIndex) || 0), 
            0) + 1;
}

/**
 * assert
 * @param {*} _cond the condition the be asserted
 * @param {*} _error the error will be throw if fail
 * @returns {*} the same as the "_cond" parameter
 */
export function assert(_cond, _error) {
    if (_cond) {
        return _cond;
    } else {
        throw _error;
    }
}

/**
 * get the number value from a style value
 * @param {*} _style the style value
 * @param {*} _default the default value using when the style value doesn't contain number value, 0 will be taken if this parameter is ignored.
 * @returns {Number} the number value in the style
 */
export function NumberFromStyle(_style, _default = 0) {
    _style = String(_style).replace(/\D+$/, "");
    return (_style && Number(_style)) || _default;
}

/**
 * get the coordinate of an event in the asix of the given element
 * @param {Event} _e the event
 * @param {HTMLElement} _element the element
 * @returns {Object} {x, y}
 */
export function eventCoordinateFromElement(_e, _element) {
    let x = 0;
    let y = 0;
    while (_element) {
        x += _element.offsetLeft - _element.scrollLeft + _element.clientLeft;
        y += _element.offsetTop - _element.scrollTop + _element.clientTop;
        _element = _element.offsetParent;
    }

    x = _e.pageX - x;
    y = _e.pageY - y;
    return { x, y };
}