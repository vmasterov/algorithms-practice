export type Options<F extends (...args: any[]) => any> = {
    checkFunction: F,
    data: Array<{
        input: Parameters<F>,
        output: ReturnType<F>,
    }>,
    normalization?: (value: ReturnType<F>) => ReturnType<F>,
}

function print<Answer>(
    isCorrect: boolean,
    userAnswer: Answer,
    correctAnswer: Answer,
): void {
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

export default function test<F extends (...args: any[]) => any>(
    {
        checkFunction,
        data,
        normalization,
    }: Options<F>
) {
    for (let i = 0; i < data.length; i++) {
        try {
            const userAnswer: ReturnType<F> = checkFunction(...data[i].input);
            const correctAnswer = data[i].output;

            const normalizedUserAnswer = normalization ? normalization(userAnswer) : userAnswer;
            const normalizedCorrectAnswer = normalization ? normalization(correctAnswer) : correctAnswer;

            if (Array.isArray(userAnswer)) {
                const isCorrect = JSON.stringify(normalizedUserAnswer) === JSON.stringify(normalizedCorrectAnswer);
                print<ReturnType<typeof checkFunction>>(isCorrect, normalizedUserAnswer, normalizedCorrectAnswer);
            } else if (
                typeof 'boolean' ||
                typeof 'string' ||
                typeof 'number'
            ) {
                const isCorrect = userAnswer === correctAnswer;
                print(isCorrect, userAnswer, correctAnswer);
            } else {
                console.error('Неизвестный формат ответа');
            }
        } catch (error) {
            console.error(error);
        }
    }
}