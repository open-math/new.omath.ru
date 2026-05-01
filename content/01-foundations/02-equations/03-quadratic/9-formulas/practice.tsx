// #region Assets
//
//

import rootClasses from './assets/root-classes.svg';

//
//
// #endregion

// #region Links
//
//

const incompleteQuadratics = $CONTENT.foundations.equations.quadratic.incomplete;
const completingTheSquare = $CONTENT.foundations.equations.quadratic.completingTheSquare;
const quadraticFormulaPage = $CONTENT.foundations.equations.quadratic.quadraticFormula;
const factoringPage = $CONTENT.foundations.equations.quadratic.factoring;
const vietasFormulasPage = $CONTENT.foundations.equations.quadratic.vietasFormulas;
const mentalSolvingPage = $CONTENT.foundations.equations.quadratic.mentalSolving;
const quadraticFormula = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$formula;
const factoring = $CONTENT.foundations.equations.quadratic.factoring.article.$generalFactoring;
const vietasFormulas = $CONTENT.foundations.equations.quadratic.vietasFormulas.article.$vietasFormulas;
const zeroSumRule = $CONTENT.foundations.equations.quadratic.mentalSolving.article.$methodZeroSum;
const mentalSolvingAtoC = $CONTENT.foundations.equations.quadratic.mentalSolving.article.$methodAtoC;
const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;
const alwaysGlobal = $CONTENT.foundations.equations.elementary.article.$alwaysGlobal;
const linearRootClasses = $CONTENT.foundations.equations.elementary.practice.$linearRootClasses;

//
//
// #endregion

