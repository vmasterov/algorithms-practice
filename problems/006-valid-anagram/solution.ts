/*
- уточнить условие,
- придумать примеры и граничные случаи,
- описать brute force,
Превратить в массив. В цикле, findIndex искать совпадения, при совпадении удалять. Если строка-донар
пуста -- анаграмма
Ot(n^2) Os(1) - если мутировать исходные объект, иначе Os(n)
- оптимизировать,
Если строки разной длины -- не анаграмма.
1 цикл -- добавить в мап: ключ - буква, значение - кол-во повторений
2 цикл -- искать по буквам второй строки и уменьшать на 1 значения, если буквы одинаковые, иначе -- выход. Когда 0
удалять ключ.
Если размер мапы после цикла 0 - анагнаммы.
Ot(n) Os(n)
ПОПРАВКА:
Память здесь O(1), а не O(n). По условию в строках только строчные латинские буквы, значит в Map никогда не будет больше 26 ключей.
- написать код,
- прогнать тесты.
*/

import test from '@/helpers/test';

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const charsCount = new Map<string, number>();

  for (const char of s) {
    charsCount.set(char, (charsCount.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    const charCount = charsCount.get(char);
    if (!charCount) {
      return false;
    }

    const charCountNew = charCount - 1;
    if (charCountNew === 0) {
      charsCount.delete(char);
    } else {
      charsCount.set(char, charCountNew);
    }
  }

  return charsCount.size === 0;
}

export function isAnagram1(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  return s.split('').sort().join('') === t.split('').sort().join('');
}

test({
  checkFunction: isAnagram1,
  data: [
    {
      input: ['anagram', 'nagaram'],
      output: true,
    },
    {
      input: ['a', 'a'],
      output: true,
    },
    {
      input: ['a', 'b'],
      output: false,
    },
    {
      input: ['a', 'aa'],
      output: false,
    },
    {
      input: ['aa', 'a'],
      output: false,
    },
    {
      input: ['rat', 'car'],
      output: false,
    },
    {
      input: ['rat', 'art'],
      output: true,
    },
    {
      input: ['aaa', 'aaa'],
      output: true,
    },
    {
      input: ['bab', 'aba'],
      output: false,
    },
    {
      input: ['bba', 'bba'],
      output: true,
    },
    {
      input: ['abb', 'abc'],
      output: false,
    },
    {
      input: ['abb', 'abb'],
      output: true,
    },
  ],
});
