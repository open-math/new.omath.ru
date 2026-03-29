import { isPerfectSquare } from '@open-math/shared/utils';
import { findIntegerFactors, formatTrinomial } from './mental-shared';

//
// Factoring for monic equations (A=1): ~70% solvable, ~30% unsolvable
// Unsolvable: discriminant is not a perfect square → irrational/complex roots
//

function generateSolvable(random: ProblemRandom): {
  B: number;
  C: number;
  t: number;
  k: number;
} {
  let t = random.integer(-12, 12);
  let k = random.integer(-12, 12);
  while (k === t) k = random.integer(-12, 12);
  const B = t + k;
  const C = t * k;
  return { B, C, t, k };
}

function generateUnsolvable(random: ProblemRandom): { B: number; C: number } {
  let B: number;
  let C: number;
  do {
    B = random.integer(-10, 10);
    C = random.integer(-15, 15);
    while (C === 0) C = random.integer(-15, 15);
  } while (findIntegerFactors(B, C) !== false || isPerfectSquare(B * B - 4 * C));
  return { B, C };
}

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const solvable = random.integer(1, 10) <= 7;

  if (!solvable) {
    const { B, C } = generateUnsolvable(random);
    const equation = formatTrinomial(1, B, C, 'x', 2, 1);

    return {
      problemContent: (
        <>
          <ProblemDescription>
            <BlockMath>{equation}</BlockMath>
          </ProblemDescription>
          <ProblemCheck label="Решается этим методом?" no />
          <ProblemAnswer>
            <P>
              Не существует целых чисел, дающих в сумме <M>{B}</M>, а при умножении <M>{C}</M>. Уравнение не разложить
              на множители в уме.
            </P>
          </ProblemAnswer>
        </>
      ),
    };
  }

  const { B, C, t, k } = generateSolvable(random);
  const equation = formatTrinomial(1, B, C, 'x', 2, 1);

  const root1 = -t;
  const root2 = -k;
  const [r1, r2] = root1 <= root2 ? [root1, root2] : [root2, root1];

  const answerLatex = r1 === r2 ? `x = ${r1}` : `x_1 = ${r1}, \\enspace x_2 = ${r2}`;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <BlockMath>{equation}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Решается этим методом?" yes>
          <RootsCheck roots={r1 === r2 ? [r1] : [r1, r2]} />
        </ProblemCheck>
        <ProblemAnswer>
          <BlockMath>{answerLatex}</BlockMath>
        </ProblemAnswer>
      </>
    ),
  };
});
