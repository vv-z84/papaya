import { generate, help, version } from './commands'

const DEFAULT_TEMPLATE_PATH = './templates/default.html'
const DEFAULT_OUTPUT_FILE_PATH = './output.pdf'

const App = {
  run(args) {
    let command = args._[0] || 'help'

    switch (command) {
    case 'generate': {
      const source = args.s || args.source
      const template = args.t || args.template || DEFAULT_TEMPLATE_PATH
      const outputPath = args.o || args.output || DEFAULT_OUTPUT_FILE_PATH

      generate(source, template, outputPath)
      break
    }
    case 'help': {
      const [command, subCommand] = args._
      help(command, subCommand)
      break
    }
    case 'version':
      version()
      break
    default:
      help()
    }
  }
}

export { App }
