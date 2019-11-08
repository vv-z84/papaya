import { readFile, writeFile } from 'fs'
import { promisify } from 'util'

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

const writePdf = async (pdfContent, path) => {
  await writeFileAsync(path, pdfContent, 'binary')
}

export { writePdf, readFileAsync }
