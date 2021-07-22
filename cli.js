#!/usr/bin/env node

const netlifyRedirect = require('./App')
const chalk = require('chalk')
try {
  netlifyRedirect(process.argv[2], process.argv[3])
  console.log(chalk.greenBright.bold('Done !!'))
} catch (e) {
  console.log(chalk.redBright.bold('Oops : ' + e.message))
}
