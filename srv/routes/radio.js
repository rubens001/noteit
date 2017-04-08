"use strict";
exports.__esModule = true;
/**
 * radio
 */
var Radio = (function () {
    function Radio() {
    }
    Radio.prototype.get = function (req, res) {
        res.json({ radio: '89 a radio rock' });
    };
    return Radio;
}());
exports.Radio = Radio;
