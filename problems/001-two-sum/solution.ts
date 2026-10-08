/*
- уточнить условие,
- придумать примеры и граничные случаи,
- описать brute force,
- оптимизировать,
- оценить временную и пространственную сложность (O-большое),
- написать код,
- прогнать тесты.
*/

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

function print(isCorrect: boolean, userAnswer: any, correctAnswer: any): void {
  if (isCorrect) {
    console.log(' ✅\x1b[32m CORRECT \x1b[0m');
    console.log(userAnswer);
    console.log('---');
  } else {
    console.log(' ❌\x1b[31m WRONG \x1b[0m');
    console.log('User answer');
    console.log(userAnswer);
    console.log('Correct answer');
    console.log(correctAnswer);
    console.log('---');
  }
}

function test<F extends (...args: any[]) => any>(
    f: F,
    args: Parameters<F>[],
    answers: ReturnType<F>[],
) {
  for (let i = 0; i < args.length; i++) {
    let userAnswer = f(...args[i]);
    const correctAnswer = answers[i]

    if (Array.isArray(userAnswer)) {
      userAnswer.sort((a, b) => a - b);

      const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
      print(isCorrect, userAnswer, correctAnswer);
    }
  }
}

type Options = {
    arguments: any[],
    input: any,
    normalization?: () => void
}

test(
    twoSum,
    [
        [[2, 7, 11, 15], 9],
        [[3, 2, 4], 6],
        [[3, 3], 6],
        [[0, 3], 3],
        [[1, 2, 3, 3], 6],
    ],
    [
        [0, 1],
        [1, 2],
        [0, 1],
        [0, 1],
        [2, 3],
    ]
)

