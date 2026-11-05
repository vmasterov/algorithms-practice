/*
- уточнить условие,
Что значит Ответ с погрешностью до 10^-5 считается верным. ?
- придумать примеры и граничные случаи,
- описать brute force,
- оптимизировать,
Если k = 1, сортирую на месте и возвращаю послдений элемент
Ot(n log n)
Переменные
  - i -- кол-во итераций
  - average -- среднее
  - sum -- сумма
В цикле прохожу по всем элеменьам, формирую сумму, увеличиваю счетчик.
Когда индекс равен k -1 беру первое среднее через Math.max
Далее на каждом шаге вычитаю элемент, что не попадает в окно и беру среднее через Math.max
Возвращаю average.
- оценить временную и пространственную сложность (O-большое),
Ot(n), Os(1)
- написать код,
- прогнать тесты.
*/

import test from '@/helpers/test';

export function findMaxAverage(nums: number[], k: number): number {
  let i = 0;
  let sum = 0;
  let average = -Infinity;

  while (i < nums.length) {
    sum += nums[i];

    if (i === k - 1) {
      average = Math.max(average, sum / k);
    }

    if (i > k - 1) {
      sum -= nums[i - k];
      average = Math.max(average, sum / k);
    }

    i++;
  }

  return average;
}

export function findMaxAverage1(nums: number[], k: number): number {
  let sum = -Infinity;
  let prevSum = 0;

  // INPUT:          [ [ 0, 1, 9, 9 ], 1 ]
  // USER ANSWER:    10
  // CORRECT ANSWER: 9

  for (let i = 0; i < nums.length; i++) {
    prevSum += nums[i];

    if (i === k - 1) {
      sum = Math.max(sum, prevSum);
    }

    if (i > k - 1) {
      prevSum -= nums[i - k];
      sum = Math.max(sum, prevSum);
    }
  }

  return sum / k;
}

test({
  checkFunction: findMaxAverage1,
  data: [
    {
      input: [[0, 1, 9, 9], 1],
      output: 9,
    },
    {
      input: [[1, 12, -5, -6, 50, 3], 4],
      output: 12.75,
    },
    {
      input: [[0], 1],
      output: 0,
    },
    {
      input: [[-1], 1],
      output: -1,
    },
    {
      input: [[-1, -2], 2],
      output: -1.5,
    },
    {
      input: [[-1, -2, -3], 2],
      output: -1.5,
    },
    {
      input: [[-1, -2, 3], 2],
      output: 0.5,
    },
    {
      input: [[1, -2, -3], 2],
      output: -0.5,
    },
    {
      input: [[-1, 2, -3], 1],
      output: 2,
    },
  ],
});
