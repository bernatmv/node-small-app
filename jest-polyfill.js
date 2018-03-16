//Hack to fix a bug in headless which omits the matchMedia API (we Stub the API)
//https://github.com/WickyNilliams/enquire.js/issues/82
window.matchMedia =
    window.matchMedia ||
    function() {
        return {
            matches: false,
            addListener: function() {},
            removeListener: function() {}
        };
    };

window.requestAnimationFrame = function() {
    throw new Error('requestAnimationFrame is not supported in Node');
};
window.cancelAnimationFrame = function(callback) {
    setTimeout(callback, 0);
};