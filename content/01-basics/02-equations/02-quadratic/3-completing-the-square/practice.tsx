import { mathRegexp } from '@open-math/shared/utils';
import { RootsCheck } from '#project/utils/roots';

import completeTheSquare from './scripts/complete-the-square';

const sameActionRule = $CONTENT.basics.equations.elementary.article.$sameActionRule;

const compactFormLabel = 'Компактная форма';

export default defineProse()(() => (
  <>
    <Problems title="Полный квадрат" level="easy">
      <P>Выделите полный квадрат:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 + 2xy + y^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(x + y)^2', '(y + x)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(x + y)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`x^2 + 2\cdot \underset{a}{x}\cdot \underset{b}{y} + y^2`}</BlockMath>
          <P>Можно запаковать в квадрат суммы:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <P>
            Роль <M>a</M> выполняет <M>x</M>, а роль <M>b</M> выполняет <M>y</M>. Тогда:
          </P>
          <BlockMath>{math`x^2 + 2xy + y^2 = (x+y)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`a^2 + 2a + 1`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(a + 1)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(a + 1)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Запишем выражение в виде:</P>
          <BlockMath>{math`a^2 + 2\cdot a\cdot \underset{b}{1} + 1^2`}</BlockMath>
          <P>И применим формулу квадрата суммы:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`a^2 + 2a + 1 = (a+1)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`n^2 + m^2 + 2mn`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(n + m)^2', '(m + n)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(n + m)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`n^2 + 2\cdot \underset{a}{n}\cdot \underset{b}{m} + m^2`}</BlockMath>
          <P>Запаковываем в квадрат суммы:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`n^2 + m^2 + 2mn = (n+m)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`-2xy + x^2 + y^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(x - y)^2', '(y - x)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(x - y)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`x^2 - 2\cdot \underset{a}{x}\cdot \underset{b}{y} + y^2`}</BlockMath>
          <P>Запаковываем в квадрат разности:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`-2xy + x^2 + y^2 = (x-y)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`81 - 18t + t^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(9 - t)^2', '(t - 9)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(9 - t)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`9^2 - 2\cdot \underset{a}{9}\cdot \underset{b}{t} + t^2`}</BlockMath>
          <P>Запаковываем в квадрат разности:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`81 - 18t + t^2 = (9-t)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`z^2 - 12z + 36`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(z - 6)^2', '(6 - z)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(z - 6)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`z^2 - 2\cdot \underset{a}{z}\cdot \underset{b}{6} + 6^2`}</BlockMath>
          <P>Запаковываем в квадрат разности:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`z^2 - 12z + 36 = (z-6)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`49 + 14x + x^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(7 + x)^2', '(x + 7)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(7 + x)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`7^2 + 2\cdot \underset{a}{7}\cdot \underset{b}{x} + x^2`}</BlockMath>
          <P>Запаковываем в квадрат суммы:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`49 + 14x + x^2 = (7+x)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4i^2 - 4i + 1`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(2i - 1)^2', '(1 - 2i)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(2i - 1)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`(2i)^2 - 2\cdot \underset{a}{2i}\cdot \underset{b}{1} + 1^2`}</BlockMath>
          <P>Запаковываем в квадрат разности:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`4i^2 - 4i + 1 = (2i-1)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`1 + 10x + 25x^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(1 + 5x)^2', '(5x + 1)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(1 + 5x)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`1^2 + 2\cdot \underset{a}{1}\cdot \underset{b}{5x} + (5x)^2`}</BlockMath>
          <P>Запаковываем в квадрат суммы:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`1 + 10x + 25x^2 = (1 + 5x)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`9x^2 - 6x + 1`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(3x - 1)^2', '(1 - 3x)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(3x - 1)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`(3x)^2 - 2\cdot \underset{a}{3x}\cdot \underset{b}{1} + 1^2`}</BlockMath>
          <P>Запаковываем в квадрат разности:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`9x^2 - 6x + 1 = (3x - 1)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`9 - 12x + 4x^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(3 - 2x)^2', '(2x - 3)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(3 - 2x)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`3^2 - 2\cdot \underset{a}{3}\cdot \underset{b}{2x} + (2x)^2`}</BlockMath>
          <P>Запаковываем в квадрат разности:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`9 - 12x + 4x^2 = (3 - 2x)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`9x^2 + 30x + 25`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(3x + 5)^2', '(5 + 3x)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(3x + 5)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`(3x)^2 + 2\cdot \underset{a}{3x}\cdot \underset{b}{5} + 5^2`}</BlockMath>
          <P>Запаковываем в квадрат суммы:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`9x^2 + 30x + 25 = (3x + 5)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`9t^2 - 30tm + 25m^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(3t - 5m)^2', '(5m - 3t)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(3t - 5m)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`(3t)^2 - 2\cdot \underset{a}{3t}\cdot \underset{b}{5m} + (5m)^2`}</BlockMath>
          <P>Запаковываем в квадрат разности:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`9t^2 - 30tm + 25m^2 = (3t - 5m)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`49 + 36y^2 + 84y`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(7 + 6y)^2', '(6y + 7)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(7 + 6y)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Переставим местами слагаемые:</P>
          <BlockMath>{math`49 + 84y + 36y^2`}</BlockMath>
          <BlockMath>{math`7^2 + 2\cdot \underset{a}{7}\cdot \underset{b}{6y} + (6y)^2`}</BlockMath>
          <P>Запаковываем в квадрат суммы:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`49 + 36y^2 + 84y = (7 + 6y)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4 + 49x^2 - 28x`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(7x - 2)^2', '(2 - 7x)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(7x - 2)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Переставим местами слагаемые:</P>
          <BlockMath>{math`49x^2 - 28x + 4`}</BlockMath>
          <BlockMath>{math`(7x)^2 - 2\cdot \underset{a}{7x}\cdot \underset{b}{2} + 2^2`}</BlockMath>
          <P>Запаковываем в квадрат разности:</P>
          <BlockMath>{math`a^2 - 2ab + b^2 = (a-b)^2`}</BlockMath>
          <BlockMath>{math`4 + 49x^2 - 28x = (7x - 2)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4n^2 + 36nm + 81m^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={compactFormLabel} answer={mathRegexp('(2n + 9m)^2', '(9m + 2n)^2')} />
        <ProblemAnswer>
          <BlockMath>{math`(2n + 9m)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`(2n)^2 + 2\cdot \underset{a}{2n}\cdot \underset{b}{9m} + (9m)^2`}</BlockMath>
          <P>Запаковываем в квадрат суммы:</P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <BlockMath>{math`4n^2 + 36nm + 81m^2 = (2n + 9m)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Полный квадрат с хвостиком" level="easy">
      <P>Выделите полный квадрат:</P>

      <SubProblem label="Образец">
        <ProblemDescription>
          <BlockMath>{math`
              1)\enspace m^2 - 24m >>
              2)\enspace x^2 - 11x >>
              3)\enspace t^2 + 5t - 6 >>
              4)\enspace 9x^2 - 5x + 7
          `}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label="Выражение 1" answer={mathRegexp('(m - 12)^2 - 144')} />
        <ProblemCheck label="Выражение 2" answer={mathRegexp('(x - 11/2)^2 - 121/4')} />
        <ProblemCheck label="Выражение 3" answer={mathRegexp('(t + 5/2)^2 - 49/4')} />
        <ProblemCheck label="Выражение 4" answer={mathRegexp('(3x - 5/6)^2 + 227/36')} />
        <ProblemHint>
          <P>Имеющееся выражение нужно запаковать либо в квадрат суммы, либо в квадрат разности:</P>
          <BlockMath>{math`a^2 \pm 2ab + b^2 = (a\pm b)^2`}</BlockMath>
          <P>Если вам не хватает каких-то данных, то добавляйте их и сразу компенсируйте, чтобы ничего не изменить.</P>
          <BlockMath>{math`5 >>{big} \yellow{2} \cdot 5 \cdot \yellow{\frac{1}{2}} >>{big} 5 + \yellow{7} - \yellow{7}`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`
              1)\enspace (m - 12)^2 - 144 >>
              2)\enspace \left(x - \frac{11}{2}\right)^2 - \frac{121}{4} >>
              3)\enspace \left(t + \frac{5}{2}\right)^2 - \frac{49}{4} >>
              4)\enspace \left(3x - \frac{5}{6}\right)^2 + \frac{227}{36}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Выражение 1">
            <P>
              Число <M>24</M> чётное, из него можно "вытащить" двойку. Поэтому:
            </P>
            <BlockMath>{math`m^2 - 24m = m^2 - 2\cdot m\cdot 12`}</BlockMath>
            <P>
              Для сведения к квадрату разности не хватает <M>12^2</M>. Добавим и вычтем:
            </P>
            <BlockMath>{math`m^2 - 2\cdot m\cdot 12 + \yellow{12^2} - \yellow{12^2}`}</BlockMath>
            <BlockMath>{math`(m - 12)^2 - 144`}</BlockMath>
          </ProblemSection>

          <ProblemSection title="Выражение 2">
            <P>
              Из <M>11</M> двойку "вытащить" нельзя, значит добавим её с компенсацией:
            </P>
            <BlockMath>{math`
              x^2 - \yellow{2}\cdot x\cdot 11\cdot \yellow{\frac{1}{2}} \\
              x^2 - 2\cdot x\cdot \frac{11}{2}
            `}</BlockMath>
            <P>
              Для полного квадрата не хватает{' '}
              <M>
                \left(\frac{11}
                {2}\right)^2
              </M>
              . Добавим и вычтем:
            </P>
            <BlockMath>{math`
              x^2 - 2\cdot x\cdot \frac{11}{2} + \yellow{\left(\frac{11}{2}\right)^2} - \yellow{\left(\frac{11}{2}\right)^2}
            `}</BlockMath>
            <BlockMath>{math`\left(x - \frac{11}{2}\right)^2 - \frac{121}{4}`}</BlockMath>
          </ProblemSection>

          <ProblemSection title="Выражение 3">
            <P>
              Число <M>5</M> нечётное, двойку "вытащить" не получится, значит добавим её:
            </P>
            <BlockMath>{math`
              t^2 + \yellow{2}\cdot t\cdot \frac{5}{2} - 6 \\
              t^2 + 2\cdot t\cdot \frac{5}{2} - 6
            `}</BlockMath>
            <P>
              Для квадрата суммы не хватает{' '}
              <M>
                \left(\frac{5}
                {2}\right)^2
              </M>
              . Добавим и вычтем:
            </P>
            <BlockMath>{math`
              t^2 + 2\cdot t\cdot \frac{5}{2} + \yellow{\left(\frac{5}{2}\right)^2} - \yellow{\left(\frac{5}{2}\right)^2} - 6
            `}</BlockMath>
            <BlockMath>{math`
              \left(t + \frac{5}{2}\right)^2 - \frac{25}{4} - 6
              = \left(t + \frac{5}{2}\right)^2 - \frac{49}{4}
            `}</BlockMath>
          </ProblemSection>

          <ProblemSection title="Выражение 4">
            <P>Сначала представим выражение как:</P>
            <BlockMath>{math`(3x)^2 - 5x + 7`}</BlockMath>
            <P>
              В слагаемом с <M>x</M> нужно уместить и двойку, и тройку. Добавим эти данные с компенсацией:
            </P>
            <BlockMath>{math`
              (3x)^2 - \yellow{2}\cdot \yellow{3}x\cdot 5\cdot \yellow{\frac{1}{2}}\cdot \yellow{\frac{1}{3}} + 7 \\
              (3x)^2 - 2\cdot 3x\cdot \frac{5}{6} + 7
            `}</BlockMath>
            <P>
              Для квадрата разности не хватает{' '}
              <M>
                \left(\frac{5}
                {6}\right)^2
              </M>
              . Добавим и вычтем:
            </P>
            <BlockMath>{math`
              (3x)^2 - 2\cdot 3x\cdot \frac{5}{6} + \yellow{\left(\frac{5}{6}\right)^2} - \yellow{\left(\frac{5}{6}\right)^2} + 7
            `}</BlockMath>
            <BlockMath>{math`
              \left(3x - \frac{5}{6}\right)^2 - \frac{25}{36} + 7
              = \left(3x - \frac{5}{6}\right)^2 + \frac{227}{36}
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Отработка" script={completeTheSquare()} />
    </Problems>

    <Problems title="Квадратные уравнения через полный квадрат" level="easy">
      <P>Решите уравнение, выделив полный квадрат:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`u^2 + 2u = 3`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[1, -3]} />
        <ProblemAnswer>
          <P>
            Ответ: <M>1</M> и <M>-3</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычитаем из обеих частей <M>3</M>:
          </P>
          <BlockMath>{math`u^2 + 2u - 3 = 0`}</BlockMath>
          <P>Выделим полный квадрат:</P>
          <BlockMath>{math`(u + 1)^2 - 4 = 0`}</BlockMath>
          <P>
            Прибавим к обеим частям <M>4</M>:
          </P>
          <BlockMath>{math`(u + 1)^2 = 4`}</BlockMath>
          <P>Получаем два подуравнения:</P>
          <BlockMath>{math`u_1 + 1 = 2 \quad \text{или} \quad u_2 + 1 = -2`}</BlockMath>
          <BlockMath>{math`\boxed{u_1 = 1} \quad \boxed{u_2 = -3}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`z^2 + 12z = -11`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-1, -11]} />
        <ProblemAnswer>
          <P>
            Ответ: <M>-1</M> и <M>-11</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> прибавим к обеим частям <M>11</M>:
          </P>
          <BlockMath>{math`z^2 + 12z + 11 = 0`}</BlockMath>
          <P>Выделим полный квадрат:</P>
          <BlockMath>{math`(z + 6)^2 - 25 = 0`}</BlockMath>
          <BlockMath>{math`(z + 6)^2 = 25`}</BlockMath>
          <BlockMath>{math`z_1 + 6 = 5 \quad \text{или} \quad z_2 + 6 = -5`}</BlockMath>
          <BlockMath>{math`\boxed{z_1 = -1} \quad \boxed{z_2 = -11}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 - 21 = 20x`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[21, -1]} />
        <ProblemAnswer>
          <P>
            Ответ: <M>21</M> и <M>-1</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем из обеих частей <M>20x</M>:
          </P>
          <BlockMath>{math`x^2 - 20x - 21 = 0`}</BlockMath>
          <BlockMath>{math`(x - 10)^2 - 121 = 0`}</BlockMath>
          <BlockMath>{math`(x - 10)^2 = 121`}</BlockMath>
          <BlockMath>{math`x_1 - 10 = 11 \quad \text{или} \quad x_2 - 10 = -11`}</BlockMath>
          <BlockMath>{math`\boxed{x_1 = 21} \quad \boxed{x_2 = -1}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`-2y = 8 - y^2`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[4, -2]} />
        <ProblemAnswer>
          <P>
            Ответ: <M>4</M> и <M>-2</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> прибавим к обеим частям <M>2y</M>:
          </P>
          <BlockMath>{math`0 = -y^2 + 2y + 8`}</BlockMath>
          <P>
            Умножим обе части на <M>-1</M>:
          </P>
          <BlockMath>{math`0 = y^2 - 2y - 8`}</BlockMath>
          <BlockMath>{math`0 = (y - 1)^2 - 9`}</BlockMath>
          <BlockMath>{math`(y - 1)^2 = 9`}</BlockMath>
          <BlockMath>{math`y_1 - 1 = 3 \quad \text{или} \quad y_2 - 1 = -3`}</BlockMath>
          <BlockMath>{math`\boxed{y_1 = 4} \quad \boxed{y_2 = -2}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4m = -44 - m^2`}</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemAnswer>
          <P>Уравнение не имеет решений.</P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем из обеих частей <M>4m</M>:
          </P>
          <BlockMath>{math`0 = -m^2 - 4m - 44`}</BlockMath>
          <P>
            Умножаем обе части на <M>-1</M>:
          </P>
          <BlockMath>{math`0 = m^2 + 4m + 44`}</BlockMath>
          <BlockMath>{math`0 = (m + 2)^2 + 40`}</BlockMath>
          <P>
            В правой части сумма квадрата и положительного числа, она всегда положительна. Равенства <M>0 = ...</M>
            добиться нельзя.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`a^2 + 5 = 10a`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['5+sqrt(20)', '5-sqrt(20)']} />
        <ProblemAnswer>
          <P>
            Ответ: <M>5 + \sqrt{20}</M> и <M>5 - \sqrt{20}</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем из обеих частей <M>10a</M>:
          </P>
          <BlockMath>{math`a^2 - 10a + 5 = 0`}</BlockMath>
          <BlockMath>{math`(a - 5)^2 - 20 = 0`}</BlockMath>
          <BlockMath>{math`(a - 5)^2 = 20`}</BlockMath>
          <BlockMath>{math`a_1 - 5 = \sqrt{20} \quad \text{или} \quad a_2 - 5 = -\sqrt{20}`}</BlockMath>
          <BlockMath>{math`\boxed{a_1 = 5 + \sqrt{20}} \quad \boxed{a_2 = 5 - \sqrt{20}}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`u^2 - 14u + 12 = -1`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[13, 1]} />
        <ProblemAnswer>
          <P>
            Ответ: <M>13</M> и <M>1</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> прибавим к обеим частям <M>1</M>:
          </P>
          <BlockMath>{math`u^2 - 14u + 13 = 0`}</BlockMath>
          <BlockMath>{math`(u - 7)^2 - 36 = 0`}</BlockMath>
          <BlockMath>{math`(u - 7)^2 = 36`}</BlockMath>
          <BlockMath>{math`u_1 - 7 = 6 \quad \text{или} \quad u_2 - 7 = -6`}</BlockMath>
          <BlockMath>{math`\boxed{u_1 = 13} \quad \boxed{u_2 = 1}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x+6)(x-2) = 9`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[3, -7]} />
        <ProblemAnswer>
          <P>
            Ответ: <M>3</M> и <M>-7</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскроем скобки:</P>
          <BlockMath>{math`x^2 + 4x - 12 = 9`}</BlockMath>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем <M>9</M>:
          </P>
          <BlockMath>{math`x^2 + 4x - 21 = 0`}</BlockMath>
          <BlockMath>{math`(x + 2)^2 - 25 = 0`}</BlockMath>
          <BlockMath>{math`(x + 2)^2 = 25`}</BlockMath>
          <BlockMath>{math`x_1 + 2 = 5 \quad \text{или} \quad x_2 + 2 = -5`}</BlockMath>
          <BlockMath>{math`\boxed{x_1 = 3} \quad \boxed{x_2 = -7}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x-2)(x-6) = 5`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[7, 1]} />
        <ProblemAnswer>
          <P>
            Ответ: <M>7</M> и <M>1</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскроем скобки:</P>
          <BlockMath>{math`x^2 - 8x + 12 = 5`}</BlockMath>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем <M>5</M>:
          </P>
          <BlockMath>{math`x^2 - 8x + 7 = 0`}</BlockMath>
          <BlockMath>{math`(x - 4)^2 - 9 = 0`}</BlockMath>
          <BlockMath>{math`(x - 4)^2 = 9`}</BlockMath>
          <BlockMath>{math`x_1 - 4 = 3 \quad \text{или} \quad x_2 - 4 = -3`}</BlockMath>
          <BlockMath>{math`\boxed{x_1 = 7} \quad \boxed{x_2 = 1}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`3m^2 + 30m - 27 = 6`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[1, -11]} />
        <ProblemAnswer>
          <P>
            Ответ: <M>1</M> и <M>-11</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем <M>6</M>:
          </P>
          <BlockMath>{math`3m^2 + 30m - 33 = 0`}</BlockMath>
          <P>
            Разделим обе части на <M>3</M>:
          </P>
          <BlockMath>{math`m^2 + 10m - 11 = 0`}</BlockMath>
          <BlockMath>{math`(m + 5)^2 - 36 = 0`}</BlockMath>
          <BlockMath>{math`(m + 5)^2 = 36`}</BlockMath>
          <BlockMath>{math`m_1 + 5 = 6 \quad \text{или} \quad m_2 + 5 = -6`}</BlockMath>
          <BlockMath>{math`\boxed{m_1 = 1} \quad \boxed{m_2 = -11}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4x^2 - 3x = -10`}</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemAnswer>
          <P>Уравнение не имеет решений.</P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> прибавим к обеим частям <M>10</M>:
          </P>
          <BlockMath>{math`4x^2 - 3x + 10 = 0`}</BlockMath>
          <BlockMath>{math`\left(2x - \frac{3}{4}\right)^2 = -\frac{151}{16}`}</BlockMath>
          <P>Справа отрицательное число, а квадрат не может быть отрицательным. Решений нет.</P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Квадратные уравнения из жизни" level="easy">
      <P>
        Спустя такой долгий путь пришла наконец пора разобраться с{' '}
        <Ref to={$CONTENT.basics.equations.quadratic.whatIsIt.article.$problematicEquations}>жизненными ситуациями</Ref>,
        в которых возникают квадратные уравнения. Решите каждую из этих задач.
      </P>
      <SubProblem label="Непослушный сад">
        <ProblemDescription>
          <P>В задаче про непослушный сад пришли к уравнению:</P>
          <BlockMath>x(x+5) = 36</BlockMath>
        </ProblemDescription>
        <RootsCheck has root={[6]} />
        <ProblemAnswer>
          Длина меньшей стороны сада равна <M>6</M>, а большей -- <M>11</M>. Мы использовали только положительный
          корень, так как длина стороны не может быть отрицательной.
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскроем скобки:</P>
          <BlockMath>{math`x^2 + 5x = 36`}</BlockMath>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем из обеих частей <M>36</M>:
          </P>
          <BlockMath>{math`x^2 + 5x - 36 = 0`}</BlockMath>
          <P>Выделим полный квадрат. Данных недостаточно, поэтому будем добавлять и компенсировать:</P>
          <BlockMath>{math`
            x^2 + \yellow{2}\cdot x\cdot \yellow{\frac{1}{2}} \cdot 5 - 36 \\
            x^2 + 2\cdot x\cdot \frac{5}{2} + \yellow{\left(\frac{5}{2}\right)^2} - \yellow{\left(\frac{5}{2}\right)^2} - 36 \\
            \left(x + \frac{5}{2}\right)^2 - \frac{25}{4} - 36 \\
            \left(x + \frac{5}{2}\right)^2 - \frac{169}{4} = 0
          `}</BlockMath>
          <P>Изолируем наш полный квадрат, избавившись от дроби снаружи:</P>
          <BlockMath>{math`\left(x + \frac{5}{2}\right)^2 = \frac{169}{4}`}</BlockMath>
          <P>
            Для удобства обозначаем скобку за <M>t</M>:
          </P>
          <BlockMath>{math`t^2 = \frac{169}{4}`}</BlockMath>
          <P>
            Какую дробь надо возвести в квадрат, чтобы сверху получилось <M>169</M>, а снизу <M>4</M>? Это дробь, у
            которой сверху <M>13</M>, а снизу <M>2</M>!
          </P>
          <BlockMath>{math`t = \frac{13}{2} \quad \text{или} \quad t = -\frac{13}{2}`}</BlockMath>
          <P>
            Вернувшись к <M>x</M>, получаем:
          </P>
          <BlockMath>{math`
            x + \frac{5}{2} = \frac{13}{2} \quad \text{или} \quad x + \frac{5}{2} = -\frac{13}{2} \\
            \boxed{x = 6} \quad \text{или} \quad \boxed{x = -9}
          `}</BlockMath>
          <P>
            Математически оба корня верны, но в контексте нашей физической задачи про реальный мир сторона сада не может
            быть отрицательной. Поэтому его сторона может быть равна только <M>6</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem label="Нетерпеливый велосипедист">
        <ProblemDescription>
          <P>В этой задаче мы пришли к уравнению:</P>
          <BlockMath>-v^2 - 2v + 120 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has root={[10]} />
        <ProblemAnswer>
          Ответ: <M>10</M> км/ч. Скорость велосипедиста не может быть отрицательной, поэтому мы используем только
          положительный корень.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Для начала умножим обе части уравнения на <M>-1</M>, чтобы убрать минус перед <M>v^2</M>:
          </P>
          <BlockMath>v^2 + 2v - 120 = 0</BlockMath>
          <P>
            Выделить полный квадрат тут можно почти моментально. В центре уже есть двойка, значит нужна просто единица в
            роли <M>b^2</M>. Добавляем её и сразу же вычитаем:
          </P>
          <BlockMath>v^2 + 2v + 1 - 1 - 120 \\ (v + 1)^2 - 121 = 0 \\ (v + 1)^2 = 121</BlockMath>
          <P>
            Какое-то число слева возвели в квадрат, чтобы получить <M>121</M>. Это либо <M>11</M>, либо <M>-11</M>.
          </P>
          <BlockMath>{math`
            v + 1 = 11 \quad \text{или} \quad v + 1 = -11 \\
            v = 10 \quad \text{или} \quad v = -12
          `}</BlockMath>
          <P>
            Скорость велосипедиста не может быть отрицательной, поэтому мы используем только положительный корень.
            Значит изначально велосипедист ехал со скоростью <M>10</M> км/ч.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Рамка для картины">
        <ProblemDescription>
          <P>В этой задаче мы пришли к уравнению:</P>
          <BlockMath>4w^2 + 36w + 80 = 168</BlockMath>
        </ProblemDescription>
        <RootsCheck has root={[2]} />
        <ProblemAnswer>
          Ответ: ширина рамки равна <M>2</M> дюйма. Отрицательный корень не подходит, так как ширина не может быть
          отрицательной.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем из обеих частей <M>168</M>:
          </P>
          <BlockMath>{math`4w^2 + 36w - 88 = 0`}</BlockMath>
          <P>
            Разделим обе части на <M>4</M>:
          </P>
          <BlockMath>{math`w^2 + 9w - 22 = 0`}</BlockMath>
          <P>
            Выделим полный квадрат. В центре коэффициент <M>9</M> нечётный, поэтому добавляем с компенсацией:
          </P>
          <BlockMath>{math`
            w^2 + \yellow{2} \cdot w \cdot \yellow{\frac{1}{2}} \cdot 9 - 22 \\
            w^2 + 2 \cdot w \cdot \frac{9}{2} + \yellow{\left(\frac{9}{2}\right)^2} - \yellow{\left(\frac{9}{2}\right)^2} - 22 \\
            \left(w + \frac{9}{2}\right)^2 - \frac{81}{4} - 22 \\
            \left(w + \frac{9}{2}\right)^2 - \frac{169}{4} = 0
          `}</BlockMath>
          <P>Изолируем полный квадрат:</P>
          <BlockMath>{math`\left(w + \frac{9}{2}\right)^2 = \frac{169}{4}`}</BlockMath>
          <P>
            Дробь справа можно получить, если возвести в квадрат дробь <M>{math`\frac{13}{2}`}</M> или{' '}
            <M>{math`\frac{-13}{2}`}</M>.
          </P>
          <BlockMath>{math`
            w + \frac{9}{2} = \frac{13}{2} \quad \text{или} \quad w + \frac{9}{2} = -\frac{13}{2} \\
            \boxed{w = 2} \quad \text{или} \quad \boxed{w = -11}
          `}</BlockMath>
          <P>
            Ширина рамки не может быть отрицательной, поэтому ответ: <M>w = 2</M> дюйма.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Проблемный полный квадрат" level="medium">
      <P>Выделите полный квадрат:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`7w^2 - 11w`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`\left(\sqrt{7}w - \frac{11}{2\sqrt{7}}\right)^2 - \frac{121}{28}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`
            7w^2 - 11w \\
            (\sqrt{7}w)^2 - \yellow{2} \cdot \yellow{\sqrt{7}}w \cdot 11 \cdot \yellow{\frac{1}{2\sqrt{7}}} \\
            \underbrace{(\sqrt{7}w)^2 - 2 \cdot \sqrt{7}w \cdot \frac{11}{2\sqrt{7}} + \yellow{\left(\frac{11}{2\sqrt{7}}\right)^2}}_{a^2 - 2ab + b^2} - \yellow{\left(\frac{11}{2\sqrt{7}}\right)^2} \\
            \left(\sqrt{7}w - \frac{11}{2\sqrt{7}}\right)^2 - \frac{121}{28}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`2c^2 + c - 6`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`\left(\sqrt{2}c + \frac{1}{2\sqrt{2}}\right)^2 - \frac{49}{48}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`
            2c^2 + c - 6 \\
            (\sqrt{2}c)^2 + \yellow{2} \cdot \yellow{\sqrt{2}}c \cdot \yellow{\frac{1}{2\sqrt{2}}} - 6 \\
            \underbrace{(\sqrt{2}c)^2 + 2 \cdot \sqrt{2}c \cdot \frac{1}{2\sqrt{2}} + \yellow{\left(\frac{1}{2\sqrt{2}}\right)^2}}_{a^2 + 2ab + b^2} - \yellow{\left(\frac{1}{2\sqrt{2}}\right)^2} - 6 \\
            \left(\sqrt{2}c + \frac{1}{2\sqrt{2}}\right)^2 - \frac{1}{8} - 6 \\
            \left(\sqrt{2}c + \frac{1}{2\sqrt{2}}\right)^2 - \frac{49}{48}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`3t^2 - 5t + 1`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`\left(\sqrt{3}t - \frac{5}{2\sqrt{3}}\right)^2 + \frac{37}{12}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`
            3t^2 - 5t + 1 \\
            (\sqrt{3}t)^2 - \yellow{2} \cdot \yellow{\sqrt{3}}t \cdot 5 \cdot \yellow{\frac{1}{2\sqrt{3}}} + 1 \\
            \underbrace{(\sqrt{3}t)^2 - 2 \cdot \sqrt{3}t \cdot \frac{5}{2\sqrt{3}} + \yellow{\left(\frac{5}{2\sqrt{3}}\right)^2}}_{a^2 - 2ab + b^2} - \yellow{\left(\frac{5}{2\sqrt{3}}\right)^2} - 1 \\
            \left(\sqrt{3}t - \frac{5}{2\sqrt{3}}\right)^2 - \frac{25}{12} - 1 \\
            \left(\sqrt{3}t - \frac{5}{2\sqrt{3}}\right)^2 - \frac{37}{12}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Минимум и Максимум" level="medium" method>
      <SubProblem>
        <ProblemDescription>
          <P>
            Найдите минимум выражения и значение <M>x</M>, при котором он достигается:
          </P>
          <BlockMath>{math`4x^2 + 28x + 69`}</BlockMath>
        </ProblemDescription>
        <ProblemHint>
          Выделите полный квадрат и изучите, что необходимо с этим квадратом сделать, чтобы получить минимум.
        </ProblemHint>
        <ProblemAnswer>
          <P>
            Минимум равен <M>20</M> при <M>{math`x = -\frac{7}{2}`}</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Выделим полный квадрат:</P>
          <BlockMath>{math`(2x + 7)^2 + 20`}</BlockMath>
          <P>
            Квадрат неотрицателен, значит минимум достигается при <M>(2x+7)^2 = 0</M>.
          </P>
          <BlockMath>{math`2x + 7 = 0 \Rightarrow \boxed{x = -\frac{7}{2}}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Найдите максимум выражения и значение <M>y</M>, при котором он достигается:
          </P>
          <BlockMath>{math`-49y^2 + 28y + 7`}</BlockMath>
        </ProblemDescription>
        <ProblemHint>
          <P>Вынесите минус за скобки. Дальше так же, как в первом пункте.</P>
        </ProblemHint>
        <ProblemAnswer>
          <P>
            Максимум равен <M>11</M> при <M>{math`y = \frac{2}{7}`}</M>.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Вынесем минус за скобки:</P>
          <BlockMath>{math`-1 \cdot (49y^2 - 28y - 7)`}</BlockMath>
          <P>Выделим полный квадрат:</P>
          <BlockMath>{math`-1 \cdot \left[(7y - 2)^2 - 11\right]`}</BlockMath>
          <P>Возвращаем минус в скобки:</P>
          <BlockMath>{math`11 - (7y - 2)^2`}</BlockMath>
          <P>Чтобы получить максимум, нужно минимизировать квадрат. Минимум квадрата равен нулю:</P>
          <BlockMath>{math`(7y - 2)^2 = 0 \Rightarrow 7y - 2 = 0 \Rightarrow \boxed{y = \frac{2}{7}}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Формула полного квадрата" level="hard">
      <SubProblem label="Формула">
        <ProblemDescription>
          <P>Выведите общую формулу выделения полного квадрата из любого квадратного трёхчлена:</P>
          <BlockMath>{math`Ax^2 + Bx + C,\enspace A \neq 0`}</BlockMath>
        </ProblemDescription>
        <ProblemHint>
          <P>
            Забудьте на время про <M>C</M> и выделите полный квадрат из <M>Ax^2 \pm Bx</M>.
          </P>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`
            Ax^2 + Bx + C = \left(\sqrt{A}x + \frac{B}{2\sqrt{A}}\right)^2 - \frac{B^2 - 4AC}{4A},\enspace A > 0
          `}</BlockMath>
          <P>
            Если <M>A&lt;0</M>, можно вынести <M>-1</M> и применить формулу к положительному коэффициенту.
          </P>
        </ProblemAnswer>
        <ProblemSolution>
          <BlockMath>{math`
            Ax^2 + Bx + C \\
            (\sqrt{A}x)^2 + \yellow{2} \cdot \yellow{\sqrt{A}}x \cdot B \cdot \yellow{\frac{1}{2\sqrt{A}}} + C \\
            \underbrace{(\sqrt{A}x)^2 + 2\cdot \sqrt{A}x \cdot \frac{B}{2\sqrt{A}} + \yellow{\left(\frac{B}{2\sqrt{A}}\right)^2}}_{a^2 \pm 2ab + b^2} - \yellow{\left(\frac{B}{2\sqrt{A}}\right)^2} + C \\
            \left(\sqrt{A}x + \frac{B}{2\sqrt{A}}\right)^2 - \frac{B^2}{4A} + C \\
            \left(\sqrt{A}x + \frac{B}{2\sqrt{A}}\right)^2 - \frac{B^2 - 4AC}{4A}
          `}</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          <P>
            Может показаться, что полученная общая формула сложная и бесполезная. Когда выделение полного квадрата или
            решение квадратных уравнений выполняет <B>человек</B>, она действительно не нужна. Всегда проще
            проанализировать конкретный трёхчлен, чем держать в голове эту бандуру.
          </P>
          <P>
            Однако если вам потребуется написать компьютерную программу для генерации задач на выделение полного
            квадрата или решения квадратных уравнений, то будет очень сложно компьютер "научить" всем тонкостям этого
            процесса. А с общей формулой задача становится тривиальной -- если известны коэффициенты (а они известны),
            то моментально можно выделить полный квадрат!
          </P>
        </ProblemNote>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Пользуясь общей формулой, выделите полный квадрат:</P>
          <BlockMath>{math`z^2 - 10z + 11`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`\left(z - 5\right)^2 - 14`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Коэффициенты: <M>A=1</M>, <M>B=-10</M>, <M>C=11</M>.
          </P>
          <BlockMath>{math`
            \left(z + \frac{-10}{2}\right)^2 - \frac{(-10)^2 - 4\cdot 1\cdot 11}{4\cdot 1}
            = \left(z - 5\right)^2 - \frac{100 - 44}{4}
            = \left(z - 5\right)^2 - 14
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Пользуясь общей формулой, выделите полный квадрат:</P>
          <BlockMath>{math`7t^2 - 11t + 2`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`\left(\sqrt{7}t - \frac{11}{2\sqrt{7}}\right)^2 - \frac{65}{28}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Коэффициенты: <M>A=7</M>, <M>B=-11</M>, <M>C=2</M>.
          </P>
          <BlockMath>{math`
            \left(\sqrt{7}t + \frac{-11}{2\sqrt{7}}\right)^2 - \frac{(-11)^2 - 4\cdot 7\cdot 2}{4\cdot 7}
            = \left(\sqrt{7}t - \frac{11}{2\sqrt{7}}\right)^2 - \frac{121 - 56}{28}
            = \left(\sqrt{7}t - \frac{11}{2\sqrt{7}}\right)^2 - \frac{65}{28}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Пользуясь общей формулой, выделите полный квадрат:</P>
          <BlockMath>{math`-3g^2 - 4g + 1`}</BlockMath>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`\frac{7}{3} - \left(\sqrt{3}g + \frac{2}{\sqrt{3}}\right)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Вынесем минус за скобки:</P>
          <BlockMath>{math`-(3g^2 + 4g - 1)`}</BlockMath>
          <P>
            Внутри: <M>A=3</M>, <M>B=4</M>, <M>C=-1</M>.
          </P>
          <BlockMath>{math`
            \left(\sqrt{3}g + \frac{4}{2\sqrt{3}}\right)^2 - \frac{4^2 - 4\cdot 3\cdot (-1)}{4\cdot 3}
            = \left(\sqrt{3}g + \frac{2}{\sqrt{3}}\right)^2 - \frac{16 + 12}{12}
            = \left(\sqrt{3}g + \frac{2}{\sqrt{3}}\right)^2 - \frac{7}{3}
          `}</BlockMath>
          <P>Возвращаем минус:</P>
          <BlockMath>{math`\frac{7}{3} - \left(\sqrt{3}g + \frac{2}{\sqrt{3}}\right)^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Не всё так однозначно" level="hard">
      <ProblemDescription>
        <P>
          Во время выделения полного квадрата мы неявно берём корни. Но ведь взятие корня может приводить к разным
          результатам:
        </P>
        <BlockMath>{math`
          4x^2 + 2\cdot 2x \cdot 3 + 9 \\
          \left(\sqrt{4x^2}\right)^2 + 2\cdot \sqrt{4x^2} \cdot \sqrt{9} + \left(\sqrt{9}\right)^2 \\
          (\pm 2x)^2 + 2\cdot 2x \cdot 3 + (\pm 3)^2
        `}</BlockMath>
        <P>
          Куда деваются все эти знаки и почему у нас получается нормально выделять полный квадрат? Докажите, что мы
          можем игнорировать неоднозначность взятия корней и выделять полный квадрат без возни со знаками.
        </P>
      </ProblemDescription>
      <ProblemSolution>
        <P>
          Когда мы распаковываем выражение, этот процесс <B>однозначен</B> и никак не может привести к разным
          результатам. Ответ всегда один:
        </P>

        <Diagram>{math`
          flowchart LR
            packed["**Запакованная форма**<br>$$ (2x + 3)^2 $$"] -->|Однозначно| unpacked["**Распакованная форма**<br>$$ 4x^2 + 2\cdot 2x \cdot 3 + 9 $$"]
        `}</Diagram>

        <P>
          А вот "выделение полного квадрата" -- обратный процесс. Запакованная форма нам заранее неизвестна, и во время
          поиска действительно появляются "версии" с разными вариантами знаков (потому что эти знаки нивелируются
          возведением в квадрат):
        </P>

        <Diagram>{math`
          flowchart TD
            unpacked["**Распакованная форма**<br>$$ 4x^2 + 2\cdot 2x \cdot 3 + 9 $$"] -->|Вариант $++$| variant1["$$ (2x)^2 + 2\cdot 2x \cdot 3 + (3)^2 $$"]
            variant1 --> packed["**Запакованная форма**<br>$$ (2x + 3)^2 $$"]
            unpacked -->|Вариант $-+$| variant2["$$ (-2x)^2 + 2\cdot 2x \cdot 3 + 3^2 $$"]
            unpacked -->|Вариант $+-$| variant3["$$ (2x)^2 + 2\cdot 2x \cdot 3 + (-3)^2 $$"]
            unpacked -->|Вариант $--$| variant4["$$ (-2x)^2 + \underbrace{2\cdot 2x \cdot 3}_{\small 2\cdot (-2x) \cdot (-3)} + (-3)^2 $$"] --> packed2["**Запакованная форма**<br>$$ (-2x - 3)^2 $$"]
            packed2 --> packed
        `}</Diagram>

        <P>
          Как видим, на самом деле существует <B>две</B> "запакованные" формы, приводящие нас к одному и тому же
          "распакованному" выражению. Однако они на самом деле являются записью одного и того же:
        </P>

        <BlockMath>{math`
          (-2x - 3)^2 = \left[(-1)\cdot(2x+3)\right]^2 = (-1)^2(2x+3)^2 = (2x+3)^2 \\
          (-2x-3)^2 = (2x+3)^2
        `}</BlockMath>

        <P>
          Итак, два варианта из четырёх всегда приводят к одной и той же "запакованной" форме. Оставшиеся два варианта{' '}
          <B>тоже верные</B> математически, они сводятся к "распакованному" выражению, но не годятся для дальнейшего
          упрощения, потому что не удовлетворяют формуле квадрата суммы или разности!
        </P>

        <P>
          Это можно сравнить с работой детектива. Мы начинаем в конечной точке, когда преступление <B>уже совершено</B>{' '}
          и имеется "распакованное" выражение. Во время распутывания преступления у нас появляются версии (те самые
          четыре варианта).
        </P>

        <P>
          Например, преступник мог зайти через дверь (версии <M>++</M> или <M>--</M>) или залезть через окно (версии{' '}
          <M>-+</M> или <M>+-</M>). Все четыре версии приводят к совершенному преступлению. Но две являются ложными,
          заводят нас в тупик, улик за окном мы не находим, и преступника, "запакованную" форму, мы теряем. А две
          позволяют докопаться до правды и расследовать дело.
        </P>

        <P>
          Но можем ли мы вот так закрывать глаза на всю эту неоднозначность со знаками и оставлять только вариант с
          плюсами? Да, можем. Как мы уже показали, вариант с минусом приводит нас к той же форме, что и вариант с
          плюсом. А оставшиеся два варианта будут всегда вступать в противоречие со средним слагаемым{' '}
          <M>2\cdot 2x \cdot 3</M> и запаковать их через формулы сокращённого умножения не получится.
        </P>
      </ProblemSolution>
    </Problem>
  </>
));
