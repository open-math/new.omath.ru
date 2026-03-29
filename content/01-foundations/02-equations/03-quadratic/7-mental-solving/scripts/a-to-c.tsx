import { gcd } from '@open-math/shared/utils';
import { findIntegerFactors, formatTrinomial, rootCheckValue, rootLatex } from './mental-shared';

//
// "Transfer A to C" method: ~60% solvable, ~40% unsolvable
// Solvable: Ax²+Bx+C=0 where x²+Bx+AC factors with integers; roots = x'/A
// Unsolvable: after transfer, x²+Bx+AC doesn't factor with integers
//

function generateSolvable(random: ProblemRandom): {
  A: number;
  B: number;
  C: number;
  t: number;
  k: number;
} {
  // Roots: integer r1 and fraction n/A where gcd(n, A) = 1.
  // Original: Ax² + Bx + C with B = -(A*r1 + n), C = r1*n
  // Reduced: x² + Bx + AC factors as t*k = AC, t+k = B
  //   t = -A*r1, k = -n

  let A: number, r1: number, n: number;
  do {
    A = random.integer(2, 6);
    r1 = random.integer(-8, 8);
    while (r1 === 0) r1 = random.integer(-8, 8);
    n = random.integer(-8, 8);
    while (n === 0 || gcd(Math.abs(n), A) !== 1 || A * r1 + n === 0) n = random.integer(-8, 8);
  } while (Math.abs(A * r1 * n) > 200);

  const B = -(A * r1 + n);
  const C = r1 * n;
  const t = -A * r1;
  const k = -n;

  return { A, B, C, t, k };
}

function generateUnsolvable(random: ProblemRandom): { A: number; B: number; C: number } {
  let A: number;
  let B: number;
  let C: number;
  do {
    A = random.integer(2, 7);
    B = random.integer(-12, 12);
    while (B === 0) B = random.integer(-12, 12);
    C = random.integer(-12, 12);
    while (C === 0) C = random.integer(-12, 12);
  } while (findIntegerFactors(B, A * C) !== false);
  return { A, B, C };
}

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const solvable = random.integer(1, 10) <= 6;

  if (!solvable) {
    const { A, B, C } = generateUnsolvable(random);
    const equation = formatTrinomial(A, B, C, 'x', 2, 1);
    const reducedEquation = formatTrinomial(1, B, A * C, 'x', 2, 1);

    return {
      problemContent: (
        <>
          <ProblemDescription>
            <BlockMath>{equation}</BlockMath>
          </ProblemDescription>
          <ProblemCheck label="Решается этим методом?" no />
          <ProblemAnswer>
            <P>
              Приведённое уравнение <M>{reducedEquation.replace(' = 0', '')}</M> не разложить на множители в уме. Метод
              переноса <M>A</M> к <M>C</M> не помогает.
            </P>
          </ProblemAnswer>
        </>
      ),
    };
  }

  const { A, B, C, t, k } = generateSolvable(random);
  const equation = formatTrinomial(A, B, C, 'x', 2, 1);

  // Reduced roots are -t and -k; original roots are -t/A and -k/A
  const root1Check = rootCheckValue(-t, A);
  const root2Check = rootCheckValue(-k, A);
  const root1Ltx = rootLatex(-t, A);
  const root2Ltx = rootLatex(-k, A);

  const answerLatex = `x_1 = ${root1Ltx}, \\enspace x_2 = ${root2Ltx}`;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <BlockMath>{equation}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Решается этим методом?" yes>
          <RootsCheck roots={[root1Check, root2Check]} />
        </ProblemCheck>
        <ProblemAnswer>
          <BlockMath>{answerLatex}</BlockMath>
        </ProblemAnswer>
      </>
    ),
  };
});
