"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _commands = require("./commands");

const DEFAULT_TEMPLATE_PATH = './templates/default.html';
const DEFAULT_OUTPUT_FILE_PATH = './output.pdf';
const App = {
  run(args) {
    let command = args._[0] || 'help';

    switch (command) {
      case 'generate':
        {
          const source = args.s || args.source;
          const template = args.t || args.template || DEFAULT_TEMPLATE_PATH;
          const outputPath = args.o || args.output || DEFAULT_OUTPUT_FILE_PATH;
          (0, _commands.generate)(source, template, outputPath);
          break;
        }

      case 'help':
        {
          const [command, subCommand] = args._;
          (0, _commands.help)(command, subCommand);
          break;
        }

      case 'version':
        (0, _commands.version)();
        break;

      default:
        (0, _commands.help)();
    }
  }

};
exports.App = App;