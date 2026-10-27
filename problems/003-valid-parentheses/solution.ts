/*
- уточнить условие,
Если строка из одной скробки -- это false?

- Основное решение,
1. Создаю пустой массив, куда буду помещать символы строки.
2. Создаю мапку с закрывающими скобками ключами и открывающими -- значениями.
3. В цикле for/of беру нулевой символ.
3.1. Если это открывающая скобка, кладу ее в массив.
3.2. Если закрывающая -- беру значение соответствующего ключа из мапы
и сравниваю с последним элементом массива.
3.3. Если они равны, удалаю последний элемент, иначе возвращаю false.
3.4. Беру следующий.
4. Когда цикл законичлся -- возвращаю приведенную к булевому значению длину массива.
(Если в нем есть символы, значит строка невалидна)

- оценить временную и пространственную сложность (O-большое),
Ot(n), Os(n)

- написать код,
- прогнать тесты.
*/

import test from '@/helpers/test';

export function isValid(s: string): boolean {
  const parenthesesList: string[] = [];
  const closedParentheses = new Map<string, string>([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  if (s.length % 2 !== 0) {
    return false;
  }

  for (const char of s) {
    const parentheses = closedParentheses.get(char);

    if (parentheses) {
      if (parentheses === parenthesesList.at(-1)) {
        parenthesesList.pop();
      } else {
        return false;
      }
    } else {
      parenthesesList.push(char);
    }
  }

  return parenthesesList.length === 0;
}

test({
  checkFunction: isValid,
  data: [
    {
      input: ['('],
      output: false,
    },
    {
      input: [')'],
      output: false,
    },
    {
      input: ['(('],
      output: false,
    },
    {
      input: ['))'],
      output: false,
    },
    {
      input: ['()'],
      output: true,
    },
    {
      input: ['())'],
      output: false,
    },
    {
      input: ['()('],
      output: false,
    },
    {
      input: ['(()'],
      output: false,
    },
    {
      input: [')()'],
      output: false,
    },
    {
      input: ['([)'],
      output: false,
    },
    {
      input: ['(])'],
      output: false,
    },
    {
      input: ['()[]'],
      output: true,
    },
    {
      input: ['{()[]}'],
      output: true,
    },
    {
      input: ['{([])}'],
      output: true,
    },
    {
      input: ['((()))'],
      output: true,
    },
    {
      input: ['((()))('],
      output: false,
    },
  ],
});
