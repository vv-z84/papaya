"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "convertHtmlToPdf", {
  enumerable: true,
  get: function () {
    return _conversors.convertHtmlToPdf;
  }
});
Object.defineProperty(exports, "convertMarkdownToHtml", {
  enumerable: true,
  get: function () {
    return _conversors.convertMarkdownToHtml;
  }
});
Object.defineProperty(exports, "readFileAsync", {
  enumerable: true,
  get: function () {
    return _file.readFileAsync;
  }
});
Object.defineProperty(exports, "writePdf", {
  enumerable: true,
  get: function () {
    return _file.writePdf;
  }
});
exports.injectHtmlIntoTemplate = void 0;

var _conversors = require("./conversors");

var _file = require("./file");

const injectHtmlIntoTemplate = (htmlContent, templateContent) => {
  return Buffer.from(templateContent.toString().replace('{{ content }}', htmlContent.toString()));
};

exports.injectHtmlIntoTemplate = injectHtmlIntoTemplate;