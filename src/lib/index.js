import { convertHtmlToPdf, convertMarkdownToHtml } from './conversors'
import { readFileAsync, writePdf } from './file'

const injectHtmlIntoTemplate = (htmlContent, templateContent) => {
  return Buffer.from(templateContent.toString().replace('{{ content }}', htmlContent.toString()))
}

export { convertHtmlToPdf,
  convertMarkdownToHtml,
  injectHtmlIntoTemplate,
  readFileAsync,
  writePdf }
