/*
- уточнить условие,
- придумать примеры и граничные случаи,
- описать brute force,
- оптимизировать,
- оценить временную и пространственную сложность (O-большое),
- написать код,
- прогнать тесты.
*/

import test from '@/helpers/test';

export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // дополнение до target
    const complementIndex = seen.get(complement);

    if (complementIndex !== undefined) {
      return [i, complementIndex];
    }

    seen.set(nums[i], i);
  }

  return [];
}

test({
  checkFunction: twoSum,
  data: [
    {
      input: [[2, 7, 11, 15], 9],
      output: [0, 1],
    },
    {
      input: [[3, 2, 4], 6],
      output: [1, 2],
    },
    {
      input: [[3, 3], 6],
      output: [0, 1],
    },
    {
      input: [[0, 3], 3],
      output: [0, 1],
    },
    {
      input: [[1, 2, 3, 3], 6],
      output: [2, 3],
    },
  ],
  normalization: (array: number[]) => array.toSorted((a, b) => a - b),
});
