import article from './article';

import simpleDifference from './scripts/simple-difference';
import simpleDiffOfSquares from './scripts/simple-diff-of-squares';
import simpleProduct from './scripts/simple-product';

// #region Links
//
//

const squareSum = article.uniques.squareSum;
const squareDiff = article.uniques.squareDiff;
const diffOfSquares = article.uniques.diffOfSquares;
const cubeSum = article.uniques.cubeSum;
const squareSumFactorExamples = article.uniques.squareSumFactorExamples;
const squareDiffExamples = article.uniques.squareDiffExamples;
const diffOfSquaresExamples = article.uniques.diffOfSquaresExamples;
const cubeSumDiffExamples = article.uniques.cubeSumDiffExamples;

//
//
// #endregion

const expand = <P>Раскройте скобки:</P>;
const factorSumDiff = <P>Запишите в виде квадрата суммы или разности:</P>;
const factorDiffSquares = <P>Запишите в виде произведения двух скобок:</P>;
const factorCube = <P>Запишите в виде куба суммы или разности:</P>;

const expandSub = (input: string, answer: string, check: string, hint?: JSX.Element) => (
  <SubProblem>
    <ProblemDescription>
      {expand}
      <BlockMath>{input}</BlockMath>
    </ProblemDescription>
    <MathExpressionCheck answer={check} />
    {hint}
    <ProblemAnswer>
      <BlockMath>{answer}</BlockMath>
    </ProblemAnswer>
  </SubProblem>
);

const factorSumDiffSub = (input: string, answer: string, check: string, hint?: JSX.Element) => (
  <SubProblem>
    <ProblemDescription>
      {factorSumDiff}
      <BlockMath>{input}</BlockMath>
    </ProblemDescription>
    <MathExpressionCheck answer={check} />
    {hint}
    <ProblemAnswer>
      <BlockMath>{answer}</BlockMath>
    </ProblemAnswer>
  </SubProblem>
);

const factorDiffSquaresSub = (input: string, answer: string, check: string, hint?: JSX.Element) => (
  <SubProblem>
    <ProblemDescription>
      {factorDiffSquares}
      <BlockMath>{input}</BlockMath>
    </ProblemDescription>
    <MathExpressionCheck answer={check} />
    {hint}
    <ProblemAnswer>
      <BlockMath>{answer}</BlockMath>
    </ProblemAnswer>
  </SubProblem>
);

const factorCubeSub = (input: string, answer: string, check: string, hint?: JSX.Element) => (
  <SubProblem>
    <ProblemDescription>
      {factorCube}
      <BlockMath>{input}</BlockMath>
    </ProblemDescription>
    <MathExpressionCheck answer={check} />
    {hint}
    <ProblemAnswer>
      <BlockMath>{answer}</BlockMath>
    </ProblemAnswer>
  </SubProblem>
);

