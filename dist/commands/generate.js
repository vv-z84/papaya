"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = void 0;

var _lib = require("../lib");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generate = async (source, template, outputPath) => {
  try {
    const markdownContent = await (0, _lib.readFileAsync)(_path.default.resolve(source));
    const templateContent = await (0, _lib.readFileAsync)(_path.default.resolve(template));
    const htmlContent = (0, _lib.convertMarkdownToHtml)(markdownContent.toString());
    const finalContent = (0, _lib.injectHtmlIntoTemplate)(htmlContent, templateContent);
    const pdfContent = await (0, _lib.convertHtmlToPdf)(finalContent.toString());
    await (0, _lib.writePdf)(pdfContent, outputPath);
    console.log(`PDF saved to: ${_path.default.resolve(outputPath)}`);
  } catch (err) {
    console.log(err);
  }
};

exports.generate = generate;