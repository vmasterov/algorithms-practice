/*
- уточнить условие,
Буду использовать буквы русского и латинского алфавита

- придумать примеры и граничные случаи,
В коде

- описать brute force,
- оптимизировать,
Придумал единственный вариант

- оценить временную и пространственную сложность (O-большое),
Ot(n) Os(n)

- написать код,
- прогнать тесты.
*/

import test from '@/helpers/test';

export function isPalindrome(s: string): boolean {
  if (s.trim().length === 0) {
    return true;
  }

  const chars = s.toLowerCase().match(/[a-zа-я0-9]/g);

  if (chars === null) {
    return false;
  }

  const reverse = [...chars].reverse();

  return chars.join('') === reverse.join('');
}

test({
  checkFunction: isPalindrome,
  data: [
    {
      input: [' '],
      output: true,
    },
    {
      input: ['1'],
      output: true,
    },
    {
      input: ['0'],
      output: true,
    },
    {
      input: ['aAa'],
      output: true,
    },
    {
      input: ['ЏЂ Њ‰  -  ‰ЊЂЏ '],
      output: true,
    },
    {
      input: ['Ст  рока НА    русскоМ '],
      output: false,
    },
    {
      input: ['аРоз аупала  НА ЛАПУ аЗоРа '],
      output: true,
    },
    {
      input: ['аРоз ?? аупала - НА :: ЛАПУ !/// аЗоРа #'],
      output: true,
    },
    {
      input: ['??  -  ::  !///  #   '],
      output: true,
    },
    {
      input: ['A man, a plan, a canal: Panama'],
      output: true,
    },
    {
      input: ['race a car'],
      output: false,
    },
  ],
});
