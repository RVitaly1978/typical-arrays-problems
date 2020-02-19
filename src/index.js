
exports.min = function min (array) {
    if ((array === undefined)
    || (array.length === 0)) {
        return 0;
    }

    const arr = [...array];
    return arr.sort((a, b) => a - b)[0];
}

exports.max = function max (array) {
    if ((array === undefined)
    || (array.length === 0)) {
        return 0;
    }

    const arr = [...array];
    return arr.sort((a, b) => b - a)[0];
}

exports.avg = function avg (array) {
    if ((array === undefined)
    || (array.length === 0)) {
        return 0;
    }

    const sum = array.reduce((acc, elem) => acc += elem, 0);
    const average = sum / array.length;
    return average;
}
