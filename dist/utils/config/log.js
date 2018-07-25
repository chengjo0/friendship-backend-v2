'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
const logOptions = {
  reporters: {
    myConsoleReporter: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', request: '*', response: '*' }],
      },
      {
        module: 'white-out',
        args: [
          {
            password: 'remove',
          },
        ],
      },
      {
        module: 'good-console',
      },
      'stdout',
    ],
  },
};

exports.default = logOptions;
//# sourceMappingURL=log.js.map
