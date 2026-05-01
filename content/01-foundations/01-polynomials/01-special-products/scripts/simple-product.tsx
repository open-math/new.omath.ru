export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const round = random.integer(2, 9) * 100;
  const offset = random.integer(1, 3);
  const n1 = round + offset;
  const n2 = round - offset;
  const answer = round * round - offset * offset;

  const diffOfSquares = $CONTENT.foundations.polynomials.specialProducts.article.$diffOfSquares;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          Не выполняя умножения напрямую найдите, чему равно произведение{' '}
          <M>
            {n1} \cdot {n2}
          </M>
          .
        </ProblemDescription>
        <MathValueCheck answer={answer} />
        <ProblemHint>
          Вместо чисел запишите скобки, которые образуют эти числа. Числа в скобках можно подобрать так, чтобы они были
          одинаковыми и отличались только знаком между ними!
        </ProblemHint>
        <ProblemAnswer>
          <M>{answer}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Первое число можно записать как{' '}
            <M>
              {n1} = {round} + {offset}
            </M>
            , а второе как{' '}
            <M>
              {n2} = {round} - {offset}
            </M>
            . Тогда произведение будет подчиняться формуле <Dep on={diffOfSquares}>разности квадратов</Dep>:
          </P>
          <BlockMath>{math`
            ${n1} \cdot ${n2} = (${round} + ${offset})(${round} - ${offset}) = ${round}^2 - ${offset}^2 = ${round * round} - ${offset * offset} = ${answer}
          `}</BlockMath>
        </ProblemSolution>
      </>
    ),
  };
});
