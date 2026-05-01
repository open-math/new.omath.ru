export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  // a - b = 1, so result = a + b; keep result in [101, 499] (odd)
  const b = random.integer(50, 249);
  const a = b + 1;
  const answer = a + b;

  const diffOfSquares = $CONTENT.foundations.polynomials.specialProducts.article.$diffOfSquares;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          Не вычисляя никаких квадратов, найдите, чему равно{' '}
          <M>
            {a}^2 - {b}^2
          </M>
          .
        </ProblemDescription>
        <MathValueCheck answer={answer} />
        <ProblemHint>
          <Dep on={diffOfSquares}>Разность квадратов</Dep>
        </ProblemHint>
        <ProblemAnswer>
          <M>{answer}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Применяем формулу <Dep on={diffOfSquares}>разности квадратов</Dep> и записываем разность как произведение
            двух скобок:
          </P>
          <BlockMath>{math`
            ${a}^2 - ${b}^2 = (${a} + ${b})(${a} - ${b}) = ${answer} \cdot 1 = ${answer}
          `}</BlockMath>
          <P>
            Вторая скобка оказалась равна <M>1</M>, поэтому ответ — просто сумма исходных чисел.
          </P>
        </ProblemSolution>
      </>
    ),
  };
});
