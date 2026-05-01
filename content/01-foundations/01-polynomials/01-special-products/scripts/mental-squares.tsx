export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const isSum = random.boolean();

  let n: number;
  let round: number;
  let offset: number;

  if (isSum) {
    round = random.integer(1, 9) * 10;
    offset = random.integer(1, Math.min(5, 99 - round));
    n = round + offset;
  } else {
    round = random.integer(2, 10) * 10;
    offset = random.integer(1, Math.min(5, round - 11));
    n = round - offset;
  }

  const answer = n * n;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          Не выполняя прямого умножения возведите в квадрат число <M>{n}</M>.<Br />
          Попытайтесь сделать это в уме.
        </ProblemDescription>
        <MathValueCheck answer={answer} />
        <ProblemHint>
          {isSum ? 'Используйте формулу квадрата суммы.' : 'Используйте формулу квадрата разности.'}
        </ProblemHint>
        <ProblemAnswer>
          <M>{answer}</M>
        </ProblemAnswer>
      </>
    ),
  };
});
