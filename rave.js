
const { argv } = require('node:process');

function pbcopy(data) {
  const proc = require('child_process').spawn('pbcopy'); 
  proc.stdin.write(data); proc.stdin.end();
}

const regex = /[A-Za-z\s!]/g;

let res = argv.slice(2).map(x => x.replace(regex, m => {
  m = m.toLowerCase();
  if (m === "!") {
      return ':bang-rave:'
  }
  if (m === 'q' || m === 'z') {
      return '';
  }
  return `:${m}-rave:`
})).join(`     `)

pbcopy(res)
console.log(`copied to clipboard!`)