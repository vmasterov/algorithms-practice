/*
- уточнить условие,
Если числа в массиве повторяются [1,1,1] -- я тоже возвращаю 0, ведь заработать нельзя?
Если длина 1 -- я тоже возвращаю 0, ведь нельзя продать и купить в один день?
- придумать примеры и граничные случаи,
В коде
- описать brute force,
Каждый элемент в цикле сравнивать с последующими, если разность след. и текущего положительная -- запомнить.
В следующей итераци начинать с i+1 и записывать в результат большую разность (Math.max).
Ot(n^2) Os(1)
- оптимизировать,
Завести переменные min=infinity profit=0. В цикле идти по массиву и сравнивать текущее значение с min.
Если price < min обновлять min. В той же итерации получать разность price - min, сравнивать ее прошлым profit.
Если текущий больше -- обновлять.
Ot(n) Os(1)
- оценить временную и пространственную сложность (O-большое),
- написать код,
- прогнать тесты.
*/

import test from '@/helpers/test';

export function maxProfit(prices: number[]): number {
  let min = Infinity;
  let profit = 0;

  for (const price of prices) {
    if (price < min) {
      min = price;
    }

    profit = Math.max(profit, price - min);
  }

  return profit;
}

test({
  checkFunction: maxProfit,
  data: [
    {
      input: [[7, 1, 5, 3, 6, 4]],
      output: 5,
    },
    {
      input: [[7, 6, 4, 3, 1]],
      output: 0,
    },
    {
      input: [[1]],
      output: 0,
    },
    {
      input: [[1, 1]],
      output: 0,
    },
    {
      input: [[0, 1]],
      output: 1,
    },
    {
      input: [[1, 2, 3, 0]],
      output: 2,
    },
    {
      input: [[0, 1, 3, 2, 0]],
      output: 3,
    },
    {
      input: [[0, 3, 1, 2, 0]],
      output: 3,
    },
    {
      input: [[0, 3, 1, 2, 0]],
      output: 3,
    },
    {
      input: [[0, 3, 1, 4, 0]],
      output: 4,
    },
  ],
});
