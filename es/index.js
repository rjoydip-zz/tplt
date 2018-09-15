'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var tplt = function tplt() {
  var str = '';

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 0) {
    return new TypeError('No input provided');
  }

  if (args.length > 0 && (typeof args[0] === 'string' || _typeof(args[0]) === 'object')) {
    var template = args[0];

    var _args = args.slice(1, args.length);

    for (var i = 0; i < template.length; i++) {
      if (template[i]) {
        str += template[i];
      }

      if (_args[i]) {
        str += _args[i];
      }
    }

    return str;
  }

  return new TypeError('Not an expected format');
};

module.exports = tplt;
export default tplt;