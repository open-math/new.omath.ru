export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const n = random.integer(10000, 999999);
  const d = random.integer(2, 15);
  const n1 = n - d;
  const n2 = n + d;
  const answer = d * d;

  const diffOfSquares = $CONTENT.foundations.polynomials.specialProducts.article.$diffOfSquares;
  const simpleProduct = $CONTENT.foundations.polynomials.specialProducts.practice.$simpleProduct;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          Вычислите выражение{' '}
          <M>
            {n}^2 - {n1} \cdot {n2}
          </M>
          .
        </ProblemDescription>
        <MathValueCheck answer={answer} />
        <ProblemHint>
          Это модифицированная версия задачи <Dep on={simpleProduct}>Простое произведение</Dep>.
        </ProblemHint>
        <ProblemAnswer>
          <M>{answer}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Заметим, что{' '}
            <M>
              {n1} = {n} - {d}
            </M>{' '}
            и{' '}
            <M>
              {n2} = {n} + {d}
            </M>{' '}
            , то есть множители симметрично расположены вокруг <M>{n}</M>. Применим формулу{' '}
            <Dep on={diffOfSquares}>разности квадратов</Dep> к их произведению:
          </P>
          <BlockMath>{math`
            ${n1} \cdot ${n2} = (${n} - ${d})(${n} + ${d}) = ${n}^2 - ${d}^2
          `}</BlockMath>
          <P>Подставляем в исходное выражение:</P>
          <BlockMath>{math`
            ${n}^2 - ${n1} \cdot ${n2} = ${n}^2 - \left(${n}^2 - ${d}^2\right) = \cancel{${n}^2} - \cancel{${n}^2} + ${d}^2 = ${d}^2 = ${answer}
          `}</BlockMath>
          <P>
            Слагаемые <M>{n}^2</M> взаимоуничтожаются, и от огромного числа остаётся лишь маленький квадрат разности{' '}
            <M>
              {d}^2 = {answer}
            </M>
            .
          </P>
        </ProblemSolution>
      </>
    ),
  };
});
