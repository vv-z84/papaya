import { Converter as MarkdownToHtmlConverter } from 'showdown'
import puppeteer from 'puppeteer'

const createConvertMarkdownToHtml = (markdownToHtmlConverter) => (markdownContent) => {
  return markdownToHtmlConverter.makeHtml(markdownContent)
}

const convertHtmlToPdf = async (htmlContent) => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  const page = await browser.newPage()

  await page.emulateMedia('screen')
  await page.setContent(htmlContent)

  const pdfOptions = {
    printBackground: false,
    format: 'A4',
    margin: {
      top: '1cm',
      right: '1cm',
      bottom: '1cm',
      left: '1cm',
    }
  }

  const pdfContent = await page.pdf(pdfOptions)
  await page.close()
  await browser.close()

  return pdfContent
}

export const convertMarkdownToHtml = createConvertMarkdownToHtml(new MarkdownToHtmlConverter())
export { convertHtmlToPdf }
