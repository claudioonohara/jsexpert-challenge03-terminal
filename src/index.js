import CustomTerminal from './terminal.js';
import IncomeService from './service/IncomeService.js';
import Income from './entity/Income.js';

const VOCABULARY = {
  STOP: ':q',
};

const customTerminal = new CustomTerminal();
customTerminal.initialize();

async function mainLoop() {
  console.info('🚀 Running...\n');
  
  try {
    customTerminal.initializeTable();  
    const answer = await customTerminal.question("Qual seu cargo e pretensão salarial em BRL ? (position; expectation) \n Insira: ")
    
    if(answer === VOCABULARY.STOP) {
      customTerminal.closeTerminal()
      console.log('terminal has been closed')
      return
    }

    const incomeService = new IncomeService()
    const income = new Income(await incomeService.generateIncomeFromString(answer))
    
    customTerminal.update(income.format())
  } catch (error) {
    console.log(error.message)
    return mainLoop()
  }

  return mainLoop();
}

await mainLoop();
