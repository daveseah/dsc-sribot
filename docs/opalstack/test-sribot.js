#!/bin/node
const { spawn } = require('child_process');
const TCLR = '\u001b[30;1m\u001b[47m';
const PCLR = '\u001b[42m\u001b[30m'; // green bg + black fg
const ECLR = '\u001b[41m\u001b[30m'; // red bg + black fg
const RST = '\u001b[0m'; // reset
const PR = `  ${PCLR} SRIBOT ${RST}`;
const ER = `  ${ECLR} ERROR! ${RST}`;
const IDENT = '  ';

console.log(`\n${TCLR} *** SRIBOT INTERACTIVE PROVING GROUNDS *** ${RST}\n`);

const sribot = spawn('node', ['dsribot/_start']);

sribot.stdout.on('data', data => {
  console.log(`${PR} ${data}`);
});

sribot.stderr.on('data', data => {
  console.log(`${PR} ERR: ${data}`);
  console.log(PR, 'ERROR', data);
});

sribot.on('error', error => {
  console.log(`error: ${error.message}`);
});

sribot.on('close', code => {
  console.log(`child process exited with code ${code}`);
});