export default defineProse({
  uniques: {
    cubeSumDiffFactorization: Problem,
    simpleProduct: Problem,
  },
})(({ uniques }) => (
  <>
    <Problems
      title="Отработка квадрата суммы и разности"
      level="easy"
      snippet={{
        seo: true,
        title: 'Задачи на квадрат суммы и разности',
        description: `
          Большое количество задач на отработку формул сокращенного умножения -- квадрата суммы и разности.
          Два типа задач -- раскрыть скобки и запаковать в квадрат суммы или разности.
        `,
      }}
    >
      {factorSumDiffSub(
        'x^2 + 2xy + y^2',
        '(x + y)^2',
        '(x + y)^2',
        <ProblemHint>
          Изучите примеры <Dep on={squareSumFactorExamples}>запаковки в квадрат суммы</Dep> и{' '}
          <Dep on={squareDiffExamples}>квадрат разности</Dep>.
        </ProblemHint>,
      )}
      {expandSub('(x - 2)^2', 'x^2 - 4x + 4', 'x^2 - 4x + 4')}
      {factorSumDiffSub('a^2 + 2a + 1', '(a + 1)^2', '(a + 1)^2')}
      {expandSub('(a + 11)^2', 'a^2 + 22a + 121', 'a^2 + 22a + 121')}
      {factorSumDiffSub('n^2 + m^2 + 2mn', '(n + m)^2', '(n + m)^2')}
      {expandSub(math`\left(\frac{1}{5} - m\right)^2`, math`\frac{1}{25} - \frac{2m}{5} + m^2`, '1/25 - 2m/5 + m^2')}
      {factorSumDiffSub('x^2 - 2xy + y^2', '(x - y)^2', '(x - y)^2')}
      {expandSub(math`\left(x + \frac{2}{3}\right)^2`, math`x^2 + \frac{4}{3}x + \frac{4}{9}`, 'x^2 + 4x/3 + 4/9')}
      {factorSumDiffSub('81 - 18a + a^2', '(9 - a)^2', '(9 - a)^2')}
      {expandSub('(2x - 3)^2', '4x^2 - 12x + 9', '4x^2 - 12x + 9')}
      {factorSumDiffSub('a^2 - 12a + 36', '(a - 6)^2', '(a - 6)^2')}
      {expandSub('(3a + 5)^2', '9a^2 + 30a + 25', '9a^2 + 30a + 25')}
      {factorSumDiffSub('4b^2 - 4b + 1', '(2b - 1)^2', '(2b - 1)^2')}
      {expandSub('(-8 - 5b)^2', '64 + 80b + 25b^2', '64 + 80b + 25b^2')}
      {factorSumDiffSub('1 + 10x + 25x^2', '(1 + 5x)^2', '(1 + 5x)^2')}
      {expandSub('(3x - 10y)^2', '9x^2 - 60xy + 100y^2', '9x^2 - 60xy + 100y^2')}
      {factorSumDiffSub('100a^2 + 20a + 1', '(10a + 1)^2', '(10a + 1)^2')}
      {expandSub('(11b - 2d)^2', '121b^2 - 44bd + 4d^2', '121b^2 - 44bd + 4d^2')}
      {factorSumDiffSub('1 - 18y + 81y^2', '(1 - 9y)^2', '(1 - 9y)^2')}
      {expandSub('(6m + 5n)^2', '36m^2 + 60mn + 25n^2', '36m^2 + 60mn + 25n^2')}
      {factorSumDiffSub('9 - 12x + 4x^2', '(3 - 2x)^2', '(3 - 2x)^2')}
      {expandSub(
        math`\left(b + \frac{5}{12}c\right)^2`,
        math`b^2 + \frac{5}{6}bc + \frac{25}{144}c^2`,
        'b^2 + 5bc/6 + 25c^2/144',
      )}
      {factorSumDiffSub('9x^2 + 30x + 25', '(3x + 5)^2', '(3x + 5)^2')}
      {expandSub('(4x - 9y)^2', '16x^2 - 72xy + 81y^2', '16x^2 - 72xy + 81y^2')}
      {factorSumDiffSub('9a^2 - 30am + 25m^2', '(3a - 5m)^2', '(3a - 5m)^2')}
      {expandSub('(5y + 2z)^2', '25y^2 + 20yz + 4z^2', '25y^2 + 20yz + 4z^2')}
      {factorSumDiffSub('16m^2 + 24mn + 9n^2', '(4m + 3n)^2', '(4m + 3n)^2')}
      {expandSub(math`\left(-7y + \frac{1}{7}x\right)^2`, math`49y^2 - 2xy + \frac{x^2}{49}`, '49y^2 - 2xy + x^2/49')}
      {factorSumDiffSub('49 + 36x^2 + 84x', '(7 + 6x)^2', '(7 + 6x)^2')}
      {factorSumDiffSub('4 + 49x^2 - 28x', '(2 - 7x)^2', '(2 - 7x)^2')}
      {factorSumDiffSub('4x^2 + 36xy + 81y^2', '(2x + 9y)^2', '(2x + 9y)^2')}
    </Problems>

    <Problems
      title="Отработка разности квадратов"
      level="easy"
      snippet={{
        seo: true,
        title: 'Задачи на разность квадратов',
        description: `
          Большое количество задач на отработку формулы разности квадратов.
          Два типа задач -- раскрыть скобки и запаковать в разность квадратов.
        `,
      }}
    >
      {factorDiffSquaresSub(
        '1 - a^2',
        '(1 + a)(1 - a)',
        '(1 + a)(1 - a)',
        <ProblemHint>
          Изучите примеры использования формулы <Dep on={diffOfSquaresExamples}>разности квадратов</Dep>.
        </ProblemHint>,
      )}
      {expandSub('(8 - a)(8 + a)', '64 - a^2', '64 - a^2')}
      {factorDiffSquaresSub('16 - x^2', '(4 + x)(4 - x)', '(4 + x)(4 - x)')}
      {expandSub('(b - 5)(b + 5)', 'b^2 - 25', 'b^2 - 25')}
      {factorDiffSquaresSub('-y^2 + 81', '(9 + y)(9 - y)', '(9 + y)(9 - y)')}
      {expandSub('(7 + b)(7 - b)', '49 - b^2', '49 - b^2')}
      {factorDiffSquaresSub(
        math`\frac{1}{9} - b^2`,
        math`\left(\frac{1}{3} + b\right)\left(\frac{1}{3} - b\right)`,
        '(1/3 + b)(1/3 - b)',
      )}
      {expandSub('(y + 2)(2 - y)', '4 - y^2', '4 - y^2')}
      {factorDiffSquaresSub(
        math`y^2 - \frac{25}{36}`,
        math`\left(y + \frac{5}{6}\right)\left(y - \frac{5}{6}\right)`,
        '(y + 5/6)(y - 5/6)',
      )}
      {expandSub('(a - 4)(4 + a)', 'a^2 - 16', 'a^2 - 16')}
      {factorDiffSquaresSub('0.81 - x^2', '(0.9 + x)(0.9 - x)', '(0.9 + x)(0.9 - x)')}
      {expandSub('(1 + c)(-1 + c)', 'c^2 - 1', 'c^2 - 1')}
      {factorDiffSquaresSub('16a^2 - 1', '(4a + 1)(4a - 1)', '(4a + 1)(4a - 1)')}
      {expandSub('(6 - a)(-a - 6)', 'a^2 - 36', 'a^2 - 36')}
      {factorDiffSquaresSub('100 - 9y^2', '(10 + 3y)(10 - 3y)', '(10 + 3y)(10 - 3y)')}
      {expandSub('(-b + 1)(b + 1)', '1 - b^2', '1 - b^2')}
      {factorDiffSquaresSub('36a^2 - 25b^2', '(6a + 5b)(6a - 5b)', '(6a + 5b)(6a - 5b)')}
      {expandSub('(-x - 5)(x - 5)', '25 - x^2', '25 - x^2')}
      {factorDiffSquaresSub('-9p^2 + 0.16q^2', '(0.4q + 3p)(0.4q - 3p)', '(0.4q + 3p)(0.4q - 3p)')}
      {expandSub('(1 - 4x)(1 + 4x)', '1 - 16x^2', '1 - 16x^2')}
      {factorDiffSquaresSub(
        math`\frac{64}{9}n^2 - 4m^2`,
        math`\left(\frac{8}{3}n + 2m\right)\left(\frac{8}{3}n - 2m\right)`,
        '(8n/3 + 2m)(8n/3 - 2m)',
      )}
      {expandSub('(5b - 7)(5b + 7)', '25b^2 - 49', '25b^2 - 49')}
      {factorDiffSquaresSub('0.04x^2 - 0.64y^2', '(0.2x + 0.8y)(0.2x - 0.8y)', '(0.2x + 0.8y)(0.2x - 0.8y)')}
      {expandSub('(8x + 9)(9 - 8x)', '81 - 64x^2', '81 - 64x^2')}
      {factorDiffSquaresSub('9m^2n^2 - 1', '(3mn + 1)(3mn - 1)', '(3mn + 1)(3mn - 1)')}
      {expandSub('(4y + 5b)(4y - 5b)', '16y^2 - 25b^2', '16y^2 - 25b^2')}
      {factorDiffSquaresSub('81 - 16p^2q^2', '(9 + 4pq)(9 - 4pq)', '(9 + 4pq)(9 - 4pq)')}
      {expandSub('(0.5m + 7x)(7x - 0.5m)', '49x^2 - 0.25m^2', '49x^2 - 0.25m^2')}
      {factorDiffSquaresSub('0.01a^2b^2 - 100m^2', '(0.1ab + 10m)(0.1ab - 10m)', '(0.1ab + 10m)(0.1ab - 10m)')}
      {expandSub(
        math`\left(\frac{9}{7}y - 0.2z\right)\left(\frac{9}{7}y + 0.2z\right)`,
        math`\frac{81}{49}y^2 - 0.04z^2`,
        '81y^2/49 - 0.04z^2',
      )}
      {factorDiffSquaresSub('121a^2b^4 - 49c^2', '(11ab^2 + 7c)(11ab^2 - 7c)', '(11ab^2 + 7c)(11ab^2 - 7c)')}
      {expandSub(
        math`\left(0.8ab - \frac{1}{3}c\right)\left(0.8ab + \frac{1}{3}c\right)`,
        math`0.64a^2b^2 - \frac{c^2}{9}`,
        '0.64a^2b^2 - c^2/9',
      )}
      {factorDiffSquaresSub(
        math`-\frac{9}{64}t^2 + 36k^4l^6`,
        math`\left(6k^2l^3 + \frac{3}{8}t\right)\left(6k^2l^3 - \frac{3}{8}t\right)`,
        '(6k^2l^3 + 3t/8)(6k^2l^3 - 3t/8)',
      )}
      {expandSub('(-0.4mn + 1.1xy)(0.4mn + 1.1xy)', '1.21x^2y^2 - 0.16m^2n^2', '1.21x^2y^2 - 0.16m^2n^2')}
      {expandSub(
        math`\left(-\frac{1}{5}pq - \frac{2}{9}q\right)\left(\frac{1}{5}pq - \frac{2}{9}q\right)`,
        math`\frac{4q^2}{81} - \frac{p^2q^2}{25}`,
        '4q^2/81 - p^2q^2/25',
      )}
    </Problems>

    <Problems
      title="Отработка куба суммы и разности"
      level="easy"
      snippet={{
        seo: true,
        title: 'Задачи на куб суммы и разности',
        description: `
          Большое количество задач на отработку формул сокращенного умножения -- куба суммы и разности.
          Два типа задач -- раскрыть скобки и запаковать в куб суммы или разности.
        `,
      }}
    >
      {expandSub(
        '(m + n)^3',
        'm^3 + 3m^2n + 3mn^2 + n^3',
        'm^3 + 3m^2n + 3mn^2 + n^3',
        <ProblemHint>
          Изучите примеры использования формул <Dep on={cubeSumDiffExamples}>куба суммы и разности</Dep>.
        </ProblemHint>,
      )}
      {expandSub('(c - d)^3', 'c^3 - 3c^2d + 3cd^2 - d^3', 'c^3 - 3c^2d + 3cd^2 - d^3')}
      {factorCubeSub('a^3 + 3a^2b + 3ab^2 + b^3', '(a + b)^3', '(a + b)^3')}
      {expandSub('(2 + b)^3', '8 + 12b + 6b^2 + b^3', '8 + 12b + 6b^2 + b^3')}
      {expandSub('(3 - a)^3', '27 - 27a + 9a^2 - a^3', '27 - 27a + 9a^2 - a^3')}
      {factorCubeSub('x^3 - 3x^2y + 3xy^2 - y^3', '(x - y)^3', '(x - y)^3')}
      {expandSub('(x - 2)^3', 'x^3 - 6x^2 + 12x - 8', 'x^3 - 6x^2 + 12x - 8')}
      {expandSub('(a + 2b)^3', 'a^3 + 6a^2b + 12ab^2 + 8b^3', 'a^3 + 6a^2b + 12ab^2 + 8b^3')}
      {factorCubeSub('125m^3 + 75m^2 + 15m + 1', '(5m + 1)^3', '(5m + 1)^3')}
      {expandSub('(c - 3d)^3', 'c^3 - 9c^2d + 27cd^2 - 27d^3', 'c^3 - 9c^2d + 27cd^2 - 27d^3')}
      {expandSub(
        math`\left(4m + \frac{1}{3}k\right)^3`,
        math`64m^3 + 16m^2k + \frac{4mk^2}{3} + \frac{k^3}{27}`,
        '64m^3 + 16m^2k + 4mk^2/3 + k^3/27',
      )}
      {factorCubeSub('64 - 96a + 48a^2 - 8a^3', '(4 - 2a)^3', '(4 - 2a)^3')}
      {expandSub(
        math`\left(\frac{2}{3}a - 3b\right)^3`,
        math`\frac{8a^3}{27} - 4a^2b + 18ab^2 - 27b^3`,
        '8a^3/27 - 4a^2b + 18ab^2 - 27b^3',
      )}
      {expandSub('(a^2 + x^2)^3', 'a^6 + 3a^4x^2 + 3a^2x^4 + x^6', 'a^6 + 3a^4x^2 + 3a^2x^4 + x^6')}
      {factorCubeSub('m^3 - 12m^2 + 48m - 64', '(m - 4)^3', '(m - 4)^3')}
      {expandSub('(2a^2 - 3b^2)^3', '8a^6 - 36a^4b^2 + 54a^2b^4 - 27b^6', '8a^6 - 36a^4b^2 + 54a^2b^4 - 27b^6')}
      {expandSub('(2x^3 - 3y^2)^3', '8x^9 - 36x^6y^2 + 54x^3y^4 - 27y^6', '8x^9 - 36x^6y^2 + 54x^3y^4 - 27y^6')}
      {factorCubeSub('a^3 + 18a^2 + 108a + 216', '(a + 6)^3', '(a + 6)^3')}
      {expandSub(
        math`(10a^4 - 6b^2)^3`,
        math`1000a^{12} - 1800a^8b^2 + 1080a^4b^4 - 216b^6`,
        '1000a^12 - 1800a^8b^2 + 1080a^4b^4 - 216b^6',
      )}
      {expandSub(
        math`\left(\frac{1}{2}a - \frac{1}{3}b\right)^3`,
        math`\frac{a^3}{8} - \frac{a^2b}{4} + \frac{ab^2}{6} - \frac{b^3}{27}`,
        'a^3/8 - a^2b/4 + ab^2/6 - b^3/27',
      )}
      {factorCubeSub(
        math`\frac{a^3}{8} + \frac{3a^2}{2} + 6a + 8`,
        math`\left(\frac{a}{2} + 2\right)^3`,
        '(a/2 + 2)^3',
      )}
      {expandSub(
        '(0.5m + 0.1n)^3',
        '0.125m^3 + 0.075m^2n + 0.015mn^2 + 0.001n^3',
        '0.125m^3 + 0.075m^2n + 0.015mn^2 + 0.001n^3',
      )}
      {factorCubeSub(math`\frac{x^3}{27} - \frac{x^2}{3} + x - 1`, math`\left(\frac{x}{3} - 1\right)^3`, '(x/3 - 1)^3')}
      {expandSub('(2x - 3xy)^3', '8x^3 - 36x^3y + 54x^3y^2 - 27x^3y^3', '8x^3 - 36x^3y + 54x^3y^2 - 27x^3y^3')}
      {factorCubeSub(
        math`\frac{p^3}{8} + \frac{9p^2q}{8} + \frac{27pq^2}{8} + \frac{27q^3}{8}`,
        math`\left(\frac{p}{2} + \frac{3q}{2}\right)^3`,
        '(p/2 + 3q/2)^3',
      )}
      {expandSub(
        math`\left(2a + \frac{1}{2}ab\right)^3`,
        math`8a^3 + 6a^3b + \frac{3a^3b^2}{2} + \frac{a^3b^3}{8}`,
        '8a^3 + 6a^3b + 3a^3b^2/2 + a^3b^3/8',
      )}
      {factorCubeSub(
        math`8x^3 + 6x^2y + \frac{3xy^2}{2} + \frac{y^3}{8}`,
        math`\left(2x + \frac{y}{2}\right)^3`,
        '(2x + y/2)^3',
      )}
      {expandSub(
        math`\left(0.1n^4 - \frac{1}{2}n^3\right)^3`,
        math`0.001n^{12} - 0.015n^{11} + 0.075n^{10} - 0.125n^9`,
        '0.001n^12 - 0.015n^11 + 0.075n^10 - 0.125n^9',
      )}
      {factorCubeSub(
        math`\frac{27a^3}{8} - \frac{9a^2b}{2} + 2ab^2 - \frac{8b^3}{27}`,
        math`\left(\frac{3a}{2} - \frac{2b}{3}\right)^3`,
        '(3a/2 - 2b/3)^3',
      )}
      {expandSub(
        math`(0.2x^2 - 0.3x^3)^3`,
        math`0.008x^6 - 0.036x^7 + 0.054x^8 - 0.027x^9`,
        '0.008x^6 - 0.036x^7 + 0.054x^8 - 0.027x^9',
      )}
      {factorCubeSub(
        math`\frac{a^3}{64} - \frac{3a^2b}{32} + \frac{3ab^2}{16} - \frac{b^3}{8}`,
        math`\left(\frac{a}{4} - \frac{b}{2}\right)^3`,
        '(a/4 - b/2)^3',
      )}
      {factorCubeSub(math`27 - 9a + a^2 - \frac{a^3}{27}`, math`\left(3 - \frac{a}{3}\right)^3`, '(3 - a/3)^3')}
      {factorCubeSub(
        math`\frac{x^3}{8} + \frac{x^2y}{4} + \frac{xy^2}{6} + \frac{y^3}{27}`,
        math`\left(\frac{x}{2} + \frac{y}{3}\right)^3`,
        '(x/2 + y/3)^3',
      )}
    </Problems>

    <Problems title="Слишком много вопросов" level="easy">
      <P>Вставьте правильные числа на места вопросительных знаков.</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (3x^2 + \text{?})^2 = \text{?} + \text{?} + 16y^4
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="9x^(4) + 24x^(2)y^(2) + 16y^(4)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (3x^2 + 4y^2)^2 = 9x^4 + 24x^2y^2 + 16y^4
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Самое правое слагаемое <M>{math`16y^4`}</M> -- это крайнее слагаемое разложения{' '}
            <Dep on={squareSum}>квадрата суммы</Dep>, то есть оно равно <M>{math`b^2`}</M>. Представим его как квадрат:
          </P>
          <BlockMath>{math`
            16y^4 = (4y^2)^2
          `}</BlockMath>
          <P>
            Так мы нашли, что вместо самого первого вопросительного знака стоит <M>{math`4y^2`}</M>. Подставляем, а даже
            уже раскладываем по формуле квадрата суммы:
          </P>
          <BlockMath>{math`
            (3x^2 + 4y^2)^2 = (3x^2)^2 + 2 \cdot (3x^2) \cdot (4y^2) + (4y^2)^2 = 9x^4 + 24x^2y^2 + 16y^4
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (\text{?} - 5b^3)^2 = 49a^6 - \text{?} + \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="49a^(6) - 70a^(3)b^(3) + 25b^(6)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (7a^3 - 5b^3)^2 = 49a^6 - 70a^3b^3 + 25b^6
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Теперь раскрыто самое левое слагаемое. В формуле <Dep on={squareSum}>квадрата суммы и разности</Dep> оно
            равно <M>{math`a^2`}</M>. Представим его как квадрат:
          </P>
          <BlockMath>{math`
            49a^6 = (7a^3)^2
          `}</BlockMath>
          <P>
            Мы нашли, что вместо самого левого вопросительного знака стоит <M>{math`7a^3`}</M>. Подставляем, а дальше
            просто проводим обычное разложение по формуле квадрата разности:
          </P>
          <BlockMath>{math`
            (7a^3 - 5b^3)^2 = (7a^3)^2 - 2 \cdot (7a^3) \cdot (5b^3) + (5b^3)^2 = 49a^6 - 70a^3b^3 + 25b^6
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (4a^3 + \text{?})^2 = \text{?} + 40a^3b^4 + \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="16a^(6) + 40a^(3)b^(4) + 25b^(8)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (4a^3 + 5b^4)^2 = 16a^6 + 40a^3b^4 + 25b^8
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В этой задаче нам известно среднее слагаемое, а не крайние. В формуле{' '}
            <Dep on={squareSum}>квадрата суммы</Dep> среднее слагаемое равно <M>{math`2ab`}</M>, поэтому наша задача
            сейчас привести <M>40a^3b^4</M> к виду <M>2ab</M> чтобы понять, чему равно <M>b</M>:
          </P>
          <BlockMath>{math`
            40a^3b^4 = 2 \cdot 20a^3b^4 = 2 \cdot \underset{a}{(4a^3)} \cdot \underset{b}{(5b^4)}
          `}</BlockMath>
          <P>
            Итак, роль <M>b</M> в формуле квадрата суммы выполняет <M>{math`5b^4`}</M>. Теперь по формуле можно записать
            разложение:
          </P>
          <BlockMath>{math`
            (4a^3 + 5b^4)^2 = (4a^3)^2 + 2 \cdot (4a^3) \cdot (5b^4) + (5b^4)^2 = 16a^6 + 40a^3b^4 + 25b^8
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (\text{?} - 12a)(\text{?} + \text{?}) = 9b^2 - \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="9b^(2) - 144a^(2)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (3b - 12a)(3b + 12a) = 9b^2 - 144a^2
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Правая часть — это разность квадратов. По формуле <Dep on={diffOfSquares}>разности квадратов</Dep> правая
            часть равна <M>{math`a^2 - b^2`}</M>, значит <M>{math`9b^2`}</M> — это <M>{math`a^2`}</M>. Представим его
            как квадрат:
          </P>
          <BlockMath>{math`
            9b^2 = (3b)^2
          `}</BlockMath>
          <P>
            Итак, первый неизвестный множитель — <M>{math`3b`}</M>, а вторая скобка симметрична:{' '}
            <M>{math`(3b + 12a)`}</M>. Последний вопросительный знак — это <M>{math`b^2 = (12a)^2 = 144a^2`}</M>:
          </P>
          <BlockMath>{math`
            (3b - 12a)(3b + 12a) = (3b)^2 - (12a)^2 = 9b^2 - 144a^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (\text{?} - 5c)(\text{?} + 5c) = 16d^2 - \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="16d^(2) - 25c^(2)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (4d - 5c)(4d + 5c) = 16d^2 - 25c^2
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Второй множитель уже частично раскрыт: <M>{math`(\text{?} + 5c)`}</M>, значит роль <M>b</M> в формуле{' '}
            <Dep on={diffOfSquares}>разности квадратов</Dep> играет <M>{math`5c`}</M>. Тогда левая часть правой стороны
            — это <M>{math`a^2 = 16d^2`}</M>:
          </P>
          <BlockMath>{math`
            16d^2 = (4d)^2
          `}</BlockMath>
          <P>
            Оба вопросительных знака в скобках — <M>{math`4d`}</M>, а последний вопросительный знак —{' '}
            <M>{math`(5c)^2 = 25c^2`}</M>:
          </P>
          <BlockMath>{math`
            (4d - 5c)(4d + 5c) = (4d)^2 - (5c)^2 = 16d^2 - 25c^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (0{,}7p + \text{?})(\text{?} - 0{,}7p) = \frac{1}{9}m^8 - 0{,}49p^2
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="m^(8)/9 - 0.49p^(2)" />
        <ProblemAnswer>
          <BlockMath>{math`
            \left(0{,}7p + \frac{1}{3}m^4\right)\left(\frac{1}{3}m^4 - 0{,}7p\right) = \frac{1}{9}m^8 - 0{,}49p^2
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Это формула <Dep on={diffOfSquares}>разности квадратов</Dep>, но скобки переставлены местами:{' '}
            <M>{math`(b + a)(a - b) = a^2 - b^2`}</M>. Роль <M>b</M> играет <M>{math`0{,}7p`}</M>, значит нужно найти{' '}
            <M>a</M> из правой части:
          </P>
          <BlockMath>{math`
            \frac{1}{9}m^8 = \left(\frac{1}{3}m^4\right)^2
          `}</BlockMath>
          <P>
            Проверим: <M>{math`(0{,}7p)^2 = 0{,}49p^2`}</M> — совпадает с правой частью. Итак,{' '}
            <M>{math`a = \frac{1}{3}m^4`}</M>:
          </P>
          <BlockMath>{math`
            \left(0{,}7p + \frac{1}{3}m^4\right)\left(\frac{1}{3}m^4 - 0{,}7p\right) = \left(\frac{1}{3}m^4\right)^2 - (0{,}7p)^2 = \frac{1}{9}m^8 - 0{,}49p^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (3m^2 + \text{?})(\text{?} - \text{?}) = 9m^4 - n^6
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="9m^(4) - n^(6)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (3m^2 + n^3)(3m^2 - n^3) = 9m^4 - n^6
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В правой части формулы <Dep on={diffOfSquares}>разности квадратов</Dep> оба слагаемых закрыты. Известно
            только <M>{math`a`}</M> в первой скобке: <M>{math`3m^2`}</M>. Найдём <M>{math`a^2`}</M>:
          </P>
          <BlockMath>{math`
            9m^4 = (3m^2)^2
          `}</BlockMath>
          <P>
            Остался <M>{math`n^6 = (n^3)^2`}</M>, значит <M>{math`b = n^3`}</M>. Подставляем:
          </P>
          <BlockMath>{math`
            (3m^2 + n^3)(3m^2 - n^3) = (3m^2)^2 - (n^3)^2 = 9m^4 - n^6
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (5a^4 + \text{?})^3 = \text{?} + \text{?} + \text{?} + 8b^{12}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="125a^(12) + 150a^(8)b^(4) + 60a^(4)b^(8) + 8b^(12)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (5a^4 + 2b^4)^3 = 125a^{12} + 150a^8b^4 + 60a^4b^8 + 8b^{12}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Самое правое слагаемое <M>{math`8b^{12}`}</M> -- это крайнее слагаемое разложения{' '}
            <Dep on={cubeSum}>куба суммы</Dep>, то есть оно равно <M>{math`b^3`}</M>. Представим его как куб:
          </P>
          <BlockMath>{math`
            8b^{12} = (2b^4)^3
          `}</BlockMath>
          <P>
            Так мы нашли, что вместо самого первого вопросительного знака стоит <M>{math`2b^4`}</M>. Подставляем, а даже
            уже раскладываем по формуле куба суммы:
          </P>
          <BlockMath>{math`
            (5a^4 + 2b^4)^3 = (5a^4)^3 + 3 \cdot (5a^4)^2 \cdot (2b^4) + 3 \cdot (5a^4) \cdot (2b^4)^2 + (2b^4)^3 = 125a^{12} + 150a^8b^4 + 60a^4b^8 + 8b^{12}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (\text{?} - 2x)^3 = z^6 - \text{?} + \text{?} - \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="z^(6) - 6xz^(4) + 12x^(2)z^(2) - 8x^(3)" />
        <ProblemAnswer>
          <BlockMath>{math`
            (z^2 - 2x)^3 = z^6 - 6xz^4 + 12x^2z^2 - 8x^3
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Теперь раскрыто самое левое слагаемое. В формуле <Dep on={cubeSum}>куба суммы и разности</Dep> оно равно{' '}
            <M>{math`a^3`}</M>. Представим его как куб:
          </P>
          <BlockMath>{math`
            z^6 = (z^2)^3
          `}</BlockMath>
          <P>
            Мы нашли, что вместо самого левого вопросительного знака стоит <M>{math`z^2`}</M>. Подставляем, а дальше
            просто проводим обычное разложение по формуле куба разности:
          </P>
          <BlockMath>{math`
            (z^2 - 2x)^3 = (z^2)^3 - 3 \cdot (z^2)^2 \cdot (2x) + 3 \cdot (z^2) \cdot (2x)^2 - (2x)^3 = z^6 - 6xz^4 + 12x^2z^2 - 8x^3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            (\text{?} + 4)^3 = \text{?} + \text{?} + 240a^5 + \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="125a^(15) + 300a^(10) + 240a^(5) + 64" />
        <ProblemAnswer>
          <BlockMath>{math`
            (5a^5 + 4)^3 = 125a^{15} + 300a^{10} + 240a^5 + 64
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В этой задаче нам известно третье слагаемое разложения, а не крайние. В формуле{' '}
            <Dep on={cubeSum}>куба суммы</Dep> третье слагаемое равно <M>{math`3ab^2`}</M>, а второй элемент в скобках
            уже известен: <M>{math`b = 4`}</M>. Поэтому наша задача сейчас привести <M>240a^5</M> к виду{' '}
            <M>{math`3ab^2`}</M> чтобы понять, чему равно <M>a</M>:
          </P>
          <BlockMath>{math`
            240a^5 = 3 \cdot 80a^5 = 3 \cdot \underset{a}{(5a^5)} \cdot \underset{b^2}{4^2}
          `}</BlockMath>
          <P>
            Итак, роль <M>a</M> в формуле куба суммы выполняет <M>{math`5a^5`}</M>. Теперь по формуле можно записать
            разложение:
          </P>
          <BlockMath>{math`
            (5a^5 + 4)^3 = (5a^5)^3 + 3 \cdot (5a^5)^2 \cdot 4 + 3 \cdot (5a^5) \cdot 4^2 + 4^3 = 125a^{15} + 300a^{10} + 240a^5 + 64
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Простая разность" level="easy" script={simpleDiffOfSquares()} />

    <Problem title="Одно через другое" level="easy">
      <ProblemDescription>
        <P>Предположим, что вам известны только формулы квадрата и куба суммы:</P>
        <BlockMath>{math`
          (a+b)^2 = a^2 + 2ab + b^2 \\
          (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3
        `}</BlockMath>
        <P>
          Выведите с их помощью формулы квадрата и куба разности <M>(a-b)^2</M> и <M>(a-b)^3</M>.
        </P>
      </ProblemDescription>
      <ProblemHint>
        Перезапишите <M>(a-b)^2</M> и <M>(a-b)^3</M> через знак плюса.
      </ProblemHint>
      <ProblemSolution>
        <P>Запишем квадрат и куб разности через знак плюса, так, чтобы минус обозначал отрицание, а не разность:</P>
        <BlockMath>{math`
          (a-b)^2 = (a + (-b))^2 >>{big}
          (a-b)^3 = (a + (-b))^3
        `}</BlockMath>
        <P>А дальше уже к записи через плюс применяем известные формулы квадрата и куба суммы:</P>
        <BlockMath>{math`
          (a + (-b))^2 = a^2 + 2a(-b) + (-b)^2 = \boxed{a^2 - 2ab + b^2} \\
          (a + (-b))^3 = a^3 + 3a^2(-b) + 3a(-b)^2 + (-b)^3 = \boxed{a^3 - 3a^2b + 3ab^2 - b^3}
        `}</BlockMath>
        <QED />
      </ProblemSolution>
    </Problem>

    <Problems title="Неудобные минусы" level="easy" method>
      <SubProblem label="Один минус">
        <ProblemDescription>
          <P>
            Выясните, работает ли формула <Dep on={squareDiff}>квадрата разности</Dep> для случая, когда слагаемое с
            минусом стоит на первом месте, а не на втором:
          </P>
          <BlockMath>{math`
            (-a+b)^2 = \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Квадрат разности работает?" yes />
        <ProblemSolution>
          <P>
            Будем считать <M>-a</M> единым целым. Тогда получится раскрыть это выражение по формуле{' '}
            <Dep on={squareSum}>квадрата суммы</Dep>:
          </P>
          <BlockMath>{math`
            ((-a) + b)^2 = (-a)^2 + 2 \cdot (-a) \cdot b + b^2 = \boxed{a^2 - 2ab + b^2}
          `}</BlockMath>
          <P>
            В результате получили разложенный вид квадрата разности. Это значит, что формулу квадрата разности можно
            спокойно применять, игнорируя знак минуса в <M>-a</M>! По краям все равно будут положительные числа, а в
            центре <M>-2ab</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Два минуса">
        <ProblemDescription>
          <P>
            Выясните, работает ли формула <Dep on={squareSum}>квадрата суммы</Dep> для случая, когда оба слагаемых с
            минусом:
          </P>
          <BlockMath>{math`
            (-a - b)^2 = \text{?}
          `}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Квадрат суммы работает?" yes />
        <ProblemSolution>
          <P>
            Будем считать <M>-a</M> и <M>-b</M> едиными целыми. Тогда получится раскрыть это выражение по формуле{' '}
            <Dep on={squareSum}>квадрата суммы</Dep>:
          </P>
          <BlockMath>{math`
            ((-a) + (-b))^2 = (-a)^2 + 2 \cdot (-a) \cdot (-b) + (-b)^2 = \boxed{a^2 + 2ab + b^2}
          `}</BlockMath>
          <P>
            В результате получили разложенный вид квадрата суммы. Это значит, что формулу квадрата суммы можно спокойно
            применять, полностью игнорируя знаки минусов у <M>-a</M> и <M>-b</M>!
          </P>
          <P>Кстати, к такому же результату можно прийти, если предварительно вынести минус за скобки:</P>
          <BlockMath>{math`
            (-a - b)^2 = (-(a + b))^2 = (-1)^2(a + b)^2 = a^2 + 2ab + b^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Докажи то, докажи сё..." level="easy">
      <SubProblem>
        <ProblemDescription>
          Докажите, что разность квадратов двух последовательных натуральных чисел равна сумме этих чисел.
        </ProblemDescription>
        <ProblemHint>
          Обозначить две последовательных натуральных числа за <M>n</M> и <M>n+1</M>.
        </ProblemHint>
        <ProblemSolution>
          <P>
            Обозначим эти два последовательных числа за <M>n</M> и <M>n+1</M>. Найдём, чему равна их{' '}
            <Dep on={diffOfSquares}>разность квадратов</Dep>:
          </P>
          <BlockMath>{math`
            (n+1)^2 - n^2 = (\cancel{n} + 1 - \cancel{n})(n + 1 + n) = 1 \cdot ((n+1) + n) = (n+1) + n
          `}</BlockMath>
          <P>Действительно получилась сумма этих чисел!</P>
          <QED />
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          Докажите, что разность квадратов двух последовательных четных чисел делится нацело на <M>4</M>.
        </ProblemDescription>
        <ProblemHint>
          Любое четное число можно записать в виде <M>2n</M>.
        </ProblemHint>
        <ProblemSolution>
          <P>
            Обозначим два последовательных четных числа за <M>2n</M> и <M>2n + 2</M>. Прибавляем двойку, потому что если
            прибавить единицу, то получится нечетное число. Затем находим их{' '}
            <Dep on={diffOfSquares}>разность квадратов</Dep>:
          </P>
          <BlockMath>{math`
            (2n + 2)^2 - (2n)^2 = (\cancel{2n} + 2 - \cancel{2n})(2n + 2 + 2n) = 2 \cdot (4n + 2) = 4 \cdot (2n + 1)
          `}</BlockMath>
          <P>
            Получается, разность квадратов можно записать как произведение, один из множителей которого равен <M>4</M>.
            Это и означает, что эта разность квадратов нацело делится на <M>4</M>.
          </P>
          <QED />
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          Докажите, что разность суммы квадратов двух последовательных целых чисел и их удвоенного произведения не
          зависит от выбора чисел.
        </ProblemDescription>
        <ProblemSolution>
          <P>
            Обозначим два последовательных целых числа за <M>n</M> и <M>n+1</M>. Сумма их квадратов равна{' '}
            <M>n^2 + (n+1)^2</M>, а удвоенное произведение <M>2n(n+1)</M>. Запишем разность:
          </P>
          <BlockMath>{math`
            n^2 + (n+1)^2 - 2n(n+1)
          `}</BlockMath>
          <P>
            Если поменять местами слагаемые, то можно заметить разложенный <Dep on={squareDiff}>квадрат разности</Dep>,
            который можно запаковать:
          </P>
          <BlockMath>{math`
            n^2 - 2n(n+1) + (n+1)^2 = (n - (n+1))^2 = (-1)^2 = 1
          `}</BlockMath>
          <P>
            Получается, что разность суммы квадратов и удвоенного произведения всегда равна единице, независимо от
            выбора чисел!
          </P>
          <QED />
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem $={uniques.simpleProduct} title="Простое произведение" level="medium" script={simpleProduct()} pretty />

    <Problem title="Простая разность с произведением" level="medium" script={simpleDifference()} />

    <Problem title="Корневой переполох" level="medium">
      <ProblemDescription>
        <P>Найдите значение выражения:</P>
        <BlockMath>{math`
          (\sqrt5 + \sqrt6 + \sqrt7)(\sqrt5 + \sqrt6 - \sqrt7)(\sqrt5 - \sqrt6 + \sqrt7)(-\sqrt5 + \sqrt6 + \sqrt7)
        `}</BlockMath>
      </ProblemDescription>
      <MathValueCheck answer={104} />
      <ProblemHint>
        Примените формулу <Dep on={diffOfSquares}>разности квадратов</Dep> по отдельности сначала к первым двум скобкам,
        а потом к последним двум скобкам. В каждом из этих случаев доведите упрощение до конца.
      </ProblemHint>
      <ProblemAnswer>
        <M>104</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          В первых двух скобках в явном виде угадывается <Dep on={diffOfSquares}>разность квадратов</Dep>. Применяем
          формулу и раскрываем скобки по формуле <Dep on={squareSum}>квадрата суммы</Dep>:
        </P>
        <BlockMath>{math`
          ((\sqrt5 + \sqrt6) + \sqrt7)((\sqrt5 + \sqrt6) - \sqrt7) = \\
          (\sqrt5 + \sqrt6)^2 - (\sqrt7)^2 = \\
          (5 + 2 \cdot \sqrt{30} + 6) - 7 = \\
          4 + 2 \cdot \sqrt{30}
        `}</BlockMath>
        <P>
          Две оставшиеся скобки тоже образуют разность квадратов, если хитрым образом вынести за скобки знак минуса и
          переставить слагаемые местами. Применяем формулу и все что можем раскрываем:
        </P>
        <BlockMath>{math`
          (\sqrt5 - \sqrt6 + \sqrt7)(-\sqrt5 + \sqrt6 + \sqrt7) = \\
          (\sqrt7 + (\sqrt5 - \sqrt6))(\sqrt7 - (\sqrt5 - \sqrt6)) = \\
          (\sqrt7)^2 - (\sqrt5 - \sqrt6)^2 = \\
          7 - (5 - 2 \cdot \sqrt{30} + 6) = \\
          -4 + 2 \cdot \sqrt{30}
        `}</BlockMath>
        <P>Теперь умножаем друг на друга полученные результаты:</P>
        <BlockMath>{math`
          (4 + 2 \cdot \sqrt{30})(-4 + 2 \cdot \sqrt{30}) = \\
          (2 \cdot \sqrt{30} + 4)(2 \cdot \sqrt{30} - 4) = \\
          (2 \cdot \sqrt{30})^2 - 4^2 = \\
          4 \cdot 30 - 16 = \\
          104
        `}</BlockMath>
      </ProblemSolution>
    </Problem>

    <Problems title="Время упрощать" level="medium">
      <P>Упростите выражение:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{4x^2 + 12x + 9}{4x^2 - 9}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(2x+3)/(2x-3)" />
        <ProblemAnswer>
          <BlockMath>{math`\frac{2x + 3}{2x - 3}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Запаковываем числитель -- это <Dep on={squareSum}>квадрат суммы</Dep>:
          </P>
          <BlockMath>{math`
            4x^2 + 12x + 9 = (2x)^2 + 2 \cdot (2x) \cdot 3 + 3^2 = (2x + 3)^2
          `}</BlockMath>
          <P>
            Знаменатель -- <Dep on={diffOfSquares}>разность квадратов</Dep>:
          </P>
          <BlockMath>{math`
            4x^2 - 9 = (2x)^2 - 3^2 = (2x + 3)(2x - 3)
          `}</BlockMath>
          <P>
            Подставляем и сокращаем общий множитель <M>(2x+3)</M>:
          </P>
          <BlockMath>{math`
            \frac{(2x + 3)^2}{(2x + 3)(2x - 3)} = \frac{\cancel{(2x + 3)}(2x + 3)}{\cancel{(2x + 3)}(2x - 3)} = \frac{2x + 3}{2x - 3}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x^2 + y^2)^2 - (x^2 - y^2)^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="4*x^2*y^2" />
        <ProblemAnswer>
          <BlockMath>{math`4x^2y^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Заметим, что перед нами <Dep on={diffOfSquares}>разность квадратов</Dep>, где роль <M>a</M> играет выражение{' '}
            <M>x^2 + y^2</M>, а роль <M>b</M> -- выражение <M>x^2 - y^2</M>. Запаковываем:
          </P>
          <BlockMath>{math`
            (x^2 + y^2)^2 - (x^2 - y^2)^2 = \bigl((x^2+y^2) + (x^2-y^2)\bigr)\bigl((x^2+y^2) - (x^2-y^2)\bigr)
          `}</BlockMath>
          <P>Раскрываем каждую из двух скобок:</P>
          <BlockMath>{math`
            (x^2 + \cancel{y^2} + x^2 - \cancel{y^2})(\cancel{x^2} + y^2 - \cancel{x^2} + y^2) = 2x^2 \cdot 2y^2 = 4x^2y^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{a^2 - b^2}{a^2 + 2ab + b^2}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(a-b)/(a+b)" />
        <ProblemAnswer>
          <BlockMath>{math`\frac{a - b}{a + b}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Числитель -- это <Dep on={diffOfSquares}>разность квадратов</Dep>, знаменатель --{' '}
            <Dep on={squareSum}>квадрат суммы</Dep>. Запаковываем оба:
          </P>
          <BlockMath>{math`
            \frac{a^2 - b^2}{a^2 + 2ab + b^2} = \frac{(a - b)(a + b)}{(a + b)^2}
          `}</BlockMath>
          <P>
            Сокращаем общий множитель <M>(a+b)</M>:
          </P>
          <BlockMath>{math`
            \frac{(a - b)\cancel{(a + b)}}{\cancel{(a + b)}(a + b)} = \frac{a - b}{a + b}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x - \dfrac{9}{x}}{1 - \dfrac{3}{x}}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="x+3" />
        <ProblemAnswer>
          <BlockMath>{math`x + 3`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Умножим числитель и знаменатель на <M>x</M>, чтобы избавиться от дробей внутри дроби:
          </P>
          <BlockMath>{math`
            \frac{\left(x - \dfrac{9}{x}\right) \cdot x}{\left(1 - \dfrac{3}{x}\right) \cdot x} = \frac{x^2 - 9}{x - 3}
          `}</BlockMath>
          <P>
            В числителе получилась <Dep on={diffOfSquares}>разность квадратов</Dep> -- запаковываем и сокращаем:
          </P>
          <BlockMath>{math`
            \frac{x^2 - 9}{x - 3} = \frac{(x + 3)\cancel{(x - 3)}}{\cancel{x - 3}} = x + 3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{a^2 + 2ab + b^2 - 9}{a + b + 3}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="a+b-3" />
        <ProblemAnswer>
          <BlockMath>{math`a + b - 3`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В числителе первые три слагаемых складываются в <Dep on={squareSum}>квадрат суммы</Dep>:
          </P>
          <BlockMath>{math`
            a^2 + 2ab + b^2 - 9 = (a + b)^2 - 9
          `}</BlockMath>
          <P>
            Теперь числитель -- это <Dep on={diffOfSquares}>разность квадратов</Dep>. Запаковываем:
          </P>
          <BlockMath>{math`
            (a + b)^2 - 9 = (a + b)^2 - 3^2 = (a + b + 3)(a + b - 3)
          `}</BlockMath>
          <P>
            Сокращаем общий множитель <M>(a + b + 3)</M>:
          </P>
          <BlockMath>{math`
            \frac{(a + b + 3)(a + b - 3)}{a + b + 3} = a + b - 3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(a^2 - b^2)^2 + 4a^2b^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(a^2+b^2)^2" />
        <ProblemAnswer>
          <BlockMath>{math`(a^2 + b^2)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Раскроем <M>(a^2 - b^2)^2</M> по формуле <Dep on={squareDiff}>квадрата разности</Dep>:
          </P>
          <BlockMath>{math`
            (a^2 - b^2)^2 = a^4 - 2a^2b^2 + b^4
          `}</BlockMath>
          <P>Подставляем и собираем слагаемые:</P>
          <BlockMath>{math`
            a^4 - 2a^2b^2 + b^4 + 4a^2b^2 = a^4 + 2a^2b^2 + b^4
          `}</BlockMath>
          <P>
            Полученное выражение -- это <Dep on={squareSum}>квадрат суммы</Dep>, где роль <M>a</M> играет <M>a^2</M>, а
            роль <M>b</M> -- <M>b^2</M>. Запаковываем:
          </P>
          <BlockMath>{math`
            a^4 + 2a^2b^2 + b^4 = (a^2)^2 + 2 \cdot a^2 \cdot b^2 + (b^2)^2 = (a^2 + b^2)^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{\dfrac{a+b}{a-b} + \dfrac{a-b}{a+b}}{\dfrac{(a+b)^2 + (a-b)^2}{a^2 - b^2}}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="1" />
        <ProblemAnswer>
          <BlockMath>{math`1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Начнём с числителя. Приводим дроби к общему знаменателю <M>(a-b)(a+b)</M>:
          </P>
          <BlockMath>{math`
            \frac{a+b}{a-b} + \frac{a-b}{a+b} = \frac{(a+b)^2 + (a-b)^2}{(a-b)(a+b)}
          `}</BlockMath>
          <P>
            Раскрываем квадраты в числителе -- применяем <Dep on={squareSum}>квадрат суммы</Dep> и{' '}
            <Dep on={squareDiff}>квадрат разности</Dep>:
          </P>
          <BlockMath>{math`
            (a+b)^2 + (a-b)^2 = (a^2 + 2ab + b^2) + (a^2 - 2ab + b^2) = 2a^2 + 2b^2
          `}</BlockMath>
          <P>
            Знаменатель <M>(a-b)(a+b)</M> -- это <Dep on={diffOfSquares}>разность квадратов</Dep>. Запаковываем:
          </P>
          <BlockMath>{math`
            \frac{a+b}{a-b} + \frac{a-b}{a+b} = \frac{2a^2 + 2b^2}{a^2 - b^2}
          `}</BlockMath>
          <P>Теперь делим исходную дробь. Деление на дробь -- это умножение на обратную:</P>
          <BlockMath>{math`
            \frac{\dfrac{2a^2 + 2b^2}{a^2 - b^2}}{\dfrac{(a+b)^2 + (a-b)^2}{a^2 - b^2}} = \frac{2a^2 + 2b^2}{a^2 - b^2} \cdot \frac{a^2 - b^2}{(a+b)^2 + (a-b)^2}
          `}</BlockMath>
          <P>Раскроем знаменатель второй дроби -- мы уже делали это выше:</P>
          <BlockMath>{math`
            \frac{\cancel{2a^2 + 2b^2}}{\cancel{a^2 - b^2}} \cdot \frac{\cancel{a^2 - b^2}}{\cancel{2a^2 + 2b^2}} = 1
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Степень десятки" level="medium">
      <ProblemDescription>
        <P>
          Какое число надо подставить вместо <M>x</M>, чтобы равенство выполнялось?
        </P>
        <BlockMath>{math`
          10^x = \left( 10^{624} + 25 \right)^2 - \left( 10^{624} - 25 \right)^2
        `}</BlockMath>
      </ProblemDescription>
      <MathValueCheck answer={626} />
      <ProblemHint>
        Вообще не трогайте левую часть равенства. Вместо этого упрощайте правую часть до тех пор, пока там тоже не
        получится <M>10</M> в какой-то степени.
      </ProblemHint>
      <ProblemAnswer>
        <M>626</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Будем упрощать правую часть. Сразу же применим к ней формулу <Dep on={diffOfSquares}>разности квадратов</Dep>:
        </P>
        <BlockMath>{math`
          \left( 10^{624} + 25 \right)^2 - \left( 10^{624} - 25 \right)^2 = \\
          \left( 10^{624} + \cancel{25} + 10^{624} - \cancel{25} \right)\left( \cancel{10^{624}} + 25 - \cancel{10^{624}} + 25 \right) = \\
          2 \cdot 10^{624} \cdot 50 = 10^{624} \cdot 100 = 10^{624} \cdot 10^2 = 10^{626}
        `}</BlockMath>
        <P>Получается следующее равенство:</P>
        <BlockMath>{math`
          10^x = 10^{626}
        `}</BlockMath>
        <P>
          Чтобы равенство выполнялось, показатель степени слева должен быть такой же, как и справа, то есть{' '}
          <M>x = 626</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Дробная змейка" level="medium" pretty>
      <ProblemDescription>
        <P>Упростите выражение:</P>
        <BlockMath>{math`
          \left( 1 - \frac{1}{2^2} \right) \left( 1 - \frac{1}{3^2} \right) \left( 1 - \frac{1}{4^2} \right) \cdots \left( 1 - \frac{1}{n^2} \right)
        `}</BlockMath>
        <P>
          Чему оно равно при <M>n = 100</M>?
        </P>
      </ProblemDescription>
      <MathExpressionCheck label="Упрощенное выражение" answer="(n+1)/2n" />
      <MathValueCheck label="Значение при n=100" answer="101/200" />
      <ProblemHint>В каждой скобке приведите скобки к общему знаменателю.</ProblemHint>
      <ProblemHint>Заметьте, что в числителях получается разность квадратов.</ProblemHint>
      <ProblemHint>
        Примените формулу <Dep on={diffOfSquares}>разности квадратов</Dep>, а после этого поиграйтесь с перестановками
        множителей и сокращением.
      </ProblemHint>
      <ProblemAnswer>
        <P>Вся эта цепочка из умножений равна:</P>
        <BlockMath>{math`\frac{n+1}{2n}`}</BlockMath>
        <P>
          При <M>n=100</M> получается:
        </P>
        <BlockMath>{math`\frac{101}{200}`}</BlockMath>
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Упрощение выражения">
          <P>Приведем дроби к общему знаменателю в каждой скобке:</P>
          <BlockMath>{math`
            \left( \frac{2^2 - 1}{2^2} \right) \left( \frac{3^2 - 1}{3^2} \right) \left( \frac{4^2 - 1}{4^2} \right) \cdots \left( \frac{n^2 - 1}{n^2} \right)
          `}</BlockMath>
          <P>
            В числителях получается <Dep on={diffOfSquares}>разность квадратов</Dep>, которую мы запишем через
            произведение:
          </P>
          <BlockMath>{math`
            \left( \frac{(2-1)(2+1)}{2^2} \right) \left( \frac{(3-1)(3+1)}{3^2} \right) \left( \frac{(4-1)(4+1)}{4^2} \right) \cdots \left( \frac{(n-1)(n+1)}{n^2} \right)
          `}</BlockMath>
          <P>Получаем вот такую гигантскую дробь:</P>
          <BlockMath>{math`
            \frac{1 \cdot 3 \cdot 2 \cdot 4 \cdot 3 \cdot 5 \cdots (n-1)(n+1)}{2^2 \cdot 3^2 \cdot 4^2 \cdots n^2}
          `}</BlockMath>
          <P>
            Переставим местами множители в числителе, а в знаменателе распишем квадраты как произведение одинаковых
            множителей. После этого проводим очень масштабные сокращение, которые позволяют избавиться почти от всех
            множителей:
          </P>
          <BlockMath>{math`
            \frac{(\cancel{1 \cdot 2 \cdot 3 \cdots (n-1)})(\cancel{3 \cdot 4 \cdot 5 \cdots n} \cdot (n+1))}{(2 \cdot \cancel{3 \cdots (n-1)} \cdot n) \cdot (\cancel{2 \cdot 3 \cdots n})} =
            \frac{n+1}{2n}
          `}</BlockMath>
        </ProblemSection>
        <ProblemSection title="Значение при n=100">
          <P>
            Подставляем <M>n=100</M> в упрощенное выражение:
          </P>
          <BlockMath>{math`
            \frac{n+1}{2n} = \frac{100+1}{2 \cdot 100} = \frac{101}{200}
          `}</BlockMath>
        </ProblemSection>
      </ProblemSolution>
    </Problem>

    <Problem title="Разность показателей" level="medium">
      <ProblemDescription>
        <BlockMath>{math`
          2^x - 2^y = 1 >>{big}
          4^x - 4^y = \frac{5}{3} >>{big}
          x - y = \text{?}
        `}</BlockMath>
      </ProblemDescription>
      <MathValueCheck answer={2} />
      <ProblemHint>
        Во втором равенстве поиграйтесь со степениями и воспользуйтесь формулой{' '}
        <Dep on={diffOfSquares}>разности квадратов</Dep>.
      </ProblemHint>
      <ProblemHint>
        <P>Воспользуйтесь следующем свойством степеней:</P>
        <BlockMath>{math`
          \frac{a^{n}}{a^{m}} = a^{n-m}
        `}</BlockMath>
      </ProblemHint>
      <ProblemAnswer>
        <M>2</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>Во втором равенстве представим четверки как двойки в квадрате и поиграемся со степенями:</P>
        <BlockMath>{math`
          \frac{5}{3} = 4^x - 4^y = (2^2)^x - (2^2)^y = 2^{2x} - 2^{2y} = (2^x)^2 - (2^y)^2
        `}</BlockMath>
        <P>
          Получили <Dep on={diffOfSquares}>разность квадратов</Dep>:
        </P>
        <BlockMath>{math`
          \frac{5}{3} = (2^x)^2 - (2^y)^2 = (2^x + 2^y)\underbrace{(2^x - 2^y)}_{\small 1} \\
          2^x + 2^y = \frac{5}{3} \\
        `}</BlockMath>
        <P>Рассмотрим две суммы. Вот первая:</P>
        <BlockMath>{math`
          (2^x + \cancel{2^y}) + (2^x - \cancel{2^y}) = \frac{5}{3} + 1 \\
          2 \cdot 2^x = \frac{8}{3} \\
          2^x = \frac{4}{3}
        `}</BlockMath>
        <P>Вот вторая:</P>
        <BlockMath>{math`
          (2^x + \cancel{2^y}) - (2^x - \cancel{2^y}) = \frac{5}{3} - 1 \\
          2 \cdot 2^y = \frac{2}{3} \\
          2^y = \frac{1}{3}
        `}</BlockMath>
        <P>Деление степеней с одинаковым основанием можно записать через разность их показателей:</P>
        <BlockMath>{math`
          \frac{2^x}{2^y} = 2^{x-y} = \frac{\frac{4}{3}}{\frac{1}{3}} = 4 = 2^2 \\
          2^{x-y} = 2^2 \\
        `}</BlockMath>
        <P>
          Чтобы равенство выполнялось, разность <M>x-y</M> обязана равняться <M>2</M>:
        </P>
        <BlockMath>{math`
          x - y = 2
        `}</BlockMath>
      </ProblemSolution>
    </Problem>

    <Problem title="Тайна числа 693" level="medium" pretty>
      <ProblemDescription>
        Разность квадратов двух двухзначных чисел, записанных одними и теми же цифрами, равна <M>693</M>. Найдите эти
        числа.
      </ProblemDescription>
      <MathValueCheck label="Два числа, записанных одними и теми же цифрами" answers={[43, 34]} />
      <ProblemHint>
        <P>
          Двузначное число, записанное цифрами <M>n</M> и <M>m</M>, выглядит так: <M>10 \cdot n + m</M>. Примеры:
        </P>
        <BlockMath>{math`
          59 = 10 \cdot 5 + 9 >>{big}
          13 = 10 \cdot 1 + 3 >>{big}
          92 = 10 \cdot 9 + 2 >>{big}
        `}</BlockMath>
      </ProblemHint>
      <ProblemAnswer>
        <M>43</M> и <M>34</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Обозначим неизвестные две цифры, из которых состоят оба двузначных числа за <M>n</M> и <M>m</M>. Тогда оба
          этих числа можно записать как <M>10n + m</M> и <M>10m + n</M>. Запишем их{' '}
          <Dep on={diffOfSquares}>разность квадратов</Dep>, которая по условию равна <M>693</M>:
        </P>
        <BlockMath>{math`
          (10n + m)^2 - (10m + n)^2 = 693 \\
          (10n + m + 10m + n)(10n + m - 10m - n) = 693 \\
          (11n + 11m)(9n - 9m) = 693 \\
          99(n + m)(n - m) = 693
        `}</BlockMath>
        <P>
          Слева получили набор множителей, один из которых <M>99</M>. Избавимся от него, чтобы работать с более простыми
          числами.
        </P>
        <BlockMath>{math`
          (n + m)(n - m) = \frac{693}{99} = 7 \\
          (n + m)(n - m) = 7
        `}</BlockMath>
        <P>
          Получили следующую ситуацию -- какие-то два натуральных числа <M>n+m</M> и <M>n-m</M> при умножении друг на
          друга дают <M>7</M>. Какие это могут быть числа? Только числа <M>7</M> и <M>1</M>, иначе семерку никак не
          получить!
        </P>
        <BlockMath>{math`
          n + m = 7 \\
          n - m = 1
        `}</BlockMath>
        <P>
          Напоминаю, что <M>n</M> и <M>m</M> -- это цифры, то есть находятся в диапазоне от <M>1</M> до <M>9</M>.
          Простым подбором находим, что <M>n=4</M> и <M>m=3</M> -- единственный вариант, который подходит под эти
          условия.
        </P>
        <P>
          Значит искомые два двузначных числа это <M>43</M> и <M>34</M>!
        </P>
      </ProblemSolution>
    </Problem>

    <Problems title="Сумма и разность кубов" level="medium" method>
      <P>
        В отличие от квадратов, где имеется особая формула разности квадратов, для кубов существуют аж две формулы:
        сумма кубов и разность кубов.
      </P>
      <BlockMath>{math`
        a^3 \pm b^3 = (a \pm b)(a^2 \mp ab \pm b^2)
      `}</BlockMath>
      {expandSub('(a + 1)(a^2 - a + 1)', 'a^3 + 1', 'a^3+1')}
      {factorDiffSquaresSub('a^3 + 8', '(a + 2)(a^2 - 2a + 4)', '(a+2)(a^2-2a+4)')}
      {expandSub('(x - 2)(x^2 + 2x + 4)', 'x^3 - 8', 'x^3-8')}
      {factorDiffSquaresSub('x^3 - 27', '(x - 3)(x^2 + 3x + 9)', '(x-3)(x^2+3x+9)')}
      {expandSub('(2a + 3)(4a^2 - 6a + 9)', '8a^3 + 27', '8a^3+27')}
      {factorDiffSquaresSub('1 + y^3', '(1 + y)(1 - y + y^2)', '(1+y)(1-y+y^2)')}
      {expandSub('(3 - b)(9 + 3b + b^2)', '27 - b^3', '27-b^3')}
      {factorDiffSquaresSub('m^3 - 27', '(m - 3)(m^2 + 3m + 9)', '(m-3)(m^2+3m+9)')}
      {expandSub('(1 + m^2)(1 - m^2 + m^4)', '1 + m^6', 'm^(6)+1')}
      {factorDiffSquaresSub('p^3 - 1', '(p - 1)(p^2 + p + 1)', '(p-1)(p^2+p+1)')}
      {expandSub('(3a - 4)(9a^2 + 12a + 16)', '27a^3 - 64', '27a^3-64')}
      {factorDiffSquaresSub('1 - 8x^3', '(1 - 2x)(1 + 2x + 4x^2)', '(1-2x)(4x^2+2x+1)')}
      {expandSub('(3x - 4)(9x^2 + 12x + 16)', '27x^3 - 64', '27x^3-64')}
      {factorDiffSquaresSub('27 - 8a^3', '(3 - 2a)(9 + 6a + 4a^2)', '(3-2a)(4a^2+6a+9)')}
      {expandSub(
        math`\left(a + \frac{1}{2}\right)\left(a^2 - \frac{1}{2}a + \frac{1}{4}\right)`,
        math`a^3 + \frac{1}{8}`,
        'a^3+1/8',
      )}
      {factorDiffSquaresSub('8y^3 + x^3', '(2y + x)(4y^2 - 2xy + x^2)', '(2y+x)(4y^2-2xy+x^2)')}
      {expandSub(
        math`\left(\frac{1}{2}x - \frac{1}{3}y\right)\left(\frac{1}{4}x^2 + \frac{1}{6}xy + \frac{1}{9}y^2\right)`,
        math`\frac{x^3}{8} - \frac{y^3}{27}`,
        'x^3/8-y^3/27',
      )}
      {factorDiffSquaresSub('x^6 - y^9', '(x^2 - y^3)(x^4 + x^2 y^3 + y^6)', '(x^2-y^3)(x^4+x^2*y^3+y^6)')}
      {expandSub(
        math`\left(\frac{1}{2}a - 2b\right)\left(\frac{1}{4}a^2 + ab + 4b^2\right)`,
        math`\frac{a^3}{8} - 8b^3`,
        'a^3/8-8b^3',
      )}
      {factorDiffSquaresSub('27a^3 - 8y^3', '(3a - 2y)(9a^2 + 6ay + 4y^2)', '(3a-2y)(9a^2+6ay+4y^2)')}
      {expandSub('(16 + 4x + x^2)(x - 4)', 'x^3 - 64', 'x^3-64')}
      {factorDiffSquaresSub(
        math`1000x^{12}y^3 + 0{,}001a^9b^{15}`,
        math`(10x^4y + 0{,}1a^3b^5)(100x^8y^2 - x^4ya^3b^5 + 0{,}01a^6b^{10})`,
        '(10x^4*y+0.1a^3*b^5)(100x^8*y^2-x^4*y*a^3*b^5+0.01a^6*b^10)',
      )}
      {expandSub('(49 + b^2 - 7b)(b + 7)', 'b^3 + 343', 'b^3+343')}
    </Problems>

    <Problem title="Любое нечетное это разность квадратов" level="hard" pretty>
      <ProblemDescription>
        Докажите, что любое нечетное число может быть записано как <Dep on={diffOfSquares}>разность квадратов</Dep>{' '}
        каких-то двух чисел. Найдите числа, разность квадратов которых равна <M>7</M>, <M>111</M>, <M>507</M>.
      </ProblemDescription>
      <MathValueCheck label="Числа, разность квадратов которых равна 7" answers={[4, 3]} />
      <MathValueCheck label="Числа, разность квадратов которых равна 111" answers={[56, 55]} />
      <MathValueCheck label="Числа, разность квадратов которых равна 507" answers={[254, 253]} />
      <ProblemHint>
        Любое нечетное число можно записать в виде <M>2k + 1</M>.
      </ProblemHint>
      <ProblemHint>
        Преобразуйте выражение <M>2k + 1</M> так, чтобы оно превратилось в две скобки из формулы разности квадратов.
      </ProblemHint>
      <ProblemHint>
        В обеих скобках трюк основывается на сложении, либо вычитании <M>k</M>.
      </ProblemHint>
      <ProblemHint>
        Скобку с минусом можно получить из <M>1</M>, то есть там должна быть какая-то хитрая разность, которая равна
        единице.
      </ProblemHint>
      <ProblemAnswer>
        <BlockMath>{math`
          7 = 4^2 - 3^2 >>{big}
          111 = 56^2 - 55^2 >>{big}
          507 = 254^2 - 253^2
        `}</BlockMath>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Любое нечетное число, то есть число, которое не делится на <M>2</M>, можно записать в виде <M>2k + 1</M>.
          Теперь нам надо выражение хитрым образом превратить в две скобки из формулы разности квадратов -- одна скобка
          с плюсом, а вторая с минусом. Для скобки с плюсом можно разбить <M>2k</M> на два слагаемых:
        </P>
        <BlockMath>{math`
          2k + 1 = \left[ (k+1) + k \right] = \ldots
        `}</BlockMath>
        <P>
          А откуда взять вторую скобку? Мы же все что могли использовали! Из явных данных да, но ведь к любому числу
          можно без изменений дописать умножение на <M>1</M>
        </P>
        <BlockMath>{math`
          \ldots = \left[ (k+1) + k \right] \cdot \brand{1} = \ldots
        `}</BlockMath>
        <P>
          Теперь эту единцу надо записать в виде скобки, которая к этой единице сводится. Для этого можно повторить
          левую скобку, но уже вычесть <M>k</M>:
        </P>
        <BlockMath>{math`
          \ldots = \left[ (k+1) + k \right] \cdot \underbrace{\left[ (k+1) - k \right]}_{\small 1}
        `}</BlockMath>
        <P>
          Мы получили две одинаковые скобки, которые отличаются только знаком между слагаемыми. Применяем формулу
          разности квадратов:
        </P>
        <BlockMath>{math`
          2k + 1 = \left[ (k+1) + k \right] \cdot \left[ (k+1) - k \right] = (k+1)^2 - k^2 \\
          2k + 1 = (k+1)^2 - k^2
        `}</BlockMath>
        <QED />
        <Hr />
        <P>
          Теперь запишем разность квадратов для чисел <M>7</M>, <M>111</M> и <M>507</M>. Для этого запишем все эти числа
          в виде <M>2k + 1</M>, ведь нам нужно найти <M>k</M> для каждого числа. Для этого вычитаем из каждого единицу и
          делим на <M>2</M>:
        </P>
        <BlockMath>{math`
          7 = 2 \cdot 3 + 1 \Rightarrow 3 >>{big}
          111 = 2 \cdot 55 + 1 \Rightarrow 55 >>{big}
          507 = 2 \cdot 253 + 1 \Rightarrow 253
        `}</BlockMath>
        <P>
          Используем найденные <M>k</M> для записи разности квадратов:
        </P>
        <BlockMath>{math`
          7 = \boxed{4^2 - 3^2} >>{big}
          111 = \boxed{56^2 - 55^2} >>{big}
          507 = \boxed{254^2 - 253^2}
        `}</BlockMath>
      </ProblemSolution>
    </Problem>

    <Problem $={uniques.cubeSumDiffFactorization} title="Факторизация куба суммы и разности" level="hard">
      <ProblemDescription>
        <P>Получите из развернутых выражений куба суммы и разности их запись через скобки в кубе:</P>
        <BlockMath>{math`
          a^3 + 3a^2b + 3ab^2 + b^3 \overset{\text{?}}{\implies} (a+b)^3 \\
          a^3 - 3a^2b + 3ab^2 - b^3 \overset{\text{?}}{\implies} (a-b)^3
        `}</BlockMath>
      </ProblemDescription>
      <ProblemHint>
        Для решения вам потребуется и выносить общие множители из части слагаемых, разбивать полученные выражения на
        более мелкие части, вновь раскрывать скобки и опять выносить общие множители.
      </ProblemHint>
      <ProblemHint>
        <P>
          Из первых двух слагаемых вынесите <M>a^2</M>, из последних двух <M>b^2</M>.
        </P>
        <BlockMath>{math`
          a^3 + 3a^2b + 3ab^2 + b^3 = a^2(a+3b) + b^2(3a+b) \\
          a^3 - 3a^2b + 3ab^2 - b^3 = a^2(a-3b) + b^2(3a-b)
        `}</BlockMath>
      </ProblemHint>
      <ProblemHint>
        <P>
          Разбейте скобки вида <M>a \pm 3b</M> так, чтобы получить в явном виде <M>a \pm b</M> в каждой из них:
        </P>
        <BlockMath>{math`
          a^2(a+3b) + b^2(3a+b) = a^2((a+b) + 2b) + b^2((a+b) + 2a) \\
          a^2(a-3b) + b^2(3a-b) = a^2((a-b) - 2b) + b^2((a-b) - 2a)
        `}</BlockMath>
        <P>
          После этого раскройте скобки и вынесите за скобки общий множитель <M>(a \pm b)</M>.
        </P>
      </ProblemHint>
      <ProblemSolution>
        <P>
          Будем проводить вывод для формулы куба суммы. Вывод для куба разности точно такой же. Сначала из первых двух
          слагаемых вынесем за скобки <M>a^2</M>, из последних двух <M>b^2</M>.
        </P>
        <BlockMath>{math`
          a^2(a+3b) + b^2(3a+b)
        `}</BlockMath>
        <P>
          Внутри скобок образуем еще одни скобки вида <M>(a+b)</M>:
        </P>
        <BlockMath>{math`
          a^2((a+b) + 2b) + b^2((a+b) + 2a)
        `}</BlockMath>
        <P>Раскрываем обе внешние скобки:</P>
        <BlockMath>{math`
          a^2(a+b) + 2a^2b + b^2(a+b) + 2ab^2
        `}</BlockMath>
        <P>
          Выносим общий множитель <M>(a+b)</M> из первого и третьего слагаемых и общий множитель <M>2ab</M> из второго и
          четвертого слагаемых:
        </P>
        <BlockMath>{math`
          (a+b)(a^2 + b^2) + 2ab(a+b)
        `}</BlockMath>
        <P>
          Еще раз выносим общий множитель <M>(a+b)</M>:
        </P>
        <BlockMath>{math`
          (a+b)(a^2 + 2ab + b^2)
        `}</BlockMath>
        <P>Во вторых скобках получили формулу разложенного квадрата суммы. Заменяем на запакованную форму:</P>
        <BlockMath>{math`
          (a+b)(a+b)^2 = (a+b)^3
        `}</BlockMath>
        <QED />
      </ProblemSolution>
    </Problem>

    <Problem title="Сложные корни с подвохом" level="hard">
      <ProblemDescription>
        <P>Известно, что</P>
        <BlockMath>{math`
          x = \frac{4}{(\sqrt{5} + 1)(\sqrt[4]{5} + 1)(\sqrt[8]{5} + 1)(\sqrt[16]{5} + 1)}
        `}</BlockMath>
        <P>
          Чем равняется выражение <M>{math`(1+x)^{48}`}</M>?
        </P>
      </ProblemDescription>
      <MathValueCheck answer={125} />
      <ProblemHint>
        Домножьте числитель и знаменатель на те же скобки, что и в знаменателе, но со знаком минуса.
      </ProblemHint>
      <ProblemHint>
        В знаменателе воспользуйтесь формулой <Dep on={diffOfSquares}>разности квадратов</Dep> по отдельности для каждой
        пары скобок.
      </ProblemHint>
      <ProblemAnswer>
        <M>125</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Домножаем числитель и знаменатель на те же скобки, что и в знаменателе, но со знаком минуса. Так как мы
          умножем на одинаковые выражения, сама дробь никак не поменяется:
        </P>
        <BlockMath freeze>{math`
          \frac{4 \yellow{(\sqrt{5} - 1) (\sqrt[4]{5} - 1) (\sqrt[8]{5} - 1) (\sqrt[16]{5} - 1) }}{(\sqrt{5} + 1)\yellow{(\sqrt{5} - 1)}(\sqrt[4]{5} + 1)\yellow{(\sqrt[4]{5} - 1)}(\sqrt[8]{5} + 1)\yellow{(\sqrt[8]{5} - 1)}(\sqrt[16]{5} + 1)\yellow{(\sqrt[16]{5} - 1)}}
        `}</BlockMath>
        <P>
          В знаменателе для каждой пары скобок применяем формулу <Dep on={diffOfSquares}>разности квадратов</Dep>, после
          чего применяем масштабные сокращения:
        </P>
        <BlockMath>{math`
          \frac{\cancel{4} \cancel{(\sqrt{5} - 1)} \cancel{(\sqrt[4]{5} - 1)} \cancel{(\sqrt[8]{5} - 1)} (\sqrt[16]{5} - 1)}{\cancel{(5 - 1)} \cancel{(\sqrt{5} - 1)}\cancel{(\sqrt[4]{5} - 1)}\cancel{(\sqrt[8]{5} - 1)}} = \\
          \sqrt[16]{5} - 1
        `}</BlockMath>
        <P>
          Мы только что упростили выражение, которое равняется <M>x</M>. Подставляем теперь его в финальное выражение:
        </P>
        <BlockMath>{math`
          (1+x)^{48} = (\cancel{1} + \sqrt[16]{5} - \cancel{1})^{48} = (\sqrt[16]{5})^{48} = 5^{\frac{48}{16}} = 5^3 = 125
        `}</BlockMath>
      </ProblemSolution>
    </Problem>

    <Problem title="Сверхдлинные числа" level="hard">
      <ProblemDescription>
        <P>Известно, что</P>
        <BlockMath>{math`
          438271606^2 = 192082000625819236
        `}</BlockMath>
        <P>
          Не проводя возведение в квадрат вручную, найдите, чему равна сумма цифр числа <M>561728395^2</M>?
        </P>
      </ProblemDescription>
      <MathValueCheck answer={91} />
      <ProblemHint>Отдельно вручную найдите, чему равна сумма данных чисел (без квадратов).</ProblemHint>
      <ProblemHint>
        Используя формулу <Dep on={diffOfSquares}>разности квадратов</Dep>, найдите, чему равен квадрат требуемого
        числа, используя уже известные вам данные.
      </ProblemHint>
      <ProblemAnswer>
        <M>91</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>Посмотрим, чему равна сумма и разность исходных чисел, без квадратов:</P>
        <BlockMath>438271606 + 561728395 = 1000000001 \\ 561728395 - 438271606 = 123456789</BlockMath>
        <P>Умножить эти два числа друг на друга на самом деле очень просто:</P>
        <BlockMath>{math`
          (10000000000 + 1) \cdot 123456789 = 123456789 \cdot 1000000000 + 123456789 = 123456789000000000 + 123456789 = 123456789123456789
        `}</BlockMath>
        <P>
          По <Dep on={diffOfSquares}>разности квадратов</Dep> получается следующая ситуация:
        </P>
        <BlockMath>{math`
          123456789123456789 = 561728395^2 - 438271606^2
        `}</BlockMath>
        <P>
          Теперь легко найти и само число <M>561728395^2</M>:
        </P>
        <BlockMath>{math`
          561728395^2 = 123456789123456789 + 438271606^2 = 123456789123456789 + 192082000625819236 = 315538789749275025
        `}</BlockMath>
        <P>Осталось найти сумму цифр получившегося числа:</P>
        <BlockMath>{math`
          3 + 1 + 5 + 5 + 3 + 8 + 7 + 8 + 9 + 7 + 4 + 9 + 2 + 7 + 5 + 0 + 2 + 5 = \boxed{91}
        `}</BlockMath>
      </ProblemSolution>
    </Problem>
  </>
));
