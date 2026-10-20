/*
- уточнить условие,
-
- придумать примеры и граничные случаи,
[[0], 1], [[-4, -3, -2, -1, 0], 0], [[-9999, 0, 9999], 1]

- описать brute force,
Перебор в цикле все элементов и сравнние с целевым. (O(n))

- оптимизировать,
Делим массив пополам. Храним значение в переменной. Начало и конце массива тоже в переменных
Сравниваем середину с целью. Если она больше -- работаем с правой (двигаем указатель на элемент середина + 1)
если меньше -- наоборот. Так сдвигаем указатели пока левый не больше правого.

- оценить временную и пространственную сложность (O-большое),
O(log n)

- написать код,
- прогнать тесты.
*/

import test from '@/helpers/test';

export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor(left / 2 + right / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

test({
  checkFunction: search,
  data: [
    {
      input: [[-1, 0, 3, 5, 9, 12], 9],
      output: 4,
    },
    {
      input: [[-1, 0, 3, 5, 9, 12], 2],
      output: -1,
    },
    {
      input: [[5], 5],
      output: 0,
    },
    {
      input: [[0], 1],
      output: -1,
    },
    {
      input: [[-4, -3, -2, -1, 0], 0],
      output: 4,
    },
    {
      input: [[-9999, 0, 9999], 1],
      output: -1,
    },
  ],
});
