import readlineSync from 'readline-sync';
//const {chalk} = require('chalk');
import chalk from 'chalk';
const log = console.log

var user, pw, command;
 
log(chalk.black.bold.bgYellow('    Your Account    '));
user = readlineSync.question(chalk.gray.underline(' USER NAME ') + ' : ');
pw = readlineSync.question(chalk.gray.underline(' PASSWORD  ') + ' : ',
  {hideEchoBack: true});
// Authorization ...
log(chalk.green('Welcome, ' + user + '!'));
command = readlineSync.prompt();
