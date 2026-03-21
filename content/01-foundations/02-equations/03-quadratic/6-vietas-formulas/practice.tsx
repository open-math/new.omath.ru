import article from './article';

// #region Links
//
//

const oneRootOne = $CONTENT.foundations.equations.quadratic.factoring.practice.$oneRootOne;
const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;
const quadraticFormula = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$formula;

//
//
// #endregion

export default defineProse({
  uniques: {
    rootFromRoot: Problem,
  },
})(({ uniques }) => (
  <>
    <Problems title="Красивые коэффициенты" level="easy" method>
      <P>Составьте квадратное уравнение с целыми коэффициентами, если известно, что один из корней равен:</P>

      <SubProblem>
        <ProblemDescription>
          <M>7</M>
        </ProblemDescription>
        <ProblemHint>
          Подставьте данные в <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep> и подберите второй корень
          так, чтобы коэффициенты получились целыми.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x^2 - 49 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Будем считать <M>A = 1</M>. Тогда по <Dep on={article.uniques.vietasFormulas}>формулам Виета</Dep> получаем:
          </P>
          <BlockMath>{math`
            \begin{cases}
              7 + x_2 = -B \\
              7 \cdot x_2 = C
            \end{cases}
          `}</BlockMath>
          <P>
            Тут даже долго не надо думать. В качестве <M>x_2</M> можно взять любое целое число. Например <M>-7</M>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              7 - 7 = 0 = -B \\
              7 \cdot (-7) = -49 = C
            \end{cases}
          `}</BlockMath>
          <P>
            Тогда <M>B = 0</M>, <M>C = -49</M> и получаем квадратное уравнение:
          </P>
          <BlockMath>{math`x^2 - 49 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`-1\frac{1}{2}`}</M>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`2x^2 - 13x - 24 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Переведём <M>{math`-1\frac{1}{2}`}</M> в неправильную дробь:
          </P>
          <BlockMath>{math`-1\frac{1}{2} = -\left(1 + \frac{1}{2}\right) = -\left(\frac{2}{2} + \frac{1}{2}\right) = -\frac{3}{2}`}</BlockMath>
          <P>
            Так как знаменатель дроби равен <M>2</M>, то выгодно и коэффициент <M>A</M> сделать равным <M>2</M>. Тогда
            по <Dep on={article.uniques.vietasFormulas}>формулам Виета</Dep> получаем:
          </P>
          <BlockMath>{math`
            \begin{cases}
              -\frac{3}{2} + x_2 = -\frac{B}{2} \\
              -\frac{3}{2} \cdot x_2 = \frac{C}{2}
            \end{cases}
          `}</BlockMath>
          <P>Второй корень надо подобрать так, чтобы выполнялось два условия:</P>
          <List ordered>
            <Li>
              Он должен быть представим как дробь со знаменателем <M>2</M>, чтобы не пришлось приводить к общему
              знаменателю в первой формуле Виета.
            </Li>
            <Li>
              Он также должен быть представим как целое число, чтобы не "испортить" знаменатель <M>2</M> во второй
              формуле Виета.
            </Li>
          </List>
          <P>
            Таким условиям подходит любое чётное число, например <M>8</M>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              -\frac{3}{2} + 8 = -\frac{3}{2} + \frac{16}{2} = \frac{13}{2} = -\frac{B}{2} \\
              -\frac{3}{2} \cdot 8 = \frac{-24}{2} = \frac{C}{2}
            \end{cases}
          `}</BlockMath>
          <P>
            Тогда <M>B = -13</M>, <M>C = -24</M> и получаем квадратное уравнение:
          </P>
          <BlockMath>{math`2x^2 - 13x - 24 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`\sqrt{6}`}</M>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`3x^2 - 18 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Будем считать <M>A = 3</M>. Тогда по <Dep on={article.uniques.vietasFormulas}>формулам Виета</Dep> получаем:
          </P>
          <BlockMath>{math`
            \begin{cases}
              \sqrt{6} + x_2 = -\frac{B}{3} \\
              \sqrt{6} \cdot x_2 = \frac{C}{3}
            \end{cases}
          `}</BlockMath>
          <P>
            В первой формуле нам обязательно надо избавиться от корня. Единственный вариант — сделать второй корень
            противоположным, то есть <M>{math`-\sqrt{6}`}</M>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              \cancel{\sqrt{6}} - \cancel{\sqrt{6}} = 0 = -\frac{B}{3} \\
              \sqrt{6} \cdot (-\sqrt{6}) = -6 = \frac{C}{3}
            \end{cases}
          `}</BlockMath>
          <P>
            Тогда <M>B = 0</M>, <M>C = -18</M> и получаем квадратное уравнение:
          </P>
          <BlockMath>{math`3x^2 - 18 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`3 + \sqrt{3}`}</M>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`2x^2 - 12x + 12 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Будем считать <M>A = 2</M>. Тогда по <Dep on={article.uniques.vietasFormulas}>формулам Виета</Dep> получаем:
          </P>
          <BlockMath>{math`
            \begin{cases}
              3 + \sqrt{3} + x_2 = -\frac{B}{2} \\
              (3 + \sqrt{3}) \cdot x_2 = \frac{C}{2}
            \end{cases}
          `}</BlockMath>
          <P>
            Второй корень надо подобрать так, чтобы в первой формуле уничтожить <M>\sqrt{3}</M>, а во второй формуле
            получилось избавиться от корня при помощи формулы разности квадратов{' '}
            <M>{math`(a + b)(a - b) = a^2 - b^2`}</M>. Для этого второй корень должен быть равен{' '}
            <M>{math`3 - \sqrt{3}`}</M>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              3 + \cancel{\sqrt{3}} + 3 - \cancel{\sqrt{3}} = 6 = -\frac{B}{2} \\
              (3 + \sqrt{3})(3 - \sqrt{3}) = 3^2 - (\sqrt{3})^2 = 9 - 3 = 6 = \frac{C}{2}
            \end{cases}
          `}</BlockMath>
          <P>
            Тогда <M>B = -12</M>, <M>C = 12</M> и получаем квадратное уравнение:
          </P>
          <BlockMath>{math`2x^2 - 12x + 12 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`2 - \sqrt{5}`}</M>
        </ProblemDescription>
        <ProblemAnswer>
          <BlockMath>{math`3x^2 - 12x - 3 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Будем считать <M>A = 3</M>. Тогда по <Dep on={article.uniques.vietasFormulas}>формулам Виета</Dep> получаем:
          </P>
          <BlockMath>{math`
            \begin{cases}
              2 - \sqrt{5} + x_2 = -\frac{B}{3} \\
              (2 - \sqrt{5}) \cdot x_2 = \frac{C}{3}
            \end{cases}
          `}</BlockMath>
          <P>
            Второй корень надо подобрать так, чтобы в первой формуле уничтожить <M>\sqrt{5}</M>, а во второй формуле
            получилось избавиться от корня при помощи формулы разности квадратов{' '}
            <M>{math`(a + b)(a - b) = a^2 - b^2`}</M>. Для этого второй корень должен быть равен{' '}
            <M>{math`2 + \sqrt{5}`}</M>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              2 - \cancel{\sqrt{5}} + 2 + \cancel{\sqrt{5}} = 4 = -\frac{B}{3} \\
              (2 - \sqrt{5})(2 + \sqrt{5}) = 2^2 - (\sqrt{5})^2 = 4 - 5 = -1 = \frac{C}{3}
            \end{cases}
          `}</BlockMath>
          <P>
            Тогда <M>B = -12</M>, <M>C = -3</M> и получаем квадратное уравнение:
          </P>
          <BlockMath>{math`3x^2 - 12x - 3 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Проба букв" level="easy">
      <ProblemDescription>
        <P>
          При каких значениях <M>p</M> и <M>q</M> корни уравнения <M>{math`x^2 + px + q = 0`}</M> равны <M>2p</M> и{' '}
          <M>{math`\dfrac{q}{2}`}</M>?
        </P>
      </ProblemDescription>
      <MathValueCheck label="p" answer={1} />
      <MathValueCheck label="q" answer={-6} />
      <ProblemAnswer>
        <BlockMath>{math`p = 1, \enspace q = -6`}</BlockMath>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Обозначим корни уравнения за <M>x_1</M> и <M>x_2</M>. По условию задачи мы знаем, чему эти корни равны:
        </P>
        <BlockMath>{math`
          x_1 = 2p
          >>{big}
          x_2 = \frac{q}{2}
        `}</BlockMath>
        <P>
          Выписываем <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep> для данного уравнения:
        </P>
        <BlockMath>{math`
          \begin{dcases}
            x_1 + x_2 = -p \\
            x_1x_2 = q
          \end{dcases}
        `}</BlockMath>
        <P>Заменяем корни на их значения:</P>
        <BlockMath>{math`
          \begin{dcases}
            2p + \frac{q}{2} = -p \\
            2p\cdot\frac{q}{2} = q
          \end{dcases}
        `}</BlockMath>
        <P>Разберёмся с нижней формулой:</P>
        <BlockMath>{math`
          2p\cdot\frac{q}{2} = q \\
          p\cdot q = q
        `}</BlockMath>
        <P>
          По <Dep on={sameActionRule}>правилу одинакового действия</Dep> делим обе части на <M>q</M>:
        </P>
        <BlockMath>{math`
          \frac{p\cdot \cancel{q}}{\cancel{\yellow{q}}} = \frac{\cancel{q}}{\cancel{\yellow{q}}} \\
          \boxed{p = 1}
        `}</BlockMath>
        <P>Разберёмся с верхней формулой:</P>
        <BlockMath>{math`2p + \frac{q}{2} = -p`}</BlockMath>
        <P>
          Вычтем <M>2p</M> из обеих частей:
        </P>
        <BlockMath>{math`\frac{q}{2} = -3p`}</BlockMath>
        <P>
          Умножим обе части на <M>2</M>:
        </P>
        <BlockMath>{math`q = -6p`}</BlockMath>
        <P>
          Подставляем найденное значение <M>p = 1</M>:
        </P>
        <BlockMath>{math`
          q = -6\cdot 1 \\
          \boxed{q = -6}
        `}</BlockMath>
        <P>
          Итак, при <M>p = 1</M> и <M>q = -6</M> корни уравнения <M>{math`x^2 + px + q = 0`}</M> равны <M>2p</M> и{' '}
          <M>{math`\dfrac{q}{2}`}</M>.
        </P>
      </ProblemSolution>
    </Problem>

    <Problems title="Корневая эквилибристика" level="medium">
      <SubProblem>
        <ProblemDescription>
          <P>
            В уравнении <M>{math`x^2-4x+a=0`}</M> сумма квадратов корней равна <M>16</M>. Найдите <M>a</M>.
          </P>
        </ProblemDescription>
        <MathValueCheck label="a" answer={0} />
        <ProblemHint>Сумму квадратов можно дополнить до формулы сокращенного умножения "квадрат суммы".</ProblemHint>
        <ProblemAnswer>
          <M>a = 0</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Выпишем известные нам формулы, включая <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep>:
          </P>
          <BlockMath>{math`
            x_1 + x_2 = 4
            >>{big}
            x_1x_2 = a
            >>{big}
            x_1^2 + x_2^2 = 16
          `}</BlockMath>
          <P>
            Если к обеим частям последней формулы по <Dep on={sameActionRule}>правилу одинакового действия</Dep>{' '}
            прибавить <M>{math`2x_1x_2`}</M>, то получится ее запаковать в формулу сокращенного умножения "квадрат
            суммы":
          </P>
          <BlockMath>{math`
            x_1^2 + x_2^2 + \yellow{2x_1x_2} = 16 + \yellow{2x_1x_2} \\
            (x_1 + x_2)^2 = 16 + 2x_1x_2
          `}</BlockMath>
          <P>
            Но из формул Виета мы знаем, что <M>{math`x_1 + x_2 = 4`}</M> и <M>{math`x_1x_2 = a`}</M>. Подставляем эти
            значения в полученную формулу:
          </P>
          <BlockMath>{math`
            (4)^2 = 16 + 2a \\
            16 = 16 + 2a
          `}</BlockMath>
          <P>
            Вычтем <M>16</M> из обеих частей:
          </P>
          <BlockMath>{math`
            16 - \yellow{16} = 16 + 2a - \yellow{16} \\
            0 = 2a
          `}</BlockMath>
          <P>
            Разделим обе части на <M>2</M>:
          </P>
          <BlockMath>{math`
            \frac{0}{\yellow{2}} = \frac{2a}{\yellow{2}} \\
            0 = a
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            В уравнении <M>{math`x^2-2x+a=0`}</M> квадрат разности корней равен <M>16</M>. Найдите <M>a</M>.
          </P>
        </ProblemDescription>
        <MathValueCheck label="a" answer={-3} />
        <ProblemHint>Квадрат разности можно дополнить до формулы сокращенного умножения "квадрат суммы".</ProblemHint>
        <ProblemAnswer>
          <M>a = -3</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Выпишем известные нам формулы, включая <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep>:
          </P>
          <BlockMath>{math`
            x_1 + x_2 = 2
            >>{big}
            x_1x_2 = a
            >>{big}
            (x_1 - x_2)^2 = 16
          `}</BlockMath>
          <P>Разложим квадрат разности корней:</P>
          <BlockMath>{math`
            (x_1 - x_2)^2 = x_1^2 - 2x_1x_2 + x_2^2
            \\
            16 = x_1^2 - 2x_1x_2 + x_2^2
          `}</BlockMath>
          <P>
            Добавив по <Dep on={sameActionRule}>правилу одинакового действия</Dep> <M>{math`4x_1x_2`}</M> к обеим
            частям, мы можем запаковать выражение справа в формулу сокращенного умножения "квадрат суммы":
          </P>
          <BlockMath>{math`
            16 + \yellow{4x_1x_2} = x_1^2 - 2x_1x_2 + x_2^2 + \yellow{4x_1x_2} \\
            16 + 4x_1x_2 = x_1^2 + 2x_1x_2 + x_2^2 \\
            16 + 4x_1x_2 = (x_1 + x_2)^2
          `}</BlockMath>
          <P>
            Но из формул Виета мы знаем, что <M>{math`x_1 + x_2 = 2`}</M> и <M>{math`x_1x_2 = a`}</M>. Подставляем эти
            значения в полученную формулу:
          </P>
          <BlockMath>{math`
            16 + 4a = (2)^2 \\
            16 + 4a = 4
          `}</BlockMath>
          <P>
            Вычтем <M>16</M> из обеих частей:
          </P>
          <BlockMath>{math`
            16 - \yellow{16} + 4a = 4 - \yellow{16} \\
            4a = -12
          `}</BlockMath>
          <P>
            Разделим обе части на <M>4</M>:
          </P>
          <BlockMath>{math`
            \frac{4a}{\yellow{4}} = \frac{-12}{\yellow{4}} \\
            a = -3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Перекрученная сумма" level="medium">
      <ProblemDescription>
        <P>
          Два разных числа <M>a</M> и <M>b</M> удовлетворяют следующей цепочке равенств:
        </P>
        <BlockMath>a^2 + 3a + 1 = b^2 + 3b + 1 = 0</BlockMath>
        <P>Найдите значение следующего выражения:</P>
        <BlockMath>{math`\frac{a}{b} + \frac{b}{a}`}</BlockMath>
      </ProblemDescription>
      <MathValueCheck label="Значение выражения" answer={7} />
      <ProblemHint>
        Числа <M>a</M> и <M>b</M> являются двумя корнями квадратного уравнения <M>x^2 + 3x + 1 = 0</M>. Значит для них
        можно выписать <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep>.
      </ProblemHint>
      <ProblemHint>
        Преобразуйте искомую сумму так, чтобы в числителе и знаменателе были выражения, похожие на формулы Виета.
      </ProblemHint>
      <ProblemAnswer>
        <M>7</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>Для удобства восприятия разобьём цепочку равенств на два отдельных верных равенства:</P>
        <BlockMath>{math`a^2 + 3a + 1 = 0 >>{big} b^2 + 3b + 1 = 0`}</BlockMath>
        <P>
          Из условия нам сказано, что числа <M>a</M> и <M>b</M> разные. При подстановке в один и тот же квадратный
          трёхчлен (в обоих случаях его коэффициенты одинаковые) получаются два верных равенства. Значит числа <M>a</M>{' '}
          и <M>b</M> являются корнями квадратного уравнения <M>x^2 + 3x + 1 = 0</M>! Раз это корни, для них можно
          выписать <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep>:
        </P>
        <BlockMath>{math`
          \begin{cases}
            a + b = -3 \\
            ab = 1
          \end{cases}
        `}</BlockMath>
        <P>Теперь преобразуем искомую сумму так, чтобы в неё можно было подставить значения из формул Виета:</P>
        <BlockMath>{math`
          \frac{a}{b} + \frac{b}{a} = \frac{a^2 + b^2}{ab} = \ldots
        `}</BlockMath>
        <P>
          Сверху сумма квадратов. Мы можем добавить к ней удвоенное произведение и сразу же его вычесть, чтобы ничего не
          поменялось. Тогда в числителе получится выделить полный квадрат:
        </P>
        <BlockMath>{math`
          \ldots = \frac{\overbrace{a^2 + b^2 + \yellow{2ab}}^{\small (a + b)^2} - \yellow{2ab}}{ab} = \frac{(a + b)^2 - 2ab}{ab} = \ldots
        `}</BlockMath>
        <P>Подставляем данные из формул Виета:</P>
        <BlockMath>{math`
          \ldots = \frac{(-3)^2 - 2\cdot 1}{1} = \frac{9 - 2}{1} = 7
        `}</BlockMath>
      </ProblemSolution>
    </Problem>

    <Problem $={uniques.rootFromRoot} title="Корень от корня" level="medium" method>
      <ProblemDescription>
        <P>
          Пускай <M>x_1</M> и <M>x_2</M> -- корни квадратного уравнения в общем виде <M>{math`Ax^2 + Bx + C = 0`}</M>.
          Будем считать, что и корни и коэффициенты не равны нулю. Составьте новое уравнение, корни которого:
        </P>
        <List ordered>
          <Li>Противоположны корням данного</Li>
          <Li>Обратны корням данного</Li>
          <Li>
            В <M>5</M> раз больше корней данного
          </Li>
        </List>
        <P>
          Применяя полученные формулы, запишите <M>3</M> новых уравнения из <M>{math`3x^2 - x - 1 = 0`}</M>.
        </P>
      </ProblemDescription>
      <MathExpressionCheck label="Уравнение с противоположными корнями" answer="3x^2+x-1" />
      <MathExpressionCheck label="Уравнение с обратными корнями" answer="-x^2-x+3" />
      <MathExpressionCheck label="Уравнение с корнями в 5 раз больше" answer="3x^2-5x-25" />
      <ProblemHint>
        Введите новые корни <M>{math`x_1'`}</M> и <M>{math`x_2'`}</M> и свяжите их со старыми. Составьте новые{' '}
        <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep> из новых корней.
      </ProblemHint>
      <ProblemAnswer>
        <List ordered>
          <Li>
            <P>
              При смене корней на противоположные коэффициент <M>B</M> меняет знак:
            </P>
            <BlockMath>{math`Ax^2 - Bx + C = 0`}</BlockMath>
            <P>Новое уравнение:</P>
            <BlockMath>{math`3x^2 + x - 1 = 0`}</BlockMath>
          </Li>
          <Li>
            <P>
              При смене корней на обратные коэффициенты <M>A</M> и <M>C</M> меняются местами:
            </P>
            <BlockMath>{math`Cx^2 + Bx + A = 0`}</BlockMath>
            <P>Новое уравнение:</P>
            <BlockMath>{math`-x^2 - x + 3 = 0`}</BlockMath>
          </Li>
          <Li>
            <P>
              При смене корней на в <M>5</M> раз большие коэффициент <M>B</M> умножается на <M>5</M>, а <M>C</M> на{' '}
              <M>25</M>:
            </P>
            <BlockMath>{math`Ax^2 + 5Bx + 25C = 0`}</BlockMath>
            <P>Новое уравнение:</P>
            <BlockMath>{math`3x^2 - 5x - 25 = 0`}</BlockMath>
          </Li>
        </List>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Выпишем <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep>:
        </P>
        <BlockMath>{math`
          \begin{cases}
            x_1 + x_2 = -\frac{B}{A} \\
            x_1x_2 = \frac{C}{A}
          \end{cases}
        `}</BlockMath>

        <ProblemSection title="Противоположные корни">
          <P>
            Нам нужны новые корни <M>{math`x_1'`}</M> и <M>{math`x_2'`}</M>, которые противоположны корням <M>x_1</M> и{' '}
            <M>x_2</M>:
          </P>
          <BlockMath>{math`
            x_1' = -x_1
            >>{big}
            x_2' = -x_2
          `}</BlockMath>
          <P>
            Составим новые <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep> из новых корней:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1' + x_2' = -x_1 - x_2 \\
              x_1'x_2' = (-x_1)(-x_2)
            \end{cases}
          `}</BlockMath>
          <P>Разберёмся с верхней формулой:</P>
          <BlockMath>{math`
            x_1' + x_2' = -x_1 - x_2 = -\left(x_1 + x_2\right) = -\left(-\frac{B}{A}\right) = -\frac{-B}{A}
          `}</BlockMath>
          <P>Разберёмся с нижней формулой:</P>
          <BlockMath>{math`
            x_1'x_2' = (-x_1) \cdot (-x_2) = x_1x_2 = \frac{C}{A}
          `}</BlockMath>
          <P>Финальный вид новых формул Виета:</P>
          <BlockMath>{math`
            \begin{cases}
              x_1' + x_2' = -\frac{-B}{A} \\
              x_1'x_2' = \frac{C}{A}
            \end{cases}
          `}</BlockMath>
          <P>Значит коэффициенты этого уравнения (относительно старого) будут такими:</P>
          <BlockMath>{math`A \rarr A >> B \rarr -B >> C \rarr C`}</BlockMath>
          <P>Новое квадратное уравнение:</P>
          <BlockMath>{math`Ax^2 - Bx + C = 0`}</BlockMath>
          <P>
            При смене корней на противоположные только коэффициент <M>B</M> меняет знак. Значит, для уравнения{' '}
            <M>{math`3x^2 - x - 1 = 0`}</M> уравнение с противоположными корнями будет:
          </P>
          <BlockMath>{math`3x^2 + x - 1 = 0`}</BlockMath>
        </ProblemSection>

        <ProblemSection title="Обратные корни">
          <P>
            Нам нужны новые корни <M>{math`x_1'`}</M> и <M>{math`x_2'`}</M>, которые обратны корням <M>x_1</M> и{' '}
            <M>x_2</M>:
          </P>
          <BlockMath>{math`
            x_1' = \frac{1}{x_1}
            >>{big}
            x_2' = \frac{1}{x_2}
          `}</BlockMath>
          <P>Составим новые формулы Виета из новых корней:</P>
          <BlockMath>{math`
            \begin{cases}
              x_1' + x_2' = \frac{1}{x_1} + \frac{1}{x_2} \\
              x_1'x_2' = \frac{1}{x_1}\cdot\frac{1}{x_2}
            \end{cases}
          `}</BlockMath>
          <P>Разберёмся с верхней формулой:</P>
          <BlockMath>{math`
            x_1' + x_2' = \frac{1}{x_1} + \frac{1}{x_2} = \frac{x_1 + x_2}{x_1x_2} = \frac{-\frac{B}{A}}{\frac{C}{A}} = -\frac{B}{C}
          `}</BlockMath>
          <P>Разберёмся с нижней формулой:</P>
          <BlockMath>{math`
            x_1'x_2' = \frac{1}{x_1}\cdot\frac{1}{x_2} = \frac{1}{x_1x_2} = \frac{1}{\frac{C}{A}} = \frac{A}{C}
          `}</BlockMath>
          <P>Финальный вид новых формул Виета:</P>
          <BlockMath>{math`
            \begin{cases}
              x_1' + x_2' = -\frac{B}{C} \\
              x_1'x_2' = \frac{A}{C}
            \end{cases}
          `}</BlockMath>
          <P>Значит коэффициенты этого уравнения (относительно старого) будут такими:</P>
          <BlockMath>{math`A \rarr C >> B \rarr B >> C \rarr A`}</BlockMath>
          <P>Новое квадратное уравнение:</P>
          <BlockMath>{math`Cx^2 + Bx + A = 0`}</BlockMath>
          <P>
            При смене корней на обратные коэффициент <M>A</M> меняется местами с коэффициентом <M>C</M>. Значит, для
            уравнения <M>{math`3x^2 - x - 1 = 0`}</M> уравнение с обратными корнями будет:
          </P>
          <BlockMath>{math`-x^2 - x + 3 = 0`}</BlockMath>
        </ProblemSection>

        <ProblemSection title="В 5 раз больше">
          <P>
            Нам нужны новые корни <M>{math`x_1'`}</M> и <M>{math`x_2'`}</M>, которые в <M>5</M> раз больше корней{' '}
            <M>x_1</M> и <M>x_2</M>:
          </P>
          <BlockMath>{math`
            x_1' = 5x_1
            >>{big}
            x_2' = 5x_2
          `}</BlockMath>
          <P>Составим новые формулы Виета из новых корней:</P>
          <BlockMath>{math`
            \begin{cases}
              x_1' + x_2' = 5x_1 + 5x_2 \\
              x_1'x_2' = (5x_1)(5x_2)
            \end{cases}
          `}</BlockMath>
          <P>Разберёмся с верхней формулой:</P>
          <BlockMath>{math`
            x_1' + x_2' = 5x_1 + 5x_2 = 5\left(x_1 + x_2\right) = 5\left(-\frac{B}{A}\right) = -\frac{5B}{A}
          `}</BlockMath>
          <P>Разберёмся с нижней формулой:</P>
          <BlockMath>{math`
            x_1'x_2' = (5x_1)(5x_2) = 25(x_1x_2) = 25\left(\frac{C}{A}\right) = \frac{25C}{A}
          `}</BlockMath>
          <P>Финальный вид новых формул Виета:</P>
          <BlockMath>{math`
            \begin{cases}
              x_1' + x_2' = -\frac{5B}{A} \\
              x_1'x_2' = \frac{25C}{A}
            \end{cases}
          `}</BlockMath>
          <P>Значит коэффициенты этого уравнения (относительно старого) будут такими:</P>
          <BlockMath>{math`A \rarr A >> B \rarr 5B >> C \rarr 25C`}</BlockMath>
          <P>Новое квадратное уравнение:</P>
          <BlockMath>{math`Ax^2 + 5Bx + 25C = 0`}</BlockMath>
          <P>
            В <M>5</M> раз большие корни приводят к тому, что <M>B</M> умножается на <M>5</M>, а <M>C</M> на <M>25</M>.
          </P>
          <P>
            Значит, для уравнения <M>{math`3x^2 - x - 1 = 0`}</M> уравнение с корнями в <M>5</M> раз больше будет:
          </P>
          <BlockMath>{math`3x^2 - 5x - 25 = 0`}</BlockMath>
        </ProblemSection>
      </ProblemSolution>
      <ProblemNote>
        <P>Из этой задачи следует несколько интересных математических фактов:</P>
        <List ordered>
          <Li>
            Если поменять корни квадратного уравнения на противоположные, то его коэффициент <M>B</M> поменяет знак!
          </Li>
          <Li>
            Если поменять корни уравнения на обратные, то его коэффициенты <M>A</M> и <M>C</M> поменяются местами!
          </Li>
          <Li>
            Если увеличить корни в <M>n</M> раз, то коэффициент <M>B</M> умножится на <M>n</M>, а <M>C</M> на <M>n^2</M>
            !
          </Li>
        </List>
      </ProblemNote>
    </Problem>

    <Problems title="Корневой трансформатор" level="medium">
      <P>
        Пусть <M>x_1</M> и <M>x_2</M> -- корни квадратного уравнения <M>{math`2x^2 - 7x - 3 = 0`}</M>. Составьте новое
        квадратное уравнение, корнями которого являются числа:
      </P>

      {/* TODO: В решении получается 6x² - 7x - 1 = 0, а в ответе 6x² + 7x - 1 = 0. Проверить, что правильно. */}
      <SubProblem>
        <ProblemDescription>
          <M>{math`x_1 + \dfrac{1}{x_2}`}</M> и <M>{math`x_2 + \dfrac{1}{x_1}`}</M>
        </ProblemDescription>
        <MathExpressionCheck label="Квадратное уравнение" answer="6x^2+7x-1" />
        <ProblemHint>
          Используйте приём с составлением новых <Dep on={article.uniques.vietasFormulas}>формул Виета</Dep> из новых
          корней из задачи <Ref to={uniques.rootFromRoot}>Корень от корня</Ref>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`6x^2 + 7x - 1 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Нам нужны новые корни <M>{math`x_1'`}</M> и <M>{math`x_2'`}</M>, которые связаны с исходными корнями{' '}
            <M>x_1</M> и <M>x_2</M> следующим образом:
          </P>
          <BlockMath>{math`
            x_1' = x_1 + \frac{1}{x_2}
            >>{big}
            x_2' = x_2 + \frac{1}{x_1}
          `}</BlockMath>
          <P>Приведём правые части к общему знаменателю:</P>
          <BlockMath>{math`
            x_1' = \frac{x_1x_2 + 1}{x_2}
            >>{big}
            x_2' = \frac{x_2x_1 + 1}{x_1}
          `}</BlockMath>
          <P>
            Произведение корней <M>{math`x_1x_2`}</M> можно найти по{' '}
            <Dep on={article.uniques.vietasFormulas}>формуле Виета</Dep>. Оно равно <M>{math`-\dfrac{3}{2}`}</M>.
            Подставляем это значение в выражения для новых корней:
          </P>
          <BlockMath>{math`
            x_1' = \frac{-\frac{3}{2} + 1}{x_2} = -\frac{1}{2x_2}
            >>{big}
            x_2' = \frac{-\frac{3}{2} + 1}{x_1} = -\frac{1}{2x_1}
          `}</BlockMath>
          <P>Составляем формулы Виета для нового квадратного уравнения:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{1}{2x_2} - \frac{1}{2x_1}
              \\[10px]
              x_1'x_2' = \left(-\frac{1}{2x_2}\right)\left(-\frac{1}{2x_1}\right)
            \end{dcases}
          `}</BlockMath>
          <P>Разберёмся с нижней формулой:</P>
          <BlockMath>{math`
            x_1'x_2' = \frac{1}{4x_1x_2} = \frac{1}{4\cdot\left(-\frac{3}{2}\right)} = \frac{-1}{6}
          `}</BlockMath>
          <P>Разберёмся с верхней формулой:</P>
          <BlockMath>{math`
            x_1' + x_2' =
            -\frac{1}{2x_2} - \frac{1}{2x_1} =
            -\frac{1}{2}\left(\frac{1}{x_2} + \frac{1}{x_1}\right) =
            -\frac{1}{2}\cdot\frac{x_1 + x_2}{x_1x_2} =
            -\frac{1}{2}\cdot\frac{\frac{7}{2}}{-\frac{3}{2}} =
            -\frac{1}{2}\cdot\left(-\frac{7}{3}\right) =
            \frac{7}{6}
          `}</BlockMath>
          <P>Запишем финальные формулы Виета с новыми корнями:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{-7}{6} \\
              x_1'x_2' = \frac{-1}{6}
            \end{dcases}
          `}</BlockMath>
          <P>Тогда коэффициенты нового квадратного уравнения будут:</P>
          <BlockMath>{math`A = 6, \enspace B = -7, \enspace C = -1`}</BlockMath>
          <P>Квадратное уравнение с новыми корнями:</P>
          <BlockMath>{math`6x^2 - 7x - 1 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`x_1^2x_2`}</M> и <M>{math`x_1x_2^2`}</M>
        </ProblemDescription>
        <MathExpressionCheck label="Квадратное уравнение" answer="8x^2+42x-27" />
        <ProblemHint>
          Используйте приём с составлением новых <Dep on={article.uniques.vietasFormulas}>формул Виета</Dep> из новых
          корней из задачи <Ref to={uniques.rootFromRoot}>Корень от корня</Ref>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`8x^2 + 42x - 27 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Нам нужны новые корни <M>{math`x_1'`}</M> и <M>{math`x_2'`}</M>, которые связаны с исходными корнями{' '}
            <M>x_1</M> и <M>x_2</M> следующим образом:
          </P>
          <BlockMath>{math`
            x_1' = x_1^2x_2 = (x_1x_2)x_1
            >>{big}
            x_2' = x_1x_2^2 = (x_1x_2)x_2
          `}</BlockMath>
          <P>
            Произведение корней <M>{math`x_1x_2`}</M> можно найти по{' '}
            <Dep on={article.uniques.vietasFormulas}>формуле Виета</Dep>. Оно равно <M>{math`-\dfrac{3}{2}`}</M>.
            Подставляем это значение в выражения для новых корней:
          </P>
          <BlockMath>{math`
            x_1' = -\frac{3}{2}x_1
            >>{big}
            x_2' = -\frac{3}{2}x_2
          `}</BlockMath>
          <P>Составляем формулы Виета для нового квадратного уравнения:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{3}{2}x_1 - \frac{3}{2}x_2
              \\[10px]
              x_1'x_2' = \left(-\frac{3}{2}x_1\right)\left(-\frac{3}{2}x_2\right)
            \end{dcases}
          `}</BlockMath>
          <P>Разберёмся с верхней формулой:</P>
          <BlockMath>{math`
            x_1' + x_2' =
            -\frac{3}{2}\left(x_1 + x_2\right) =
            -\frac{3}{2}\cdot\frac{7}{2} =
            -\frac{21}{4}
          `}</BlockMath>
          <P>Разберёмся с нижней формулой:</P>
          <BlockMath>{math`
            x_1'x_2' =
            \left(-\frac{3}{2}x_1\right)\left(-\frac{3}{2}x_2\right) =
            \frac{9}{4}\cdot(x_1x_2) =
            \frac{9}{4}\cdot\left(-\frac{3}{2}\right) =
            -\frac{27}{8}
          `}</BlockMath>
          <P>Формулы Виета теперь выглядят так:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{21}{4} \\
              x_1'x_2' = \frac{-27}{8}
            \end{dcases}
          `}</BlockMath>
          <P>
            В дроби верхней формулы домножим числитель и знаменатель на <M>2</M>, чтобы знаменатели обеих формул
            совпали:
          </P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{42}{8} \\
              x_1'x_2' = \frac{-27}{8}
            \end{dcases}
          `}</BlockMath>
          <P>Тогда коэффициенты нового квадратного уравнения будут:</P>
          <BlockMath>{math`A = 8, \enspace B = 42, \enspace C = -27`}</BlockMath>
          <P>Квадратное уравнение с новыми корнями:</P>
          <BlockMath>{math`8x^2 + 42x - 27 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`\dfrac{1}{x_1^2}`}</M> и <M>{math`\dfrac{1}{x_2^2}`}</M>
        </ProblemDescription>
        <MathExpressionCheck label="Квадратное уравнение" answer="9x^2-61x+4" />
        <ProblemHint>
          Используйте приём с составлением новых <Dep on={article.uniques.vietasFormulas}>формул Виета</Dep> из новых
          корней из задачи <Ref to={uniques.rootFromRoot}>Корень от корня</Ref>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`9x^2 - 61x + 4 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Нам нужны новые корни <M>{math`x_1'`}</M> и <M>{math`x_2'`}</M>, которые связаны с исходными корнями{' '}
            <M>x_1</M> и <M>x_2</M> следующим образом:
          </P>
          <BlockMath>{math`
            x_1' = \frac{1}{x_1^2}
            >>{big}
            x_2' = \frac{1}{x_2^2}
          `}</BlockMath>
          <P>Составим формулы Виета для нового квадратного уравнения:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = \frac{1}{x_1^2} + \frac{1}{x_2^2}
              \\[10px]
              x_1'x_2' = \frac{1}{x_1^2}\cdot\frac{1}{x_2^2}
            \end{dcases}
          `}</BlockMath>
          <P>Разберёмся с верхней формулой:</P>
          <BlockMath>{math`
            x_1' + x_2' =
            \frac{1}{x_1^2} + \frac{1}{x_2^2} =
            \frac{x_2^2 + x_1^2}{x_1^2x_2^2} = \cdots
          `}</BlockMath>
          <P>
            Сумму квадратов корней можно получить из формулы сокращенного умножения (ФСУ) под названием "квадрат суммы".
            Для этого достаточно по <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычесть из обеих частей
            равенства <M>2ab</M>:
          </P>
          <BlockMath>{math`
            (a+b)^2 = a^2 + 2ab + b^2
            \\
            (a+b)^2 - 2ab = a^2 + b^2
          `}</BlockMath>
          <P>
            Вместо <M>a</M> и <M>b</M> используем наши обозначения корней:
          </P>
          <BlockMath>{math`
            \cdots = \frac{(x_1 + x_2)^2 - 2x_1x_2}{x_1^2x_2^2} =
            \frac{\left(-\frac{7}{2}\right)^2 - 2\left(-\frac{3}{2}\right)}{x_1^2x_2^2} =
            \frac{\frac{61}{4}}{x_1^2x_2^2} =
            \frac{61}{4x_1^2x_2^2} = \cdots
          `}</BlockMath>
          <P>
            Произведение квадратов корней <M>{math`x_1^2x_2^2`}</M> можно записать как квадрат произведения корней{' '}
            <M>{math`(x_1x_2)^2`}</M>:
          </P>
          <BlockMath>{math`
            \cdots = \frac{61}{4(x_1x_2)^2} = \frac{61}{4\left(-\frac{3}{2}\right)^2} = \frac{61}{4\cdot\frac{9}{4}} = \frac{61}{9}
          `}</BlockMath>
          <P>Теперь разберёмся с нижней формулой:</P>
          <BlockMath>{math`
            x_1'x_2' = \frac{1}{x_1^2x_2^2} = \frac{1}{(x_1x_2)^2} = \frac{1}{\left(-\frac{3}{2}\right)^2} = \frac{4}{9}
          `}</BlockMath>
          <P>Финальные формулы Виета с новыми корнями выглядят так:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{-61}{9} \\
              x_1'x_2' = \frac{4}{9}
            \end{dcases}
          `}</BlockMath>
          <P>Тогда коэффициенты нового квадратного уравнения будут:</P>
          <BlockMath>{math`A = 9, \enspace B = -61, \enspace C = 4`}</BlockMath>
          <P>Квадратное уравнение с новыми корнями:</P>
          <BlockMath>{math`9x^2 - 61x + 4 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <M>{math`\dfrac{x_1}{x_2} + 1`}</M> и <M>{math`\dfrac{x_2}{x_1} + 1`}</M>
        </ProblemDescription>
        <MathExpressionCheck label="Квадратное уравнение" answer="6x^2+49x-49" />
        <ProblemHint>
          Используйте приём с составлением новых <Dep on={article.uniques.vietasFormulas}>формул Виета</Dep> из новых
          корней из задачи <Ref to={uniques.rootFromRoot}>Корень от корня</Ref>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`6x^2 + 49x - 49 = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Нам нужны новые корни <M>{math`x_1'`}</M> и <M>{math`x_2'`}</M>, которые связаны с исходными корнями{' '}
            <M>x_1</M> и <M>x_2</M> следующим образом:
          </P>
          <BlockMath>{math`
            x_1' = \frac{x_1}{x_2} + 1
            >>{big}
            x_2' = \frac{x_2}{x_1} + 1
          `}</BlockMath>
          <P>Составим формулы Виета для нового квадратного уравнения:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = \left(\frac{x_1}{x_2} + 1\right) + \left(\frac{x_2}{x_1} + 1\right)
              \\[10px]
              x_1'x_2' = \left(\frac{x_1}{x_2} + 1\right)\left(\frac{x_2}{x_1} + 1\right)
            \end{dcases}
          `}</BlockMath>
          <P>Разберёмся с верхней формулой:</P>
          <BlockMath>{math`
            x_1' + x_2' =
            \left(\frac{x_1}{x_2} + 1\right) + \left(\frac{x_2}{x_1} + 1\right) =
            \frac{x_1^2 + x_2^2}{x_1x_2} + 2 = \cdots
          `}</BlockMath>
          <P>Сумму квадратов мы уже получали в предыдущем пункте. Подставляем значение:</P>
          <BlockMath>{math`
            \cdots =
            \frac{\frac{61}{4}}{-\frac{3}{2}} + 2 =
            -\frac{61}{6} + 2 =
            -\frac{61}{6} + \frac{12}{6} =
            -\frac{49}{6}
          `}</BlockMath>
          <P>Разберёмся с нижней формулой:</P>
          <BlockMath>{math`
            x_1'x_2' =
            \left(\frac{x_1}{x_2} + 1\right)\left(\frac{x_2}{x_1} + 1\right) =
            \frac{\cancel{x_1}}{\cancel{x_2}}\cdot\frac{\cancel{x_2}}{\cancel{x_1}} + \frac{x_1}{x_2} + \frac{x_2}{x_1} + 1 =
            \frac{x_1^2 + x_2^2}{x_1x_2} + 2 = -\frac{49}{6}
          `}</BlockMath>
          <P>Финальные формулы Виета с новыми корнями выглядят так:</P>
          <BlockMath>{math`
            \begin{dcases}
              x_1' + x_2' = -\frac{49}{6} \\
              x_1'x_2' = \frac{-49}{6}
            \end{dcases}
          `}</BlockMath>
          <P>Тогда коэффициенты нового квадратного уравнения будут:</P>
          <BlockMath>{math`A = 6, \enspace B = 49, \enspace C = -49`}</BlockMath>
          <P>Квадратное уравнение с новыми корнями:</P>
          <BlockMath>{math`6x^2 + 49x - 49 = 0`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Корни-акробаты" level="medium">
      <SubProblem>
        <ProblemDescription>
          <P>
            Не вычисляя корней уравнения <M>{math`3x^2 + 8x - 1 = 0`}</M>, найдите:
          </P>
          <BlockMath>{math`x_1^2 + x_2^2`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="70/9" />
        <ProblemHint>
          <P>Воспользуйтесь формулой квадрата суммы:</P>
          <BlockMath>{math`(a + b)^2 = a^2 + 2ab + b^2`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`\frac{70}{9}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Подобную сумму квадратов можно получить при помощи формулы квадрата суммы:</P>
          <BlockMath>{math`(a+b)^2 = a^2 + 2ab + b^2`}</BlockMath>
          <BlockMath>{math`(x_1 + x_2)^2 = x_1^2 + 2x_1x_2 + x_2^2`}</BlockMath>
          <P>
            Сумму и произведение корней можно найти по <Dep on={article.uniques.vietasFormulas}>формулам Виета</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = -\frac{B}{A} = -\frac{8}{3} \\
              x_1x_2 = \frac{C}{A} = -\frac{1}{3}
            \end{cases}
          `}</BlockMath>
          <P>Подставляем эти данные в формулу квадрата суммы:</P>
          <BlockMath>{math`
            \left(-\frac{8}{3}\right)^2 = x_1^2 + 2\left(-\frac{1}{3}\right) + x_2^2
            \\
            \frac{64}{9} = x_1^2 - \frac{2}{3} + x_2^2
          `}</BlockMath>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> прибавляем к обеим частям равенства{' '}
            <M>{math`\frac{2}{3}`}</M>:
          </P>
          <BlockMath>{math`
            \frac{64}{9} + \yellow{\frac{2}{3}} = x_1^2 - \cancel{\frac{2}{3}} + x_2^2 + \cancel{\yellow{\frac{2}{3}}}
          `}</BlockMath>
          <P>Приводим к общему знаменателю и выполняем сложение:</P>
          <BlockMath>{math`
            \frac{64}{9} + \frac{6}{9} = x_1^2 + x_2^2
            \\
            \boxed{\frac{70}{9} = x_1^2 + x_2^2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Не вычисляя корней уравнения <M>{math`3x^2 + 8x - 1 = 0`}</M>, найдите:
          </P>
          <BlockMath>{math`x_1x_2^3 + x_2x_1^3`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="-70/27" />
        <ProblemHint>Вынесите общий множитель.</ProblemHint>
        <ProblemAnswer>
          <M>{math`-\frac{70}{27}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Вынесем за скобки общий множитель <M>{math`x_1x_2`}</M>:
          </P>
          <BlockMath>{math`x_1x_2(x_1^2 + x_2^2)`}</BlockMath>
          <P>
            Произведение корней можно найти по <Dep on={article.uniques.vietasFormulas}>формуле Виета</Dep>:
          </P>
          <BlockMath>{math`x_1x_2 = \frac{C}{A} = -\frac{1}{3}`}</BlockMath>
          <P>Сумму квадратов корней мы уже нашли ранее:</P>
          <BlockMath>{math`x_1^2 + x_2^2 = \frac{70}{9}`}</BlockMath>
          <P>Подставляем эти данные в выражение:</P>
          <BlockMath>{math`x_1x_2(x_1^2 + x_2^2) = -\frac{1}{3} \cdot \frac{70}{9}`}</BlockMath>
          <P>Итог:</P>
          <BlockMath>{math`\boxed{x_1x_2^3 + x_2x_1^3 = -\frac{70}{27}}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Не вычисляя корней уравнения <M>{math`3x^2 + 8x - 1 = 0`}</M>, найдите:
          </P>
          <BlockMath>{math`\frac{x_1}{x_2^2} + \frac{x_2}{x_1^2}`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="-584/3" />
        <ProblemHint>
          <P>Воспользуйтесь формулой куба суммы:</P>
          <BlockMath>{math`(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`-\frac{584}{3}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Приводим дроби к общему знаменателю:</P>
          <BlockMath>{math`\frac{x_1^3 + x_2^3}{x_1^2x_2^2}`}</BlockMath>
          <P>
            В числителе сумму кубов можно получить при помощи формулы куба суммы подобно тому, как мы ранее использовали
            формулу квадрата суммы:
          </P>
          <BlockMath>{math`(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3`}</BlockMath>
          <P>
            Эту формулу легко получить, даже если вы не знаете ее развернутой формы. Для этого в левой части надо просто
            три раза умножить скобку саму на себя.
          </P>
          <P>
            Заменяем <M>a</M> и <M>b</M> на наши корни:
          </P>
          <BlockMath>{math`(x_1 + x_2)^3 = x_1^3 + 3x_1^2x_2 + 3x_1x_2^2 + x_2^3`}</BlockMath>
          <P>
            В правой части выносим общий множитель <M>{math`3x_1x_2`}</M> у центральных слагаемых:
          </P>
          <BlockMath>{math`(x_1 + x_2)^3 = x_1^3 + 3x_1x_2(x_1 + x_2) + x_2^3`}</BlockMath>
          <P>
            Заменяем суммы и произведения на уже известные по{' '}
            <Dep on={article.uniques.vietasFormulas}>формулам Виета</Dep> данные:
          </P>
          <BlockMath>{math`\left(-\frac{8}{3}\right)^3 = x_1^3 + 3\left(-\frac{1}{3}\right)\left(-\frac{8}{3}\right) + x_2^3`}</BlockMath>
          <P>Производим вычисления:</P>
          <BlockMath>{math`
            \left(-\frac{8}{3}\right)^3 = x_1^3 + \frac{8}{3} + x_2^3
            \\
            -\frac{512}{27} = x_1^3 + \frac{8}{3} + x_2^3
          `}</BlockMath>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычитаем из обеих частей равенства дробь{' '}
            <M>{math`\frac{8}{3}`}</M>:
          </P>
          <BlockMath>{math`
            -\frac{512}{27} - \yellow{\frac{8}{3}} = x_1^3 + \cancel{\frac{8}{3}} + x_2^3 - \cancel{\yellow{\frac{8}{3}}}
          `}</BlockMath>
          <P>Приводим к общему знаменателю и выполняем вычитание:</P>
          <BlockMath>{math`
            -\frac{512}{27} - \frac{72}{27} = x_1^3 + x_2^3
            \\
            -\frac{584}{27} = x_1^3 + x_2^3
          `}</BlockMath>
          <P>Подставляем вычисленный числитель обратно в дробь:</P>
          <BlockMath>{math`\frac{-\frac{584}{27}}{x_1^2x_2^2}`}</BlockMath>
          <P>
            В знаменателе произведение <M>{math`x_1^2x_2^2`}</M> можно объединить под один квадрат и получить{' '}
            <M>{math`(x_1x_2)^2`}</M>. А произведение корней нам известно:
          </P>
          <BlockMath>{math`
            \frac{-\frac{584}{27}}{\left(-\frac{1}{3}\right)^2}
            =
            \frac{-\frac{584}{27}}{\frac{1}{9}}
            =
            -\frac{584}{27} \cdot 9
            =
            \boxed{-\frac{584}{3}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Не вычисляя корней уравнения <M>{math`3x^2 + 8x - 1 = 0`}</M>, найдите:
          </P>
          <BlockMath>{math`x_1^4 + x_2^4`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="4882/81" />
        <ProblemHint>
          <P>
            Путь 1 -- собственноручно выведите формулу четвертой степени суммы <M>{math`(a + b)^4`}</M>, умножим эту
            скобку саму на себя четыре раза.
          </P>
          <P>
            Путь 2 -- произведите замену переменных: <M>{math`n = x_1^2`}</M> и <M>{math`m = x_2^2`}</M>.
          </P>
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`\frac{4882}{81}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Этот пример можно решить несколькими путями. Первый, прямой и громоздкий путь -- вывести формулу четвёртой
            степени суммы <M>{math`(a+b)^4`}</M> (четыре раза умножив скобку саму на себя) и подставить известные
            данные.
          </P>
          <P>
            Но мы поступим хитрее. Произведём замену переменной: <M>{math`n = x_1^2`}</M> и <M>{math`m = x_2^2`}</M>.
            Тогда получается:
          </P>
          <BlockMath>{math`x_1^4 + x_2^4 = n^2 + m^2`}</BlockMath>
          <P>Сумму квадратов можно получить при помощи формулы квадрата суммы:</P>
          <BlockMath>{math`(a+b)^2 = a^2 + 2ab + b^2`}</BlockMath>
          <BlockMath>{math`(n + m)^2 = n^2 + 2nm + m^2`}</BlockMath>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем из обеих частей <M>2nm</M>:
          </P>
          <BlockMath>{math`
            (n + m)^2 - \yellow{2nm} = n^2 + \cancel{2nm} + m^2 - \cancel{\yellow{2nm}}
            \\
            (n + m)^2 - 2nm = n^2 + m^2
          `}</BlockMath>
          <P>Возвращаемся к исходным переменным:</P>
          <BlockMath>{math`(x_1^2 + x_2^2)^2 - 2(x_1x_2)^2 = x_1^4 + x_2^4`}</BlockMath>
          <P>
            Сумму квадратов корней мы находили в первой подзадаче. Произведение корней нам известно по{' '}
            <Dep on={article.uniques.vietasFormulas}>формуле Виета</Dep>. Подставляем данные и считаем:
          </P>
          <BlockMath>{math`
            \left(\frac{70}{9}\right)^2 - 2\left(-\frac{1}{3}\right)^2
            =
            \frac{4900}{81} - 2\cdot\frac{1}{9}
            =
            \frac{4900}{81} - \frac{18}{81}
            =
            \boxed{\frac{4882}{81}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Не вычисляя корней уравнения <M>{math`2x^2 - 5x - 4 = 0`}</M>, найдите:
          </P>
          <BlockMath>{math`\frac{1}{x_1^2} + \frac{1}{x_2^2}`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="41/16" />
        <ProblemHint>
          Приведите дроби к общему знаменателю. Сумму квадратов в числителе мы уже выражали в первой подзадаче.
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`\frac{41}{16}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Приводим дроби к общему знаменателю:</P>
          <BlockMath>{math`\frac{x_2^2 + x_1^2}{x_1^2x_2^2}`}</BlockMath>
          <P>Сумму квадратов в числителе мы уже выражали в первой подзадаче:</P>
          <BlockMath>{math`x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2`}</BlockMath>
          <P>Подставляем эту формулу в числитель:</P>
          <BlockMath>{math`\frac{(x_1 + x_2)^2 - 2x_1x_2}{x_1^2x_2^2}`}</BlockMath>
          <P>
            В знаменателе произведение <M>{math`x_1^2x_2^2`}</M> можно объединить под один квадрат и получить{' '}
            <M>{math`(x_1x_2)^2`}</M>:
          </P>
          <BlockMath>{math`\frac{(x_1 + x_2)^2 - 2x_1x_2}{(x_1x_2)^2}`}</BlockMath>
          <P>
            Сумму и произведение корней можно найти по <Dep on={article.uniques.vietasFormulas}>формулам Виета</Dep>:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = -\frac{B}{A} = \frac{5}{2} \\
              x_1x_2 = \frac{C}{A} = -2
            \end{cases}
          `}</BlockMath>
          <P>Подставляем эти данные в выражение и считаем:</P>
          <BlockMath>{math`
            \frac{\left(\frac{5}{2}\right)^2 - 2\cdot(-2)}{\left(-2\right)^2}
            =
            \frac{\frac{25}{4} + 4}{4}
            =
            \frac{\frac{25}{4} + \frac{16}{4}}{4}
            =
            \frac{\frac{41}{4}}{4}
            =
            \boxed{\frac{41}{16}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Не вычисляя корней уравнения <M>{math`2x^2 - 5x - 4 = 0`}</M>, найдите:
          </P>
          <BlockMath>{math`x_1x_2^4 + x_2x_1^4`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="-245/4" />
        <ProblemHint>Вынесите общий множитель. Cумму кубов мы уже выражали в третьей подзадаче.</ProblemHint>
        <ProblemAnswer>
          <M>{math`-\frac{245}{4}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Вынесем за скобки общий множитель <M>{math`x_1x_2`}</M>:
          </P>
          <BlockMath>{math`x_1x_2(x_1^3 + x_2^3)`}</BlockMath>
          <P>Сумму кубов мы уже выражали в третьей подзадаче:</P>
          <BlockMath>{math`x_1^3 + x_2^3 = (x_1 + x_2)^3 - 3x_1x_2(x_1 + x_2)`}</BlockMath>
          <P>Вставляем эту формулу в выражение:</P>
          <BlockMath>{math`x_1x_2\left((x_1 + x_2)^3 - 3x_1x_2(x_1 + x_2)\right)`}</BlockMath>
          <P>
            Сумма и произведение корней нам известны по <Dep on={article.uniques.vietasFormulas}>формулам Виета</Dep>.
            Подставляем данные и считаем:
          </P>
          <BlockMath>{math`
            -2\left(\left(\frac{5}{2}\right)^3 - 3\cdot(-2)\cdot\frac{5}{2}\right)
            =
            -2\left(\frac{125}{8} + 15\right)
            =
            -2\left(\frac{125}{8} + \frac{120}{8}\right)
            =
            -2\cdot\frac{245}{8}
            =
            \boxed{-\frac{245}{4}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Не вычисляя корней уравнения <M>{math`2x^2 - 5x - 4 = 0`}</M>, найдите:
          </P>
          <BlockMath>{math`\frac{x_1}{x_2^3} + \frac{x_2}{x_1^3}`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="-2441/324" />
        <ProblemHint>
          Приведите дроби к общему знаменателю. Сумму четвёртых степеней в числителе мы уже выражали в четвёртой
          подзадаче.
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`-\frac{2441}{324}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Приводим дроби к общему знаменателю:</P>
          <BlockMath>{math`\frac{x_1^4 + x_2^4}{x_1^3x_2^3}`}</BlockMath>
          <P>
            Сумму четвёртых степеней в числителе мы уже выражали в четвёртой подзадаче. Повторяем указанные там действия
            и получаем:
          </P>
          <BlockMath>{math`x_1^4 + x_2^4 = \frac{4882}{81}`}</BlockMath>
          <P>
            В знаменателе произведение <M>{math`x_1^3x_2^3`}</M> можно объединить под один куб и получить{' '}
            <M>{math`(x_1x_2)^3`}</M>. Произведение корней нам известно по{' '}
            <Dep on={article.uniques.vietasFormulas}>формуле Виета</Dep>. Считаем:
          </P>
          <BlockMath>{math`x_1^3x_2^3 = (x_1x_2)^3 = \left(-2\right)^3 = -8`}</BlockMath>
          <P>Подставляем посчитанные числитель и знаменатель в наше выражение:</P>
          <BlockMath>{math`
            \frac{x_1^4 + x_2^4}{x_1^3x_2^3}
            =
            \frac{\frac{4882}{81}}{-8}
            =
            -\frac{4882}{648}
            =
            \boxed{-\frac{2441}{324}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Не вычисляя корней уравнения <M>{math`2x^2 - 5x - 4 = 0`}</M>, найдите:
          </P>
          <BlockMath>{math`x_1^6 + x_2^6`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="61049/64" />
        <ProblemHint>
          <P>
            Произведите замену переменных: <M>{math`n = x_1^2`}</M> и <M>{math`m = x_2^2`}</M>. Воспользуйтесь формулами
            из предыдущих подзадач.
          </P>
        </ProblemHint>
        <ProblemAnswer>
          <M>{math`\frac{61049}{64}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Выводить вручную формулу шестой степени суммы <M>{math`(a+b)^6`}</M> (шесть раз умножив скобку саму на себя)
            -- это слишком долго и неэффективно.
            {/* TODO: Добавить ссылку на бином Ньютона, когда появится страница /combinatorics/binomial-theorem */} Даже
            если вы знакомы с такой классной штукой, как бином Ньютона. Да и потом будет огромное количество
            преобразований.
          </P>
          <P>
            Поступим хитрее. Произведём замену переменной: <M>{math`n = x_1^3`}</M> и <M>{math`m = x_2^3`}</M>. Тогда
            получается:
          </P>
          <BlockMath>{math`x_1^6 + x_2^6 = n^2 + m^2`}</BlockMath>
          <P>Сумму квадратов мы уже выражали в пятой подзадаче:</P>
          <BlockMath>{math`n^2 + m^2 = (n + m)^2 - 2nm`}</BlockMath>
          <P>Возвращаемся к исходным переменным:</P>
          <BlockMath>{math`x_1^6 + x_2^6 = (x_1^3 + x_2^3)^2 - 2(x_1^3x_2^3)`}</BlockMath>
          <P>Сумму кубов мы находили в шестой подзадаче. Считаем сразу с числами:</P>
          <BlockMath>{math`
            x_1^3 + x_2^3 = \left(\frac{5}{2}\right)^3 - 3\cdot(-2)\cdot\frac{5}{2} = \frac{125}{8} + 15 = \frac{125}{8} + \frac{120}{8} = \frac{245}{8}
          `}</BlockMath>
          <P>
            Произведение кубов корней <M>{math`x_1^3x_2^3`}</M> можно объединить под один куб и получить{' '}
            <M>{math`(x_1x_2)^3`}</M>. Произведение корней нам известно по{' '}
            <Dep on={article.uniques.vietasFormulas}>формуле Виета</Dep>. Считаем:
          </P>
          <BlockMath>{math`x_1^3x_2^3 = (x_1x_2)^3 = \left(-2\right)^3 = -8`}</BlockMath>
          <P>Подставляем посчитанные данные в выражение:</P>
          <BlockMath>{math`
            \left(\frac{245}{8}\right)^2 - 2\cdot(-8)
            =
            \frac{60025}{64} + 16
            =
            \frac{60025}{64} + \frac{1024}{64}
            =
            \frac{61049}{64}
            =
            \boxed{\frac{61049}{64}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Корни и параметры" level="medium">
      <SubProblem>
        <ProblemDescription>
          <P>
            Известно, что корни уравнения <M>{math`x^2 - 5x + a = 0`}</M> на <M>1</M> меньше корней уравнения{' '}
            <M>{math`x^2 - 7x + 3a - 6 = 0`}</M>. Найдите <M>a</M> и корни каждого из уравнений.
          </P>
        </ProblemDescription>
        <MathValueCheck label="a" answer={6} />
        <ProblemHint>
          Выпишите <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep> через произведение для обоих уравнений.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`a = 6 \\ x_1' = 2, \enspace x_2' = 3 \\ x_1 = 3, \enspace x_2 = 4`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Обозначим корни первого уравнения как <M>{math`x_1'`}</M> и <M>{math`x_2'`}</M>, а второго -- как <M>x_1</M>{' '}
            и <M>x_2</M>. Выразим на языке математики тот факт, что корни первого уравнения на <M>1</M> меньше корней
            второго уравнения:
          </P>
          <BlockMath>{math`
            x_1' = x_1 - 1
            >>{big}
            x_2' = x_2 - 1
          `}</BlockMath>
          <P>Выпишем формулы Виета с произведением для первого и второго уравнений:</P>
          <BlockMath>{math`
            x_1x_2 = 3a - 6
            \\
            x_1'x_2' = a
          `}</BlockMath>
          <P>
            Заменим <M>{math`x_1'`}</M> и <M>{math`x_2'`}</M> на выражения через <M>x_1</M> и <M>x_2</M>:
          </P>
          <BlockMath>{math`
            x_1x_2 = 3a - 6
            \\
            (x_1 - 1)(x_2 - 1) = a
          `}</BlockMath>
          <P>Раскрываем скобки и приводим подобные слагаемые:</P>
          <BlockMath>{math`
            x_1x_2 = 3a - 6
            \\
            x_1x_2 - x_1 - x_2 + 1 = a
          `}</BlockMath>
          <P>
            Заменяем <M>{math`x_1x_2`}</M> в нижней формуле на <M>{math`3a - 6`}</M> из верхней формулы:
          </P>
          <BlockMath>{math`3a - 6 - x_1 - x_2 + 1 = a \\ 3a - 5 - x_1 - x_2 = a`}</BlockMath>
          <P>Выносим за скобки знак минуса, чтобы получить сумму корней:</P>
          <BlockMath>{math`3a - 5 - (x_1 + x_2) = a`}</BlockMath>
          <P>
            Заменяем сумму корней второго уравнения <M>{math`x_1 + x_2`}</M> на <M>7</M> из формулы Виета для этого
            второго уравнения и находим <M>a</M>, пользуясь <Dep on={sameActionRule}>правилом одинакового действия</Dep>
            :
          </P>
          <BlockMath>{math`
            3a - 5 - 7 = a
            \\
            3a - 12 = a
            \\
            2a = 12
            \\
            \boxed{a = 6}
          `}</BlockMath>
          <P>
            Записываем любое из двух уравнений с найденным <M>a</M>:
          </P>
          <BlockMath>{math`x^2 - 5x + 6 = 0`}</BlockMath>
          <P>
            Это уравнение приведённое и его корни элементарно находятся в уме опять же по{' '}
            <Dep on={article.uniques.vietasFormulas}>формулам Виета</Dep>. При умножении их друг на друга надо получить{' '}
            <M>6</M>, а при сложении <M>5</M>. Очевидно, что корни равны <M>2</M> и <M>3</M>:
          </P>
          <BlockMath>{math`x_1' = 2, \enspace x_2' = 3`}</BlockMath>
          <P>
            По условию корни второго уравнения на <M>1</M> больше, а значит:
          </P>
          <BlockMath>{math`x_1 = 3, \enspace x_2 = 4`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>
            Известно, что корни уравнения <M>{math`x^2 - 13x + b = 0`}</M> равны соответственно квадратам корней
            уравнения <M>{math`x^2 + ax + 6 = 0`}</M>. Найдите <M>a</M> и <M>b</M> и корни каждого из уравнений.
          </P>
        </ProblemDescription>
        <MathValueCheck label="a" answer={-5} />
        <MathValueCheck label="b" answer={36} />
        <ProblemHint>
          Найдите сначала <M>b</M>, потом корни обоих уравнений, а затем <M>a</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`a = -5, \enspace b = 36 \\ x_1' = 4, \enspace x_2' = 9 \\ x_1 = 2, \enspace x_2 = 3`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title='Поиск "b"'>
            <P>
              Обозначим корни первого уравнения как <M>{math`x_1'`}</M> и <M>{math`x_2'`}</M>, а второго -- как{' '}
              <M>x_1</M> и <M>x_2</M>. Выразим на языке математики тот факт, что корни первого уравнения равны квадратам
              корней второго уравнения:
            </P>
            <BlockMath>{math`
              x_1' = x_1^2
              >>{big}
              x_2' = x_2^2
            `}</BlockMath>
            <P>Выпишем формулы Виета с произведением для первого и второго уравнений:</P>
            <BlockMath>{math`
              x_1x_2 = 6
              \\
              x_1'x_2' = b
            `}</BlockMath>
            <P>
              Заменим <M>{math`x_1'`}</M> и <M>{math`x_2'`}</M> на выражения через <M>x_1</M> и <M>x_2</M>:
            </P>
            <BlockMath>{math`
              x_1x_2 = 6
              \\
              (x_1^2)(x_2^2) = b
            `}</BlockMath>
            <P>Произведение квадратов можно записать как единое возведение в квадрат:</P>
            <BlockMath>{math`
              x_1x_2 = 6
              \\
              (x_1x_2)^2 = b
            `}</BlockMath>
            <P>
              Заменяем <M>{math`x_1x_2`}</M> в нижней формуле на <M>6</M> из верхней формулы:
            </P>
            <BlockMath>{math`
              (6)^2 = b
              \\
              \boxed{b = 36}
            `}</BlockMath>
          </ProblemSection>

          <ProblemSection title="Корни уравнений">
            <P>
              Записываем первое уравнение с найденным <M>b</M>:
            </P>
            <BlockMath>{math`x^2 - 13x + 36 = 0`}</BlockMath>
            <P>
              Это уравнение приведённое и его корни элементарно находятся в уме опять же по{' '}
              <Dep on={article.uniques.vietasFormulas}>формулам Виета</Dep>. При умножении их друг на друга надо
              получить <M>36</M>, а при сложении <M>13</M>. Очевидно, что корни равны <M>4</M> и <M>9</M>:
            </P>
            <BlockMath>{math`x_1' = 4, \enspace x_2' = 9`}</BlockMath>
            <P>По условию корни второго уравнения равны квадратным корням корней первого уравнения, а значит:</P>
            <BlockMath>{math`x_1 = 2, \enspace x_2 = 3`}</BlockMath>
          </ProblemSection>

          <ProblemSection title='Поиск "a"'>
            <P>Выпишем формулу Виета через сумму для второго уравнения:</P>
            <BlockMath>{math`x_1 + x_2 = -a`}</BlockMath>
            <P>Подставляем найденные корни второго уравнения:</P>
            <BlockMath>{math`
              2 + 3 = -a
              \\
              5 = -a
              \\
              \boxed{a = -5}
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Проверка формулы корней" level="hard">
      <SubProblem label="Подготовка">
        <ProblemDescription>
          <P>
            Обозначим корни квадратного уравнения буквами <M>n</M> и <M>m</M>. Выразите через эти корни следующее
            выражение, которое состоит из коэффициентов этого же уравнения:
          </P>
          <BlockMath>{math`
            \frac{B^2 - 4AC}{A^2}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через корни" answer="(n-m)^2" />
        <ProblemHint>
          Преобразуйте это выражение так, чтобы в нём появились дроби <M>-B/A</M> и <M>C/A</M>. Затем подставьте вместо
          этих дробей сумму и произведение корней из <Dep on={article.uniques.vietasFormulas}>формул Виета</Dep>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`\frac{B^2 - 4AC}{A^2} = (n - m)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Преобразуем выражение так, чтобы образовать дроби из{' '}
            <Dep on={article.uniques.vietasFormulas}>формул Виета</Dep>:
          </P>
          <BlockMath>{math`
            \frac{B^2 - 4AC}{A^2} =
            \frac{B^2}{A^2} - \frac{4\cancel{A}C}{A^{\cancel{2}}} =
            \left(\frac{B}{A}\right)^2 - 4\cdot\frac{C}{A} =
            \left(-\frac{B}{A}\right)^2 - 4\cdot\frac{C}{A} = \ldots
          `}</BlockMath>
          <P>
            Подставляем вместо дробей сумму и произведение корней из формул Виета, раскрываем скобки и проводим
            упрощение:
          </P>
          <BlockMath>{math`
            \ldots = \left(n + m\right)^2 - 4nm = \\
            = n^2 + 2nm + m^2 - 4nm = \\
            = n^2 - 2nm + m^2 = \\
            = (n - m)^2
          `}</BlockMath>
          <P>Убираем все промежуточные шаги и получаем финальное равенство:</P>
          <BlockMath>{math`
            \frac{B^2 - 4AC}{A^2} = (n - m)^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Проверка">
        <ProblemDescription>
          <P>
            Пользуясь <Dep on={article.uniques.vietasFormulas}>формулами Виета</Dep> и результатом предыдущей подзадачи,
            докажите, что <Dep on={quadraticFormula}>общая формула корней</Dep> квадратного уравнения действительно
            верна:
          </P>
          <BlockMath>{math`
            \frac{-B \pm \sqrt{B^2 - 4AC}}{2A}
          `}</BlockMath>
        </ProblemDescription>
        <ProblemHint>
          Вынесите <M>1/2</M> за скобки в формуле корней и разбейте большую дробь на две маленькие.
        </ProblemHint>
        <ProblemHint>
          Дробь с корнем преобразуйте так, чтобы под корнем образовалось выражение из предыдущей подзадачи.
        </ProblemHint>
        <ProblemSolution>
          <P>
            Преобразуем формулу так, чтобы получить дробь из формул Виета, а также выражение из предыдущей подзадачи:
          </P>
          <BlockMath>{math`
            \frac{-B \pm \sqrt{B^2 - 4AC}}{2A} = \frac{1}{2}\left[ \frac{-B \pm \sqrt{B^2 - 4AC}}{A} \right] = \\
            = \frac{1}{2}\left[ -\frac{B}{A} \pm \frac{\sqrt{B^2 - 4AC}}{A} \right] =
            \frac{1}{2}\left[ -\frac{B}{A} \pm \sqrt{\frac{B^2 - 4AC}{A^2}} \right] = \ldots
          `}</BlockMath>
          <P>
            Подставляем сумму корней из формул Виета в левую дробь и полученное в предыдущей подзадаче выражение под
            знак корня:
          </P>
          <BlockMath>{math`
            \ldots = \frac{1}{2}\left[ (n + m) \pm \sqrt{(n - m)^2} \right]
            = \frac{(n + m) \pm (n - m)}{2}
          `}</BlockMath>
          <P>
            В зависимости от выбранного знака на месте <M>\pm</M> и получаются два корня уравнения:
          </P>
          <BlockMath>{math`
            + : \frac{(n + m) + (n - m)}{2} = \frac{1}{2}\cdot 2n = n >>
            - : \frac{(n + m) - (n - m)}{2} = \frac{1}{2}\cdot 2m = m
          `}</BlockMath>
          <P>Формула корней действительно работает!</P>
          <QED />
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Корневая разность" level="hard">
      <ProblemDescription>
        <P>
          Не вычисляя корней уравнения <M>{math`2x^2 - 5x + 1 = 0`}</M>, найдите просто разность и разность квадратов
          его корней. Почему в обоих случаях получается два возможных ответа?
        </P>
      </ProblemDescription>
      <ProblemHint>
        <P>Используйте формулы сокращенного умножения:</P>
        <BlockMath>{math`
          (a + b)^2 = a^2 + 2ab + b^2 \\
          (a - b)^2 = a^2 - 2ab + b^2 \\
          a^2 - b^2 = (a - b)(a + b)
        `}</BlockMath>
      </ProblemHint>
      <ProblemHint>
        <P>Установите связь между квадратом разности и квадратом суммы корней:</P>
        <BlockMath>{math`(x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1x_2`}</BlockMath>
      </ProblemHint>
      <ProblemAnswer>
        <P>Разность корней:</P>
        <BlockMath>{math`x_1 - x_2 = \pm\frac{\sqrt{17}}{2}`}</BlockMath>
        <P>Разность квадратов корней:</P>
        <BlockMath>{math`x_1^2 - x_2^2 = \pm\frac{5\sqrt{17}}{4}`}</BlockMath>
        <P>
          Произвольность вводимых обозначений <M>x_1</M> и <M>x_2</M> приводит не к одному конкретному значению разности
          корней, а к двум возможным вариантам с противоположными знаками.
        </P>
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Разность корней">
          <P>
            Запишем <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep> для данного уравнения, чтобы получить
            стартовые данные:
          </P>
          <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = \frac{5}{2} \\
              x_1x_2 = \frac{1}{2}
            \end{cases}
          `}</BlockMath>
          <P>
            Выпишем две формулы сокращенного умножения (ФСУ), квадрат суммы и квадрат разности, в которых фигурируют
            суммы и разности чисел:
          </P>
          <BlockMath>{math`
            (a + b)^2 = a^2 + 2ab + b^2 \\
            (a - b)^2 = a^2 - 2ab + b^2
          `}</BlockMath>
          <P>Разность корней присутствует в формуле квадрата разности. Если использовать наши обозначения:</P>
          <BlockMath>{math`(x_1 - x_2)^2 = x_1^2 - 2x_1x_2 + x_2^2`}</BlockMath>
          <P>
            Формулу справа от знака равенства можно преобразовать в квадрат суммы, если по{' '}
            <Dep on={sameActionRule}>правилу одинакового действия</Dep> прибавить к обеим частям <M>{math`4x_1x_2`}</M>:
          </P>
          <BlockMath>{math`
            (x_1 - x_2)^2 + \yellow{4x_1x_2} = x_1^2 - 2x_1x_2 + x_2^2 + \yellow{4x_1x_2}
            \\
            (x_1 - x_2)^2 + 4x_1x_2 = x_1^2 + 2x_1x_2 + x_2^2
            \\
            (x_1 - x_2)^2 + 4x_1x_2 = (x_1 + x_2)^2
          `}</BlockMath>
          <P>
            Теперь вычтем из обеих частей равенства <M>{math`4x_1x_2`}</M>:
          </P>
          <BlockMath>{math`
            (x_1 - x_2)^2 + \cancel{4x_1x_2} - \cancel{\yellow{4x_1x_2}} = (x_1 + x_2)^2 - \yellow{4x_1x_2}
            \\
            (x_1 - x_2)^2 = (x_1 + x_2)^2 - 4x_1x_2
          `}</BlockMath>
          <P>
            Мы получили формулу, где с одной стороны нужная нам разность корней, а с другой известные из формул Виета
            выражения. Подставляем данные и считаем:
          </P>
          <BlockMath>{math`
            (x_1 - x_2)^2 = \left(\frac{5}{2}\right)^2 - 4\cdot\frac{1}{2}
            \\
            (x_1 - x_2)^2 = \frac{25}{4} - 2
            \\
            (x_1 - x_2)^2 = \frac{25}{4} - \frac{8}{4}
            \\
            (x_1 - x_2)^2 = \frac{17}{4}
          `}</BlockMath>
          <P>
            Итак, если возвести в квадрат разность <M>{math`x_1 - x_2`}</M>, то получится <M>{math`\frac{17}{4}`}</M>.
            Значит исходная разность равна положительному или отрицательному корню из этой дроби (при возведении в
            квадрат знак все равно "теряется"):
          </P>
          <BlockMath>{math`
            x_1 - x_2 = \pm\sqrt{\frac{17}{4}}
            \\
            \boxed{x_1 - x_2 = \pm\frac{\sqrt{17}}{2}}
          `}</BlockMath>
        </ProblemSection>

        <ProblemSection title="Разность квадратов корней">
          <P>Воспользуемся ещё одной формулой сокращенного умножения, разностью квадратов:</P>
          <BlockMath>{math`a^2 - b^2 = (a-b)(a+b)`}</BlockMath>
          <P>Используем наши обозначения:</P>
          <BlockMath>{math`x_1^2 - x_2^2 = (x_1 - x_2)(x_1 + x_2)`}</BlockMath>
          <P>
            Вместо левой скобки подставляем найденную ранее разность корней, а вместо правой -- сумму корней из формул
            Виета:
          </P>
          <BlockMath>{math`
            x_1^2 - x_2^2 = \left(\pm\frac{\sqrt{17}}{2}\right)\left(\frac{5}{2}\right)
            \\
            x_1^2 - x_2^2 = \pm\frac{5\sqrt{17}}{4}
            \\
            \boxed{x_1^2 - x_2^2 = \pm\frac{5\sqrt{17}}{4}}
          `}</BlockMath>
        </ProblemSection>

        <ProblemSection title="Почему значения два?">
          <P>
            Это легко продемонстрировать на примере. Пускай корни равны <M>5</M> и <M>3</M>.
          </P>
          <P>
            Мы <B>произвольно</B> обозначаем их <M>x_1</M> и <M>x_2</M>. Из-за того, что мы сами не знаем, какое число
            под какое обозначение попало, разность может иметь два "одинаковых", но противоположных по знаку значения:
          </P>
          <List ordered>
            <Li>
              <M>{math`5 - 3 = 2`}</M> если <M>{math`x_1 = 5`}</M> и <M>{math`x_2 = 3`}</M>.
            </Li>
            <Li>
              <M>{math`3 - 5 = -2`}</M> если <M>{math`x_1 = 3`}</M> и <M>{math`x_2 = 5`}</M>.
            </Li>
          </List>
          <P>
            Если мы хотим учесть оба варианта в едином ответе, то как раз и получаем <M>{math`\pm 2`}</M>!
          </P>
          <P>
            Итак, произвольность вводимых обозначений <M>x_1</M> и <M>x_2</M> приводит не к одному конкретному значению
            разности корней, а к двум возможным вариантам с противоположными знаками. А вот квадрат этой разности всегда
            точно определён, потому что при возведении в квадрат знак, какой бы он ни был, "теряется"!
          </P>
        </ProblemSection>
      </ProblemSolution>
    </Problem>

    <Problem title="Удвоенный корень" level="hard">
      <ProblemDescription>
        <P>
          При каких значениях параметра <M>a</M> один из корней квадратного уравнения в два раза больше другого?
        </P>
        <BlockMath>{math`(a^2 - 5a + 3)x^2 + (3a-1)x + 2 = 0`}</BlockMath>
      </ProblemDescription>
      <MathValueCheck label="a" answer="2/3" />
      <ProblemHint>
        Запишите <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep> для данного уравнения.
      </ProblemHint>
      <ProblemHint>Один из корней в два раза больше другого. Запишите это условие на языке математики.</ProblemHint>
      <ProblemHint>
        Подставьте выражение для корня из первой формулы во вторую и найдите значение параметра <M>a</M>.
      </ProblemHint>
      <ProblemAnswer>
        <M>{math`a = \frac{2}{3}`}</M>
      </ProblemAnswer>
      <ProblemSolution>
        <P>"Один из корней в два раза больше другого" на языке математики записывается так:</P>
        <BlockMath>{math`x_1 = 2x_2`}</BlockMath>
        <P>
          Запишем <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep> для данного уравнения:
        </P>
        <BlockMath>{math`
          \begin{dcases}
            x_1 + x_2 = -\frac{3a-1}{a^2 - 5a + 3} \\[10px]
            x_1x_2 = \frac{2}{a^2 - 5a + 3}
          \end{dcases}
        `}</BlockMath>
        <P>
          Заменяем <M>x_1</M> на <M>{math`2x_2`}</M> в обеих формулах:
        </P>
        <BlockMath>{math`
          \begin{dcases}
            3x_2 = -\frac{3a-1}{a^2 - 5a + 3} \\[10px]
            2x_2^2 = \frac{2}{a^2 - 5a + 3}
          \end{dcases}
        `}</BlockMath>
        <P>
          В обеих формулах оставляем <M>x_2</M> в одиночестве, пользуясь{' '}
          <Dep on={sameActionRule}>правилом одинакового действия</Dep>:
        </P>
        <BlockMath>{math`
          \begin{dcases}
            x_2 = -\frac{3a-1}{3(a^2 - 5a + 3)} \\[10px]
            x_2^2 = \frac{1}{a^2 - 5a + 3}
          \end{dcases}
        `}</BlockMath>
        <P>
          Во второй формуле заменяем <M>x_2</M> на его значение из первой формулы:
        </P>
        <BlockMath>{math`
          \left(-\frac{3a-1}{3(a^2 - 5a + 3)}\right)^2 = \frac{1}{a^2 - 5a + 3}
          \\
          \frac{(3a-1)^2}{9(a^2 - 5a + 3)^{\cancel{2}}} = \frac{1}{\cancel{a^2 - 5a + 3}}
          \\
          (3a-1)^2 = 9(a^2 - 5a + 3)
          \\
          \cancel{9a^2} - 6a + 1 = \cancel{9a^2} - 45a + 27
          \\
          -6a + 1 = -45a + 27
          \\
          39a = 26
          \\
          3\cdot\cancel{13}a = 2\cdot\cancel{13}
          \\
          3a = 2
          \\
          \boxed{a = \frac{2}{3}}
        `}</BlockMath>
        <P>
          Итак, при <M>{math`a = \frac{2}{3}`}</M> один из корней квадратного уравнения в два раза больше другого.
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Названия с корнями кончились" level="hard">
      <ProblemDescription>
        <P>
          Числа <M>n</M> и <M>m</M> являются корнями квадратного уравнения <M>x^2 + 5x + 3 = 0</M>. Не вычисляя значений
          этих корней, определите, как будет выглядеть квадратное уравнение со следующими корнями:
        </P>
        <BlockMath>{math`
          \left( n - \frac{1}{n} \right)^2 \quad \text{и} \quad \left( m - \frac{1}{m} \right)^2
        `}</BlockMath>
      </ProblemDescription>
      <ProblemHint>
        <P>
          Запишите <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep> для исходного уравнения и для нового
          уравнения. В новых формулах выполните преобразования (довольно муторные), чтобы в них появились выражения из
          старых формул Виета. Подставьте эти выражения и посчитайте.
        </P>
      </ProblemHint>
      <ProblemAnswer>
        <BlockMath>{math`
          9x^2 - 154x + 81 = 0
        `}</BlockMath>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Выпишем <Dep on={article.uniques.vietasFormulas}>формулы Виета</Dep> для корней исходного уравнения:
        </P>
        <BlockMath>{math`
          \begin{cases}
          n + m = -5 \\
          nm = 3
          \end{cases}
        `}</BlockMath>
        <P>Выпишем формулы Виета для новых корней:</P>
        <BlockMath>{math`
          \begin{cases}
          \left( n - \frac{1}{n} \right)^2 + \left( m - \frac{1}{m} \right)^2 = \text{?} \\
          \left( n - \frac{1}{n} \right)^2 \cdot \left( m - \frac{1}{m} \right)^2 = \text{?}
          \end{cases}
        `}</BlockMath>
        <P>
          Наша задача каждую из новых формул Виета преобразовать так, чтобы в неё можно было вставить выражения из
          старых формул Виета. Поехали!
        </P>
        <ProblemSection title="Сумма новых корней">
          <P>
            Преобразуем формулу для суммы новых корней. Запакуем её в квадрат суммы, добавив и компенсировав нужные
            члены:
          </P>
          <BlockMath>{math`
            \left( n - \frac{1}{n} \right)^2 + \left( m - \frac{1}{m} \right)^2 = \\
            = \left( n - \frac{1}{n} \right)^2 + \yellow{ 2\left(n - \frac{1}{n}\right)\left(m - \frac{1}{m}\right)} + \left( m - \frac{1}{m} \right)^2 - \yellow{2\left(n - \frac{1}{n}\right)\left(m - \frac{1}{m}\right)} = \\
            = \left( n - \frac{1}{n} + m - \frac{1}{m} \right)^2 - 2\left(n - \frac{1}{n}\right)\left(m - \frac{1}{m}\right) = \\
            = \left[(n + m) - \frac{m + n}{nm}\right]^2 - 2\left(nm - n\cdot\frac{1}{m} - m\cdot\frac{1}{n} + \frac{1}{nm}\right) = \\
            = \left[(n + m) - \frac{m + n}{nm}\right]^2 - 2\left(nm - \frac{n^2 + m^2}{nm} + \frac{1}{nm}\right) = \\
            = \left[(n + m) - \frac{m + n}{nm}\right]^2 - 2\left(nm - \frac{(n^2 + \yellow{2nm} + m^2) - \yellow{2nm}}{nm} + \frac{1}{nm}\right) = \\
            = \left[(n + m) - \frac{m + n}{nm}\right]^2 - 2\left(nm - \frac{(n + m)^2 - 2nm}{nm} + \frac{1}{nm}\right) = \ldots
          `}</BlockMath>
          <P>Подставляем числа и считаем:</P>
          <BlockMath>{math`
            \ldots = \left[(-5) - \frac{-5}{3}\right]^2 - 2\left(3 - \frac{(-5)^2 - 2\cdot 3}{3} + \frac{1}{3}\right) = \\
            = \left(-\frac{10}{3}\right)^2 - 2\left(3 - \frac{25 - 6}{3} + \frac{1}{3}\right) = \frac{100}{9} - 2\left(3 - \frac{19}{3} + \frac{1}{3}\right) = \\
              = \frac{100}{9} - 2\left(3 - \frac{18}{3}\right) = \frac{100}{9} - 2\cdot(-3) = \frac{100}{9} + 6 = \frac{100}{9} + \frac{54}{9} = \boxed{\frac{154}{9}}
          `}</BlockMath>
        </ProblemSection>
        <ProblemSection title="Произведение новых корней">
          <P>Преобразуем формулу для произведения новых корней:</P>
          <BlockMath>{math`
            \left( n - \frac{1}{n} \right)^2 \cdot \left( m - \frac{1}{m} \right)^2 = \left[ \left(n - \frac{1}{n}\right)\left(m - \frac{1}{m}\right) \right]^2 \\
            = \left(nm - n\cdot\frac{1}{m} - m\cdot\frac{1}{n} + \frac{1}{nm}\right)^2 = \\
            = \left(nm - \frac{n^2 + m^2}{nm} + \frac{1}{nm}\right)^2 = \\
            = \left(nm - \frac{(n^2 + \yellow{2nm} + m^2) - \yellow{2nm}}{nm} + \frac{1}{nm}\right)^2 = \\
            = \left(nm - \frac{(n + m)^2 - 2nm}{nm} + \frac{1}{nm}\right)^2 = \ldots
          `}</BlockMath>
          <P>Подставляем числа и считаем:</P>
          <BlockMath>{math`
            \ldots = \left(3 - \frac{(-5)^2 - 2\cdot 3}{3} + \frac{1}{3}\right)^2 = \left(3 - \frac{25 - 6}{3} + \frac{1}{3}\right)^2 = \\
              = \left(3 - \frac{19}{3} + \frac{1}{3}\right)^2 = \left(3 - \frac{18}{3}\right)^2 = (-3)^2 = \boxed{9}
          `}</BlockMath>
        </ProblemSection>
        <ProblemSection title="Итоговое уравнение">
          <P>Разберёмся с формулой для суммы корней нового уравнения:</P>
          <BlockMath>{math`
              -\frac{B}{A} = \frac{154}{9} = -\frac{-154}{9}
          `}</BlockMath>
          <P>Разберёмся с формулой для произведения корней нового уравнения:</P>
          <BlockMath>{math`
              \frac{C}{A} = 9 = \frac{81}{9}
          `}</BlockMath>
          <P>Итоговый вид квадратного уравнения с новыми корнями:</P>
          <BlockMath>9x^2 - 154x + 81 = 0</BlockMath>
        </ProblemSection>
      </ProblemSolution>
    </Problem>

    <Problem title="Игра с нулевой суммой" level="hard">
      <ProblemDescription>
        Используя <B>только</B> формулы Виета выясните, какие корни будут у квадратного уравнения, если сумма его
        коэффициентов равна нулю.
      </ProblemDescription>
      <MathExpressionCheck label="Корни уравнения" answers={[1, 'C/A']} />
      <ProblemHint>
        Из суммы коэффициентов выразите какой-нибудь один коэффициент и подставьте в формулу Виета.
      </ProblemHint>
      <ProblemHint>
        Выполните преобразования так, чтобы можно было подставить корни из другой формулы Виета.
      </ProblemHint>
      <ProblemAnswer>
        <BlockMath>{math`x_1 = 1 >>{big} x_2 = \frac{C}{A}`}</BlockMath>
      </ProblemAnswer>
      <ProblemSolution>
        <P>По условию нам известно, что сумма коэффициентов равна нулю:</P>
        <BlockMath>{math`A + B + C = 0`}</BlockMath>
        <P>Выразим какой-нибудь коэффициент через другие, используя равенство суммы нулю:</P>
        <BlockMath>-B = A + C</BlockMath>
        <P>
          Выпишем формулы Виета и заменим <M>-B</M> на <M>A + C</M>:
        </P>
        <BlockMath>{math`
          \begin{cases}
            x_1 + x_2 = -\frac{B}{A} \\
            x_1 x_2 = \frac{C}{A}
          \end{cases}
          >>
          \begin{cases}
            x_1 + x_2 = \frac{A + C}{A} \\
            x_1 x_2 = \frac{C}{A}
          \end{cases}
          >>
          \begin{cases}
            x_1 + x_2 = 1 + \frac{C}{A} \\
            x_1 x_2 = \frac{C}{A}
          \end{cases}
        `}</BlockMath>
        <P>
          Замечаем, что справа образовалась дробь <M>C/A</M>. Эта же дробь согласно второй формуле Виета равна
          произведению корней. Подставим это произведение вместо дроби:
        </P>
        <BlockMath>x_1 + x_2 = 1 + x_1x_2</BlockMath>
        <P>Собираем все члены в одной стороне, например левой:</P>
        <BlockMath>x_1 - x_1x_2 + x_2 - 1 = 0</BlockMath>
        <P>Проведём комбо из преобразований:</P>
        <Table>
          <Tr>
            <Td>
              Из первых двух слагаемых выносим за скобки <M>x_1</M>.
            </Td>
            <Td freeze center>
              <M currentColor>x_1(1 - x_2) + (x_2 - 1) = 0</M>
            </Td>
          </Tr>
          <Tr>
            <Td>
              Выносим <M>-1</M> из левой скобки, чтобы сделать ее такой же, как и правая.
            </Td>
            <Td freeze center>
              <M currentColor>-x_1(x_2 - 1) + (x_2 - 1) = 0</M>
            </Td>
          </Tr>
          <Tr>
            <Td>
              Выносим за скобки <M>(x_2 - 1)</M>.
            </Td>
            <Td freeze center>
              <M currentColor>(x_2 - 1)(1 - x_1) = 0</M>
            </Td>
          </Tr>
          <Tr>
            <Td>
              Выносим <M>-1</M> из второй скобки, чтобы привести их к единому виду.
            </Td>
            <Td freeze center>
              <M currentColor>-(x_1 - 1)(x_2 - 1) = 0</M>
            </Td>
          </Tr>
          <Tr>
            <Td>
              Умножаем обе части уравнения на <M>-1</M>, чтобы избавиться от минуса.
            </Td>
            <Td freeze center>
              <M currentColor>(x_1 - 1)(x_2 - 1) = 0</M>
            </Td>
          </Tr>
        </Table>
        <P>
          Мы получили два множителя, произведение которых равно нулю. Если хотя бы одна скобка станет равна нулю, то и
          все произведение обнулится. Получается, какой-то из корней <B>обязательно должен быть равен</B> <M>1</M>!
        </P>
        <P>
          Пускай единицей будет корень <M>x_1</M>. Подставляем его во вторую формулу Виета:
        </P>
        <BlockMath>{math`
          x_1x_2 = \frac{C}{A} >>
          1 \cdot x_2 = \frac{C}{A} >>
          \boxed{x_2 = \frac{C}{A}}
        `}</BlockMath>
        <P>
          Получили замечательный результат -- если сумма коэффициентов квадратного уравнения равна нулю, то один корень
          обязательно будет равен <M>1</M>, а второй <M>C/A</M>!
        </P>
      </ProblemSolution>
      <ProblemNote>
        Эта задача полностью повторяет задачу <Ref to={oneRootOne}>Один корень один</Ref>, просто результат в ней
        достигается другим способом. В той задаче мы использовали разложение на множители, а здесь -- формулы Виета.
      </ProblemNote>
    </Problem>
  </>
));
