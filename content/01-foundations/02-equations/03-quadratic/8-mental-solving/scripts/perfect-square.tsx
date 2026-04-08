import { isPerfectSquare, simplifyFraction } from '@open-math/shared/utils';
import { formatTrinomial, fractionLatex, isPerfectSquareSolvable, rootCheckValue } from './mental-shared';

//
// Perfect square practice: ~60% solvable, ~40% unsolvable
// Unsolvable sub-cases:
//   - A or C not a perfect square
//   - A, C perfect squares but |B| ≠ 2KT
//   - All checks pass but C is negative (tricky case from "Отработка")
//

function generateSolvable(random: ProblemRandom): {
  A: number;
  B: number;
  C: number;
  K: number;
  T: number;
  minus: boolean;
} {
  const K = random.integer(1, 6);
  const T = random.integer(1, 7);
  const minus = random.boolean();
  const A = K * K;
  const C = T * T;
  const B = minus ? -2 * K * T : 2 * K * T;
  return { A, B, C, K, T, minus };
}

type UnsolvableReason = 'not-square' | 'bad-b' | 'negative-c';

function generateUnsolvable(random: ProblemRandom, reason: UnsolvableReason): { A: number; B: number; C: number } {
  if (reason === 'negative-c') {
    // Tricky case: A and |C| are perfect squares, |B| = 2KT, but C < 0
    const K = random.integer(1, 5);
    const T = random.integer(1, 5);
    const A = K * K;
    const C = -(T * T);
    const B = random.boolean() ? -2 * K * T : 2 * K * T;
    return { A, B, C };
  }

  if (reason === 'not-square') {
    // A or C is not a perfect square
    let A: number;
    let C: number;
    if (random.boolean()) {
      // A not a perfect square
      do {
        A = random.integer(2, 20);
      } while (isPerfectSquare(A));
      C = random.integer(1, 15);
    } else {
      // C not a perfect square
      A = [1, 4, 9, 16, 25][random.integer(0, 4)];
      do {
        C = random.integer(2, 20);
      } while (isPerfectSquare(C));
    }
    let B = random.integer(-15, 15);
    while (B === 0) B = random.integer(-15, 15);
    return { A, B, C };
  }

  // reason === 'bad-b': A, C are perfect squares, but |B| ≠ 2KT
  const K = random.integer(1, 5);
  const T = random.integer(1, 5);
  const A = K * K;
  const C = T * T;
  const correctB = 2 * K * T;
  let B: number;
  do {
    B = random.integer(-20, 20);
  } while (B === 0 || Math.abs(B) === correctB);
  return { A, B, C };
}

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const roll = random.integer(1, 10);
  const solvable = roll <= 6;

  if (!solvable) {
    // Pick unsolvable reason with emphasis on the tricky negative-C case
    const reasons: UnsolvableReason[] = ['not-square', 'bad-b', 'negative-c', 'negative-c'];
    const reason = reasons[random.integer(0, reasons.length - 1)];

    const { A, B, C } = generateUnsolvable(random, reason);
    const equation = formatTrinomial(A, B, C, 'x', 2, 1);

    return {
      problemContent: (
        <>
          <ProblemDescription>
            <BlockMath>{equation}</BlockMath>
          </ProblemDescription>
          <ProblemCheck label="Решается этим методом?" no />
          <ProblemAnswer>
            {reason === 'not-square' && (
              <P>
                Коэффициент <M>A = {A}</M> или <M>C = {C}</M> не является полным квадратом. Метод полного квадрата
                неприменим.
              </P>
            )}
            {reason === 'bad-b' && (
              <P>
                Коэффициенты <M>A</M> и <M>C</M> -- полные квадраты, но <M>|B| = {Math.abs(B)}</M> не равен{' '}
                <M>
                  2 \cdot {Math.round(Math.sqrt(A))} \cdot {Math.round(Math.sqrt(Math.abs(C)))} ={' '}
                  {2 * Math.round(Math.sqrt(A)) * Math.round(Math.sqrt(Math.abs(C)))}
                </M>
                . Метод неприменим.
              </P>
            )}
            {reason === 'negative-c' && (
              <P>
                Коэффициенты <M>A</M> и <M>|C|</M> -- полные квадраты, и <M>|B|</M> подходит, но перед <M>C</M> стоит
                минус. Формула квадрата суммы/разности требует <M>+</M> перед последним слагаемым. Метод неприменим.
              </P>
            )}
          </ProblemAnswer>
        </>
      ),
    };
  }

  const { A, B, C, K, T, minus } = generateSolvable(random);
  const equation = formatTrinomial(A, B, C, 'x', 2, 1);

  // Root: minus means B < 0, so root = +T/K; plus means B > 0, so root = -T/K
  const rootN = minus ? T : -T;
  const rootCheck = rootCheckValue(rootN, K);
  const rootLtx = fractionLatex(rootN, K);

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <BlockMath>{equation}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Решается этим методом?" yes>
          <RootsCheck roots={[rootCheck]} />
        </ProblemCheck>
        <ProblemAnswer>
          <BlockMath>{`x = ${rootLtx}`}</BlockMath>
        </ProblemAnswer>
      </>
    ),
  };
});
