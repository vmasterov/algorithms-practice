/*
- уточнить условие,
Буду использовать буквы русского и латинского алфавита

- придумать примеры и граничные случаи,
В коде

- описать brute force,
Просто опишу свои варианты:
1. Цикл по символам строки, в котором сравниваем каждый символ с регуляркой по цифрам и буквам,
если ок -- добавляем в массив. После копию массива инвертируем, приводим оба массива к строке и сравниваем.
Если массив пустой -- сразу true
2. replace на пустую строку все, что НЕ буквы/цифры, дальше такое же сравнение, как в коде
3. Мой код

- оптимизировать,
Два указателя: l=0, r=s.length-1
Цикл по строке пока l !== r.
Внутри проверяю каждый указатель (элемент), валидный ли символ, если нет ++ и continue.
Если оба да -- сравниваю: если не совпали -- return false.
После выхода из цикла -- return true.
Ot(n) Os(1)

- оценить временную и пространственную сложность (O-большое),
Ot(n) Os(n)

- написать код,
- прогнать тесты.
*/

import test from '@/helpers/test';

export function isPalindrome(s: string): boolean {
  const chars = s.toLowerCase().match(/[a-zа-я0-9]/g);

  if (chars === null) {
    return true;
  }

  const reverse = [...chars].reverse();

  return chars.join('') === reverse.join('');
}

export function isPalindrome1(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  const re = /[a-zA-Z0-9]/;

  while (left < right) {
    if (!re.test(s[left])) {
      left++;
      continue;
    }

    if (!re.test(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

test({
  checkFunction: isPalindrome1,
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
      input: ['??  -  ::  !///  #   '],
      output: true,
    },
    {
      input: ['1 -2'],
      output: false,
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
