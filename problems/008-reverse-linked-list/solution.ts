/*
- уточнить условие,
- придумать примеры и граничные случаи,
- описать brute force,
  - Создать функции
    - getListFrom Os(n) Ot(n)
      - Завели head = null и current = null
      - В цикле по arr
        - Если head === null
          - head = new ListNode(arr[i])
          - current = head
        - Иначе
          - current.next = new ListNode(arr[i])
          - current = current.next
      - Вернуть head

    - getArrayFrom Os(n) Ot(n)
      - Завели arr = [] и current = head
      - В цикле пока current не null
        - arr.push(current.val)
        - current = current.next
      - Вернуть arr

  - Получить список -- getListFrom
  - Завести prev = null, current = head, next = null
  - В цикле пока current не null
    - next = current.next
    - current.next = prev
    - prev = current
    - current = next
  - Вернуть prev
  Os(1) Ot(n)
- оптимизировать,
- оценить временную и пространственную сложность (O-большое),
- написать код,
- прогнать тесты.
*/

import test from '@/helpers/test';

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // твоё решение
  return null;
}

function getListFrom(arrayList: number[]): ListNode | null {
  return null;
}

function getArrayFrom(head: ListNode | null): number[] {
  return [];
}

function arrayReserveList(arrayList: number[]): number[] {
  const head = getListFrom(arrayList);
  const reversedList = reverseList(head);

  return getArrayFrom(reversedList);
}

test({
  checkFunction: arrayReserveList,
  data: [
    {
      input: [[1, 2, 3, 4, 5]],
      output: [5, 4, 3, 2, 1],
    },
    {
      input: [[1, 2]],
      output: [2, 1],
    },
    {
      input: [[1]],
      output: [1],
    },
    {
      input: [[]],
      output: [],
    },
    {
      input: [[1, 1, 1]],
      output: [1, 1, 1],
    },
    {
      input: [[0, 1, -1]],
      output: [-1, 1, 0],
    },
  ],
});
