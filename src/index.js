import minimist from 'minimist'
import { App } from './App'

const args = minimist(process.argv.slice(2))
App.run(args)
