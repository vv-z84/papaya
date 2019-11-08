"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertHtmlToPdf = exports.convertMarkdownToHtml = void 0;

var _showdown = require("showdown");

var _puppeteer = _interopRequireDefault(require("puppeteer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createConvertMarkdownToHtml = markdownToHtmlConverter => markdownContent => {
  return markdownToHtmlConverter.makeHtml(markdownContent);
};

const convertHtmlToPdf = async htmlContent => {
  const browser = await _puppeteer.default.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.emulateMedia('screen');
  await page.setContent(htmlContent);
  const pdfOptions = {
    printBackground: false,
    format: 'A4',
    margin: {
      top: '1cm',
      right: '1cm',
      bottom: '1cm',
      left: '1cm'
    }
  };
  const pdfContent = await page.pdf(pdfOptions);
  await page.close();
  await browser.close();
  return pdfContent;
};

exports.convertHtmlToPdf = convertHtmlToPdf;
const convertMarkdownToHtml = createConvertMarkdownToHtml(new _showdown.Converter());
exports.convertMarkdownToHtml = convertMarkdownToHtml;