import { QED } from '@open-math/shared/utils';
import { RootsCheck } from '#project/utils/roots';

// #region Links
//

const whatIsQuadratic = $CONTENT.basics.equations.quadratic.whatIsIt;
const quadraticEquation = $CONTENT.basics.equations.quadratic.whatIsIt.article.$quadraticEquation;
const equationSolution = $CONTENT.basics.equations.elementary.article.$equationSolution;
const sameActionRule = $CONTENT.basics.equations.elementary.article.$sameActionRule;
const zeroFactors = $CONTENT.basics.equations.elementary.practice.$zeroFactors;

//
// #endregion

// #region Todos
//

/**
 * Добавить ссылку на квадратный корень и как с ним работать, когда статья будет готова.
 */

//
// #endregion

export default defineProse({
  uniques: {
    quadraticMissingTerms: Term,
    c0Roots: Statement,
    b0Roots: Statement,
    doNotMemorize: Important,
  },
})(({ uniques }) => (
  <>
    <H1>Что это такое?</H1>

    <P>
      Вы уже познакомились и научились распознавать <Dep on={whatIsQuadratic}>квадратные уравнения</Dep>. Теперь пришло
      время научиться их решать. Прежде чем браться за решение полноценных квадратных уравнений общего вида, давайте
      сначала начнём с чего-нибудь попроще. Бывает так, что у квадратного уравнения отсутствуют какие-то части из общего
      вида. Такие квадратные уравнения называются неполными.
    </P>

    <Term
      $={uniques.quadraticMissingTerms}
      title="Неполное квадратное уравнение"
      snippet={{
        search: true,
        key: true,
        seo: 'Что такое неполное квадратное уравнение?',
        description: `
          Квадратное уравнение, у которого равен нулю коэффициент B или C или оба сразу.
        `,
      }}
    >
      <P>
        <Dep on={quadraticEquation}>Квадратное уравнение</Dep>, у которого равен нулю коэффициент <M>B</M> или <M>C</M>{' '}
        или оба сразу:
      </P>

      <Diagram>{math`
          flowchart TD
            quadratic[**Квадратные уравнения**] -->|Все члены на месте| full[**Полные**<br>$$ Ax^2 + Bx + C = 0 $$]
            quadratic -->|Некоторых членов нет| missing[**Неполные**]
            missing --> missingBC[**B = 0 и C = 0**<br>$$ Ax^2 = 0 $$]
            missing --> missingC[**C = 0**<br>$$ Ax^2 + Bx = 0 $$]
            missing --> missingB[**B = 0**<br>$$ Ax^2 + C = 0 $$]
            class missing fill
      `}</Diagram>

      <P>Примеры:</P>

      <BlockMath>{math`
        \underbrace{10x^2 = 0}_{B = 0 \ и \ C = 0} >>{big}
        \underbrace{x^2 + x = 0}_{C = 0} >>{big}
        \underbrace{3x^2 - 8 = 0}_{B = 0}
      `}</BlockMath>
    </Term>

    <P>
      А что если нулю равен коэффициент <M>A</M>? Такое тоже может быть, но тогда по определению это будет уже не
      квадратное уравнение, ведь пропадёт то, что делает его "квадратным" -- <M>x^2</M>!
    </P>

    <H1
      snippet={{
        key: true,
        seo: 'Как решать неполные квадратные уравнения?',
        title: 'Решение таких уравнений',
        description: `
          Подробный разбор решения всех видов неполных квадратных уравнений с выводом общих формул.
        `,
      }}
    >
      Решение неполных квадратных уравнений
    </H1>

    <P>
      Хорошая новость состоит в том, что любой из трех видов неполных квадратных уравнений решается очень просто, без
      использования каких-либо хитростей или трюков! Давайте разберем каждый случай по отдельности.
    </P>

    <H2>Если и "B", и "C" равны нулю</H2>

    <P>
      Самый простой из всех трех видов неполных квадратных уравнений -- когда оба коэффициента <M>B</M> и <M>C</M> равны
      нулю:
    </P>

    <BlockMath>{math`
      8\brand{x^2} = 0 >>{big}
      -\frac{7}{2}\brand{x^2} = 0 >>{big}
      \frac{\sqrt{2} + \log_2{9}}{999 - 56^3}\brand{x^2} = 0
    `}</BlockMath>

    <P>
      Абсолютно не важно, что там стоит рядом с <M>x^2</M>. Тут суть в том, что это "что-то" умножается на наше
      неизвестное, и в итоге должен получиться ноль. Как со 100% гарантией получить ноль при умножении? Очень просто:
      ноль получится, если само неизвестное будет нулём! Уравнение всегда имеет единственное решение:
    </P>

    <BlockMath>{math`
      8 \cdot \brand{0} = 0 \\ \boxed{x = 0} >>{big}
      -\frac{7}{2} \cdot \brand{0} = 0 \\ \boxed{x = 0} >>{big}
      \frac{\sqrt{2} + \log_2{9}}{999 - 56^3} \cdot \brand{0} = 0 \\ \boxed{x = 0}
    `}</BlockMath>

    <Statement title='Корень квадратного уравнения при "B" = 0 и "C" = 0'>
      <StatementMain>
        <P>
          <B>Любое</B> неполное квадратное уравнение с нулевыми коэффициентами <M>B</M> и <M>C</M> <B>всегда</B> имеет
          единственное решение <M>x = 0</M> и пофиг на то, чему равен коэффициент <M>A</M>!
        </P>

        <Diagram>{math`
          flowchart LR
            bc0[$$ Ax^2 = 0 $$] --> solution[$$ x = 0 $$]
            class solution fill
        `}</Diagram>
      </StatementMain>
      <StatementProof>
        <P>
          Каким бы ни был коэффициент <M>A</M>, при подстановке <M>x = 0</M> в уравнение он буквально умножится на ноль
          и получится верное равенство <M>0 = 0</M>. Значит <M>x = 0</M> -- это единственное{' '}
          <Dep on={equationSolution}>решение уравнения</Dep>.
        </P>
        <QED />
      </StatementProof>
    </Statement>

    <H2>Если "C" равен нулю</H2>

    <P>
      Следующий вид неполных квадратных уравнений -- когда коэффициент <M>C</M> равен нулю. Для их решения достаточно
      владения <Dep on={sameActionRule}>правилом одинакового действия</Dep> и умения решать уравнения из{' '}
      <Dep on={zeroFactors}>набора множителей, равных нулю</Dep>.
    </P>

    <Problems title='Квадратные уравнения при "C" = 0' level="easy">
      <P>Решите уравнение:</P>
      <SubProblem label="Образец">
        <ProblemDescription>
          <BlockMath>x^2 + 5x = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, -5]} />
        <ProblemHint>
          Вынесите <M>x</M> за скобки.
        </ProblemHint>
        <ProblemAnswer>
          <M>x_1 = 0, \quad x_2 = -5</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В левой части уравнения видим, что у обоих слагаемых есть общий множитель <M>x</M>. Выносим его за скобку:
          </P>
          <BlockMath>x(x + 5) = 0</BlockMath>
          <P>
            Подобные уравнения из набора множителей, равных нулю, мы уже <Dep on={zeroFactors}>решали ранее</Dep>.
            Достаточно по отдельности найти, при каком <M>x</M> каждый из множителей станет равен нулю. Ведь если хотя
            бы один из них станет таковым, то этот ноль умножится на все остальные множители, и вся левая часть станет
            равна нулю.
          </P>
          <Diagram>{math`
            flowchart TD
              base["$$ x(x+5) = 0 $$"] -->|Подуравнение 1| factor1[$$ x = 0 $$]
              base -->|Подуравнение 2| factor2[$$ x + 5 = 0 $$] --> solution2[$$ x = -5 $$]
              class factor1,solution2 fill
          `}</Diagram>
          <P>
            Итак, при значении <M>x = 0</M> или <M>x = -5</M> уравнение обращается в верное равенство. Это и есть корни
            нашего квадратного уравнения.
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>8x=x^2</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, 8]} />
        <ProblemHint>
          Сгруппируйте иксы в одной части уравнения при помощи{' '}
          <Dep on={sameActionRule}>правила одинакового действия</Dep>.
        </ProblemHint>
        <ProblemAnswer>
          <M>x_1 = 0, \quad x_2 = 8</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Давайте расположим все иксы в правой части уравнения. Для этого надо избавиться от <M>8x</M> слева. По
            правилу одинакового действия вычитаем <M>8x</M> из обеих частей уравнения:
          </P>
          <BlockMath>0 = x^2 - 8x</BlockMath>
          <P>
            Выносим <M>x</M> за скобки и решаем два подуравнения:
          </P>
          <BlockMath>0 = x(x - 8)</BlockMath>
          <P>
            Получается два ответа: <M>x_1 = 0</M> и <M>x_2 = 8</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>2x^2 - 7x = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, [3.5, '7/2']]} />
        <ProblemAnswer>
          <M>{math`x_1 = 0, \quad x_2 = \dfrac{7}{2}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Выносим за скобки <M>x</M>:
          </P>
          <BlockMath>x(2x - 7) = 0</BlockMath>
          <P>
            Получаем два подуравнения. В первом очевидный корень <M>x = 0</M>. Во втором сначала прибавляем к обеим
            сторонам <M>7</M>:
          </P>
          <BlockMath>2x-7 = 0 \\ 2x = 7</BlockMath>
          <P>
            Теперь делим обе части уравнения на <M>2</M>:
          </P>
          <BlockMath>{math`x = \frac{7}{2}`}</BlockMath>
          <P>
            Итак, корни уравнения: <M>x_1 = 0</M> и <M>{math`x_2 = \frac{7}{2}`}</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{2}{7}x - \frac{1}{35}x^2 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, -10]} />
        <ProblemAnswer>
          <M>{math`x_1 = 0, \quad x_2 = -10`}</M>
        </ProblemAnswer>
        <ProblemHint>
          Приведите дроби к общему знаменателю. Затем избавьтесь от знаменателей, умножив обе части уравнения на общий
          знаменатель.
        </ProblemHint>
        <ProblemSolution>
          <P>
            Приведем дроби к общему знаменателю. Для этого достаточно у левой дроби числитель и знаменатель умножить на{' '}
            <M>5</M>:
          </P>
          <BlockMath>{math`
            \frac{2\cdot\brand{5}}{7\cdot\brand{5}}x - \frac{1}{35}x^2 = 0 \\
            \frac{10}{35}x - \frac{1}{35}x^2 = 0
          `}</BlockMath>
          <P>
            Теперь по правилу одинакового действия умножим обе части уравнения на общий знаменатель <M>35</M>, чтобы
            избавиться от дробей:
          </P>
          <BlockMath>{math`
            \brand{35} \cdot \left( \frac{10}{35}x - \frac{1}{35}x^2 \right) = 0 \cdot \brand{35} \\
            \cancel{35}\frac{10}{\cancel{35}}x - \cancel{35}\frac{1}{\cancel{35}}x^2 = 0 \\
            10x - x^2 = 0
          `}</BlockMath>
          <P>
            Вот теперь выносим за скобки <M>x</M>:
          </P>
          <BlockMath>x(10 - x) = 0</BlockMath>
          <P>
            Получаем два подуравнения. В первом очевидный корень <M>x = 0</M>. Во втором:
          </P>
          <BlockMath>{math`10 - x = 0 \\ \boxed{10 = x}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Statement $={uniques.c0Roots} title='Корни квадратного уравнения при "C" = 0'>
      <StatementMain>
        <P>
          <B>Любое</B> неполное квадратное уравнение с нулевым коэффициентом <M>C</M> <B>всегда</B> имеет два корня,
          которые можно найти по формулам:
        </P>
        <Diagram>{math`
          flowchart LR
            c0["$$ Ax^2 + Bx = 0 $$"]
            c0 --> solution1["$$ x_1 = 0 $$"]
            c0 --> solution2["$$ x_2 = -\frac{B}{A} $$"]
            class solution1,solution2 fill
        `}</Diagram>
      </StatementMain>
      <StatementProof>
        <P>
          Выносим <M>x</M> за скобки:
        </P>
        <BlockMath>{math`
          Ax^2 + Bx = 0 \\
          x(Ax + B) = 0
        `}</BlockMath>
        <P>
          Получаем <Dep on={zeroFactors}>типовой вид уравнения</Dep> с набором множителей с одной стороны и нулем с
          другой. Такое уравнение можно разбить на два подуравнения и решить их по отдельности. В первом случае
          получается очевидный корень <M>x = 0</M>. Во втором случае получаем элементарное уравнение <M>Ax + B</M> к
          нулю и решаем его относительно <M>x</M> (ведь коэффициенты <M>A</M> и <M>B</M> нам известны).
        </P>
        <Diagram>{math`
          flowchart TD
            base["$$ x(Ax + B) = 0 $$"] -->|Подуравнение 1| factor1[$$ x = 0 $$]
            base -->|Подуравнение 2| factor2[$$ Ax + B = 0 $$] --> solution2[$$ x = -\frac{B}{A} $$]
            class factor1,solution2 fill
        `}</Diagram>
        <QED />
      </StatementProof>
    </Statement>

    <P>
      Польза общей формулы в том, что не нужно каждый раз выносить за скобки и делать другие преобразования. Достаточно
      лишь взглянуть на уравнение, определить коэффициенты <M>A</M> и <M>B</M> и сразу подставить их в формулу.
    </P>

    <BlockMath>{math`
      0 = x + x^2 \\ \boxed{x_1 = 0} \\ \boxed{x_2 = -\frac{1}{1} = -1} >>{big}
      -16x = 4x^2 \\ \boxed{x_1 = 0} \\ \boxed{x_2 = -\frac{-16}{4} = 4} >>{big}
      \frac{1}{2}x^2 + 20x = 0 \\ \boxed{x_1 = 0} \\ \boxed{x_2 = -\frac{20}{\frac{1}{2}} = -\frac{20}{1}\cdot\frac{2}{1} = -40}
    `}</BlockMath>

    <H2>Если "B" равен нулю</H2>

    <P>
      Последний вид неполных квадратных уравнений -- когда нулю равен коэффициент <M>B</M>, "середина" уравнения
      пропадает, и у нас остаётся только <M>Ax^2</M> наедине с каким-то свободным членом <M>C</M>. Решаются они очень
      просто. Достаточно обыкновенного понимания того, что такое квадратный корень и как его извлекать.
    </P>

    <Problems title='Квадратные уравнения при "B" = 0' level="easy">
      <P>Решите уравнение:</P>
      <SubProblem label="Образец 1">
        <ProblemDescription>
          <BlockMath>2x^2 - 18 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-3, 3]} />
        <ProblemHint>
          Изолируйте <M>x^2</M> в левой части уравнения. Затем воспользуйтесь пониманием того, что такое квадратный
          корень.
        </ProblemHint>
        <ProblemAnswer>
          <M>x_1 = -3, \quad x_2 = 3</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Изолируем <M>x^2</M>. Для этого сначала добавим <M>18</M> к обеим частям уравнения, а затем разделим обе
            части на <M>2</M>:
          </P>
          <BlockMath>{math`
            2x^2 = 18 \\
            x^2 = 9
          `}</BlockMath>
          <P>
            Теперь включаем мозги. Какое-то неизвестное число <M>x</M> возвели в квадрат, то есть умножили само на себя,
            и получили <M>9</M>. Что же это за число? Конечно же, <M>3</M> и <M>-3</M>, ведь оба этих числа при
            умножении сами на себя дадут <M>9</M>!
          </P>
          <P>
            Вот мы и получили два корня: <M>x_1 = 3</M> и <M>x_2 = -3</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem label="Образец 2">
        <ProblemDescription>
          <BlockMath>{math`5=-\frac{1}{20}x^2`}</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemHint>
          Чтобы оставить <M>x^2</M> в одиночестве в правой части, умножим обе части уравнения на <M>-20</M>.
        </ProblemHint>
        <ProblemHint>Существуют ли числа, которые при умножении сами на себя дают отрицательное число?</ProblemHint>
        <ProblemAnswer>
          <P>Это уравнение не имеет решений.</P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Чтобы оставить <M>x^2</M> в одиночестве в правой части, умножим обе части уравнения на <M>-20</M>:
          </P>
          <BlockMath>{math`
            \brand{-20} \cdot 5 = -\frac{1}{20}x^2 \cdot \brand{-20} \\
            -100 = \cancel{-} \ \frac{\cancel{20}}{\cancel{20}} x^2 \\
            -100 = x^2
          `}</BlockMath>
          <P>
            Какое-то неизвестное число <M>x</M> умножили само на себя, и получилось <M>-100</M>. Но такого числа не
            существует! Ведь любое число при умножении само на себя даст положительный результат. Значит, уравнение не
            имеет решений!
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2}{4} - 9 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-6, 6]} />
        <ProblemHint>
          Умножьте обе части уравнения на <M>4</M>, чтобы избавиться от дроби. Затем изолируйте <M>x^2</M> и извлеките
          квадратный корень.
        </ProblemHint>
        <ProblemAnswer>
          <M>x_1 = -6, \quad x_2 = 6</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            С дробями работать неудобно. Чтобы от неё избавиться, умножим обе части уравнения на <M>4</M>:
          </P>
          <BlockMath>{math`
            \brand{4} \cdot \left( \frac{x^2}{4} - 9 \right) = 0 \cdot \brand{4} \\
            \cancel{4} \cdot \frac{x^2}{\cancel{4}} - 4 \cdot 9 = 0 \\
            x^2 - 36 = 0
          `}</BlockMath>
          <P>
            Теперь прибавляем <M>36</M> к обеим частям уравнения, чтобы изолировать <M>x^2</M>:
          </P>
          <BlockMath>{math`
            x^2 = 36
          `}</BlockMath>
          <P>
            Какое число при умножении само на себя даст <M>36</M>? Конечно же, это числа <M>6</M> и <M>-6</M>!
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`0 = - 3x^2 - 12`}</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemAnswer>
          <M>x_1 = -2, \quad x_2 = 2</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Умножим обе части уравнения на <M>-1</M>, чтобы избавиться от минусов:
          </P>
          <BlockMath>{math`0 = 3x^2 + 12`}</BlockMath>
          <P>
            Теперь разделим обе части уравнения на <M>3</M>, чтобы упростить числа:
          </P>
          <BlockMath>{math`
            \frac{0}{\brand{3}} = \frac{3x^2 + 12}{\brand{3}} \\
            0 = \frac{\cancel{3}x^2}{\cancel{3}} + \frac{12}{3} \\
            0 = x^2 + 4
          `}</BlockMath>
          <P>
            Вычитаем <M>4</M> из обеих частей уравнения:
          </P>
          <BlockMath>{math`-4 = x^2`}</BlockMath>
          <P>
            Какое число при умножении само на себя даст <M>-4</M>? Такого числа не существует, значит, уравнение не
            имеет решений!
          </P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 = 3`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[`-sqrt(3)`, `sqrt(3)`]} />
        <ProblemHint>Не всегда ответ получается красивым...</ProblemHint>
        <ProblemAnswer>
          <M>{math`x_1 = -\sqrt{3}, \quad x_2 = \sqrt{3}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Какое число при умножении само на себя даст <M>3</M>? Целого числа такого не существует. Но ведь есть и
            иррациональные числа! Числа <M>\sqrt{3}</M> и <M>-\sqrt{3}</M> по определению квадратного корня и являются
            числами, которые при умножении сами на себя дают <M>3</M>!
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Statement $={uniques.b0Roots} title='Корни квадратного уравнения при "B" = 0'>
      <StatementMain>
        <P>
          <B>Любое</B> неполное квадратное уравнение с нулевым коэффициентом <M>B</M> <B>возможно</B> (если берется
          корень) имеет два корня, которые можно найти по формулам:
        </P>
        <Diagram>{math`
          flowchart LR
            b0["$$ Ax^2 + C = 0 $$"] --> roots["$$ x_{1,2} = \pm \sqrt{-\frac{C}{A}} $$"]
            class roots fill
        `}</Diagram>
      </StatementMain>
      <StatementProof>
        <P>
          Изолируем <M>x^2</M> в левой части уравнения. Для этого сначала вычитаем <M>C</M> из обеих частей уравнения, а
          затем делим обе части на <M>A</M>:
        </P>
        <BlockMath>{math`
          Ax^2 + C = 0 \\
          Ax^2 = -C \\
          x^2 = -\frac{C}{A}
        `}</BlockMath>
        <P>
          Какое-то неизвестное число <M>x</M> при умножении само на себя дало некую вот эту фиговину справа. Если из неё
          можно извлечь квадратный корень, то получится два корня (одинаковые по модулю, но разных по знаку):
        </P>
        <BlockMath>{math`
          x = \pm \sqrt{-\frac{C}{A}}
        `}</BlockMath>
        <P>Если же извлечь квадратный корень нельзя, то и решений у этого уравнения нет.</P>
        <QED />
      </StatementProof>
    </Statement>

    <P>Теперь можно использовать выведенную общую формулу и моментально считать корни:</P>

    <BlockMath>{math`
      x^2 - 16 = 0 \\ x_{1,2} = \pm \sqrt{-\frac{-16}{1}} \\ x_{1,2} = \pm \sqrt{16} \\ \boxed{x_{1,2} = \pm 4} >>{big}
      3x^2 + 12 = 0 \\ x_{1,2} = \pm \sqrt{-\frac{12}{3}} \\ x_{1,2} = \pm \sqrt{-4} \\ \boxed{\text{(нет решений)}} >>{big}
      5x^2 - 9 = 0 \\ x_{1,2} = \pm \sqrt{-\frac{-9}{5}} \\ x_{1,2} = \pm \sqrt{\frac{9}{5}} \\ \boxed{x_{1,2} = \pm \frac{3}{\sqrt{5}}}
    `}</BlockMath>

    <H1>Как применять?</H1>

    <P>
      Мы разобрались, как решать все виды неполных квадратных уравнений. Никаких хитрых трюков или громоздких
      преобразований. Было довольно просто, правда? Более того, мы даже вывели общие формулы корней для каждого вида
      неполных квадратных уравнений.
    </P>

    <Important $={uniques.doNotMemorize} title="Не зубрите общие формулы!">
      <P>
        Может показаться, что раз мы вывели общие формулы, то их нужно обязательно запомнить. Это не так. Не учите их.
        Большинство людей их даже не помнит. Самое важное -- <B accent>уметь быстро заметить, что уравнение неполное</B>{' '}
        (состоит из одного или двух слагаемых), а значит, решается быстро и просто!
      </P>
    </Important>

    <P>Ах, если бы так просто можно было решать и квадратные уравнения в общем виде! Но там всё несколько сложнее…</P>
  </>
));
