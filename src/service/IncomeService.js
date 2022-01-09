import IncomeRepository from "./../repository/IncomeRepository.js";
import Income from "./../entity/Income.js";

class IncomeService {
  constructor({ incomeRepository } = {}) {
    this.incomeRepository = incomeRepository || new IncomeRepository();
  }

  async generateIncomeFromString(incomeString, delimiter = ";") {
    if (!incomeString) {
      throw new Error(
        "Position is a required field. Please make sure you are providing a position."
      );
    }

    const [position, expectation] = incomeString.split(delimiter);

    if (isNaN(expectation)) {
      throw new Error(
        "A valid Expectation is required. Please note that only numbers are allowed."
      );
    }

    const income = new Income({ position });
    income.expectation.value = Number(expectation);
    const conversions = await this.incomeRepository.getConversions();

    income.conversion01.value =
      expectation * conversions[income.conversion01.currency];
    income.conversion02.value =
      expectation * conversions[income.conversion02.currency];
    income.conversion03.value =
      expectation * conversions[income.conversion03.currency];

    return income;
  }
}

export default IncomeService;
