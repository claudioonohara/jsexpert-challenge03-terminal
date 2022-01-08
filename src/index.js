import CustomTerminal from './terminal.js';
import IncomeService from './service/IncomeService.js';

const VOCABULARY = {
  STOP: ':q',
};

const terminal = new CustomTerminal();
terminal.initialize();

const service = new IncomeService();

async function mainLoop() {
  console.info('🚀 Running...\n');
  try {
    terminal.initializeTable()
    const answer = await terminal.question("Qual seu cargo e pretensão salarial em BRL ? (position; expectation)")
    
    if(answer === VOCABULARY.STOP) {
      terminal.closeTerminal()
      console.log('terminal has been closed')
      return
    }
  } catch (error) {
    console.log(error)
    return mainLoop()
  }

  return mainLoop();
}

await mainLoop();
