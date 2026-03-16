import { quadraticOrNot } from './article';

// #region Problem Scripts
//

import quadraticConstructor from './scripts/quadratic-constructor';

//
// #endregion

// #region Links
//

const sameActionRule = $CONTENT.basics.equations.elementary.article.$sameActionRule;
const alwaysGlobal = $CONTENT.basics.equations.elementary.article.$alwaysGlobal;
const quadraticPolynomial = $CONTENT.basics.equations.quadratic.whatIsIt.article.$quadraticPolynomial;
const quadraticEquation = $CONTENT.basics.equations.quadratic.whatIsIt.article.$quadraticEquation;

//
// #endregion

export default defineProse()(() => (
  <>
    <Problems title="Игра с трёхчленами" level="easy">
      <P>
        Приведите выражение к виду <Dep on={quadraticPolynomial}>квадратного трёхчлена</Dep>, если это возможно.
        Определите, чему равны его коэффициенты <M>A</M>, <M>B</M> и <M>C</M>.
      </P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 + 5x + 6`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, 5, 6)}
        <ProblemAnswer>
          <P>Выражение уже имеет вид квадратного трёхчлена.</P>
          <BlockMath>{math`A = 1 >> B = 5 >> C = 6`}</BlockMath>
        </ProblemAnswer>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`2y^2 - y + 2`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 2, -1, 2)}
        <ProblemAnswer>
          <P>Выражение уже имеет вид квадратного трёхчлена.</P>
          <BlockMath>{math`A = 2 >> B = -1 >> C = 2`}</BlockMath>
        </ProblemAnswer>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`j^2 + 36`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, 0, 36)}
        <ProblemAnswer>
          <P>Квадратный трёхчлен:</P>
          <BlockMath>{math`j^2 + 0 \cdot j + 36`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = 0 >> C = 36`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Выражение уже почти имеет вид квадратного трёхчлена, но не хватает слагаемого с коэффициентом <M>B</M>,
            который равен <M>0</M>:
          </P>
          <BlockMath>{math`j^2 + 0 \cdot j + 36`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = 0 >> C = 36`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`99z - 5`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(false)}
        <ProblemAnswer>Выражение не может быть приведено к виду квадратного трёхчлена.</ProblemAnswer>
        <ProblemSolution>
          <P>
            Чтобы привести его к такому виду, нам потребуется приравнять коэффициент <M>A</M> к <M>0</M>, что
            противоречит <Dep on={quadraticPolynomial}>определению</Dep> квадратного трёхчлена:
          </P>
          <BlockMath>{math`\underbrace{0\cdot z^2}_{\text{Нельзя!}} + 99z - 5`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`i^2`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, 0, 0)}
        <ProblemAnswer>
          <P>Квадратный трёхчлен:</P>
          <BlockMath>{math`i^2 + 0 \cdot i + 0`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = 0 >> C = 0`}</BlockMath>
        </ProblemAnswer>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`-\left(3t^2 + 999 - t\right)`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, -3, 1, -999)}
        <ProblemAnswer>
          <P>Квадратный трёхчлен:</P>
          <BlockMath>{math`-3t^2 + t - 999`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = -3 >> B = 1 >> C = -999`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем скобки:</P>
          <BlockMath>{math`-3t^2 - 999 + t`}</BlockMath>
          <P>Меняем местами слагаемые:</P>
          <BlockMath>{math`-3t^2 + t - 999`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = -3 >> B = 1 >> C = -999`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x\left(\frac{1}{2}x + 3x - 11\right)`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, ['7/2', '1/2+3', '3+1/2'], -11, 0)}
        <ProblemAnswer>
          <P>Квадратный трёхчлен:</P>
          <BlockMath>{math`\left(\frac{1}{2} + 3\right)x^2 - 11x + 0`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = \frac{1}{2} + 3 >> B = -11 >> C = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем скобки:</P>
          <BlockMath>{math`\frac{1}{2}x^2 + 3x^2 - 11x`}</BlockMath>
          <P>Приводим подобные слагаемые:</P>
          <BlockMath>{math`\left(\frac{1}{2} + 3\right)x^2 - 11x`}</BlockMath>
          <P>
            Добавляем недостающее слагаемое с коэффициентом <M>C = 0</M>:
          </P>
          <BlockMath>{math`\left(\frac{1}{2} + 3\right)x^2 - 11x + 0`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = \frac{1}{2} + 3 >> B = -11 >> C = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(3y - 1)^2 - 9y^2`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(false)}
        <ProblemAnswer>Выражение не может быть приведено к виду квадратного трёхчлена.</ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем скобки (или используем формулу квадрата разности):</P>
          <BlockMath>{math`\cancel{9y^2} - 6y + 1 - \cancel{9y^2} \\ -6y + 1`}</BlockMath>
          <P>Выражение не может быть приведено к виду квадратного трёхчлена. Чтобы привести его к такому виду,</P>
          <P>
            нам потребуется приравнять коэффициент <M>A</M> к <M>0</M>, что противоречит{' '}
            <Dep on={quadraticPolynomial}>определению</Dep> квадратного трёхчлена:
          </P>
          <BlockMath>{math`\underbrace{0\cdot y^2}_{\text{Нельзя!}} - 6y + 1`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(4t - 5)t - t\left(\frac{1}{3}t + 2\right) + 1`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, ['11/3'], -7, 1)}
        <ProblemAnswer>
          <P>Квадратный трёхчлен:</P>
          <BlockMath>{math`\frac{11}{3}t^2 - 7t + 1`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = \frac{11}{3} >> B = -7 >> C = 1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем скобки:</P>
          <BlockMath>{math`4t^2 - 5t - \frac{1}{3}t^2 - 2t + 1`}</BlockMath>
          <P>Приводим подобные слагаемые:</P>
          <BlockMath>{math`
            \left(4 - \frac{1}{3}\right)t^2 - 5t - 2t + 1 \\
            \left(\frac{12}{3} - \frac{1}{3}\right)t^2 - 7t + 1 \\
            \frac{11}{3}t^2 - 7t + 1
          `}</BlockMath>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = \frac{11}{3} >> B = -7 >> C = 1`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{5k^2 + 2 - 9k}{3}`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, ['5/3'], -3, ['2/3'])}
        <ProblemAnswer>
          <P>Квадратный трёхчлен:</P>
          <BlockMath>{math`\frac{5}{3}k^2 - 3k + \frac{2}{3}`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = \frac{5}{3} >> B = -3 >> C = \frac{2}{3}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Разбиваем большую дробь на три поменьше:</P>
          <BlockMath>{math`\frac{5k^2}{3} + \frac{2}{3} - \frac{9k}{3}`}</BlockMath>
          <P>Меняем местами слагаемые и проводим упрощение:</P>
          <BlockMath>{math`\frac{5k^2}{3} - \frac{9k}{3} + \frac{2}{3} \\ \frac{5}{3}k^2 - 3k + \frac{2}{3}`}</BlockMath>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = \frac{5}{3} >> B = -3 >> C = \frac{2}{3}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(t-3)(5+t)`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, 2, -15)}
        <ProblemAnswer>
          <P>Квадратный трёхчлен:</P>
          <BlockMath>{math`t^2 + 2t - 15`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = 2 >> C = -15`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем скобки и приводим подобные слагаемые:</P>
          <BlockMath>{math`
            5t + t^2 - 15 - 3t \\
            t^2 + (5 - 3)t - 15 \\
            t^2 + 2t - 15
          `}</BlockMath>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = 2 >> C = -15`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Точно квадратное уравнение?" level="easy">
      <P>
        Определите, является ли данное уравнение <Dep on={quadraticEquation}>квадратным</Dep>. Если да, приведите его к{' '}
        <B>общему виду</B> квадратного уравнения. Определите, чему равны его коэффициенты <M>A</M>, <M>B</M> и <M>C</M>.
      </P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`11x^2 + 2x - 3 = 0`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 11, 2, -3)}
        <ProblemAnswer>
          <P>Уравнение уже имеет общий вид. Коэффициенты:</P>
          <BlockMath>{math`A = 11 >> B = 2 >> C = -3`}</BlockMath>
        </ProblemAnswer>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`y = y^2 + 10`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, -1, 10)}
        <ProblemAnswer>
          <P>Общий вид квадратного уравнения:</P>
          <BlockMath>{math`y^2 - y + 10 = 0`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = -1 >> C = 10`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычитаем <M>y</M> из обеих частей:
          </P>
          <BlockMath>{math`0 = y^2 - y + 10`}</BlockMath>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = -1 >> C = 10`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`3z^2 + 1 = \frac{6}{2}z^2 - 999z`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(false)}
        <ProblemAnswer>Уравнение не является квадратным.</ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычитаем <M>{math`\frac{6}{2}z^2`}</M> из
            обеих частей:
          </P>
          <BlockMath>{math`3z^2 - \frac{6}{2}z^2 + 1 = -999z`}</BlockMath>
          <P>Приводим подобные слагаемые:</P>
          <BlockMath>{math`
            \left(3 - \frac{6}{2}\right)z^2 + 1 = -999z \\
            \left(3 - 3\right)z^2 + 1 = -999z \\
            0 + 1 = -999z \\
            1 = -999z
          `}</BlockMath>
          <P>
            Это уравнение не является квадратным, так как в нём нет слагаемого с <M>z^2</M>. А добавить его с нулевым
            коэффициентом мы не можем, потому что это противоречит <Dep on={quadraticPolynomial}>определению</Dep>{' '}
            квадратного трёхчлена:
          </P>
          <BlockMath>{math`\underbrace{0\cdot z^2}_{\text{Нельзя!}} + 1 = -999z`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{1}{t} = t`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 1, 0, -1)}
        <ProblemAnswer>
          <P>Общий вид квадратного уравнения:</P>
          <BlockMath>{math`t^2 + 0 \cdot t - 1 = 0`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = 0 >> C = -1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> "вытаскиваем" <M>t</M> из знаменателя,
            умножая обе части на <M>t</M>:
          </P>
          <BlockMath>{math`1 = t^2`}</BlockMath>
          <P>
            Вычитаем <M>1</M> из обеих частей:
          </P>
          <BlockMath>{math`0 = t^2 - 1`}</BlockMath>
          <P>Приводим к общему виду квадратного уравнения:</P>
          <BlockMath>{math`0 = t^2 + 0 \cdot t - 1`}</BlockMath>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = 0 >> C = -1`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{11}{x^2} + x + 2 = \frac{x^3 - 10}{x^2}`}</BlockMath>
        </ProblemDescription>
        {quadraticOrNot(true, 2, 0, 21)}
        <ProblemAnswer>
          <P>Общий вид квадратного уравнения:</P>
          <BlockMath>{math`2x^2 + 0 \cdot x + 21 = 0`}</BlockMath>
          <P>Коэффициенты:</P>
          <BlockMath>{math`A = 2 >> B = 0 >> C = 21`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Видим с обеих сторон дробь с <M>x^2</M> в знаменателе. Можем одним действием избавиться от дробей, умножив
            по <Dep on={sameActionRule}>правилу одинакового действия</Dep> обе части на <M>x^2</M>, не забывая про{' '}
            <Dep on={alwaysGlobal}>глобальность</Dep> этого действия:
          </P>
          <BlockMath>{math`x^2\left(\frac{11}{x^2} + x + 2\right) = x^2\left(\frac{x^3 - 10}{x^2}\right)`}</BlockMath>
          <P>Раскрываем скобки и сокращаем:</P>
          <BlockMath>{math`11 + x^3 + 2x^2 = x^3 - 10`}</BlockMath>
          <P>
            Вычитаем <M>x^3</M> из обеих частей:
          </P>
          <BlockMath>{math`11 + 2x^2 = -10`}</BlockMath>
          <P>
            Прибавляем <M>10</M> к обеим частям:
          </P>
          <BlockMath>{math`21 + 2x^2 = 0`}</BlockMath>
          <P>Приводим к общему виду квадратного уравнения:</P>
          <BlockMath>{math`2x^2 + 0 \cdot x + 21 = 0`}</BlockMath>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 2 >> B = 0 >> C = 21`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Квадратный конструктор" level="easy" script={quadraticConstructor()} />
  </>
));
