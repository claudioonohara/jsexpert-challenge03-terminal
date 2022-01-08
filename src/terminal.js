import DraftLog from 'draftlog';
import chalkTable from 'chalk-table';
import readline from 'readline';
import terminalConfig from './config/terminal.js';

const TABLE_OPTIONS = terminalConfig.table;

class CustomTerminal {
  constructor() {
    this.print = {};
    this.data = [];
  }

  initialize() {
    DraftLog(console).addLineListener(process.stdin)
    this.terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  }

  initializeTable() {
    const data = []
    const table = chalkTable(TABLE_OPTIONS, data)

    this.print = console.draft(table)
    this.data = data
  }

  question(msg = "") {
    return new Promise(resolve => this.terminal.question(msg, resolve))
  }

  closeTerminal() {
    this.terminal.close()
  }
  
}

export default CustomTerminal;
