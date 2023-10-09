import { env } from '@/env.mjs'
import chalk, { ChalkInstance } from 'chalk'
import log from 'loglevel'
import prefix from 'loglevel-plugin-prefix'

type ChalkColors = {
  [key: string]: ChalkInstance
}

const colors: ChalkColors = {
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.blue,
  WARN: chalk.yellow,
  ERROR: chalk.red,
}

if (env.NODE_ENV === 'development') {
  log.setLevel('debug')
}

prefix.reg(log)

prefix.apply(log, {
  format(level, name, timestamp) {
    return `${chalk.gray(`[${timestamp}]`)} ${colors[level.toUpperCase()](level)} ${chalk.green(
      `${name}:`
    )}`
  },
})

export { log as logger }
