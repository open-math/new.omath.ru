import { QED } from '#project/utils/qed';

import article, { hasRootsLabel, rootsLabel } from './article';
import summary from './summary';

// #region Links
//

const equationSolution = $CONTENT.basics.equations.elementary.article.$equationSolution;
const quadraticEquation = $CONTENT.basics.equations.quadratic.whatIsIt.article.$quadraticEquation;
const sameActionRule = $CONTENT.basics.equations.elementary.article.$sameActionRule;

//
// #endregion

// #region Todos
//

/**
 * Добавить ссылку на статью "Почему нельзя делить на ноль".
 */

/**
 * Добавить ссылку на статью "Что такое квадратный корень".
 */

//
// #endregion

export default defineProse()(() => (
  <>
    <Problem title="Поспешил -- математика насмешил" level="easy" method>
      <ProblemDescription>
        <P>Максиму нужно решить у доски следующее уравнение:</P>
        <BlockMath>4x^2 = 80x</BlockMath>
        <P>
          Он запомнил <Dep to={article.uniques.c0Roots}>общую формулу</Dep> решения неполных квадратных уравнений при{' '}
          <M>C = 0</M> и использовал её:
        </P>
        <BlockMath>{math`
          x_1 = 0 >>{big} x_2 = -\frac{B}{A} = -\frac{80}{4} = -20
        `}</BlockMath>
        <P>
          Правильно ли он решил уравнение? Решите уравнение, проверьте корни. Если он сделал ошибку, чётко укажите, что
          произошло и как её избежать.
        </P>
      </ProblemDescription>
      <ProblemHint>
        Это как-то связано с <Dep to={quadraticEquation}>общим видом</Dep> квадратного уравнения.
      </ProblemHint>
      <ProblemAnswer>
        <P>
          Правильные корни: <M>0</M> и <M>20</M>.
        </P>
        <P>
          Ошибка Максима состояла в том, что он не привел квадратное уравнение к{' '}
          <Dep to={quadraticEquation}>общему виду</Dep> (трехчлен с одной стороны, ноль с другой), а потому коэффициент{' '}
          <M>B</M> он взял со знаком плюса, вместо минуса!
        </P>
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Поиск правильных корней">
          <P>
            Сначала проверим, правильные ли корни уравнения нашёл Максим. Решим вручную. Сгруппируем все члены в левой
            части уравнения. Для этого из обеих частей по правилу одинакового действия вычтем <M>80x</M>:
          </P>
          <BlockMath>4x^2 - 80x = 0</BlockMath>
          <P>
            Чтобы упростить числа, разделим обе части уравнения на <M>4</M>:
          </P>
          <BlockMath>x^2 - 20x = 0</BlockMath>
          <P>
            Теперь вынесем <M>x</M> за скобки и решим два подуравнения (приравняем к нулю каждый из множителей):
          </P>
          <BlockMath>x(x - 20) = 0</BlockMath>
          <BlockMath>{math`
            \boxed{x_1=0} >>{big} x_2 - 20=0 \\ \boxed{x_2=20}
          `}</BlockMath>
          <P>
            Второй корень у нас <M>20</M>, а у Максима <M>-20</M>. Значит, уравнение он решил неправильно. Но как же
            так? Он же использовал общую формулу!
          </P>
        </ProblemSection>
        <ProblemSection title="Ошибка Максима">
          <P>
            Максим использовал общую формулу, но совершенно забыл <B>форму</B> квадратного уравнения, для которого она
            была выведена. А выведена она была для формы <M>Ax^2 + Bx = 0</M>, то есть для{' '}
            <Dep to={quadraticEquation}>общего вида</Dep> квадратного уравнения!
          </P>
          <P>
            А в задаче уравнение было в форме <M>4x^2 = 80x</M>, то есть не приведено к общему виду. Поэтому он взял
            коэффициент <M>B</M> со знаком плюса, вместо минуса!
          </P>
        </ProblemSection>
      </ProblemSolution>
      <ProblemNote>
        <P>Перед определением коэффициентов квадратного уравнения всегда сначала приведите его к общему виду!</P>
      </ProblemNote>
    </Problem>

    <Problems
      title="Решение неполных уравнений"
      level="easy"
      snippet={{
        seo: 'Задачи на решение неполных квадратных уравнений',
        description: `
          Набор задач для отработки решения всех видов неполных квадратных уравнений.
          С подробными решениями и ответами.
      `,
      }}
    >
      <P>
        Сначала решите неполное квадратное уравнение вручную. После этого обязательно найдите корни по{' '}
        <Dep to={summary.uniques.allFormulas}>общим формулам</Dep> и сверьте результаты.
      </P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + x = 0</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} set={[0, -1]} />
        <ProblemAnswer>
          Корни уравнения: <M>0</M> и <M>-1</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В этом уравнении коэффициент <M>C</M> равен нулю. Поэтому мы можем вынести <M>x</M> за скобки и решить два
            подуравнения (приравнять к нулю каждый из множителей):
          </P>
          <BlockMath>{math`
            x(x + 1) = 0
          `}</BlockMath>
          <BlockMath>{math`
            \boxed{x_1=0} >>{big} x_2 + 1 = 0 \\ \boxed{x_2=-1}
          `}</BlockMath>
          <Hr />
          <P>Проверим по общей формуле:</P>
          <BlockMath>{math`
            x_1 = 0 \\ x_2 = -\frac{B}{A} = -\frac{1}{1} = -1
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>3y=7y^2</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} set={[0, '3/7']} />
        <ProblemAnswer>
          Корни уравнения: <M>0</M> и <M>{math`\dfrac{3}{7}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Сгруппируем члены в одной части уравнения, например, в правой. Значит, слева должен остаться ноль. Для этого
            по правилу одинакового действия вычтем <M>3y</M> из обеих частей уравнения:
          </P>
          <BlockMath>0 = 7y^2 - 3y</BlockMath>
          <P>
            Теперь вынесем <M>y</M> за скобки и решим два подуравнения (приравняем к нулю каждый из множителей):
          </P>
          <BlockMath>0 = y(7y - 3)</BlockMath>
          <BlockMath>{math`
            \boxed{0=y_1} >>{big} 0 = 7y_2-3 \\ \boxed{\frac{3}{7}=y_2}
          `}</BlockMath>
          <Hr />
          <P>Проверим по общей формуле:</P>
          <BlockMath>{math`
            y_1 = 0 \\ y_2 = -\frac{B}{A} = -\frac{-3}{7} = \frac{3}{7}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`0=-\frac{18}{\sqrt{3}}z^2 -\frac{9}{\sqrt{3}}z`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} set={[0, ['-1/2', -0.5]]} />
        <ProblemAnswer>
          Корни уравнения: <M>0</M> и <M>{math`-\dfrac{1}{2}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Избавляемся от корней в знаменателях, по правилу одинакового действия умножив обе части на{' '}
            <M>{math`\sqrt{3}`}</M>:
          </P>
          <BlockMath>0 = -18z^2 - 9z</BlockMath>
          <P>
            Умножаем обе части на <M>-1</M>, чтобы избавиться от минусов:
          </P>
          <BlockMath>0 = 18z^2 + 9z</BlockMath>
          <P>
            Замечаем, что оба слагаемых нацело делятся на <M>9</M>, значит, делим обе части уравнения на это число:
          </P>
          <BlockMath>0 = 2z^2 + z</BlockMath>
          <P>
            Теперь вынесем <M>z</M> за скобки и решим два подуравнения (приравняем к нулю каждый из множителей):
          </P>
          <BlockMath>0 = z(2z + 1)</BlockMath>
          <BlockMath>{math`
            \boxed{0=z_1} >>{big} 0 = 2z_2+1 \\ \boxed{-\frac{1}{2}=z_2}
          `}</BlockMath>
          <Hr />
          <P>Проверим по общей формуле:</P>
          <BlockMath>{math`
            z_1 = 0 \\ z_2 = -\frac{B}{A} = -\frac{-\frac{18}{\sqrt{3}}}{-\frac{9}{\sqrt{3}}} = -\frac{18}{\cancel{\sqrt{3}}}\cdot\frac{\cancel{\sqrt{3}}}{9} = -\frac{18}{9} = -\frac{1}{2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{1}{2}t + t^2 = -9t^2 - \frac{2}{4}t`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} set={[0, ['-1/10', -0.1]]} />
        <ProblemAnswer>
          Корни уравнения: <M>0</M> и <M>{math`-\dfrac{1}{10}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>Сгруппируем все члены в левой части уравнения, последовательно применяя правило одинакового действия:</P>
          <BlockMath>{math`\frac{1}{2}t + t^2 + 9t^2 + \frac{2}{4}t = 0`}</BlockMath>
          <P>Приводим подобные члены:</P>
          <BlockMath>{math`t + 10t^2 = 0`}</BlockMath>
          <P>
            Выносим <M>t</M> за скобки и решаем два подуравнения (приравниваем к нулю каждый из множителей):
          </P>
          <BlockMath>{math`t(1 + 10t) = 0`}</BlockMath>
          <BlockMath>{math`
            \boxed{t_1=0} >>{big} 1 + 10t_2 = 0 \\ 10t_2 = -1 \\ \boxed{t_2 = -\frac{1}{10}}
          `}</BlockMath>
          <Hr />
          <P>Проверим по общей формуле:</P>
          <BlockMath>{math`
            t_1 = 0 \\ t_2 = -\frac{B}{A} = -\frac{1}{10}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`0=\frac{\sqrt{2}}{999}x^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={rootsLabel} answer={0} />
        <ProblemAnswer>
          Корень у уравнения один: <M>0</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Единственный вариант, чтобы справа получился ноль -- это чтобы <M>x=0</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 100 = 0</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} answer={/^да$/}>
          <ProblemCheck label={rootsLabel} set={[10, -10]} />
        </ProblemCheck>
        <ProblemAnswer>
          Корни уравнения: <M>10</M> и <M>-10</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Изолируем <M>x^2</M>. Ему мешает вычитание <M>100</M>. По правилу одинакового действия прибавим <M>100</M> к
            обеим частям уравнения:
          </P>
          <BlockMath>{math`x^2 = 100`}</BlockMath>
          <P>
            Какое число нужно возвести в квадрат, чтобы получить <M>100</M>? Очевидно это числа <M>10</M> и <M>-10</M>.
          </P>
          <Hr />
          <P>Проверим по общей формуле:</P>
          <BlockMath>{math`
            x_{1,2} = \pm\sqrt{-\frac{C}{A}} = \pm\sqrt{-\frac{-100}{1}} = \pm\sqrt{100} = \pm 10
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>0 = 9r^2 - 16</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} answer={/^да$/}>
          <ProblemCheck label={rootsLabel} set={['-4/3', '4/3']} />
        </ProblemCheck>
        <ProblemAnswer>
          Корни уравнения: <M>{math`\dfrac{4}{3}`}</M> и <M>{math`-\dfrac{4}{3}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Изолируем <M>r^2</M>. Ему мешает вычитание <M>16</M>. По правилу одинакового действия прибавим <M>16</M> к
            обеим частям уравнения:
          </P>
          <BlockMath>{math`9r^2 = 16`}</BlockMath>
          <P>
            Делим обе части уравнения на <M>9</M>, чтобы оставить <M>r^2</M> в одиночестве:
          </P>
          <BlockMath>{math`r^2 = \frac{16}{9}`}</BlockMath>
          <P>
            Что надо умножить само на себя, чтобы получить <M>{math`\frac{16}{9}`}</M>? В числителе должна быть <M>4</M>
            , а в знаменателе <M>3</M>, то есть это дроби <M>{math`\frac{4}{3}`}</M> и <M>{math`-\frac{4}{3}`}</M>!
          </P>
          <BlockMath>{math`r = \pm\frac{4}{3}`}</BlockMath>
          <Hr />
          <P>Проверим по общей формуле:</P>
          <BlockMath>{math`
            r_{1,2} = \pm\sqrt{-\frac{C}{A}} = \pm\sqrt{-\frac{-16}{9}} = \pm\sqrt{\frac{16}{9}} = \pm\frac{4}{3}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{64}{\sqrt{111}} + \frac{16}{\sqrt{111}}j^2 = 0`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} answer={/^нет$/} />
        <ProblemAnswer>Уравнение не имеет корней.</ProblemAnswer>
        <ProblemSolution>
          <P>С помощью правила одинакового действия избавляемся от слагаемого без переменной:</P>
          <BlockMath>{math`
            \frac{16}{\sqrt{111}}j^2 = -\frac{64}{\sqrt{111}}
          `}</BlockMath>
          <P>
            Теперь делим обе части уравнения на <M>{math`\frac{16}{\sqrt{111}}`}</M>, чтобы оставить <M>j^2</M> в
            одиночестве:
          </P>
          <BlockMath>{math`
            \frac{\cancel{\frac{16}{\sqrt{111}}}}{\cancel{\frac{16}{\sqrt{111}}}}j^2 = \frac{-\frac{64}{\sqrt{111}}}{\frac{16}{\sqrt{111}}}
            \\
            j^2 = -\frac{64}{\cancel{\sqrt{111}}} \cdot \frac{\cancel{\sqrt{111}}}{16}
            \\
            j^2 = -\frac{64}{16}
            \\
            j^2 = -4
          `}</BlockMath>
          <P>
            Какое число нужно возвести в квадрат, чтобы получить <M>-4</M>? Никакое, ведь возведение в квадрат всегда
            дает положительное число! Значит уравнение не имеет корней.
          </P>
          <Hr />
          <P>Проверим по общей формуле:</P>
          <BlockMath>{math`
            j_{1,2} = \pm\sqrt{-\frac{C}{A}} = \pm\sqrt{-\frac{\frac{64}{\sqrt{111}}}{\frac{16}{\sqrt{111}}}} = \pm\sqrt{-\frac{64}{\cancel{\sqrt{111}}}\cdot\frac{\cancel{\sqrt{111}}}{16}} = \pm\sqrt{-4}
          `}</BlockMath>
          <P>Корень из отрицательного числа не берется, значит корней нет.</P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{21}{4}m^2 - 10 = 6 - 7m^2`}</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} answer={/^да$/}>
          <ProblemCheck label={rootsLabel} set={['8/7', '-8/7']} />
        </ProblemCheck>
        <ProblemAnswer>
          Корни уравнения: <M>{math`\dfrac{8}{7}`}</M> и <M>{math`-\dfrac{8}{7}`}</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Чтобы избавиться от дроби, по правилу одинакового действия умножим обе части уравнения на <M>4</M>:
          </P>
          <BlockMath>{math`21m^2 - 40 = 24 - 28m^2`}</BlockMath>
          <P>Сгруппируем все слагаемые с переменной в левой части, а без нее в правой:</P>
          <BlockMath>{math`21m^2 + 28m^2 = 24 + 40`}</BlockMath>
          <P>Приводим подобные члены:</P>
          <BlockMath>{math`49m^2 = 64`}</BlockMath>
          <P>Делим обе части уравнения на 49:</P>
          <BlockMath>{math`m^2 = \frac{64}{49}`}</BlockMath>
          <P>
            Какая-то дробь при умножении сама на себя должна дать <M>{math`\frac{64}{49}`}</M>. В числителе для этого
            должно быть число <M>8</M>, а в знаменателе <M>7</M>. Значит, это дроби <M>{math`\frac{8}{7}`}</M> и{' '}
            <M>{math`-\frac{8}{7}`}</M>.
          </P>
          <Hr />
          <P>После приведения подобных членов приводим уравнение к общему виду:</P>
          <BlockMath>{math`49m^2 - 64 = 0`}</BlockMath>
          <P>Проверим по общей формуле:</P>
          <BlockMath>{math`
            m_{1,2} = \pm\sqrt{-\frac{C}{A}} = \pm\sqrt{-\frac{-64}{49}} = \pm\sqrt{\frac{64}{49}} = \pm\frac{8}{7}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>(30k + 2)k + 42k^2 = 72 + 2k</BlockMath>
        </ProblemDescription>
        <ProblemCheck label={hasRootsLabel} answer={/^да$/}>
          <ProblemCheck label={rootsLabel} set={[1, -1]} />
        </ProblemCheck>
        <ProblemAnswer>
          Корни уравнения: <M>1</M> и <M>-1</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскроем скобки:</P>
          <BlockMath>{math`30k^2 + 2k + 42k^2 = 72 + 2k`}</BlockMath>
          <P>Приводим подобные слагаемые:</P>
          <BlockMath>{math`72k^2 + 2k = 72 + 2k`}</BlockMath>
          <P>
            Замечаем, что все слагаемые в обеих частях уравнения делятся на <M>2</M>. Делим:
          </P>
          <BlockMath>{math`36k^2 + k = 36 + k`}</BlockMath>
          <P>
            Вычитаем <M>k</M> из обеих частей уравнения:
          </P>
          <BlockMath>{math`36k^2 = 36`}</BlockMath>
          <P>
            Делим обе части уравнения на <M>36</M>:
          </P>
          <BlockMath>{math`k^2 = 1`}</BlockMath>
          <P>
            Какое число нужно возвести в квадрат, чтобы получить <M>1</M>? Это числа <M>1</M> и <M>-1</M>. По общей
            формуле можно и не проверять. Тут всё очевидно.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem title="Знаковый признак" level="easy" method>
      <ProblemDescription>
        <P>
          Докажите, что если в неполном квадратном уравнении при <M>B=0</M> оставшиеся два коэффициента имеют один знак,
          то уравнение не имеет корней. А если знаки разные, то два корня есть.
        </P>
        <P>Пользуясь этим фактом, устно определите, есть ли решения у следующих уравнений:</P>
        <BlockMath>{math`
          3x^2 + 5 = 0 >>{big}
          -2x^2 = -7 >>{big}
          9999 = -x^2 >>{big}
          -4x^2 - 1 + 10 = 0
        `}</BlockMath>
      </ProblemDescription>
      <ProblemCheck label="Уравнение 1. Есть решения?" answer={/^нет$/} />
      <ProblemCheck label="Уравнение 2. Есть решения?" answer={/^да$/} />
      <ProblemCheck label="Уравнение 3. Есть решения?" answer={/^нет$/} />
      <ProblemCheck label="Уравнение 4. Есть решения?" answer={/^да$/} />
      <ProblemHint>
        Используйте <Dep to={article.uniques.b0Roots}>общую формулу корней</Dep> неполного квадратного уравнения при{' '}
        <M>B=0</M>.
      </ProblemHint>
      <ProblemAnswer>
        <P>Решения имеют второе и четвёртое уравнения.</P>
      </ProblemAnswer>
      <ProblemSolution>
        <ProblemSection title="Доказательство">
          <P>
            Вспоминаем <Dep to={article.uniques.b0Roots}>общую формулу корней</Dep> неполного квадратного уравнения при{' '}
            <M>B=0</M>:
          </P>
          <BlockMath>{math`x_{1,2} = \pm\sqrt{-\frac{C}{A}}`}</BlockMath>
          <P>
            Квадратный корень можно взять только из положительного числа. Другими словами вот эта часть{' '}
            <B>обязательно</B> должна быть положительной:
          </P>
          <BlockMath>{math`-\frac{C}{A} > 0`}</BlockMath>
          <P>
            Рассмотрим все возможные варианты знаков <M>C</M> и <M>A</M>.
          </P>
          <List type="ul">
            <Li>
              <P>
                <M>C</M> и <M>A</M> оба положительные числа. Тогда их деление это тоже положительное число. При
                умножении на минус перед дробью получится отрицательное число и корень не возьмётся.
              </P>
              <P>
                <B>Знаки одинаковые -- корней нет.</B>
              </P>
            </Li>
            <Li>
              <P>
                <M>C</M> и <M>A</M> оба отрицательные числа. Тогда их деление это тоже положительное число. При
                умножении на минус перед дробью получится отрицательное число и корень не возьмётся.
              </P>
              <P>
                <B>Знаки одинаковые -- корней нет.</B>
              </P>
            </Li>
            <Li>
              <P>
                <M>C</M> и <M>A</M> имеют разные знаки. Тогда их деление это отрицательное число. При умножении на минус
                перед дробью получится положительное число и корень возьмётся.
              </P>
              <P>
                <B>Знаки разные -- корни есть.</B>
              </P>
            </Li>
          </List>
          <P>
            Вот мы и доказали, что корни у таких неполных квадратных уравнений будут только в том случае, если
            оставшиеся два коэффициента имеют разные знаки.
          </P>
          <P>{QED}</P>
        </ProblemSection>
        <ProblemSection title="Проверка наличия решений">
          <List type="ol">
            <Li>
              Коэффициенты <M>3</M> и <M>5</M>. Знаки одинаковые. Решений нет.
            </Li>
            <Li>
              Оба коэффициента имеют знак минус, но один из них в другой части уравнения. Если прибавить к обеим частям
              уравнения <M>7</M>, то получится <M>-2x^2 + 7 = 0</M>. Коэффициенты имеют разные знаки. Решения есть.
            </Li>
            <Li>
              После группировки членов в одной части (без разницы какой) коэффициенты будут <M>9999</M> и <M>1</M>, либо{' '}
              <M>-1</M> и <M>-9999</M>. В обоих случаях знаки одинаковые. Решений нет.
            </Li>
            <Li>
              Приводим подобные члены (складываем <M>-1</M> и <M>10</M>) и получаем коэффициенты <M>-4</M> и <M>9</M>.
              Знаки разные. Решения есть.
            </Li>
          </List>
        </ProblemSection>
      </ProblemSolution>
    </Problem>

    <Problem title="Напряженная балка" level="easy" applied>
      <ProblemDescription>
        Напряжение изгиба <M>\sigma</M> в стальной балке, которая поддерживает мост, равно половине квадрата её
        отклонения <M>r</M> от центральной оси. Если величина напряжения превысит <M>8</M>, начнётся необратимая
        деформация балки. Какое максимальное расстояние от центральной оси может быть у точки на балке, чтобы она не
        деформировалась?
      </ProblemDescription>
      <ProblemCheck label={rootsLabel} answer={4} />
      <ProblemHint>Запишите уравнение для нахождения критического отклонения балки и решите его.</ProblemHint>
      <ProblemAnswer>
        Максимальное должно быть не более <M>4</M>.
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Переведем текст на язык математики. У нас есть некое "напряжение изгиба" <M>\sigma</M>, которое зависит от
          отклонения <M>r</M>. Причем зависимость равна половине квадрата отклонения:
        </P>
        <BlockMath>{math`\sigma = \frac{r^2}{2}`}</BlockMath>
        <P>
          Нам нужно найти максимальное отклонение <M>r</M>, при котором напряжение не превысит <M>8</M>. То есть, вместо{' '}
          <M>\sigma</M> мы подставляем предельно допустимое значение <M>8</M> и решаем уравнение:
        </P>
        <BlockMath>{math`8 = \frac{r^2}{2}`}</BlockMath>
        <P>
          Умножаем обе части уравнения на <M>2</M>, чтобы избавиться от дроби:
        </P>
        <BlockMath>{math`16 = r^2`}</BlockMath>
        <P>
          Теперь находим корни уравнения. Какое число нужно возвести в квадрат, чтобы получить <M>16</M>? Это числа{' '}
          <M>4</M> и <M>-4</M>:
        </P>
        <BlockMath>{math`\pm 4 = r`}</BlockMath>
        <P>
          Поскольку отклонение это просто расстояние, а расстояние не может быть отрицательным, то максимальное
          допустимое отклонение балки равно <M>4</M>!
        </P>
      </ProblemSolution>
    </Problem>

    <Problem title="Делить, нельзя помиловать" level="medium">
      <ProblemDescription>
        <P>
          Маше нужно было решить неполное квадратное уравнение при <M>C=0</M>:
        </P>
        <BlockMath>2x^2 + 3x = 0</BlockMath>
        <P>
          Она решила использовать <Dep to={sameActionRule}>правило одинакового действия</Dep> и поделила обе части
          уравнения на <M>x</M>:
        </P>
        <BlockMath>2x + 3 = 0</BlockMath>
        <P>
          Решая это элементарное уравнение, она нашла корень <M>{math`x = -\frac{3}{2}`}</M> и сдала работу на проверку
          учителю. Правильно ли она решила уравнение? Если нет, подробно объясните, в чём ошибка Маши.
        </P>
      </ProblemDescription>
      <ProblemHint>Деление и ноль не очень дружат.</ProblemHint>
      <ProblemAnswer>
        <P>
          Маша нашла только один корень уравнения из двух. Второй корень она упустила, потому что при делении обеих
          частей на <M>x</M> не учла, что <M>x</M> может быть равно нулю, и что этот случай надо{' '}
          <B>проверять отдельно</B>!
        </P>
        <P>
          Так как был найден только один корень, то по определению она уравнение{' '}
          <Dep to={equationSolution}>не решила!</Dep>
        </P>
      </ProblemAnswer>
      <ProblemSolution>
        <P>
          Сама идея разделить обе части на <M>x</M> в целом верна, и Маша использовала её правильно. Она действительно
          нашла корень уравнения. Ошибка её лишь в том, что это не единственный корень уравнения, то есть полностью
          задачу она не решила.
        </P>
        <P>
          Дело в том, что при делении обеих частей на <B>неизвестное</B> число <M>x</M> она не учла, что это число может
          быть равно <M>0</M>! Если <M>x=0</M>, то так бы поделить она не смогла, потому что делить на ноль нельзя.
        </P>
        <P>
          Поэтому сначала она должна ввести условие, что делит она, потому что считает, что <M>x</M> не равен нулю. И
          находит корень уравнения.
        </P>
        <P>
          Но после этого надо вернуться назад и рассмотреть случай, когда <M>x</M> <B>всё же</B> равен нулю:
        </P>
        <BlockMath>2\cdot 0^2 + 3\cdot 0 = 0 \\ 0 = 0</BlockMath>
        <P>
          Оказывается, что <M>0</M> это тоже корень этого уравнения! Она этот <M>0</M> пропустила!
        </P>
      </ProblemSolution>
      <ProblemNote>
        <P>
          Когда при решении уравнений вы хотите поделить обе части на какое-то неизвестное число, ваше уравнение
          разбивается на две "ветви". В первой ветви вы действительно делите на это неизвестное, но с условием, что оно
          не равно нулю. Во второй ветви вы обязаны вручную проверить вариант, когда это неизвестное число равно нулю.
        </P>
        <Diagram>{math`
          flowchart TD
            equation["$$ 2x^2 + 3x = 0 $$"] --> division(["Хотим поделить на $x$"])
            division -->|$ x \neq 0 $<br>Делить можно<br>Делим| subEquation1["$$ 2x + 3 = 0 $$"]
            division -->|$ x = 0 $<br>Делить нельзя<br>Проверяем вручную| subEquation2["$$ 2\cdot 0^2 + 3\cdot 0 = 0 $$"]
        `}</Diagram>
      </ProblemNote>
    </Problem>
  </>
));
