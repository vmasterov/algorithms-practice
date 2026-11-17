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

/*
Рекурсия хвостовая
Функия (prev, cur) => void
Первый вызов (null, head) {}
Внутри (1 -> 2 -> 3 -> null) -> (3 -> 2 -> 1 -> null)
  if (cur === null) return prev
  next = cur.next
  cur.next = prev
  return (cur, next) {}

Рекурсия классическая
Первый вызов (head) {}
Внутри (1 -> 2 -> 3 -> null) -> ()
  if (cur === null || cur.next === null) return cur
  let head = (cur.next){}
  next = cur.next
  next.next = cur
  cur.next = null
  return head
return (head){}
* */

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
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function tailRecursionReverseList(
  prev: ListNode | null,
  current: ListNode | null,
): ListNode | null {
  if (current === null) {
    return prev;
  }

  const next = current.next;
  current.next = prev;

  return tailRecursionReverseList(current, next);
}

function classicRecursionReverseList(current: ListNode | null): ListNode | null {
  if (current === null || current.next === null) {
    return current;
  }

  const head = classicRecursionReverseList(current.next);
  const next = current.next;
  next.next = current;
  current.next = null;

  return head;
}

function getListFrom(arrayList: number[]): ListNode | null {
  const dummy = new ListNode();
  let current = dummy;

  for (const node of arrayList) {
    current.next = new ListNode(node);
    current = current.next;
  }

  return dummy.next;
}

function getArrayFrom(head: ListNode | null): number[] {
  const array = [];
  let current = head;

  while (current !== null) {
    array.push(current.val);
    current = current.next;
  }

  return array;
}

function arrayReverseList(arrayList: number[]): number[] {
  const head = getListFrom(arrayList);
  const reversedList = reverseList(head);

  return getArrayFrom(reversedList);
}

function arrayTailRecursionReverseList(arrayList: number[]): number[] {
  const head = getListFrom(arrayList);
  const reversedList = tailRecursionReverseList(null, head);

  return getArrayFrom(reversedList);
}

function arrayClassicRecursionReverseList(arrayList: number[]): number[] {
  const head = getListFrom(arrayList);
  const reversedList = classicRecursionReverseList(head);

  return getArrayFrom(reversedList);
}

test({
  checkFunction: arrayClassicRecursionReverseList,
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
