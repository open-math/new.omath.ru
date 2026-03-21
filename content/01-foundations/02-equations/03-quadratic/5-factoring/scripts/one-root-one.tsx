import { gcd, simplifyFraction } from '@open-math/shared/utils';
import { formatTrinomial, fractionLatex } from '../../4-quadratic-formula/scripts/quadratic-shared';

//
// Zero-sum quadratics:
//   50% → A + B + C = 0, roots: x₁ = 1, x₂ = C/A
//   50% → A - B + C = 0, roots: x₁ = -1, x₂ = -C/A
//

export default defineProblemScript({
  isGenerator: true,
})(({ random }) => {
  const roll = random.integer(0, 15);

  let A: number;
  let C: number;

  if (roll <= 5) {
    // ~38%: Unitary (A = 1), integer second root
    A = 1;
    C = random.integer(-12, 12);
    while (C === 0 || C === 1 || C === -1) C = random.integer(-12, 12);
  } else if (roll <= 9) {
    // ~25%: A > 1, C divisible by A → integer second root
    A = random.integer(2, 5);
    let k = random.integer(-5, 5);
    while (k === 0 || k === 1 || k === -1) k = random.integer(-5, 5);
    C = A * k;
  } else if (roll <= 13) {
    // ~25%: Fractional second root (A ∤ C)
    A = [2, 3, 5, 7][random.integer(0, 3)];
    C = random.integer(-12, 12);
    while (C === 0 || C === -A || C % A === 0) C = random.integer(-12, 12);
  } else {
    // ~25%: Larger coefficients with varied signs
    A = random.integer(2, 7);
    C = random.integer(-15, 15);
    while (C === 0 || C === A || C === -A) C = random.integer(-15, 15);
  }

  // 50/50: A + B + C = 0 vs A - B + C = 0
  const minusVariant = random.boolean();

  let B = minusVariant ? A + C : -(A + C);

  // Reduce by GCD, keep A > 0
  const g = gcd(gcd(Math.abs(A), Math.abs(B)), Math.abs(C));
  A /= g;
  B /= g;
  C /= g;
  if (A < 0) {
    A = -A;
    B = -B;
    C = -C;
  }

  const equation = formatTrinomial(A, B, C, 'x', 2, 1);

  // Second root: C/A for sum variant, -C/A for minus variant
  const [rn, rd] = simplifyFraction(minusVariant ? -C : C, A);

  const root1 = minusVariant ? -1 : 1;
  const isDoubleRoot = rn === root1 && rd === 1;

  // RootsCheck value for x₂
  const root2Check: number | string = rd === 1 ? rn : `${rn}/${rd}`;

  // LaTeX for x₂
  const root2Latex = rd === 1 ? `${rn}` : fractionLatex(rn, rd);

  const answerLatex = isDoubleRoot ? `x = ${root1}` : `x_1 = ${root1}, \\enspace x_2 = ${root2Latex}`;

  return {
    problemContent: (
      <>
        <ProblemDescription>
          <P>
            Решите квадратное уравнение в уме, пользуясь полученными соотношениями коэффициентов и формулами второго
            корня:
          </P>
          <BlockMath>{equation}</BlockMath>
        </ProblemDescription>
        {isDoubleRoot ? <RootsCheck roots={root1} /> : <RootsCheck roots={[root1, root2Check]} />}
        <ProblemAnswer>
          <BlockMath>{answerLatex}</BlockMath>
        </ProblemAnswer>
      </>
    ),
  };
});
