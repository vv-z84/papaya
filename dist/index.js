"use strict";

var _minimist = _interopRequireDefault(require("minimist"));

var _App = require("./App");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const args = (0, _minimist.default)(process.argv.slice(2));

_App.App.run(args);