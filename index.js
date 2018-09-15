'use strict';

const tplt = (...args) => {
  let str = '';
  if (args.length === 0) {
    return new TypeError('No input provided');
  }
  if (args.length > 0 && (typeof args[0] === 'string' || typeof args[0] === 'object')) {
    const template = args[0];
    const _args = args.slice(1, args.length);
    for (let i = 0; i < template.length; i++) {
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
