import chalk from "chalk";

export default {
  table: {
    leftPad: 2,
    columns: [
      { field: "position", name: chalk.cyan("Position") },
      { field: "expectation", name: chalk.magenta("Expectation (BRL)") },
      { field: "conversion01", name: chalk.yellow("USD") },
      { field: "conversion02", name: chalk.green("EUR") },
      { field: "conversion03", name: chalk.cyan("RUB") },
    ],
  },
};
