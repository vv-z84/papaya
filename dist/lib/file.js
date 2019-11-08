"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFileAsync = exports.writePdf = void 0;

var _fs = require("fs");

var _util = require("util");

const readFileAsync = (0, _util.promisify)(_fs.readFile);
exports.readFileAsync = readFileAsync;
const writeFileAsync = (0, _util.promisify)(_fs.writeFile);

const writePdf = async (pdfContent, path) => {
  await writeFileAsync(path, pdfContent, 'binary');
};

exports.writePdf = writePdf;