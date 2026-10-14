export type TTestOptions<F extends (...args: any[]) => any> = {
  checkFunction: F;
  data: Array<{
    input: Parameters<F>;
    output: ReturnType<F>;
  }>;
  normalization?: (value: ReturnType<F>) => ReturnType<F>;
};

export type TPrintOptions<Input, Output> =
  | { error: unknown; input: Input; output: Output; isCorrect?: never }
  | { isCorrect: boolean; input: Input; userAnswer: Output; correctAnswer: Output; error?: never };

function print<Input, Output>(options: TPrintOptions<Input, Output>): void {
  if (options.isCorrect === undefined) {
    const { error, input, output } = options;

    console.log('❗\x1b[31m ERROR \x1b[0m');
    console.log('INPUT: ', input);
    console.log('OUTPUT:', output);
    console.error(error);
  } else {
    const { isCorrect, userAnswer, correctAnswer, input } = options;

    if (isCorrect) {
      console.log(' ✅\x1b[32m CORRECT \x1b[0m');
    } else {
      console.log(' ❌\x1b[31m WRONG \x1b[0m');
    }

    console.log('INPUT:         ', input);
    console.log('USER ANSWER:   ', userAnswer);
    console.log('CORRECT ANSWER:', correctAnswer);
  }

  console.log('---');
}

export default function test<F extends (...args: any[]) => any>({
  checkFunction,
  data,
  normalization,
}: TTestOptions<F>) {
  for (let i = 0; i < data.length; i++) {
    try {
      const userAnswer: ReturnType<F> = checkFunction(...data[i].input);
      const correctAnswer = data[i].output;

      const normalizedUserAnswer = normalization ? normalization(userAnswer) : userAnswer;
      const normalizedCorrectAnswer = normalization ? normalization(correctAnswer) : correctAnswer;

      const isCorrect =
        JSON.stringify(normalizedUserAnswer) === JSON.stringify(normalizedCorrectAnswer);
      print({
        isCorrect,
        userAnswer: normalizedUserAnswer,
        correctAnswer: normalizedCorrectAnswer,
        input: data[i].input,
      });
    } catch (error) {
      print({
        error: error,
        input: data[i].input,
        output: data[i].output,
      });
    }
  }
}
