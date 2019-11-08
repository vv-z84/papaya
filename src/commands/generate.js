import { convertHtmlToPdf,
  convertMarkdownToHtml,
  injectHtmlIntoTemplate,
  readFileAsync,
  writePdf
} from '../lib'

import  path from 'path'

const generate = async (source, template, outputPath) => {
  try {
    const markdownContent = await readFileAsync(path.resolve(source))
    const templateContent = await readFileAsync(path.resolve(template))

    const htmlContent = convertMarkdownToHtml(markdownContent.toString())
    const finalContent = injectHtmlIntoTemplate(htmlContent, templateContent)
    const pdfContent = await convertHtmlToPdf(finalContent.toString())

    await writePdf(pdfContent, outputPath)
    console.log(`PDF saved to: ${path.resolve(outputPath)}`)
  }
  catch(err) {
    console.log(err)
  }
}

export { generate }