export default defineProse({
  uniques: {
    mixedProblems: P,
    quadraticRootClasses: Problem,
  },
})(({ uniques }) => (
  <>
    <P
      $={uniques.mixedProblems}
      snippet={{
        key: true,
        title: 'Смешанные задачи',
        seo: 'Смешанные задачи на квадратные уравнения',
        description: `
          Смешанные задачи, которые так или иначе сводятся к квадратным трёхчленам или квадратным уравнениям.
        `,
      }}
    >
      В задачах на этой странице вы можете использовать все методы и формулы, связанные с квадратными уравнениями:
    </P>

    <List ordered>
      <Li>
        <Dep on={incompleteQuadratics}>Неполная форма</Dep>
      </Li>
      <Li>
        <Dep on={completingTheSquare}>Выделение полного квадрата</Dep>
      </Li>
      <Li>
        <Dep on={quadraticFormulaPage}>Общая формула корней</Dep>
      </Li>
      <Li>
        <Dep on={factoringPage}>Разложение на множители</Dep>
      </Li>
      <Li>
        <Dep on={vietasFormulasPage}>Теорема Виета</Dep>
      </Li>
      <Li>
        <Dep on={mentalSolvingPage}>Решение квадратных уравнений в уме</Dep>
      </Li>
    </List>

    <P>
      Бросайте в бой все в любом порядке!
      <Br />
      Главное -- выйти победителем наиболее эффектным и эффективным способом. 😎
    </P>

    <Important title="Это финал, а не начало!">
      Задачи здесь рассчитаны на то, что вы уже знакомы со всеми формулами и умеете их использовать! Если у вас с этим
      проблемы, обязательно прорешайте задачи из практикума каждой из перечисленных выше тем, а потом возвращайтесь
      сюда.
    </Important>

    <Problem title="Число и его обратное" level="easy">
      <ProblemDescription>
        Сумма числа и его обратного равна <M>{math`\dfrac{5}{2}`}</M>. Найдите число.
      </ProblemDescription>
      <RootsCheck roots={[2, [0.5, '1/2']]} />
      <ProblemAnswer>
        Под такое условие подходят два числа: <M>2</M> или <M>{math`\dfrac{1}{2}`}</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Обозначим искомое число за <M>x</M>. Тогда сумму этого числа и обратного можно математически записать так:
        </P>
        <BlockMath>{math`x + \frac{1}{x} = \frac{5}{2}`}</BlockMath>
        <P>Приводим выражение слева к общему знаменателю:</P>
        <BlockMath>{math`\frac{x^2 + 1}{x} = \frac{5}{2}`}</BlockMath>
        <P>
          По <Dep on={sameActionRule}>правилу одинакового действия</Dep> умножим обе части на <M>x</M>:
        </P>
        <BlockMath>{math`
            \frac{x^2 + 1}{\cancel{x}} \cdot \cancel{\yellow{x}} = \frac{5}{2} \cdot \yellow{x}
            \\
            x^2 + 1 = \frac{5x}{2}
          `}</BlockMath>
        <P>
          Умножим обе части на <M>2</M>, чтобы избавиться от знаменателя дроби:
        </P>
        <BlockMath>{math`
            \yellow{2}(x^2 + 1) = \frac{5x}{\cancel{2}} \cdot \cancel{\yellow{2}}
            \\
            2x^2 + 2 = 5x
          `}</BlockMath>
        <P>
          Вычтем из обеих частей <M>5x</M>:
        </P>
        <BlockMath>{math`
            2x^2 + 2 - \yellow{5x} = \cancel{5x} - \cancel{\yellow{5x}}
            \\
            2x^2 - 5x + 2 = 0
          `}</BlockMath>
        <P>Получили квадратное уравнение в общем виде. Определяем коэффициенты:</P>
        <BlockMath>{math`A = 2, \enspace B = -5, \enspace C = 2`}</BlockMath>
        <P>Находим дискриминант:</P>
        <BlockMath>{math`D = B^2 - 4AC = (-5)^2 - 4\cdot2\cdot2 = 25 - 16 = 9`}</BlockMath>
        <P>Дискриминант положительный, значит уравнение имеет два различных корня:</P>
        <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-5) \pm \sqrt{9}}{2\cdot2} = \frac{5 \pm 3}{4}
            \\
            x_1 = \frac{8}{4} = 2, \enspace x_2 = \frac{2}{4} = \frac{1}{2}
            \\
            \boxed{x_1 = 2, \enspace x_2 = \frac{1}{2}}
          `}</BlockMath>
        <P>
          Оказывается, условиям задачи удовлетворяют не одно, а два числа: <M>2</M> или <M>{math`\dfrac{1}{2}`}</M>!
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Последовательные квадраты" level="easy">
      <ProblemDescription>
        <P>
          Сумма квадратов двух идущих друг за другом четных чисел равна <M>244</M>. Найдите эти числа.
        </P>
      </ProblemDescription>
      <RootsCheck roots={[-12, 10]} />
      <ProblemHint>
        Обозначьте первое четное число буквой <M>x</M>. Тогда следующее после него четное число будет равно <M>x + 2</M>
        .
      </ProblemHint>
      <ProblemAnswer>
        Это могли быть числа <M>-12</M> и <M>-10</M> или <M>10</M> и <M>12</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Обозначим первое четное число буквой <M>x</M>. Тогда следующее после него четное число будет равно{' '}
          <M>x + 2</M>. Сумма квадратов этих чисел равна <M>244</M>:
        </P>
        <BlockMath>{math`x^2 + (x + 2)^2 = 244`}</BlockMath>
        <P>Раскрываем скобки и приводим подобные слагаемые:</P>
        <BlockMath>{math`
            x^2 + (x^2 + 4x + 4) = 244
            \\
            2x^2 + 4x + 4 = 244
          `}</BlockMath>
        <P>
          Вычитаем по <Dep on={sameActionRule}>правилу одинакового действия</Dep> <M>244</M> из обеих частей:
        </P>
        <BlockMath>{math`2x^2 + 4x - 240 = 0`}</BlockMath>
        <P>
          Делим обе части равенства на <M>2</M>:
        </P>
        <BlockMath>{math`x^2 + 2x - 120 = 0`}</BlockMath>
        <P>
          Получили приведённое квадратное уравнение. Найдём его корни по <Dep on={vietasFormulas}>формуле Виета</Dep>:
        </P>
        <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = -2 \\
              x_1 \cdot x_2 = -120
            \end{cases}
          `}</BlockMath>
        <P>
          Сумма корней равна <M>-2</M>, а произведение <M>-120</M>. Очевидно, что эти корни равны <M>-12</M> и <M>10</M>
          .
        </P>
        <P>
          Оказывается, условию задачи удовлетворяют две пары чётных чисел: <M>-12</M> и <M>-10</M>, а также <M>10</M> и{' '}
          <M>12</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problems title="Всё и сразу!" level="easy">
      <P>Решите квадратное уравнение всеми возможными способами, а затем разложите его на множители:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4m^2 + m - 3 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[['3/4', 0.75], -1]} />
        <MathExpressionCheck label="Разложение на множители" answer="4(m-3/4)(m+1)" />
        <ProblemAnswer>
          <BlockMath>{math`m_1 = \frac{3}{4} >> m_2 = -1`}</BlockMath>
          <BlockMath>{math`4\left(m - \frac{3}{4}\right)(m + 1) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="В уме">
            <P>
              "Переносим" коэффициент <M>A</M> к <M>C</M> и получаем уравнение в приведённом виде:
            </P>
            <BlockMath>{math`m^2 + m - 12 = 0`}</BlockMath>
            <P>
              Выпишем <Dep on={vietasFormulas}>формулы Виета</Dep> для этого уравнения:
            </P>
            <BlockMath>{math`
              \begin{dcases}
                x_1 + x_2 = -1 \\
                x_1x_2 = -12
              \end{dcases}
            `}</BlockMath>
            <P>
              Сумма корней равна <M>-1</M>, а произведение <M>-12</M>. Очевидно, что эти корни равны <M>-4</M> и{' '}
              <M>3</M>.
            </P>
            <P>
              Это корни приведённого уравнения. Получить корни исходного уравнения можно, если{' '}
              <Dep on={mentalSolvingAtoC}>поделить</Dep> приведённые корни на <M>4</M>:
            </P>
            <BlockMath>{math`x_1 = -1 >> x_2 = \frac{3}{4}`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Выделение полного квадрата">
            <P>Выделяем полный квадрат:</P>
            <BlockMath>{math`
              (2m)^2 + \yellow{2} \cdot \yellow{2}m \cdot \yellow{\frac{1}{4}} - 3 = 0
              \\
              \underbrace{(2m)^2 + 2m \cdot \frac{1}{4} + \yellow{\left(\frac{1}{4}\right)^2}}_{\normalsize a^2 + 2\cdot a\cdot b + b^2} - \yellow{\left(\frac{1}{4}\right)^2} - 3 = 0
              \\
              \left(2m + \frac{1}{4}\right)^2 - \frac{1}{16} - 3 = 0
              \\
              \left(2m + \frac{1}{4}\right)^2 - \frac{49}{16} = 0
            `}</BlockMath>
            <P>
              По <Dep on={sameActionRule}>правилу одинакового действия</Dep> прибавим <M>{math`\frac{49}{16}`}</M> к
              обеим частям:
            </P>
            <BlockMath>{math`\left(2m + \frac{1}{4}\right)^2 = \frac{49}{16}`}</BlockMath>
            <P>
              Число в скобках в квадрате равно дроби <M>{math`\frac{49}{16}`}</M>. Значит само это число равно
              положительному или отрицательному корню из этой дроби:
            </P>
            <BlockMath>{math`2m + \frac{1}{4} = \pm\frac{7}{4}`}</BlockMath>
            <P>Решаем два элементарных подуравнения:</P>
            <BlockMath>{math`m_1 = \frac{3}{4} >> m_2 = -1`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Общие формулы корней">
            <P>Определяем коэффициенты:</P>
            <BlockMath>{math`A = 4, \enspace B = 1, \enspace C = -3`}</BlockMath>
            <P>Находим дискриминант:</P>
            <BlockMath>{math`D = B^2 - 4AC = 1^2 - 4\cdot4\cdot(-3) = 1 + 48 = 49`}</BlockMath>
            <P>Дискриминант положительный, значит уравнение имеет два различных корня:</P>
            <BlockMath>{math`m_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-1 \pm 7}{8}`}</BlockMath>
            <BlockMath>{math`m_1 = \frac{6}{8} = \frac{3}{4} >> m_2 = -1`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Разложение на множители">
            <P>
              Нам уже известны оба корня этого уравнения. Значит мы можем воспользоваться{' '}
              <Dep on={factoring}>альтернативным способом записи</Dep> квадратного уравнения в виде произведения двух
              скобок:
            </P>
            <BlockMath>{math`4\left(x - \frac{3}{4}\right)(x+1) = 0`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`2x^2 + 3x + 3 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemAnswer>У уравнения нет решений, значит и разложить его на множители не получится.</ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="В уме">
            <P>
              "Переносим" коэффициент <M>A</M> к <M>C</M> и получаем уравнение в приведённом виде:
            </P>
            <BlockMath>{math`x^2 + 3x + 6 = 0`}</BlockMath>
            <P>
              Выпишем <Dep on={vietasFormulas}>формулы Виета</Dep> для этого уравнения:
            </P>
            <BlockMath>{math`
              \begin{dcases}
                x_1 + x_2 = -3 \\
                x_1x_2 = 6
              \end{dcases}
            `}</BlockMath>
            <P>Что-то не получается подобрать целые корни. Возможно, их и нет. В уме решить не получится.</P>
          </ProblemSection>
          <ProblemSection title="Выделение полного квадрата">
            <P>Выделяем полный квадрат:</P>
            <BlockMath>{math`
              (\sqrt{2}x)^2 + \yellow{2} \cdot \yellow{\sqrt{2}}x \cdot 3 \cdot \yellow{\frac{1}{2\sqrt{2}}} + 3 = 0
              \\
              \underbrace{(\sqrt{2}x)^2 + 2 \cdot \sqrt{2}x \cdot \frac{3}{2\sqrt{2}} + \yellow{\left(\frac{3}{2\sqrt{2}}\right)^2}}_{\normalsize a^2 + 2\cdot a \cdot b + b^2} - \yellow{\left(\frac{3}{2\sqrt{2}}\right)^2} + 3 = 0
              \\
              \left(\sqrt{2}x + \frac{3}{2\sqrt{2}}\right)^2 - \frac{9}{8} + 3 = 0
              \\
              \left(\sqrt{2}x + \frac{3}{2\sqrt{2}}\right)^2 + \frac{15}{8} = 0
            `}</BlockMath>
            <P>
              По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем из обеих частей{' '}
              <M>{math`\frac{15}{8}`}</M>:
            </P>
            <BlockMath>{math`\left(\sqrt{2}x + \frac{3}{2\sqrt{2}}\right)^2 = -\frac{15}{8}`}</BlockMath>
            <P>
              Слева из-за квадрата отрицательное число никак не получится, а справа оно нам и нужно. Что бы мы ни
              подставили вместо <M>x</M>, всегда будем получать ложное равенство. Значит у этого уравнения нет решений.
            </P>
          </ProblemSection>
          <ProblemSection title="Общие формулы корней">
            <P>Определяем коэффициенты:</P>
            <BlockMath>{math`A = 2, \enspace B = 3, \enspace C = 3`}</BlockMath>
            <P>Находим дискриминант:</P>
            <BlockMath>{math`D = B^2 - 4AC = 3^2 - 4\cdot2\cdot3 = 9 - 24 = -15`}</BlockMath>
            <P>Дискриминант отрицательный, значит у уравнения нет решений.</P>
          </ProblemSection>
          <ProblemSection title="Разложение на множители">
            <P>У этого уравнения нет решений, значит и разложить его на множители не получится.</P>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(v+1)(v-5) = 4`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['2+sqrt(13)', '2-sqrt(13)']} />
        <MathExpressionCheck label="Разложение на множители" answer="(v-2-sqrt(13))(v-2+sqrt(13))" />
        <ProblemAnswer>
          <BlockMath>{math`v_1 = 2 + \sqrt{13}, \enspace v_2 = 2 - \sqrt{13}`}</BlockMath>
          <BlockMath>{math`(v - 2 - \sqrt{13})(v - 2 + \sqrt{13}) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Приведём уравнение к общему виду квадратного уравнения:</P>
          <BlockMath>{math`v^2 - 5v + v - 5 = 4`}</BlockMath>
          <P>
            Вычитаем из обеих частей <M>4</M> по <Dep on={sameActionRule}>правилу одинакового действия</Dep>:
          </P>
          <BlockMath>{math`v^2 - 5v + v - 5 - 4 = 0`}</BlockMath>
          <P>Приводим подобные слагаемые:</P>
          <BlockMath>{math`v^2 - 4v - 9 = 0`}</BlockMath>
          <ProblemSection title="В уме">
            <P>
              Уравнение уже приведённое. Выпишем <Dep on={vietasFormulas}>формулы Виета</Dep> для него:
            </P>
            <BlockMath>{math`
              \begin{dcases}
                x_1 + x_2 = 4 \\
                x_1x_2 = -9
              \end{dcases}
            `}</BlockMath>
            <P>Что-то не получается найти целые корни. Решить в уме не получится.</P>
          </ProblemSection>
          <ProblemSection title="Выделение полного квадрата">
            <P>Выделяем полный квадрат:</P>
            <BlockMath>{math`
              \underbrace{v^2 - 2 \cdot v \cdot 2 + \yellow{2^2}}_{\normalsize a^2 - 2\cdot a \cdot b + b^2} - \yellow{2^2} - 9 = 0
              \\
              (v - 2)^2 - 4 - 9 = 0
              \\
              (v - 2)^2 - 13 = 0
            `}</BlockMath>
            <P>
              По <Dep on={sameActionRule}>правилу одинакового действия</Dep> прибавим к обеим частям <M>13</M>:
            </P>
            <BlockMath>{math`(v - 2)^2 = 13`}</BlockMath>
            <P>
              Число в скобках в квадрате равно <M>13</M>. Значит само это число равно положительному или отрицательному
              корню из этой дроби:
            </P>
            <BlockMath>{math`
              v - 2 = \pm\sqrt{13}
              \\
              v = 2 \pm \sqrt{13}
              \\
              v_1 = 2 + \sqrt{13}, \enspace v_2 = 2 - \sqrt{13}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Общие формулы корней">
            <P>Определяем коэффициенты:</P>
            <BlockMath>{math`A = 1, \enspace B = -4, \enspace C = -9`}</BlockMath>
            <P>Находим дискриминант:</P>
            <BlockMath>{math`D = B^2 - 4AC = (-4)^2 - 4\cdot1\cdot(-9) = 16 + 36 = 52`}</BlockMath>
            <P>Дискриминант положительный, значит уравнение имеет два различных корня:</P>
            <BlockMath>{math`v_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-4) \pm \sqrt{52}}{2\cdot1} = \frac{4 \pm 2\sqrt{13}}{2} = 2 \pm \sqrt{13}`}</BlockMath>
            <BlockMath>{math`v_1 = 2 + \sqrt{13}, \enspace v_2 = 2 - \sqrt{13}`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Разложение на множители">
            <P>
              Нам уже известны корни уравнения. Значит мы можем <Dep on={factoring}>разложить</Dep> его на множители:
            </P>
            <BlockMath>{math`(v - 2 - \sqrt{13})(v - 2 + \sqrt{13}) = 0`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(y + 2)(y + 6) = 21`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[1, -9]} />
        <MathExpressionCheck label="Разложение на множители" answer="(y-1)(y+9)" />
        <ProblemAnswer>
          <BlockMath>{math`y_1 = 1, \enspace y_2 = -9`}</BlockMath>
          <BlockMath>{math`(y - 1)(y + 9) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Приведём уравнение к общему виду квадратного уравнения:</P>
          <BlockMath>{math`
            (y + 2)(y + 6) = 21
            \\
            y^2 + 6y + 2y + 12 = 21
          `}</BlockMath>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем из обеих частей <M>21</M>:
          </P>
          <BlockMath>{math`y^2 + 6y + 2y + 12 - 21 = 0`}</BlockMath>
          <P>Приводим подобные слагаемые:</P>
          <BlockMath>{math`y^2 + 8y - 9 = 0`}</BlockMath>
          <ProblemSection title="В уме">
            <P>
              Уравнение уже приведённое. Выпишем его <Dep on={vietasFormulas}>формулы Виета</Dep>:
            </P>
            <BlockMath>{math`
              \begin{dcases}
                x_1 + x_2 = -8 \\
                x_1 \cdot x_2 = -9
              \end{dcases}
            `}</BlockMath>
            <P>
              Сумма корней равна <M>-8</M>, а произведение равно <M>-9</M>. Очевидно, что это числа <M>-9</M> и <M>1</M>
              . Они же являются корнями этого уравнения.
            </P>
          </ProblemSection>
          <ProblemSection title="Выделение полного квадрата">
            <P>Выделим полный квадрат:</P>
            <BlockMath>{math`
              \underbrace{y^2 + 2 \cdot y \cdot 4 + \yellow{4^2}}_{\normalsize a^2 + 2 \cdot a \cdot b + b^2} - \yellow{4^2} - 9 = 0
              \\
              (y + 4)^2 - 16 - 9 = 0
              \\
              (y + 4)^2 - 25 = 0
            `}</BlockMath>
            <P>
              По <Dep on={sameActionRule}>правилу одинакового действия</Dep> прибавим к обеим частям <M>25</M>:
            </P>
            <BlockMath>{math`(y+4)^2 = 25`}</BlockMath>
            <P>
              Некое число <M>y + 4</M>, возведённое в квадрат, даёт <M>25</M>. Значит само по себе это число является
              положительным или отрицательным корнем из <M>25</M>:
            </P>
            <BlockMath>{math`
              y + 4 = \pm 5
              \\
              y_1 = 1, \enspace y_2 = -9
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Общие формулы корней">
            <P>Определяем коэффициенты:</P>
            <BlockMath>{math`A = 1, \enspace B = 8, \enspace C = -9`}</BlockMath>
            <P>Находим дискриминант:</P>
            <BlockMath>{math`D = B^2 - 4AC = 8^2 - 4\cdot1\cdot(-9) = 64 + 36 = 100`}</BlockMath>
            <P>Дискриминант положительный, значит уравнение имеет два различных корня:</P>
            <BlockMath>{math`y_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-8 \pm \sqrt{100}}{2\cdot1} = \frac{-8 \pm 10}{2} = -4 \pm 5`}</BlockMath>
            <BlockMath>{math`y_1 = 1 >> y_2 = -9`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Разложение на множители">
            <P>
              Корни этого уравнения нам известны. Значит мы можем <Dep on={factoring}>разложить</Dep> его на множители:
            </P>
            <BlockMath>{math`(y - 1)(y + 9) = 0`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{1}{3}n^2 + \frac{1}{2} = -n`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['(sqrt(3)-3)/2', '(-sqrt(3)-3)/2']} />
        <MathExpressionCheck label="Разложение на множители" answer="2(n-(sqrt(3)-3)/2)(n-(-sqrt(3)-3)/2)" />
        <ProblemAnswer>
          <BlockMath>{math`n_1 = \frac{\sqrt{3} - 3}{2} >> n_2 = \frac{-\sqrt{3} - 3}{2}`}</BlockMath>
          <BlockMath>{math`2\left(n - \frac{\sqrt{3} - 3}{2}\right)\left(n - \frac{-\sqrt{3} - 3}{2}\right) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Избавимся от дробей в уравнении, по <Dep on={sameActionRule}>правилу одинакового действия</Dep> умножив обе
            части на <M>6</M>:
          </P>
          <BlockMath>{math`2n^2 + 3 = -6n`}</BlockMath>
          <P>
            Прибавим к обеим частям <M>6n</M>:
          </P>
          <BlockMath>{math`2n^2 + 6n + 3 = 0`}</BlockMath>
          <ProblemSection title="В уме">
            <P>
              "Переносим" коэффициент <M>A</M> к <M>C</M>, чтобы получить приведённое уравнение:
            </P>
            <BlockMath>{math`n^2 + 6n + 6 = 0`}</BlockMath>
            <P>
              Выпишем <Dep on={vietasFormulas}>формулы Виета</Dep> для него:
            </P>
            <BlockMath>{math`
              \begin{cases}
                n_1 + n_2 = -6 \\
                n_1n_2 = 6
              \end{cases}
            `}</BlockMath>
            <P>
              Сумма корней равна <M>-6</M>, а произведение равно <M>6</M>. Найти целые корни не получится. Значит, в уме
              не решить.
            </P>
          </ProblemSection>
          <ProblemSection title="Выделение полного квадрата">
            <P>Выделим полный квадрат:</P>
            <BlockMath>{math`
              (\sqrt{2}n)^2 + 2 \cdot \yellow{\sqrt{2}}n \cdot 3 \cdot \yellow{\frac{1}{\sqrt{2}}} + 3 = 0
              \\
              \underbrace{(\sqrt{2}n)^2 + 2 \cdot \sqrt{2}n \cdot \frac{3}{\sqrt{2}} + \yellow{\left(\frac{3}{\sqrt{2}}\right)^2}}_{\normalsize a^2 + 2ab + b^2} - \yellow{\left(\frac{3}{\sqrt{2}}\right)^2} + 3 = 0
              \\
              \left(\sqrt{2}n + \frac{3}{\sqrt{2}}\right)^2 - \frac{9}{2} + 3 = 0
              \\
              \left(\sqrt{2}n + \frac{3}{\sqrt{2}}\right)^2 - \frac{3}{2} = 0
            `}</BlockMath>
            <P>
              По <Dep on={sameActionRule}>правилу одинакового действия</Dep> прибавим к обеим частям{' '}
              <M>{math`\frac{3}{2}`}</M>:
            </P>
            <BlockMath>{math`\left(\sqrt{2}n + \frac{3}{\sqrt{2}}\right)^2 = \frac{3}{2}`}</BlockMath>
            <P>
              Некое число в квадрате равно <M>{math`\frac{3}{2}`}</M>. Значит само по себе это число является
              положительным или отрицательным корнем из этой дроби:
            </P>
            <BlockMath>{math`
              \sqrt{2}n + \frac{3}{\sqrt{2}} = \pm\sqrt{\frac{3}{2}}
              \\
              \sqrt{2}n + \frac{3}{\sqrt{2}} = \pm\frac{\sqrt{3}}{\sqrt{2}}
            `}</BlockMath>
            <P>
              Умножим обе части на <M>{math`\sqrt{2}`}</M>:
            </P>
            <BlockMath>{math`2n + 3 = \pm\sqrt{3}`}</BlockMath>
            <P>Решая два этих элементарных подуравнения, находим корни:</P>
            <BlockMath>{math`n_1 = \frac{\sqrt{3} - 3}{2} >> n_2 = \frac{-\sqrt{3} - 3}{2}`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Общие формулы корней">
            <P>Определяем коэффициенты:</P>
            <BlockMath>{math`A = 2, \enspace B = 6, \enspace C = 3`}</BlockMath>
            <P>Находим дискриминант:</P>
            <BlockMath>{math`D = B^2 - 4AC = 6^2 - 4\cdot2\cdot3 = 36 - 24 = 12`}</BlockMath>
            <P>Дискриминант положительный, значит уравнение имеет два различных корня:</P>
            <BlockMath>{math`n_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-6 \pm \sqrt{12}}{2\cdot2} = \frac{-6 \pm 2\sqrt{3}}{4} = \frac{-3 \pm \sqrt{3}}{2}`}</BlockMath>
            <BlockMath>{math`n_1 = \frac{-3 + \sqrt{3}}{2} >> n_2 = \frac{-3 - \sqrt{3}}{2}`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Разложение на множители">
            <P>
              Нам уже известны корни уравнения. Значит мы можем <Dep on={factoring}>разложить</Dep> его на множители:
            </P>
            <BlockMath>{math`2\left(n - \frac{-3 + \sqrt{3}}{2}\right)\left(n - \frac{-3 - \sqrt{3}}{2}\right) = 0`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Гадание на кофейной гуще" level="medium" method>
      <P>Решите квадратные уравнения, не используя общих формул корней:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`463x^2 - 102x - 361 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[1, '-361/463']} />
        <ProblemHint>
          Используйте <Dep on={zeroSumRule}>метод нулевой суммы</Dep> или просто попробуйте угадать первый корень:{' '}
          <M>{math`0, 1, -1, 2, -2`}</M>.
        </ProblemHint>
        <ProblemHint>
          Второй корень элементарно находится по <Dep on={vietasFormulas}>формуле Виета</Dep> через произведение корней.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 1 >>{big} x_2 = \frac{-361}{463}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Решение в уме">
            <P>
              На это уравнение распространяется <Dep on={zeroSumRule}>метод нулевой суммы</Dep> -- сумма коэффициентов
              равна нулю:
            </P>
            <BlockMath>{math`463 - 102 - 361 = 0`}</BlockMath>
            <P>
              Тогда один из корней равен <M>1</M>, а второй находится по формуле:
            </P>
            <BlockMath>{math`
              x_1 = 1 >> x_2 = \frac{-361}{463}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Угадывание корня">
            <P>
              Угадыванием находим, что один из корней равен <M>1</M>:
            </P>
            <BlockMath>{math`
              463 \cdot 1^2 - 102 \cdot 1 - 361 = 0
              \\
              463 - 102 - 361 = 0
              \\
              463 - 463 = 0
              \\
              0 = 0
            `}</BlockMath>
            <P>
              Второй корень можно найти по <Dep on={vietasFormulas}>формуле Виета</Dep> через произведение корней:
            </P>
            <BlockMath>{math`
              \underset{x_1}{1} \cdot x_2 = \frac{-361}{463}
              \\
              \boxed{x_2 = \frac{-361}{463}}
            `}</BlockMath>
            <P>Корни уравнения:</P>
            <BlockMath>{math`x_1 = 1 >>{big} x_2 = \frac{-361}{463}`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`67 x^2 - 105x - 172 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-1, '172/67']} />
        <ProblemHint>
          Используйте <Dep on={zeroSumRule}>метод нулевой суммы</Dep> или просто попробуйте угадать первый корень:{' '}
          <M>{math`0, 1, -1, 2, -2`}</M>.
        </ProblemHint>
        <ProblemHint>
          Второй корень элементарно находится по <Dep on={vietasFormulas}>формуле Виета</Dep> через произведение корней.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -1 >>{big} x_2 = \frac{172}{67}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Решение в уме">
            <P>
              На это уравнение распространяется <Dep on={zeroSumRule}>метод нулевой суммы</Dep> -- сумма коэффициентов с
              взятым наоборот знаком у <M>B</M> равна нулю:
            </P>
            <BlockMath>{math`67 - (-105) - 172 = 0`}</BlockMath>
            <P>
              Тогда один из корней равен <M>-1</M>, а второй находится по формуле:
            </P>
            <BlockMath>{math`
              x_1 = -1 >> x_2 = \frac{172}{67}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Угадывание корня">
            <P>
              Угадыванием находим, что один из корней равен <M>-1</M>:
            </P>
            <BlockMath>{math`
            67 \cdot (-1)^2 - 105 \cdot (-1) - 172 = 0
            \\
            67 + 105 - 172 = 0
            \\
            172 - 172 = 0
            \\
            0 = 0
          `}</BlockMath>
            <P>
              Второй корень можно найти по <Dep on={vietasFormulas}>формуле Виета</Dep> через произведение корней:
            </P>
            <BlockMath>{math`
            \underset{x_1}{-1} \cdot x_2 = \frac{-172}{67}
            \\
            \boxed{x_2 = \frac{172}{67}}
          `}</BlockMath>
            <P>Корни уравнения:</P>
            <BlockMath>{math`x_1 = -1 >>{big} x_2 = \frac{172}{67}`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`13x^2 - 33x + 14 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[2, '7/13']} />
        <ProblemHint>
          Попробуйте угадать первый корень: <M>{math`0, 1, -1, 2, -2`}</M>.
        </ProblemHint>
        <ProblemHint>
          Второй корень элементарно находится по <Dep on={vietasFormulas}>формуле Виета</Dep> через произведение корней.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 2 >>{big} x_2 = \frac{7}{13}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Угадыванием находим, что один из корней равен <M>2</M>:
          </P>
          <BlockMath>{math`
            13 \cdot 2^2 - 33 \cdot 2 + 14 = 0
            \\
            52 - 66 + 14 = 0
            \\
            -14 + 14 = 0
            \\
            0 = 0
          `}</BlockMath>
          <P>
            Второй корень можно найти по <Dep on={vietasFormulas}>формуле Виета</Dep> через произведение корней:
          </P>
          <BlockMath>{math`
            \underset{x_1}{2} \cdot x_2 = \frac{14}{13}
            \\
            \boxed{x_2 = \frac{7}{13}}
          `}</BlockMath>
          <P>Корни уравнения:</P>
          <BlockMath>{math`x_1 = 2 >>{big} x_2 = \frac{7}{13}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`8x^2 + 25x + 18 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-2, '-9/4']} />
        <ProblemHint>
          Попробуйте угадать первый корень: <M>{math`0, 1, -1, 2, -2`}</M>.
        </ProblemHint>
        <ProblemHint>
          Второй корень элементарно находится по <Dep on={vietasFormulas}>формуле Виета</Dep> через произведение корней.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -2 >>{big} x_2 = -\frac{9}{4}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Угадыванием находим, что один из корней равен <M>-2</M>:
          </P>
          <BlockMath>{math`
            8 \cdot (-2)^2 + 25 \cdot (-2) + 18 = 0
            \\
            32 - 50 + 18 = 0
            \\
            -18 + 18 = 0
            \\
            0 = 0
          `}</BlockMath>
          <P>
            Второй корень можно найти по <Dep on={vietasFormulas}>формуле Виета</Dep> через произведение корней:
          </P>
          <BlockMath>{math`
            \underset{x_1}{-2} \cdot x_2 = \frac{18}{8}
            \\
            \boxed{x_2 = -\frac{9}{4}}
          `}</BlockMath>
          <P>Корни уравнения:</P>
          <BlockMath>{math`x_1 = -2 >>{big} x_2 = -\frac{9}{4}`}</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          <P>
            Если вы видите, что квадратное уравнение будет "неприятно" решать через общие формулы (например придётся
            работать с большими числами), то попробуйте сначала угадать один из его корней. Поперебирайте небольшие
            целые числа:
          </P>
          <BlockMath>{math`0, 1, -1, 2, -2`}</BlockMath>
        </ProblemNote>
      </SubProblem>
    </Problems>

    <Problems title="Бой с тенью" level="medium" pretty>
      <P>Решите квадратное уравнение, не используя общих формул корней:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`2x^2 - 5x - 7 = 2 \cdot \left(\frac{3}{5}\right)^2 - 5 \cdot \left(\frac{3}{5}\right) - 7`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['3/5', '19/10']} />
        <ProblemHint>
          Угадайте первый корень уравнения. Обратите внимание на то, что выражения слева и справа почти одинаковые.
        </ProblemHint>
        <ProblemHint>
          Используйте <Dep on={vietasFormulas}>формулу Виета</Dep> через сумму для нахождения второго корня.
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`x_1 = \dfrac{3}{5}`}</M> и <M>{math`x_2 = \dfrac{19}{10}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Замечаем, что выражения справа и слева одинаковые, но справа вместо <M>x</M> подставили число{' '}
            <M>{math`\frac{3}{5}`}</M>. Значит один корень мы уже нашли, ведь при подстановке слева вместо <M>x</M>{' '}
            дроби <M>{math`\frac{3}{5}`}</M> левая часть становится полностью идентичной правой части. Равенство
            становится верным:
          </P>
          <BlockMath>{math`2\cdot\left(\frac{3}{5}\right)^2 - 5\cdot\left(\frac{3}{5}\right) - 7 = 2\cdot\left(\frac{3}{5}\right)^2 - 5\cdot\left(\frac{3}{5}\right) - 7`}</BlockMath>
          <P>
            Для нахождения второго корня можно использовать <Dep on={vietasFormulas}>формулу Виета</Dep> через сумму
            корней:
          </P>
          <BlockMath>{math`
            \frac{3}{5} + x_2 = \frac{5}{2}
            \\
            \frac{6}{10} + x_2 = \frac{25}{10}
            \\
            \boxed{x_2 = \frac{19}{10}}
          `}</BlockMath>
          <P>
            Итак, корни данного уравнения равны <M>{math`\dfrac{3}{5}`}</M> и <M>{math`\dfrac{19}{10}`}</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`3x^2 + 7x - 2 = 3 \cdot \left(-\frac{16}{3}\right)^2 + 7 \cdot \left(-\frac{16}{3}\right) - 2`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['-16/3', 3]} />
        <ProblemHint>Воспользуйтесь подсказкой к первому пункту.</ProblemHint>
        <ProblemAnswer>
          <M>{math`x_1 = -\dfrac{16}{3}`}</M> и <M>{math`x_2 = 3`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Первый корень равен <M>{math`\dfrac{-16}{3}`}</M>, так как при подстановке вместо <M>x</M> этого числа левая
            часть становится полностью идентичной правой части. Равенство становится верным:
          </P>
          <BlockMath>{math`3\cdot\left(-\frac{16}{3}\right)^2 + 7\cdot\left(-\frac{16}{3}\right) - 2 = 3\cdot\left(-\frac{16}{3}\right)^2 + 7\cdot\left(-\frac{16}{3}\right) - 2`}</BlockMath>
          <P>
            Для нахождения второго корня можно использовать <Dep on={vietasFormulas}>формулу Виета</Dep> через сумму
            корней:
          </P>
          <BlockMath>{math`
            -\frac{16}{3} + x_2 = -\frac{7}{3}
            \\
            x_2 = \frac{9}{3}
            \\
            \boxed{x_2 = 3}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`4x^2 - 3x + 9 = 4 \cdot (3.7)^2 - 3\cdot(3.7 - 3)`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[[3.7, '37/10'], '-59/20']} />
        <ProblemHint>Воспользуйтесь подсказкой к первому пункту.</ProblemHint>
        <ProblemAnswer>
          <M>{math`x_1 = 3.7`}</M> и <M>{math`x_2 = -\dfrac{59}{20}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>В правой части уравнения раскрываем скобки и получаем симметричные выражения:</P>
          <BlockMath>{math`4x^2 - 3x + 9 = 4 \cdot (3.7)^2 - 3\cdot(3.7) + 9`}</BlockMath>
          <P>
            Сразу получаем корень <M>3.7</M>, так как при подстановке вместо <M>x</M> этого числа левая часть становится
            полностью идентичной правой части. Равенство становится верным:
          </P>
          <BlockMath>{math`4\cdot(3.7)^2 - 3\cdot(3.7) + 9 = 4\cdot(3.7)^2 - 3\cdot(3.7) + 9`}</BlockMath>
          <P>
            Для нахождения второго корня можно использовать <Dep on={vietasFormulas}>формулу Виета</Dep> через сумму
            корней:
          </P>
          <BlockMath>{math`
            3.7 + x_2 = \frac{3}{4}
            \\
            \frac{37}{10} + x_2 = \frac{3}{4}
            \\
            \frac{74}{20} + x_2 = \frac{15}{20}
            \\
            \boxed{x_2 = -\frac{59}{20}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`5x^2 + 10x + 3 = 5 \cdot 4.2 \cdot (4.2 - 2) + 3`}</BlockMath>
        </ProblemDescription>
        <RootsCheck
          roots={[
            [-4.2, '-21/5'],
            [-6.2, '-31/5'],
          ]}
        />
        <ProblemHint>Воспользуйтесь подсказкой к первому пункту.</ProblemHint>
        <ProblemAnswer>
          <M>{math`x_1 = -4.2`}</M> и <M>{math`x_2 = -6.2`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В правой части уравнения раскрываем скобки, но не трогаем <M>4.2</M>, получая почти симметричные выражения:
          </P>
          <BlockMath>{math`5x^2 + 10x + 3 = 5 \cdot (4.2)^2 - 10 \cdot (4.2) + 3`}</BlockMath>
          <P>
            Выражения слева и справа почти одинаковые, вот только знаки перед <M>10x</M> разные. Легко можно догадаться,
            что первый корень равен <M>-4.2</M>, так как при подстановке вместо <M>x</M> этого числа левая часть
            становится полностью идентичной правой части. Равенство становится верным:
          </P>
          <BlockMath>{math`
            5 \cdot (-4.2)^2 + 10 \cdot (-4.2) + 3 = 5 \cdot (4.2)^2 - 10 \cdot (4.2) + 3
            \\
            5 \cdot (-1)^2 \cdot (4.2)^2 - 10 \cdot (4.2) + 3 = 5 \cdot (4.2)^2 - 10 \cdot (4.2) + 3
            \\
            5 \cdot (4.2)^2 - 10 \cdot (4.2) + 3 = 5 \cdot (4.2)^2 - 10 \cdot (4.2) + 3
          `}</BlockMath>
          <P>
            Для нахождения второго корня можно использовать <Dep on={vietasFormulas}>формулу Виета</Dep> через сумму
            корней:
          </P>
          <BlockMath>{math`
            -4.2 + x_2 = -\frac{10}{5}
            \\
            -4.2 + x_2 = -2
            \\
            \boxed{x_2 = -6.2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Неспешный поезд" level="medium">
      <ProblemDescription>
        Поезд проезжает <M>200</M> километров с постоянной скоростью. Если бы он ехал на <M>10</M> километров в час
        быстрее, то проехал бы это расстояние на <M>1</M> час меньше. С какой скоростью ехал поезд?
      </ProblemDescription>
      <MathValueCheck label="Скорость (км/ч)" answer={40} />
      <ProblemHint>
        Выпишите формулу для времени в обоих ситуациях. Объедините эти формулы в одно уравнение.
      </ProblemHint>
      <ProblemAnswer>
        Исходная скорость поезда равна <M>40</M> километров в час.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Обозначим исходную скорость поезда буквой <M>v</M>. Тогда время, которое он потратит на проезд <M>200</M>{' '}
          километров, будет равно:
        </P>
        <BlockMath>{math`t = \frac{200}{v}`}</BlockMath>
        <P>
          Нам также известно, что если бы поезд ехал на <M>10</M> километров в час быстрее, то он бы проехал это
          расстояние на <M>1</M> час быстрее. Математически это можно записать так:
        </P>
        <BlockMath>{math`t-1 = \frac{200}{v + 10}`}</BlockMath>
        <P>
          Заменяем <M>t</M> в этом равенстве на выражение из первого равенства:
        </P>
        <BlockMath>{math`\frac{200}{v} - 1 = \frac{200}{v+10}`}</BlockMath>
        <P>
          Умножим по <Dep on={sameActionRule}>правилу одинакового действия</Dep> обе части на <M>{math`v(v + 10)`}</M>:
        </P>
        <BlockMath>{math`200(v + 10) - v(v + 10) = 200v`}</BlockMath>
        <P>Раскроем скобки:</P>
        <BlockMath>{math`200v + 2000 - v^2 - 10v = 200v`}</BlockMath>
        <P>
          Вычтем <M>200v</M> из обеих частей:
        </P>
        <BlockMath>{math`2000 - v^2 - 10v = 0`}</BlockMath>
        <P>Поменяем местами слагаемые:</P>
        <BlockMath>{math`-v^2 - 10v + 2000 = 0`}</BlockMath>
        <P>
          Умножаем обе части на <M>-1</M>:
        </P>
        <BlockMath>{math`v^2 + 10v - 2000 = 0`}</BlockMath>
        <P>
          Получили приведённое квадратное уравнение. Найдём его корни по <Dep on={vietasFormulas}>формуле Виета</Dep>:
        </P>
        <BlockMath>{math`
            \begin{cases}
              v_1 + v_2 = -10 \\
              v_1 \cdot v_2 = -2000
            \end{cases}
          `}</BlockMath>
        <P>
          Сумма корней равна <M>-10</M>, а произведение равно <M>-2000</M>. Очевидно, что эти корни равны <M>-50</M> и{' '}
          <M>40</M>.
        </P>
        <P>
          Отрицательная скорость не имеет смысла в данной задаче, поэтому мы отбрасываем корень <M>-50</M>. Остается
          только положительный корень <M>40</M>.
        </P>
        <P>
          Итак, исходная скорость поезда равна <M>40</M> километров в час.
        </P>
      </ProblemSolution>
    </Problem>

    <Problems title="Тонкая настройка" level="medium">
      <SubProblem>
        <ProblemDescription>
          <P>
            При каких значениях <M>k</M> произведение корней квадратного уравнения ниже равно нулю?
          </P>
          <BlockMath>{math`x^2 + 3x + (k^2 - 7k + 12) = 0`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck label="k" answers={[3, 4]} />
        <ProblemAnswer>
          <M>k = 3</M> и <M>k = 4</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Выпишем <Dep on={vietasFormulas}>формулу Виета</Dep> для произведения корней данного квадратного уравнения:
          </P>
          <BlockMath>{math`x_1x_2 = k^2 - 7k + 12`}</BlockMath>
          <P>Нам нужно, чтобы произведение корней было равно нулю. Тогда нулю должно быть равно правое выражение:</P>
          <BlockMath>{math`k^2 - 7k + 12 = 0`}</BlockMath>
          <P>
            Получили квадратное уравнение. Оно приведённое, поэтому его можно решить в уме по формулам Виета. Достаточно
            подумать, какие числа в сумме дадут <M>7</M>, а при умножении <M>12</M>. Очевидно, это числа <M>3</M> и{' '}
            <M>4</M>.
          </P>
          <P>
            Итак, при <M>k = 3</M> и <M>k = 4</M> выражение <M>{math`k^2 -7k + 12`}</M> станет равно нулю, а значит,
            нулю будет равно и произведение корней данного в условии квадратного уравнения.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            При каких значениях <M>k</M> сумма корней квадратного уравнения ниже равна нулю?
          </P>
          <BlockMath>{math`x^2 + (k^2 + 4k - 5)x - k = 0`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck label="k" answers={[-5, 1]} />
        <ProblemAnswer>
          <M>k = -5</M> и <M>k = 1</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Выпишем <Dep on={vietasFormulas}>формулу Виета</Dep> для суммы корней данного квадратного уравнения:
          </P>
          <BlockMath>{math`x_1 + x_2 = -(k^2 + 4k - 5)`}</BlockMath>
          <P>Нам нужно, чтобы сумма корней была равна нулю. Тогда нулю должно быть равно правое выражение:</P>
          <BlockMath>{math`-(k^2 + 4k - 5) = 0`}</BlockMath>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> умножим обе части на <M>-1</M>:
          </P>
          <BlockMath>{math`k^2 + 4k - 5 = 0`}</BlockMath>
          <P>
            Получили квадратное уравнение. Оно приведённое, поэтому его можно решить в уме по формулам Виета. Достаточно
            подумать, какие числа в сумме дадут <M>-4</M>, а при умножении <M>-5</M>. Очевидно, это числа <M>-5</M> и{' '}
            <M>1</M>.
          </P>
          <P>
            Итак, при <M>k = -5</M> и <M>k = 1</M> выражение <M>{math`k^2 + 4k - 5`}</M> станет равно нулю, а значит,
            нулю будет равна и сумма корней данного в условии квадратного уравнения.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            При каких значениях <M>a</M> сумма корней уравнения равна сумме квадратов его корней?
          </P>
          <BlockMath>{math`x^2 - 2a(x-1) - 1 = 0`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck label="a" answers={[1, '1/2']} />
        <ProblemHint>Приведите квадратное уравнение к общему виду.</ProblemHint>
        <ProblemHint>
          Дополните сумму квадратов корней до формулы сокращенного умножения (ФСУ) "квадрат суммы".
        </ProblemHint>
        <ProblemAnswer>
          <M>a = 1</M> или <M>{math`a = \frac{1}{2}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Для начала приведём квадратное уравнение к общему виду. Для этого раскроем скобки и приведём подобные
            слагаемые:
          </P>
          <BlockMath>{math`
            x^2 - 2a(x - 1) - 1 = 0
            \\
            x^2 - 2ax + 2a - 1 = 0
            \\
            x^2 - 2ax + (2a - 1) = 0
          `}</BlockMath>
          <P>
            Теперь выпишем <Dep on={vietasFormulas}>формулы Виета</Dep> для этого квадратного уравнения:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = 2a \\
              x_1x_2 = 2a - 1
            \end{cases}
          `}</BlockMath>
          <P>Наконец, запишем равенство, которое нам требуется по условию:</P>
          <BlockMath>{math`x_1 + x_2 = x_1^2 + x_2^2`}</BlockMath>
          <P>
            Прибавив по <Dep on={sameActionRule}>правилу одинакового действия</Dep> к обеим частям{' '}
            <M>{math`2x_1x_2`}</M> мы можем запаковать правую часть в формулу сокращенного умножения (ФСУ) "квадрат
            суммы":
          </P>
          <BlockMath>{math`
            x_1 + x_2 + \yellow{2x_1x_2} = x_1^2 + \yellow{2x_1x_2} + x_2^2
            \\
            x_1 + x_2 + 2x_1x_2 = (x_1 + x_2)^2
          `}</BlockMath>
          <P>Подставляем в полученное равенство данные из формул Виета:</P>
          <BlockMath>{math`
            2a + 2(2a - 1) = (2a)^2
            \\
            2a + 4a - 2 = 4a^2
            \\
            6a - 2 = 4a^2
          `}</BlockMath>
          <P>
            Делим обе части равенства на <M>2</M>, и не забываем про <Dep on={alwaysGlobal}>глобальность</Dep> этого
            действия:
          </P>
          <BlockMath>{math`
            \frac{6a - 2}{\yellow{2}} = \frac{4a^2}{\yellow{2}}
            \\
            3a - 1 = 2a^2
          `}</BlockMath>
          <P>Группируем все данные с одной стороны равенства:</P>
          <BlockMath>{math`2a^2 - 3a + 1 = 0`}</BlockMath>
          <P>
            Получили квадратное уравнение. Один корень можно угадать, он равен <M>1</M>. Тогда второй корень
            элементарным образом находится в уме по формуле Виета для коэффициента <M>C</M>:
          </P>
          <BlockMath>{math`\underset{a_1}{1}\cdot \ ? = \frac{1}{2} \\ a_2 = \frac{1}{2}`}</BlockMath>
          <P>
            Итак, при <M>a = 1</M> или <M>{math`a = \frac{1}{2}`}</M> сумма корней данного в условии квадратного
            уравнения будет равна сумме квадратов его корней.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title='Превосходство "C"' level="medium">
      <ProblemDescription>
        <P>Выведите общие формулы для решения любых квадратных уравнений вида:</P>
        <BlockMath>{math`x^2 + 2x + C = 0`}</BlockMath>
        <P>При каких условиях у этого уравнения есть решения?</P>
      </ProblemDescription>
      <ProblemHint>Просто решите это уравнение выделением полного квадрата или общими формулами корней.</ProblemHint>
      <ProblemAnswer>
        <BlockMath>{math`x_1 = -1 + \sqrt{1 - C} >> x_2 = -1 - \sqrt{1 - C}`}</BlockMath>
        <P>
          Если выражение <M>1 - C</M> отрицательное, то у уравнения нет решений.
        </P>
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Через выделение полного квадрата">
          <P>Выделяем полный квадрат:</P>
          <BlockMath>{math`
              x^2 + 2x + C = 0
              \\
              \underbrace{x^2 + 2 \cdot x \cdot 1 + \yellow{1}}_{\small a^2 + 2 \cdot a \cdot b + b^2} - \yellow{1} + C = 0
              \\
              (x+1)^2 - 1 + C = 0
            `}</BlockMath>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> прибавим к обеим частям <M>1</M> и вычтем{' '}
            <M>C</M>:
          </P>
          <BlockMath>{math`(x+1)^2 = 1 - C`}</BlockMath>
          <P>
            Так как слева не может получиться отрицательного числа, то <M>1 - C</M> должно быть неотрицательным, иначе
            решений у уравнения не будет. Некое число <M>x + 1</M> в квадрате равно <M>1 - C</M>. Значит само по себе
            это число является положительным или отрицательным корнем из <M>1 - C</M>:
          </P>
          <BlockMath>{math`x + 1 = \pm\sqrt{1 - C}`}</BlockMath>
          <P>
            Вычитаем из обеих частей <M>1</M>:
          </P>
          <BlockMath>{math`x = -1 \pm \sqrt{1 - C}`}</BlockMath>
          <P>Корни уравнения:</P>
          <BlockMath>{math`x_1 = -1 + \sqrt{1 - C} >> x_2 = -1 - \sqrt{1 - C}`}</BlockMath>
        </ProblemSection>
        <ProblemSection title="Через общие формулы корней">
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 1, \enspace B = 2, \enspace C = C`}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`D = B^2 - 4AC = 2^2 - 4\cdot1\cdot C = 4 - 4C = 4(1 - C)`}</BlockMath>
          <P>
            Дискриминант должен быть неотрицательным, иначе решений у уравнения не будет. <M>4</M> ни на что не влияет,
            поэтому неотрицательным должно быть выражение <M>1 - C</M>. Если дискриминант неотрицательный, то у
            уравнения есть два различных корня:
          </P>
          <BlockMath>{math`x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-2 \pm \sqrt{4(1 - C)}}{2\cdot1} = \frac{-2 \pm 2\sqrt{1 - C}}{2} = -1 \pm \sqrt{1 - C}`}</BlockMath>
        </ProblemSection>
      </ProblemSolution>
    </Problem>

    <Problem title="Вечный оптимист" level="medium">
      <ProblemDescription>
        <P>
          Правда ли, что если все слагаемые квадратного уравнения в общем виде со знаком <M>+</M>, например{' '}
          <M>{math`3x^2 + x + 100 = 0`}</M>, то у него нет решений? Ведь мы складываем три положительных числа, которые
          в сумме уж никак не могут дать <M>0</M>!
        </P>
        <P>Если это не так, то приведите контрпример и подробно объясните, почему эта логика ошибочна.</P>
        {/* TODO: Усилить неравенством -- В теме про неравенства дать задачу точно определить, при каких условиях у квадратного уравнения с положительными коэффициентами нет или есть решения */}
      </ProblemDescription>
      <ProblemCheck label="Правда ли, что нет решений?" no />
      <ProblemHint>Контрпример можно найти в формуле сокращенного умножения "квадрат суммы".</ProblemHint>
      <ProblemAnswer>
        Нет, это не так. Контрпример: <M>{math`x^2 + 2x + 1 = 0`}</M> имеет корень <M>-1</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Контрпример">
          <P>
            Доказать ошибочность этого утверждения можно, если вспомнить формулу сокращенного умножения "квадрат суммы":
          </P>
          <BlockMath>{math`a^2 + 2ab + b^2 = (a+b)^2`}</BlockMath>
          <P>
            Заменим <M>a</M> и <M>b</M> на <M>x</M> и <M>1</M>, тогда получим:
          </P>
          <BlockMath>{math`x^2 + 2x + 1 = (x + 1)^2`}</BlockMath>
          <P>Получается, мы можем составить вот такое "позитивное" квадратное уравнение:</P>
          <BlockMath>{math`x^2 + 2x + 1 = 0 \\ (x+1)^2 = 0`}</BlockMath>
          <P>
            Корнем этого уравнения является <M>-1</M>. Это и есть контрпример, который опровергает утверждение, что если
            все слагаемые квадратного уравнения со знаком <M>+</M>, то у него нет решений.
          </P>
        </ProblemSection>
        <ProblemSection title="Почему это утверждение не верно?">
          <P>
            Несмотря на то что все коэффициенты действительно положительные, это утверждение не учитывает, что сам
            корень может быть отрицательным. Когда корень отрицательный, то положительные слагаемые <M>{math`Ax^2`}</M>{' '}
            и <M>C</M> иногда могут быть скомпенсированы отрицательным слагаемым <M>Bx</M>, и в сумме получится <M>0</M>
            , что и будет решением уравнения!
          </P>
        </ProblemSection>
      </ProblemSolution>
      <ProblemNote>
        Несмотря на то что утверждение в условии ошибочно, всё же можно из этой задачи получить интересный
        математический факт. Если у нас есть "позитивное" квадратное уравнение с положительными коэффициентами, то его
        корни, если они есть, всегда будут отрицательными!
      </ProblemNote>
    </Problem>

    <Problems title="Замена переменной" level="medium" method pretty>
      <P>Решите уравнение:</P>

      <SubProblem label="Образец">
        <ProblemDescription>
          <BlockMath>{math`x^4 - 7x^2 - 144 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[4, -4]} />
        <ProblemHint>
          Введите обозначение <M>{math`t = x^2`}</M>. Замените в уравнении <M>{math`x^2`}</M> на <M>t</M> и{' '}
          <M>{math`x^4`}</M> на <M>{math`t^2`}</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 4 >> x_2 = -4`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Что?! Это же никакое не квадратное уравнение, справедливо можете сказать вы. Верно. Но мы всё равно его
            решим.
          </P>
          <P>
            Обратим внимание, что <M>{math`x^4`}</M> можно записать как <M>{math`(x^2)^2`}</M>:
          </P>
          <BlockMath>{math`(x^2)^2 - 7x^2 - 144 = 0`}</BlockMath>
          <P>
            Замечаем, что <M>{math`x^2`}</M> встречается дважды. Давайте обозначим этот <M>{math`x^2`}</M> буквой{' '}
            <M>t</M>:
          </P>
          <BlockMath>{math`t^2 - 7t - 144 = 0`}</BlockMath>
          <P>
            А вот это уже самое обычное квадратное уравнение в общем виде! Решив его любым способом (выделением полного
            квадрата или общими формулами), находим два корня:
          </P>
          <BlockMath>{math`t_1 = 16 >> t_2 = -9`}</BlockMath>
          <P>
            Но мы помним, что <M>{math`t = x^2`}</M>. Поэтому заменяем <M>t</M> обратно на исходное <M>{math`x^2`}</M> и
            получаем два подуравнения:
          </P>
          <BlockMath>{math`x^2 = 16 >> x^2 = -9`}</BlockMath>
          <P>
            Первое подуравнение имеет два корня: <M>4</M> и <M>-4</M>. А вот второе подуравнение не имеет решений, так
            как квадрат числа не может быть отрицательным.
          </P>
          <P>
            Итак, исходное страшное, сложное и нерешаемое уравнение имеет всего два корня: <M>4</M> и <M>-4</M>!
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^6 + 9x^3 + 8 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-2, -1]} />
        <ProblemHint>
          Сделайте замену переменной <M>{math`t = x^3`}</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -2 >> x_2 = -1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Обращаем внимание, что <M>{math`x^6`}</M> можно записать как <M>{math`(x^3)^2`}</M>:
          </P>
          <BlockMath>{math`(x^3)^2 + 9x^3 + 8 = 0`}</BlockMath>
          <P>
            Замечаем, что <M>{math`x^3`}</M> встречается дважды. Давайте обозначим этот <M>{math`x^3`}</M> буквой{' '}
            <M>t</M>:
          </P>
          <BlockMath>{math`t^2 + 9t + 8 = 0`}</BlockMath>
          <P>
            А вот это уже самое обычное квадратное уравнение в общем виде! Это уравнение приведённое, поэтому его можно
            решить в уме при помощи <Dep on={vietasFormulas}>формул Виета</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = -9 \\
              t_1t_2 = 8
            \end{cases}
          `}</BlockMath>
          <P>
            Сумма корней равна <M>-9</M>, а произведение равно <M>8</M>. Очевидно, что это числа <M>-8</M> и <M>-1</M>.
            Они же являются корнями нашего уравнения с <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = -8 >> t_2 = -1`}</BlockMath>
          <P>
            Но мы помним, что <M>{math`t = x^3`}</M>. Поэтому заменяем <M>t</M> обратно на исходное <M>{math`x^3`}</M> и
            получаем два подуравнения:
          </P>
          <BlockMath>{math`x^3 = -8 >> x^3 = -1`}</BlockMath>
          <P>
            Какое число, трижды умноженное на себя, даёт <M>-8</M>? Это число <M>-2</M>. А какое число, трижды
            умноженное на себя, даёт <M>-1</M>? Это число <M>-1</M>.
          </P>
          <P>Получаем два корня исходного уравнения:</P>
          <BlockMath>{math`x_1 = -2 >> x_2 = -1`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{4}{x^2+4} + \frac{5}{x^2 + 5} = 2`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0]} />
        <ProblemHint>
          Сделайте замену переменной <M>{math`t = x^2`}</M>.
        </ProblemHint>
        <ProblemAnswer>
          <M>0</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Замечаем, что в уравнении присутствует только <M>{math`x^2`}</M>. Давайте обозначим его буквой <M>t</M>:
          </P>
          <BlockMath>{math`\frac{4}{t+4} + \frac{5}{t + 5} = 2`}</BlockMath>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> умножим обе части на{' '}
            <M>{math`(t+4)(t+5)`}</M>:
          </P>
          <BlockMath>{math`4(t+5) + 5(t+4) = 2(t+4)(t+5)`}</BlockMath>
          <P>
            Вычитаем из обеих частей <M>{math`2(t+4)(t+5)`}</M>:
          </P>
          <BlockMath>{math`4(t+5) + 5(t+4) - 2(t+4)(t+5) = 0`}</BlockMath>
          <P>Раскрываем скобки и приводим подобные слагаемые:</P>
          <BlockMath>{math`
            4t + 20 + 5t + 20 - 2(t^2 + 9t + 20) = 0
            \\
            4t + 5t + 20 + 20 - 2t^2 - 18t - 40 = 0
            \\
            -2t^2 - 9t = 0
          `}</BlockMath>
          <P>
            Выносим <M>-t</M> за скобки:
          </P>
          <BlockMath>{math`-t(2t + 9) = 0`}</BlockMath>
          <P>
            Чтобы слева получился <M>0</M> и равенство стало верным, <M>t</M> должно быть равно <M>0</M> (это первый
            корень) или <M>2t + 9</M> должно быть равно <M>0</M>:
          </P>
          <BlockMath>{math`2t_2 + 9 = 0 \\ t_2 = -\frac{9}{2}`}</BlockMath>
          <P>
            Итак, у нас есть два корня с <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 0 >> t_2 = -\frac{9}{2}`}</BlockMath>
          <P>
            Но мы помним, что <M>{math`t = x^2`}</M>. Поэтому заменяем <M>t</M> обратно на исходное <M>{math`x^2`}</M> и
            получаем два подуравнения:
          </P>
          <BlockMath>{math`x^2 = 0 >>{big} x^2 = -\frac{9}{2}`}</BlockMath>
          <P>
            Первое подуравнение имеет один корень: <M>0</M>. А вот второе подуравнение не имеет решений, так как квадрат
            числа не может быть отрицательным.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2 + x - 2}{x} + \frac{2x}{x^2 + x - 2} - 3 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['sqrt(2)', '-sqrt(2)', 2, -1]} />
        <ProblemHint>
          <P>Сделайте замену переменной:</P>
          <BlockMath>{math`t = \frac{x^2 + x - 2}{x}`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = \sqrt{2} >> x_2 = -\sqrt{2} >> x_3 = 2 >> x_4 = -1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Обращаем внимание, что дробь по центру является перевернутой дробью слева. Давайте обозначим эту дробь
            буквой <M>t</M>:
          </P>
          <BlockMath>{math`t = \frac{x^2 + x - 2}{x}`}</BlockMath>
          <P>Тогда уравнение можно переписать так:</P>
          <BlockMath>{math`t + \frac{2}{t} - 3 = 0`}</BlockMath>
          <P>
            Умножим по <Dep on={sameActionRule}>правилу одинакового действия</Dep> обе части на <M>t</M>:
          </P>
          <BlockMath>{math`t^2 - 3t + 2 = 0`}</BlockMath>
          <P>
            Решим это приведённое квадратное уравнение в уме при помощи <Dep on={vietasFormulas}>формул Виета</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = 3 \\
              t_1t_2 = 2
            \end{cases}
          `}</BlockMath>
          <P>
            Тут сразу понятно, что только числа <M>1</M> и <M>2</M> при умножении дают <M>2</M> и при сложении дают{' '}
            <M>3</M>. Они же являются корнями нашего уравнения с <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 1 >> t_2 = 2`}</BlockMath>
          <P>
            Заменяем обратно <M>t</M> на дробь и получаем два подуравнения:
          </P>
          <BlockMath>{math`\frac{x^2 + x - 2}{x} = 1 >>{big} \frac{x^2 + x - 2}{x} = 2`}</BlockMath>
          <P>
            Умножаем обе части обоих уравнений на <M>x</M>:
          </P>
          <BlockMath>{math`x^2 + x - 2 = x >>{big} x^2 + x - 2 = 2x`}</BlockMath>
          <P>
            В первом подуравнении вычитаем <M>x</M> из обеих частей, а во втором <M>2x</M>:
          </P>
          <BlockMath>{math`x^2 - 2 = 0 >>{big} x^2 - x - 2 = 0`}</BlockMath>
          <P>Как угодно решаем оба этих уравнения (их можно решить в уме) и получаем следующие корни:</P>
          <BlockMath>{math`x_1 = \sqrt{2} >> x_2 = -\sqrt{2} >> x_3 = 2 >> x_4 = -1`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2 + 2x + 1}{x^2 + 2x + 2} + \frac{x^2 + 2x + 2}{x^2 + 2x + 3} = \frac{7}{6}`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, -2]} />
        <ProblemHint>
          <P>Сделайте замену переменной:</P>
          <BlockMath>{math`t = x^2 + 2x`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 0 >> x_2 = -2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Обращаем внимание, что в дробях в числителе и знаменателе все время повторяется выражение{' '}
            <M>{math`x^2 + 2x`}</M>. Обозначим это выражение буквой <M>t</M>:
          </P>
          <BlockMath>{math`\frac{t+1}{t+2} + \frac{t+2}{t+3} = \frac{7}{6}`}</BlockMath>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> умножим обе части на{' '}
            <M>{math`6(t+2)(t+3)`}</M>:
          </P>
          <BlockMath>{math`6(t+3)(t+1) + 6(t+2)^2 = 7(t+2)(t+3)`}</BlockMath>
          <P>
            Вычитаем из обеих частей <M>{math`7(t+2)(t+3)`}</M>:
          </P>
          <BlockMath>{math`6(t+3)(t+1) + 6(t+2)^2 - 7(t+2)(t+3) = 0`}</BlockMath>
          <P>Раскрываем скобки и приводим подобные слагаемые:</P>
          <BlockMath>{math`
            6(t^2 + 4t + 3) + 6(t^2 + 4t + 4) - 7(t^2 + 5t + 6) = 0
            \\
            6t^2 + 24t + 18 + 6t^2 + 24t + 24 - 7t^2 - 35t - 42 = 0
            \\
            5t^2 + 13t = 0
          `}</BlockMath>
          <P>
            Выносим <M>t</M> за скобки:
          </P>
          <BlockMath>{math`t(5t + 13) = 0`}</BlockMath>
          <P>
            Чтобы слева получился <M>0</M> и равенство стало верным, <M>t</M> должно быть равно <M>0</M> (это первый
            корень) или <M>5t + 13</M> должно быть равно <M>0</M>:
          </P>
          <BlockMath>{math`5t_2 + 13 = 0 \\ t_2 = -\frac{13}{5}`}</BlockMath>
          <P>
            Итак, у нас есть два корня с <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 0 >> t_2 = -\frac{13}{5}`}</BlockMath>
          <P>
            Но мы помним, что <M>{math`t = x^2 + 2x`}</M>. Поэтому заменяем <M>t</M> обратно на исходное выражение и
            получаем два подуравнения:
          </P>
          <BlockMath>{math`x^2 + 2x = 0 >>{big} x^2 + 2x = -\frac{13}{5}`}</BlockMath>
          <BlockMath>{math`x(x+2) = 0 >>{big} 5x^2 + 10x + 13 = 0`}</BlockMath>
          <P>
            Первое подуравнение имеет два корня: <M>0</M> и <M>-2</M>. А вот второе подуравнение не имеет решений, так
            как его дискриминант отрицательный и равен <M>-120</M>.
          </P>
          <P>
            Значит и исходное уравнение имеет всего два корня: <M>0</M> и <M>-2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{21}{x^2-4x+10} - x^2 + 4x = 6`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[3, 1]} />
        <ProblemHint>
          <P>Сделайте замену переменной:</P>
          <BlockMath>{math`t = x^2 - 4x`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 3 >> x_2 = 1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Обращаем внимание, что в центре мы почти что имеем такое же выражение <M>{math`x^2-4x`}</M>, что и в
            знаменателе дроби. Вынесем в центре <M>-1</M> за скобки:
          </P>
          <BlockMath>{math`\frac{21}{x^2-4x+10} - (x^2 - 4x) = 6`}</BlockMath>
          <P>
            Вводим обозначение <M>{math`t = x^2 - 4x`}</M>:
          </P>
          <BlockMath>{math`\frac{21}{t + 10} - t = 6`}</BlockMath>
          <P>
            Умножим по <Dep on={sameActionRule}>правилу одинакового действия</Dep> обе части на <M>t + 10</M>:
          </P>
          <BlockMath>{math`21 - t(t+10) = 6(t + 10)`}</BlockMath>
          <P>
            Вычтем из обеих частей <M>{math`6(t + 10)`}</M>:
          </P>
          <BlockMath>{math`21 - t(t+10) - 6(t + 10) = 0`}</BlockMath>
          <P>Раскрываем скобки и приводим подобные слагаемые:</P>
          <BlockMath>{math`-t^2 - 16t - 39 = 0`}</BlockMath>
          <P>
            Умножим обе части на <M>-1</M>:
          </P>
          <BlockMath>{math`t^2 + 16t + 39 = 0`}</BlockMath>
          <P>
            Решим это приведённое квадратное уравнение в уме при помощи <Dep on={vietasFormulas}>формул Виета</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = -16 \\
              t_1t_2 = 39
            \end{cases}
          `}</BlockMath>
          <P>
            Тут сразу понятно, что только числа <M>-3</M> и <M>-13</M> при умножении дают <M>39</M> и при сложении дают{' '}
            <M>-16</M>. Они же являются корнями нашего уравнения с <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = -3 >> t_2 = -13`}</BlockMath>
          <P>
            Заменяем обратно <M>t</M> на выражение <M>{math`x^2-4x`}</M> и получаем два подуравнения:
          </P>
          <BlockMath>{math`x^2 - 4x = -3 >>{big} x^2 - 4x = -13`}</BlockMath>
          <BlockMath>{math`x^2 -4x + 3 = 0 >>{big} x^2 -4x + 13 = 0`}</BlockMath>
          <P>
            Первое подуравнение решается в уме и имеет два корня: <M>3</M> и <M>1</M>. А вот второе подуравнение не
            имеет решений, так как его дискриминант отрицательный и равен <M>-36</M>.
          </P>
          <P>
            Значит и исходное уравнение имеет всего два корня: <M>3</M> и <M>1</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Кровью и потом" level="hard">
      <P>Решите уравнение:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2+x+2}{3x^2+5x-14} = \frac{x^2+x+6}{3x^2+5x-10}`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-4, 2]} />
        <ProblemHint>
          <P>
            Решить уравнение можно и напрямую, но будет очень муторно и громоздко. Поэтому лучше проведите двойную
            замену:
          </P>
          <BlockMath>{math`u = x^2 + x + 2 >>{big} v = 3x^2 + 5x - 14`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -4 >> x_2 = 2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Обращаем внимание, что с минимальными изменениями выражения в дроби справа можно получить выражения из дроби
            слева:
          </P>
          <BlockMath>{math`\frac{x^2+x+2}{3x^2+5x-14} = \frac{(x^2+x+2) + 4}{(3x^2+5x-14) + 4}`}</BlockMath>
          <P>
            Заменяем одинаковые выражения на буквы <M>u</M> и <M>v</M>:
          </P>
          <BlockMath>{math`\frac{u}{v} = \frac{u+4}{v+4}`}</BlockMath>
          <P>
            Умножаем по <Dep on={sameActionRule}>правилу одинакового действия</Dep> обе части на <M>{math`v(v+4)`}</M>:
          </P>
          <BlockMath>{math`u(v+4) = v(u+4)`}</BlockMath>
          <P>Раскрываем скобки:</P>
          <BlockMath>{math`uv + 4u = uv + 4v`}</BlockMath>
          <P>
            Вычтем <M>uv</M> из обеих частей:
          </P>
          <BlockMath>{math`4u = 4v`}</BlockMath>
          <P>
            Разделим обе части на <M>4</M>:
          </P>
          <BlockMath>{math`u = v`}</BlockMath>
          <P>Возвращаемся к исходным выражениям:</P>
          <BlockMath>{math`x^2 + x + 2 = 3x^2 + 5x - 14`}</BlockMath>
          <P>Собираем все данные в правой части:</P>
          <BlockMath>{math`0 = 2x^2 + 4x - 16`}</BlockMath>
          <P>
            Делим обе части на <M>2</M>:
          </P>
          <BlockMath>{math`0 = x^2 + 2x - 8`}</BlockMath>
          <P>
            Решаем это приведённое квадратное уравнение в уме при помощи <Dep on={vietasFormulas}>формул Виета</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = -2 \\
              x_1x_2 = -8
            \end{cases}
          `}</BlockMath>
          <P>
            Тут сразу понятно, что только числа <M>-4</M> и <M>2</M> при умножении дают <M>-8</M> и при сложении дают{' '}
            <M>-2</M>. Они же являются корнями нашего уравнения:
          </P>
          <BlockMath>{math`x_1 = -4 >> x_2 = 2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x^2 + 2x)^2 - (x+1)^2 = 55`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[2, -4]} />
        <ProblemHint>
          <P>Сделайте замену переменной:</P>
          <BlockMath>{math`t = x^2 + 2x`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 2 >> x_2 = -4`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Возводим в квадрат правую скобку и получаем:</P>
          <BlockMath>{math`(x^2 + 2x)^2 - (x^2 + 2x + 1) = 55`}</BlockMath>
          <P>
            Обращаем внимание, что в левой части у нас два одинаковых выражения <M>{math`x^2 + 2x`}</M>. Обозначим это
            выражение буквой <M>t</M>:
          </P>
          <BlockMath>{math`t^2 - (t + 1) = 55 \\ t^2 - t - 1 = 55 \\ t^2 - t - 56 = 0`}</BlockMath>
          <P>
            Решим это приведённое квадратное уравнение в уме при помощи <Dep on={vietasFormulas}>формул Виета</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = 1 \\
              t_1t_2 = -56
            \end{cases}
          `}</BlockMath>
          <P>
            Тут сразу понятно, что только числа <M>8</M> и <M>-7</M> при умножении дают <M>-56</M> и при сложении дают{' '}
            <M>1</M>. Они же являются корнями нашего уравнения с <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 8 >> t_2 = -7`}</BlockMath>
          <P>
            Заменяем обратно <M>t</M> на выражение <M>{math`x^2 + 2x`}</M> и получаем два подуравнения:
          </P>
          <BlockMath>{math`x^2 + 2x = 8 >>{big} x^2 + 2x = -7`}</BlockMath>
          <BlockMath>{math`x^2 + 2x - 8 = 0 >>{big} x^2 + 2x + 7 = 0`}</BlockMath>
          <P>
            Первое подуравнение решается в уме и имеет два корня: <M>2</M> и <M>-4</M>. А вот второе подуравнение не
            имеет решений, так как его дискриминант отрицательный и равен <M>-24</M>. Значит, и исходное уравнение имеет
            всего два корня: <M>2</M> и <M>-4</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x^2 - 3x)^2 - 14x^2 + 42x + 40 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[5, -2, 4, -1]} />
        <ProblemHint>
          <P>Сделайте замену переменной:</P>
          <BlockMath>{math`t = x^2 - 3x`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 5 >> x_2 = -2 >> x_3 = 4 >> x_4 = -1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В середине выражения выносим за скобки <M>-14</M>:
          </P>
          <BlockMath>{math`(x^2 - 3x)^2 -14(x^2 - 3x) + 40 = 0`}</BlockMath>
          <P>
            Обращаем внимание, что в левой части у нас два одинаковых выражения <M>{math`x^2 - 3x`}</M>. Обозначим это
            выражение буквой <M>t</M>:
          </P>
          <BlockMath>{math`t^2 - 14t + 40 = 0`}</BlockMath>
          <P>
            Решим это приведённое квадратное уравнение в уме при помощи <Dep on={vietasFormulas}>формул Виета</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = 14 \\
              t_1t_2 = 40
            \end{cases}
          `}</BlockMath>
          <P>
            Тут сразу понятно, что только числа <M>10</M> и <M>4</M> при умножении дают <M>40</M> и при сложении дают{' '}
            <M>14</M>. Они же являются корнями нашего уравнения с <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 10 >> t_2 = 4`}</BlockMath>
          <P>
            Заменяем обратно <M>t</M> на выражение <M>{math`x^2 - 3x`}</M> и получаем два подуравнения:
          </P>
          <BlockMath>{math`x^2 - 3x = 10 >>{big} x^2 - 3x = 4`}</BlockMath>
          <BlockMath>{math`x^2 - 3x - 10 = 0 >>{big} x^2 - 3x - 4 = 0`}</BlockMath>
          <P>
            Первое подуравнение решается в уме и имеет два корня: <M>5</M> и <M>-2</M>. Второе подуравнение также
            решается в уме и имеет два корня: <M>4</M> и <M>-1</M>. Итак, исходное уравнение имеет четыре корня:{' '}
            <M>5</M>, <M>-2</M>, <M>4</M> и <M>-1</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x-2)(x-3)^2(x-4) = 20`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['3+sqrt(5)', '3-sqrt(5)']} />
        <ProblemHint>
          Умножьте первую скобку на третью, а в центре раскройте квадрат. Одинаковые выражения в скобках обозначьте
          буквой <M>t</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 3 + \sqrt{5} >> x_2 = 3 - \sqrt{5}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Умножим первую скобку на третью, а в центре раскроем квадрат:</P>
          <BlockMath>{math`(x^2 - 6x + 8)(x^2 - 6x + 9) = 20`}</BlockMath>
          <P>
            Замечаем, что в левой части у нас два одинаковых выражения <M>{math`x^2 - 6x`}</M>. Обозначим это выражение
            буквой <M>t</M>:
          </P>
          <BlockMath>{math`(t + 8)(t + 9) = 20 \\ t^2 + 17t + 72 = 20 \\ t^2 + 17t + 52 = 0`}</BlockMath>
          <P>
            Решим это приведённое квадратное уравнение в уме при помощи <Dep on={vietasFormulas}>формул Виета</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = -17 \\
              t_1t_2 = 52
            \end{cases}
          `}</BlockMath>
          <P>
            Тут сразу понятно, что только числа <M>-13</M> и <M>-4</M> при умножении дают <M>52</M> и при сложении дают{' '}
            <M>-17</M>. Они же являются корнями нашего уравнения с <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = -13 >> t_2 = -4`}</BlockMath>
          <P>
            Заменяем обратно <M>t</M> на выражение <M>{math`x^2 - 6x`}</M> и получаем два подуравнения:
          </P>
          <BlockMath>{math`x^2 - 6x = -13 >>{big} x^2 - 6x = -4`}</BlockMath>
          <BlockMath>{math`x^2 - 6x + 13 = 0 >>{big} x^2 - 6x + 4 = 0`}</BlockMath>
          <P>
            Первое подуравнение не имеет решений, так как его дискриминант отрицательный и равен <M>-16</M>. Второе
            уравнение решим по общим формулам корней. Определяем коэффициенты:
          </P>
          <BlockMath>{math`A = 1, \enspace B = -6, \enspace C = 4`}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`D = B^2 - 4AC = (-6)^2 - 4\cdot1\cdot4 = 36 - 16 = 20`}</BlockMath>
          <P>Находим корни уравнения:</P>
          <BlockMath>{math`x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{6 \pm \sqrt{20}}{2} = \frac{6 \pm 2\sqrt{5}}{2} = 3 \pm \sqrt{5}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{1}{x(x+2)} - \frac{1}{(x+1)^2} = \frac{1}{12}`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[1, -3]} />
        <ProblemHint>
          В знаменателе второй дроби раскройте скобки и вынесите за скобки <M>x</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 1 >> x_2 = -3`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В знаменателе второй дроби раскроем скобки и вынесем за скобки <M>x</M>.
          </P>
          <BlockMath>{math`
            \frac{1}{x(x+2)} - \frac{1}{x^2 + 2x + 1} = \frac{1}{12}
            \\
            \frac{1}{x(x+2)} - \frac{1}{x(x+2) + 1} = \frac{1}{12}
          `}</BlockMath>
          <P>
            Замечаем, что в левой части у нас два одинаковых выражения <M>{math`x(x+2)`}</M>. Обозначим это выражение
            буквой <M>t</M>:
          </P>
          <BlockMath>{math`\frac{1}{t} - \frac{1}{t + 1} = \frac{1}{12}`}</BlockMath>
          <P>
            Умножим обе части на <M>{math`12t(t + 1)`}</M> по{' '}
            <Dep on={sameActionRule}>правилу одинакового действия</Dep>:
          </P>
          <BlockMath>{math`12(t + 1) - 12t = t(t + 1)`}</BlockMath>
          <P>Раскрываем скобки и приводим подобные слагаемые:</P>
          <BlockMath>{math`
            12t + 12 - 12t = t^2 + t
            \\
            12 = t^2 + t
          `}</BlockMath>
          <P>
            Вычтем <M>12</M> из обеих частей:
          </P>
          <BlockMath>{math`0 = t^2 + t - 12`}</BlockMath>
          <P>
            Решим это приведённое квадратное уравнение в уме при помощи <Dep on={vietasFormulas}>формул Виета</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              t_1 + t_2 = -1 \\
              t_1t_2 = -12
            \end{cases}
          `}</BlockMath>
          <P>
            Тут сразу понятно, что только числа <M>-4</M> и <M>3</M> при умножении дают <M>-12</M> и при сложении дают{' '}
            <M>-1</M>. Они же являются корнями нашего уравнения с <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = -4 >> t_2 = 3`}</BlockMath>
          <P>
            Заменяем обратно <M>t</M> на выражение <M>{math`x(x+2)`}</M> и получаем два подуравнения:
          </P>
          <BlockMath>{math`x(x+2) = -4 >>{big} x(x+2) = 3`}</BlockMath>
          <BlockMath>{math`x^2 + 2x + 4 = 0 >>{big} x^2 + 2x - 3 = 0`}</BlockMath>
          <P>
            Первое подуравнение не имеет решений, так как его дискриминант отрицательный и равен <M>-12</M>. Второе
            подуравнение можно решить в уме и получить корни <M>1</M> и <M>-3</M>. Эти числа и будут корнями исходного
            уравнения.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\left( x^2 + \frac{16}{x^2} \right) - x - \frac{4}{x} - 12 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[4, 1, -2]} />
        <ProblemHint>Выделите полный квадрат в скобке слева.</ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 4 >> x_2 = 1 >> x_3 = -2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Выделим полный квадрат слева в скобках:</P>
          <BlockMath>{math`
            \left( \underbrace{x^2 + \yellow{2x\frac{4}{x}} + \frac{16}{x^2}}_{\small a^2 + 2 \cdot a \cdot b + b^2} - \underbrace{\yellow{2x\frac{4}{x}}}_{\small 8} \right) - x - \frac{4}{x} - 12 = 0
            \\
            \left(x + \frac{4}{x}\right)^2 - 8 - \left(x + \frac{4}{x}\right) - 12 = 0
          `}</BlockMath>
          <P>Вводим обозначение:</P>
          <BlockMath>{math`t = x + \frac{4}{x}`}</BlockMath>
          <P>Тогда уравнение можно переписать так:</P>
          <BlockMath>{math`t^2 - 8 - t - 12 = 0 \\ t^2 - t - 20 = 0`}</BlockMath>
          <P>
            Решим это приведённое квадратное уравнение в уме при помощи <Dep on={vietasFormulas}>формул Виета</Dep>.
            Очевидно, что только числа <M>5</M> и <M>-4</M> при умножении дают <M>-20</M> и при сложении дают <M>1</M>.
            Они же являются корнями нашего уравнения с <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 5 >> t_2 = -4`}</BlockMath>
          <P>
            Заменяем обратно <M>t</M> на выражение с <M>x</M> и получаем два подуравнения:
          </P>
          <BlockMath>{math`x + \frac{4}{x} = 5 >>{big} x + \frac{4}{x} = -4`}</BlockMath>
          <P>
            Умножаем обе части обоих уравнений на <M>x</M>:
          </P>
          <BlockMath>{math`x^2 + 4 = 5x >>{big} x^2 + 4 = -4x`}</BlockMath>
          <BlockMath>{math`x^2 - 5x + 4 = 0 >>{big} x^2 + 4x + 4 = 0`}</BlockMath>
          <P>
            Оба подуравнения решаются в уме. Первое даёт два корня: <M>4</M> и <M>1</M>. Второе имеет один корень{' '}
            <M>-2</M>. Итак, исходное уравнение имеет три корня: <M>4</M>, <M>1</M> и <M>-2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 + 2x + \frac{2}{x} + \frac{1}{x^2} = 1`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={['(-3+sqrt(5))/2', '(-3-sqrt(5))/2']} />
        <ProblemHint>Выделите полный квадрат из слагаемых с квадратами.</ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = \frac{-3 + \sqrt{5}}{2} >> x_2 = \frac{-3 - \sqrt{5}}{2}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Сгруппируем слагаемые с квадратами. Также вынесем <M>2</M> из оставшихся слагаемых:
          </P>
          <BlockMath>{math`x^2 + \frac{1}{x^2} + 2\left(x + \frac{1}{x}\right) = 1`}</BlockMath>
          <P>Выделим полный квадрат слева:</P>
          <BlockMath>{math`
            \underbrace{x^2 + \yellow{2x\frac{1}{x}} + \frac{1}{x^2}}_{\small a^2 + 2 \cdot a \cdot b + b^2} - \yellow{2x\frac{1}{x}} + 2\left(x + \frac{1}{x}\right) = 1
            \\
            \left(x + \frac{1}{x}\right)^2 - 2 + 2\left(x + \frac{1}{x}\right) = 1
          `}</BlockMath>
          <P>Вводим обозначение:</P>
          <BlockMath>{math`t = x + \frac{1}{x}`}</BlockMath>
          <P>Тогда уравнение можно переписать так:</P>
          <BlockMath>{math`t^2 + 2t - 2 = 1 \\ t^2 + 2t - 3 = 0`}</BlockMath>
          <P>
            Решим это приведённое квадратное уравнение в уме при помощи <Dep on={vietasFormulas}>формул Виета</Dep>.
            Очевидно, что только числа <M>1</M> и <M>-3</M> при умножении дают <M>-3</M> и при сложении дают <M>-2</M>.
            Они же являются корнями нашего уравнения с <M>t</M>:
          </P>
          <BlockMath>{math`t_1 = 1 >> t_2 = -3`}</BlockMath>
          <P>
            Заменяем обратно <M>t</M> на выражение с <M>x</M> и получаем два подуравнения:
          </P>
          <BlockMath>{math`x + \frac{1}{x} = 1 >>{big} x + \frac{1}{x} = -3`}</BlockMath>
          <P>
            Умножаем обе части обоих уравнений на <M>x</M>:
          </P>
          <BlockMath>{math`x^2 + 1 = x >>{big} x^2 + 1 = -3x`}</BlockMath>
          <BlockMath>{math`x^2 - x + 1 = 0 >>{big} x^2 + 3x + 1 = 0`}</BlockMath>
          <P>
            Первое подуравнение не имеет решений, так как его дискриминант отрицательный и равен <M>-3</M>. Второе
            подуравнение решаем по <Dep on={quadraticFormula}>общим формулам</Dep> корней:
          </P>
          <BlockMath>{math`x_1 = \frac{-3 + \sqrt{5}}{2} >> x_2 = \frac{-3 - \sqrt{5}}{2}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Взлёты и падения" level="hard" method>
      <SubProblem>
        <ProblemDescription>
          <P>
            При каком значении параметра <M>m</M> сумма квадратов корней уравнения наименьшая?
          </P>
          <BlockMath>{math`x^2 + (2-m)x - m - 3 = 0`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck label="m" answer={1} />
        <ProblemHint>
          Выпишите <Dep on={vietasFormulas}>формулы Виета</Dep> для данного квадратного уравнения. Они помогут вам
          выразить сумму квадратов корней через <M>m</M>.
        </ProblemHint>
        <ProblemHint>
          Сумму квадратов можно дополнить до формулы сокращенного умножения (ФСУ) "квадрат суммы".
        </ProblemHint>
        <ProblemHint>
          {/* TODO: Link to "Минимум и Максимум" problem when it exists */}
          Найдите минимум при помощи приёма выделения полного квадрата.
        </ProblemHint>
        <ProblemAnswer>
          <M>m = 1</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Выпишем <Dep on={vietasFormulas}>формулы Виета</Dep> для данного квадратного уравнения:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = m - 2 \\
              x_1x_2 = -m - 3
            \end{cases}
          `}</BlockMath>
          <P>Выпишем сумму квадратов корней:</P>
          <BlockMath>{math`x_1^2 + x_2^2 = \cdots`}</BlockMath>
          <P>
            Эту сумму можно представить иначе, если добавить и сразу же вычесть <M>{math`2x_1x_2`}</M>. Тогда получится
            запаковать часть выражения в формулу сокращенного умножения (ФСУ) "квадрат суммы":
          </P>
          <BlockMath>{math`\cdots = x_1^2 + \yellow{2x_1x_2} + x_2^2 - \yellow{2x_1x_2} = (x_1 + x_2)^2 - 2x_1x_2 = \cdots`}</BlockMath>
          <P>Подставляем в полученное выражение данные из формул Виета:</P>
          <BlockMath>{math`\cdots = (m - 2)^2 - 2(-m - 3) = (m - 2)^2 + 2m + 6 = m^2 - 4m + 4 + 2m + 6 = m^2 - 2m + 10`}</BlockMath>
          <P>Итак, сумма квадратов корней равна квадратному трёхчлену:</P>
          <BlockMath>{math`x_1^2 + x_2^2 = m^2 - 2m + 10`}</BlockMath>
          <P>
            Раз сумма должна быть наименьшей, то нужно найти минимум этого квадратного трёхчлена. Выделим полный квадрат
            трёхчлена. Для этого дополним его до формулы сокращенного умножения (ФСУ) "квадрат разности":
          </P>
          <BlockMath>{math`m^2 - 2m + 10 = m^2 - 2m + \yellow{1} + 10 - \yellow{1} = \boxed{(m - 1)^2 + 9}`}</BlockMath>
          <P>
            <M>+9</M> мы никак изменить не можем, значит, остаётся только минимизировать <M>{math`(m-1)^2`}</M>. Так как
            это квадрат, то он не может быть отрицательным, а значит, его минимум это <M>0</M>.
          </P>
          <BlockMath>{math`(m-1)^2 = 0 \\ \boxed{m = 1}`}</BlockMath>
          <P>
            Итак, при <M>m = 1</M> сумма квадратов корней данного в условии квадратного уравнения будет наименьшей.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            При каком значении параметра <M>m</M> сумма квадратов корней уравнения наибольшая?
          </P>
          <BlockMath>{math`x^2 + (m-1)x + m^2 - \frac{3}{2} = 0`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck label="m" answer={-1} />
        <ProblemHint>Воспользуйтесь подсказкой к первому пункту.</ProblemHint>
        <ProblemAnswer>
          <M>m = -1</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Выпишем <Dep on={vietasFormulas}>формулы Виета</Dep> для данного квадратного уравнения:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = 1 - m \\
              x_1x_2 = m^2 - \frac{3}{2}
            \end{cases}
          `}</BlockMath>
          <P>Выпишем сумму квадратов корней:</P>
          <BlockMath>{math`x_1^2 + x_2^2 = \cdots`}</BlockMath>
          <P>
            Эту сумму можно представить иначе, если добавить и сразу же вычесть <M>{math`2x_1x_2`}</M>. Тогда получится
            запаковать часть выражения в формулу сокращенного умножения (ФСУ) "квадрат суммы":
          </P>
          <BlockMath>{math`\cdots = x_1^2 + \yellow{2x_1x_2} + x_2^2 - \yellow{2x_1x_2} = (x_1 + x_2)^2 - 2x_1x_2 = \cdots`}</BlockMath>
          <P>Подставляем в полученное выражение данные из формул Виета:</P>
          <BlockMath>{math`\cdots = (1 - m)^2 - 2\left(m^2 - \frac{3}{2}\right) = (1 - m)^2 - 2m^2 + 3 = 1 - 2m + m^2 - 2m^2 + 3 = -m^2 - 2m + 4`}</BlockMath>
          <P>Итак, сумма квадратов корней равна квадратному трёхчлену:</P>
          <BlockMath>{math`x_1^2 + x_2^2 = -m^2 - 2m + 4`}</BlockMath>
          <P>
            Раз сумма должна быть наибольшей, то нужно найти максимум этого квадратного трёхчлена. Вынесем минус за
            скобки в квадратном трёхчлене:
          </P>
          <BlockMath>{math`-m^2 - 2m + 4 = -\left(m^2 + 2m - 4\right)`}</BlockMath>
          <P>Теперь выделим полный квадрат:</P>
          <BlockMath>{math`-\left(m^2 + 2m - 4\right) = -\left(m^2 + 2m + 1 - 1 - 4\right) = -\left([m + 1]^2 - 5\right) = \boxed{5 - (m + 1)^2}`}</BlockMath>
          <P>
            <M>5</M> мы никак изменить не можем, значит, остаётся только минимизировать <M>{math`(m + 1)^2`}</M>. Так
            как это квадрат, то он не может быть отрицательным, а значит, его минимум это <M>0</M>.
          </P>
          <BlockMath>{math`(m + 1)^2 = 0 \\ \boxed{m = -1}`}</BlockMath>
          <P>
            Итак, при <M>m = -1</M> сумма квадратов корней данного в условии квадратного уравнения будет наибольшей.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem $={uniques.quadraticRootClasses} title="Квадратные корневые классы" level="hard" pretty>
      <ProblemDescription>
        <P>
          Три уравнения ниже имеют одинаковые корни и отличаются друг от друга только единым множителем, на который были
          умножены все коэффициенты.
        </P>
        <BlockMath>{math`\underset{\text{Приведённое}}{x^2 + 6x - 7 = 0} >>{big} \underset{\text{Умножено на }2}{2x^2 + 12x - 14 = 0} >>{big} \underset{\text{Умножено на }3}{3x^2 + 18x - 21 = 0}`}</BlockMath>
        <P>
          Поделив обе части второго уравнения на <M>2</M>, а третьего на <M>3</M>, мы вновь получим исходное первое
          уравнение. Умножив обе части второго уравнения на <M>{math`\frac{3}{2}`}</M>, мы получим третье уравнение.
          Короче, все три уравнения можно свести друг к другу умножением на какое-то число.
        </P>
        <P>
          А существуют ли два уравнения с <B>одинаковыми корнями</B>, которые невозможно свести друг к другу умножением
          на какое-то число? Если существуют, приведите пример таких уравнений. Если не существуют, строго докажите это.
        </P>
        {/* TODO: Связать с пространством квадратных уравнений -- Коэффициенты A, B и C можно рассматривать как координаты точки в трёхмерном «пространстве квадратных уравнений». Тогда все квадратные уравнения с одинаковыми корнями будут лежать на одной прямой, которая проходит через начало координат! */}
      </ProblemDescription>
      <ProblemCheck label="Существуют ли такие уравнения?" no />
      <ProblemHint>
        <P>
          Докажите от противного. Предположите, что <B>существуют</B> два несводимых друг к другу квадратных уравнения с
          одинаковыми корнями <M>{math`x_1`}</M> и <M>{math`x_2`}</M>:
        </P>
        <BlockMath>{math`A_1x^2 + B_1x + C_1 = 0 >>{big} A_2x^2 + B_2x + C_2 = 0`}</BlockMath>
      </ProblemHint>
      <ProblemHint>
        Вам нужно получить противоречие, чтобы доказать, что таких уравнений не существует. Воспользуйтесь{' '}
        <Dep on={factoring}>разложением на множители</Dep> или <Dep on={vietasFormulas}>формулами Виета</Dep>.
      </ProblemHint>
      <ProblemAnswer>
        Все квадратные уравнения с одинаковыми корнями отличаются друг от друга только общим множителем.
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Через разложение на множители">
          <P>
            Будем доказывать от противного. Предположим, что <B>существуют</B> два несводимых друг к другу квадратных
            уравнения с одинаковыми корнями <M>{math`x_1`}</M> и <M>{math`x_2`}</M>:
          </P>
          <BlockMath>{math`A_1x^2 + B_1x + C_1 = 0 >>{big} A_2x^2 + B_2x + C_2 = 0`}</BlockMath>
          <P>
            Оба этих уравнения имеют корни, значит, их можно <Dep on={factoring}>разложить на множители</Dep>:
          </P>
          <BlockMath>{math`A_1(x - x_1)(x - x_2) = 0 >>{big} A_2(x - x_1)(x - x_2) = 0`}</BlockMath>
          <P>
            Видим, что эти записи друг от друга отличаются только коэффициентами <M>{math`A_1`}</M> и <M>{math`A_2`}</M>
            . Но коэффициент <M>{math`A_2`}</M> <B>всегда</B> можно получить из <M>{math`A_1`}</M> умножением на
            какое-то число <M>k</M>.
          </P>
          <BlockMath>{math`A_2 = k \cdot A_1`}</BlockMath>
          <P>
            Поэтому достаточно умножить по <Dep on={sameActionRule}>правилу одинакового действия</Dep> обе части левого
            уравнения на это самое <M>k</M>, и мы получим правое уравнение:
          </P>
          <BlockMath>{math`
              A_1(x - x_1)(x - x_2) = 0
              \\
              \overbrace{\yellow{k} \cdot A_1}^{A_2}(x - x_1)(x - x_2) = 0 \cdot \yellow{k}
              \\
              A_2(x - x_1)(x - x_2) = 0
            `}</BlockMath>
          <P>
            Но это по сути значит, что оба изначально заявленных как "несводимых" уравнения на самом деле <B>сводимы</B>{' '}
            друг к другу! Получили противоречие: уравнения одновременно несводимы и сводимы друг к другу! Раз пришли к
            противоречию, значит, наше исходное предположение о существовании двух несводимых друг к другу квадратных
            уравнений с одинаковыми корнями неверно. Следовательно, <B>не существует</B> двух несводимых друг к другу
            квадратных уравнений с одинаковыми корнями.
          </P>
          <P>Все квадратные уравнения с одинаковыми корнями отличаются друг от друга только общим множителем!</P>
          <QED />
        </ProblemSection>
        <ProblemSection title="Через формулы Виета">
          <P>
            Будем доказывать от противного. Предположим, что <B>существуют</B> два несводимых друг к другу квадратных
            уравнения с одинаковыми корнями <M>{math`x_1`}</M> и <M>{math`x_2`}</M>:
          </P>
          <BlockMath>{math`A_1x^2 + B_1x + C_1 = 0 >>{big} A_2x^2 + B_2x + C_2 = 0`}</BlockMath>
          <P>
            Выпишем <Dep on={vietasFormulas}>формулы Виета</Dep> для обоих уравнений:
          </P>
          <BlockMath>{math`
              \begin{cases}
                x_1 + x_2 = -\frac{B_1}{A_1} \\
                x_1 \cdot x_2 = \frac{C_1}{A_1}
              \end{cases} >>{big}
              \begin{cases}
                x_1 + x_2 = -\frac{B_2}{A_2} \\
                x_1 \cdot x_2 = \frac{C_2}{A_2}
              \end{cases}
            `}</BlockMath>
          <P>
            Раз сумма <M>{math`x_1 + x_2`}</M> равна одновременно и дроби <M>{math`-\frac{B_1}{A_1}`}</M>, и дроби{' '}
            <M>{math`-\frac{B_2}{A_2}`}</M>, то и эти дроби между собой равны:
          </P>
          <BlockMath>{math`
              -\frac{B_1}{A_1} = x_1 + x_2 = -\frac{B_2}{A_2}
              \\
              -\frac{B_1}{A_1} = -\frac{B_2}{A_2}
            `}</BlockMath>
          <P>
            Избавимся от отвлекающих минусов, по <Dep on={sameActionRule}>правилу одинакового действия</Dep> умножив обе
            части равенства на <M>-1</M>:
          </P>
          <BlockMath>{math`\frac{B_1}{A_1} = \frac{B_2}{A_2}`}</BlockMath>
          <P>
            Так как мы считаем, что уравнения несводимы друг к другу, то и эти дроби несводимы друг к другу, то есть
            вторую дробь нельзя получить из первой умножением числителя и знаменателя на одно и то же число. На языке
            математики это можно выразить так:
          </P>
          <BlockMath>{math`\frac{B_1}{A_1} = \frac{\overbrace{n \cdot B_1}^{B_2}}{\underbrace{m \cdot A_1}_{A_2}}, \enspace n \neq m`}</BlockMath>
          <P>
            В этой записи явно показано, что для получения <M>{math`B_2`}</M> и <M>{math`A_2`}</M> нужно{' '}
            <M>{math`B_1`}</M> и <M>{math`A_1`}</M> умножать на какие-то <B>обязательно разные</B> числа <M>n</M> и{' '}
            <M>m</M>.
          </P>
          <P>
            Умножаем обе части равенства на <M>{math`A_1`}</M>:
          </P>
          <BlockMath>{math`
              \frac{B_1\cdot\cancel{A_1}}{\cancel{A_1}} = \frac{n \cdot B_1 \cdot \cancel{A_1}}{m \cdot \cancel{A_1}}
              \\
              B_1 = \frac{n}{m}B_1
            `}</BlockMath>
          <P>
            Это равенство обязано быть истинным. Раз оно истинное, то <M>n = m</M>, чтобы эти числа взаимосократились и
            получилось просто <M>{math`B_1 = B_1`}</M>.
          </P>
          <P>
            Стоп! Но <M>n</M> и <M>m</M> обязаны быть <B>разными</B> числами, ведь эти дроби, как и исходные квадратные
            уравнения, несводимы друг к другу!
          </P>
          <P>
            Получили противоречие: нам нужно, чтобы одновременно выполнялись взаимопротивоположные вещи, чтобы и{' '}
            <M>n = m</M>, и <M>{math`n \neq m`}</M>! Раз пришли к противоречию, значит, наше исходное предположение о
            существовании двух несводимых друг к другу квадратных уравнений с одинаковыми корнями неверно.
            Следовательно, <B>не существует</B> двух несводимых друг к другу квадратных уравнений с одинаковыми корнями.
          </P>
          <P>Все квадратные уравнения с одинаковыми корнями отличаются друг от друга только общим множителем!</P>
          <QED />
        </ProblemSection>
      </ProblemSolution>
      <ProblemNote>
        <P>
          Из этой задачи следует красивый и интересный математический факт. Такой же факт{' '}
          <Ref to={linearRootClasses}>работает</Ref> и для линейных уравнений.
        </P>
        <P>
          Любая пара корней <M>{math`x_1`}</M> и <M>{math`x_2`}</M> образует <B>целый класс</B> квадратных уравнений,
          все из которых отличаются друг от друга только домножением обеих сторон на одно и то же число. Если вам
          известно какое-то одно уравнение из этого класса, вы можете получить любое другое уравнение из этого класса,
          умножив его на любое число. И все эти уравнения будут иметь одинаковые корни.
        </P>
        <P>
          Более того, <B>не существует</B> квадратных уравнений с теми же корнями, но не входящими в этот класс. В этом
          классе находятся вообще все возможные квадратные уравнения с заданными корнями!
        </P>
        <P>
          Получается, всё множество всех квадратных уравнений поделено на классы, "мешки". У каждого такого класса,
          "мешка" с уравнениями, есть своя "бирка", на которой написаны корни, которые имеют все уравнения из этого
          мешка. Все уравнения в мешке отличаются только умножением обеих частей на одно и то же число!
        </P>
        <Image src={rootClasses} width="500px" invert="dark">
          <Caption>
            Все квадратные уравнения распиханы по "мешкам" с одинаковыми корнями
            <CaptionSecondary>Уравнения в одном мешке отличаются только общим множителем</CaptionSecondary>
          </Caption>
        </Image>
        <P>
          Эта ситуация похожа на то, что любая дробь, например <M>{math`\frac{1}{2}`}</M>, образует{' '}
          <B>целый класс дробей, обозначающих одно и то же</B>, которые отличаются друг от друга только домножением
          числителя и знаменателя на одно и то же число:
        </P>
        <BlockMath>{math`\frac{1}{2} = \frac{2}{4} = \frac{3}{6} = \cdots`}</BlockMath>
      </ProblemNote>
    </Problem>
  </>
));
