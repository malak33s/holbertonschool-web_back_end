import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  return {
    ...budget,
    getIncomeInDollars() {
      return `$${income}`;
    },
    getIncomeInEuros() {
      return `${income} euros`;
    },
  };
}
