'use strict'

const { spawn } = require('node:child_process')

function main() {
  const subprocess = spawn('node', ['./src/setup.js'], {
    detached: true,
    stdio: 'ignore',
  })
  subprocess.unref()
  console.log('SUCCESS\n')
}
main()
