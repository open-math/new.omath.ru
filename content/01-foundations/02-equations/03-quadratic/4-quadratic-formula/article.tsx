// #region Links
//

const sameActionRule = $CONTENT.foundations.equations.elementary.article.$sameActionRule;
const linearFormula = $CONTENT.foundations.equations.elementary.practice.$linearRoot;
const zeroProductProperty = $CONTENT.foundations.equations.zeroProductProperty;
const whatIsQuadratic = $CONTENT.foundations.equations.quadratic.whatIsIt.article.$quadraticEquation;
const completingTheSquare = $CONTENT.foundations.equations.quadratic.completingTheSquare;
const compensate = $CONTENT.foundations.equations.quadratic.completingTheSquare.article.$compensate;

//
// #endregion

export default defineProse({
  uniques: {
    generalFormulas: Important,
    examples: Problems,
    discriminant: Term,
    formula: Statement,
    biquadratic: Term,
    biquadraticExamples: Problems,
    _squareRootExample: Details,
  },
})(({ uniques }) => (
  <>
    <P>
      Каждый раз при решении квадратного уравнения решать мини-головоломку с{' '}
      <Dep on={completingTheSquare}>выделением полного квадрата</Dep> неудобно. Хорошо бы иметь общий и универсальный
      алгоритм действий, который подходит вообще для любого квадратного уравнения. Вот бы просто формулу, в которую
      числа подставь и получишь ответ.
    </P>

    <P>
      Оказывается, такая формула существует! Вывести её не очень сложно, хотя для большинства школьников этот процесс и
      его понимание вызывают существенные трудности. Для этого надо просто выделить полный квадрат{' '}
      <B>не в конкретном</B> уравнении с заранее известными числовыми коэффициентами, а в квадратном уравнении{' '}
      <Dep on={whatIsQuadratic}>в общем виде</Dep>, с буквенными коэффициентами вместо чисел!
    </P>

    <P>Но начнём мы издалека, чтобы вы поняли, как и зачем подобные формулы вообще выводятся.</P>

    <H1>"Общие формулы корней"</H1>

    <P>
      Что вообще значит "общая формула корней уравнения" и как их выводить? Давайте разберёмся на примере вот такого{' '}
      <B>общего</B> (то есть в составе которого есть какие-то буквы вместо чисел) уравнения:
    </P>

    <BlockMath>{math`2x + A = 0`}</BlockMath>

    <P>
      Нам нужно решить это уравнение, но ведь и под буквой <M>A</M> может скрываться любое число! Что же делать?! Да
      просто относиться к <M>A</M> как к "числу", а значит и делать с ним можно то же самое, что и с числами. В данном
      случае по <Dep on={sameActionRule}>правилу одинакового действия</Dep> мы можем вычесть <M>A</M> из обеих частей
      уравнения, чтобы избавиться от него в левой части и получить общую формулу для решения уравнения:
    </P>

    <BlockMath>{math`
      2x + \cancel{A} - \cancel{\brand{A}} = 0 - \brand{A} \\
      2x = -A
    `}</BlockMath>

    <P>
      Теперь по правилу одинакового действия делим обе части уравнения на <M>2</M>, чтобы <M>x</M> в левой части остался
      в одиночестве:
    </P>

    <BlockMath>{math`
      \frac{\cancel{2}x}{\cancel{\brand{2}}} = \frac{-A}{\brand{2}} \\
      \boxed{x = -\frac{A}{2}}
    `}</BlockMath>

    <P>
      Мы получили <B>общую</B> формулу корней для всех возможных уравнений вида <M>2x + A = 0</M>! И неважно, какое
      число скрывается под <M>A</M>, мы всегда можем его подставить в эту формулу и получить решение уравнения!
    </P>

    <BlockMath>{math`
      A = 3 \\
      2x + 3 = 0 \\
      x = \boxed{-\frac{3}{2}}
      >>
      A = 0 \\
      2x + 0 = 0 \\
      x = -\frac{0}{2} = \boxed{0}
      >>
      A = -8 \\
      2x - 8 = 0 \\
      x = -\frac{-8}{2} = \boxed{4}
    `}</BlockMath>

    <Important
      $={uniques.generalFormulas}
      title="Общие формулы корней"
      snippet={{
        seo: 'Общие формулы корней уравнений',
        key: true,
        search: ['Общая формула корней уравнения', 'Общая формула решений уравнения'],
        description: 'Общие формулы корней позволяют очень быстро решать сложные виды уравнений.',
      }}
    >
      Общие формулы решений (корней) уравнений позволяют вообще <B accent>не решать</B> уравнение, а просто подставить
      нужные числа вместо коэффициентов и <B accent>получить корни напрямую</B>! Такие формулы очень полезны в случае
      сложных уравнений, таких как <B accent>квадратные</B>, для обычного решения которых требуется выполнить целый
      набор действий.
    </Important>

    <P>
      Точно так же выводилась и <Ref to={linearFormula}>общая формула линейных уравнений</Ref>. А вот ещё несколько
      примеров с разным количеством используемых коэффициентов:
    </P>

    <Problems title="Примеры вывода общих формул" level="example">
      <P>Выведите общую формулу решения уравнения.</P>
      <SubProblem label="1 коэффициент">
        <ProblemDescription>
          <BlockMath>{math`\frac{T}{x} = 8`}</BlockMath>
          <P>
            Найдите решения уравнений при значениях <M>T = 1, 8, 3</M>.
          </P>
        </ProblemDescription>
        <ProblemCheck
          answers={{
            ordered: true,
            values: [[0.125, '1/8'], 1, [0.375, '3/8']],
          }}
        />
        <ProblemAnswer>
          <BlockMath>{math`x = \frac{T}{8}`}</BlockMath>
          <P>
            Подставляем значения <M>T</M> и получаем решения уравнения:
          </P>
          <BlockMath>{math`
            T = 1 \Rightarrow \boxed{x = \frac{1}{8}} >>{big}
            T = 8 \Rightarrow \boxed{x = 1} >>{big}
            T = 3 \Rightarrow \boxed{x = \frac{3}{8}}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Нам нужно "вытащить" <M>x</M> из знаменателя. Для этого по правилу одинакового действия умножим обе части
            уравнения на <M>x</M>:
          </P>
          <BlockMath>{math`
            \cancel{x} \cdot \frac{T}{\cancel{x}}  = 8 \cdot \cancel{x} \\
            T = 8x
          `}</BlockMath>
          <P>
            Теперь делим обе части на <M>8</M>, чтобы изолировать <M>x</M>:
          </P>
          <BlockMath>{math`
            \frac{T}{\cancel{8}} = \frac{8x}{\cancel{8}} \\
            x = \frac{T}{8}
          `}</BlockMath>
          <P>
            Общую формулу вывели. Теперь подставляем значения <M>T</M> из условия и моментально получаем решения
            уравнений:
          </P>
          <BlockMath>{math`
            T = 1 \Rightarrow \boxed{x = \frac{1}{8}} >>{big}
            T = 8 \Rightarrow \boxed{x = 1} >>{big}
            T = 3 \Rightarrow \boxed{x = \frac{3}{8}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem label="2 коэффициента">
        <ProblemDescription>
          <BlockMath>{math`
            \left(\frac{x}{A} + 3\right)(x - C) = 0
          `}</BlockMath>
          <P>
            Найдите решения уравнений при значениях <M>(A, C) = (1, 2); (-5, 3); (-3, -10)</M>.
          </P>
        </ProblemDescription>
        <MathValueCheck label="Корни при (A, C) = (1, 2)" answers={[-3, 2]} />
        <MathValueCheck label="Корни при (A, C) = (-5, 3)" answers={[15, 3]} />
        <MathValueCheck label="Корни при (A, C) = (-3, -10)" answers={[9, -10]} />
        <ProblemHint>
          Изучите решения на странице <Dep on={zeroProductProperty}>Нулевые множители</Dep>.
        </ProblemHint>
        <ProblemAnswer>
          <P>Общие формулы решений:</P>
          <BlockMath>{math`
            x_1 = -3A >> x_2 = C
          `}</BlockMath>
          <P>
            Корни при заданных коэффициентах <M>A</M> и <M>C</M>:
          </P>
          <BlockMath>{math`
            (A, C) = (1, 2) \Rightarrow \boxed{x_1 = -3, \ x_2 = 2} \\
            (A, C) = (-5, 3) \Rightarrow \boxed{x_1 = 15, \ x_2 = 3} \\
            (A, C) = (-3, -10) \Rightarrow \boxed{x_1 = 9, \ x_2 = -10}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Имеем типичный вид уравнения, состоящего из перемножающихся скобок, равных <M>0</M>. Такие уравнения всегда
            можно разбить на более мелкие подуравнения и решать их по отдельности. В нашем случае это будут уравнения:
          </P>
          <BlockMath>{math`
            \frac{x_1}{A} + 3 = 0 \\
            \frac{x_1}{A} = -3 \\
            \boxed{x_1 = -3A}
            >>{big}
            x_2 - C = 0 \\
            \boxed{x_2 = C}
          `}</BlockMath>
          <P>
            Теперь подставляем значения <M>A</M> и <M>C</M> из условия и получаем решения уравнений:
          </P>
          <BlockMath>{math`
            (A, C) = (1, 2) \Rightarrow \boxed{x_1 = -3, \ x_2 = 2} \\
            (A, C) = (-5, 3) \Rightarrow \boxed{x_1 = 15, \ x_2 = 3} \\
            (A, C) = (-3, -10) \Rightarrow \boxed{x_1 = 9, \ x_2 = -10}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem label="3 коэффициента">
        <ProblemDescription>
          <BlockMath>{math`
            Ax + Bx + C = 0
          `}</BlockMath>
          <P>
            Найдите решения уравнений при значениях <M>(A, B, C) = (1, 2, 3); (-5, 0, 1)</M>.
          </P>
        </ProblemDescription>
        <ProblemCheck
          answers={{
            ordered: true,
            values: [-1, [0.2, '1/5']],
          }}
        />
        <ProblemHint>
          Вынесите <M>x</M> за скобки.
        </ProblemHint>
        <ProblemAnswer>
          <P>Общая формула решения:</P>
          <BlockMath>{math`x = -\frac{C}{A + B}`}</BlockMath>
          <P>
            Корни при заданных коэффициентах <M>A</M>, <M>B</M> и <M>C</M>:
          </P>
          <BlockMath>{math`
            (A, B, C) = (1, 2, 3) \Rightarrow \boxed{x = -\frac{3}{1 + 2} = -1} \\
            (A, B, C) = (-5, 0, 1) \Rightarrow \boxed{x = -\frac{1}{-5 + 0} = \frac{1}{5}}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Выносим общий множитель <M>x</M> за скобки:
          </P>
          <BlockMath>x(A + B) + C = 0</BlockMath>
          <P>
            По правилу одинакового действия вычитаем <M>C</M> из обеих частей уравнения:
          </P>
          <BlockMath>x(A + B) = -C</BlockMath>
          <P>
            Теперь делим обе части на <M>A + B</M>, чтобы изолировать <M>x</M>:
          </P>
          <BlockMath>{math`x = -\frac{C}{A + B}`}</BlockMath>
          <P>
            Общая формула готова. Теперь можно подставлять конкретные значения коэффициентов и находить корни уравнения:
          </P>
          <BlockMath>{math`
            (A, B, C) = (1, 2, 3) \Rightarrow x = -\frac{3}{1 + 2} = \boxed{-1} \\
            (A, B, C) = (-5, 0, 1) \Rightarrow x = -\frac{1}{-5 + 0} = \boxed{\frac{1}{5}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <P>
      Теперь, когда вы поняли основную суть и пользу подобных "общих" формул, давайте приступать к выводу общей и не
      зависящей от конкретных значений коэффициентов формулы корней любого квадратного уравнения!
    </P>

    <H1>Выделение полного квадрата</H1>

    <P>Всё начинается с приведения квадратного уравнения к общему виду или стандартной форме:</P>

    <BlockMath>Ax^2 + Bx + C = 0, \quad A \neq 0</BlockMath>

    <P>
      Выделить полный квадрат с имеющимся коэффициентом <M>A</M> <B>невозможно</B>! Нам неизвестен знак числа, которое
      под этим <M>A</M> прячется (вдруг это число <M>-10</M>?), а значит и взять квадратный корень из этого коэффициента
      не получится! Поэтому давайте от него избавимся, по <Dep on={sameActionRule}>правилу одинакового действия</Dep>{' '}
      разделив обе части уравнения на <M>A</M>. Поделить мы можем, потому что по определению <M>A \neq 0</M>, иначе это
      было бы уже не квадратное уравнение:
    </P>

    <BlockMath>{math`
      \frac{Ax^2 + Bx + C}{A} = \frac{0}{A} \\
      \frac{\cancel{A}x^2}{\cancel{A}} + \frac{B}{A}x + \frac{C}{A} = 0 \\
      x^2 + \frac{B}{A}x + \frac{C}{A} = 0
    `}</BlockMath>

    <P>
      По правилу одинакового действия вычитаем из обеих частей "свободный член", то есть тот, у которого нет рядом икса.
      Это просто балласт, который нам будет только мешать слева выделять полный квадрат:
    </P>

    <BlockMath>{math`
      x^2 + \frac{B}{A}x + \cancel{\frac{C}{A}} - \cancel{\brand{\frac{C}{A}}} = 0 - \brand{\frac{C}{A}} \\
      x^2 + \frac{B}{A}x = -\frac{C}{A}
    `}</BlockMath>

    <P>
      Слева у нас остаются два слагаемых со знаком <M>+</M>. Значит, можно запаковать в квадрат суммы{' '}
      <M>a^2 + 2ab + b^2 = (a + b)^2</M>. Но данных для выделения полного квадрата нам не хватает! Нет двойки во втором
      слагаемом и нет третьего слагаемого, играющего роль <M>b^2</M>. Придётся эти данные добавлять и сразу же{' '}
      <Dep on={compensate}>компенсировать</Dep>, чтобы не разрушить равенство. Начнём с добавления и компенсации двойки:
    </P>

    <BlockMath>{math`
      x^2 + \yellow{2} \cdot x \frac{B}{A} \cdot \yellow{\frac{1}{2}} = -\frac{C}{A} \\
      x^2 + 2 \cdot x \cdot \frac{B}{2A} = -\frac{C}{A}
    `}</BlockMath>

    <P>
      Дробь <M>{math`\frac{B}{2A}`}</M> естественным образом становится <M>b</M>, потому что роль <M>a</M> уже играет{' '}
      <M>x</M>. Для выделения полного квадрата нам не хватает только добавить и компенсировать <M>b^2</M>:
    </P>

    <BlockMath>{math`
      \underbrace{x^2 + 2 \cdot x \cdot \frac{B}{2A} + \yellow{\left( \frac{B}{2A} \right)^2}}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{\left( \frac{B}{2A} \right)^2} = -\frac{C}{A} \\
      \left( x + \frac{B}{2A} \right)^2 - \left( \frac{B}{2A} \right)^2 = -\frac{C}{A}
    `}</BlockMath>

    <P>
      Оставляем полный квадрат в левой части и избавляемся от образовавшегося "хвоста", чтобы он оказался в правой части
      уравнения:
    </P>

    <BlockMath>{math`
      \left( x + \frac{B}{2A} \right)^2 - \cancel{\left( \frac{B}{2A} \right)^2} + \cancel{\brand{\left( \frac{B}{2A} \right)^2}} = -\frac{C}{A} + \brand{\left( \frac{B}{2A} \right)^2} \\
      \left( x + \frac{B}{2A} \right)^2 = -\frac{C}{A} + \left( \frac{B}{2A} \right)^2 \\
      \left( x + \frac{B}{2A} \right)^2 = \frac{B^2 - 4AC}{4A^2}
    `}</BlockMath>

    <P>Мы успешно выделили полный квадрат в квадратном уравнении общего вида! Самое сложное уже позади!</P>

    <H1>Дискриминант</H1>

    <P>Внимательно посмотрите на наш текущий результат:</P>

    <BlockMath>{math`\left( x + \frac{B}{2A} \right)^2 = \frac{B^2 - 4AC}{4A^2}`}</BlockMath>

    <P>
      Вся левая часть находится в квадрате, то есть вся она <B>100% неотрицательное число</B>. Раз вся левая часть
      уравнения неотрицательная, то и правая <B>обязана быть неотрицательной</B>, иначе решений никаких просто не будет
      и получится ложное равенство "неотрицательное = отрицательное"!
    </P>

    <BlockMath>{math`\underbrace{\left( x + \frac{B}{2A} \right)^2}_{\small \green{\geq 0}} = \underbrace{\left(\frac{B^2 - 4AC}{4A^2}\right)}_{\small \green{\geq 0}}`}</BlockMath>

    <P>
      Справа в знаменателе <M>4</M> умножается на число в квадрате, то есть весь знаменатель тоже{' '}
      <B>100% положительное число</B> (нулём быть не может, потому что на него нельзя делить). Вот так и получается, что
      единственное выражение, от которого зависит весь знак правой части, а значит и наличие/отсутствие решений
      уравнения -- это числитель <M>B^2 - 4AC</M>!
    </P>

    <BlockMath>{math`
      \underbrace{\green{\left( x + \frac{B}{2A} \right)^2}}_{\small \geq 0} = \frac{\overbrace{\red{B^2 - 4AC}}^{\small \text{Какой знак?}}}{\underbrace{\green{4A^2}}_{\small > 0}} \\
    `}</BlockMath>

    <P>
      Этот числитель играет <B>определяющее</B> значение при решении квадратного уравнения. Поэтому его назвали
      дискриминантом, "различителем". Вот при дискриминации в зависимости от признака (цвета кожи, языка) происходит
      ущемление прав, а дискриминант в зависимости от своего знака говорит о том, будут ли корни у квадратного уравнения
      или нет.
    </P>

    <Term
      $={uniques.discriminant}
      title="Дискриминант"
      snippet={{
        seo: 'Дискриминант квадратного уравнения',
        key: true,
        search: true,
        description: `
          Особое число, высчитываемое через коэффициенты квадратного уравнения, которое позволяет понять, сколько корней имеет это уравнение.
        `,
      }}
    >
      <P>
        Число <M>D</M>, которое высчитывается из коэффициентов <Dep on={whatIsQuadratic}>квадратного уравнения</Dep> в
        общем виде <M>Ax^2 + Bx + C = 0</M> по формуле:
      </P>
      <BlockMath>{math`D = B^2 - 4AC`}</BlockMath>
      <P>
        По дискриминанту можно без решения уравнения целиком заранее понять, есть ли у него корни или нет. Если
        дискриминант <B accent>отрицательный</B> <M>{math`D < 0`}</M>, значит, корней уравнение <B accent>не имеет</B>.
      </P>

      <P>
        Дискриминант напрямую используется в <Ref to={uniques.formula}>формуле корней</Ref> квадратного уравнения.
      </P>
    </Term>

    <H1>Корни квадратного уравнения</H1>

    <P>
      Продолжаем вывод общей формулы корней квадратного уравнения. Условимся, что дискриминант <M>D</M> неотрицательный
      (ноль или положительный), потому что иначе корней точно нет. Заменяем числитель в нашем уравнении на принятое
      обозначение дискриминанта:
    </P>

    <BlockMath>{math`
      \left( x + \frac{B}{2A} \right)^2 = \frac{D}{4A^2}
    `}</BlockMath>

    <P>
      Раз нам точно известно, что слева и справа от знака равенства неотрицательные числа, мы можем{' '}
      <Ref to={uniques._squareRootExample}>извлечь квадратный корень</Ref> из обеих частей уравнения. Можно сказать и
      иначе, если "что-то" в квадрате слева равно правой дроби, то исходное выражение без квадрата равно корню из правой
      части (со знаком плюса или минуса), то есть:
    </P>

    <Details $={uniques._squareRootExample} title="Пояснения к взятию квадратного корня">
      <P>
        Рассмотрим пример с конкретными числами. Какое-то число <M>x</M> при умножении само на себя даёт <M>16</M>. Чему
        равно это число <M>x</M>?
      </P>
      <BlockMath>{math`x^2 = 16`}</BlockMath>
      <P>
        Это число равно корню из <M>16</M>, либо со знаком плюса, либо со знаком минуса:
      </P>
      <BlockMath>{math`x = \pm \sqrt{16} = \pm 4`}</BlockMath>
      <Hr />
      <P>
        Теперь переходим к нашему случаю. Мы можем обозначить скобку слева за <M>T</M>, а правую часть за <M>P</M>:
      </P>
      <BlockMath>{math`T^2 = P`}</BlockMath>
      <P>
        Какое-то число <M>T</M> при умножении само на себя даёт <M>P</M>. Что это за число? Ну конечно, это корень из{' '}
        <M>P</M>, либо со знаком плюса, либо со знаком минуса!
      </P>
      <BlockMath>{math`T = \pm \sqrt{P}`}</BlockMath>
      <P>
        Подставляем вместо <M>T</M> и <M>P</M> наши выражения:
      </P>
      <BlockMath>{math`
        x + \frac{B}{2A} = \pm \sqrt{\frac{D}{4A^2}}
      `}</BlockMath>
    </Details>

    <BlockMath>{math`
      x + \frac{B}{2A} = \pm \sqrt{\frac{D}{4A^2}} \\
      x + \frac{B}{2A} = \pm \frac{\sqrt{D}}{2A}
    `}</BlockMath>

    <P>
      Мы почти у цели. Осталось избавиться от дроби рядом с <M>x</M>:
    </P>

    <BlockMath>{math`x = -\frac{B}{2A} \pm \frac{\sqrt{D}}{2A}`}</BlockMath>

    <P>Приводим правую часть к общему знаменателю:</P>

    <BlockMath>{math`\boxed{x = \frac{-B \pm \sqrt{D}}{2A}}`}</BlockMath>

    <P>
      Ура! Можно открывать шампанское! Мы вывели общую формулу корней любого квадратного уравнения. Достаточно
      подставить конкретные числа вместо коэффициентов и сразу получить корни. Обратите внимание, что при нулевом
      дискриминанте корень лишь один, потому что он "обнуляет" вариативную часть формулы с плюсом или минусом:
    </P>

    <BlockMath>{math`x = \frac{-B \pm \sqrt{0}}{2A} = \boxed{\frac{-B}{2A}}`}</BlockMath>

    <Statement
      $={uniques.formula}
      title="Формула корней квадратного уравнения"
      snippet={{
        search: true,
        key: 'Корни квадратного уравнения',
        description: `
          Общая формула, которая позволяет найти корни любого квадратного уравнения, если подставить в неё конкретные числа вместо буквенных коэффициентов.
        `,
      }}
    >
      <P>
        Для любого <Dep on={whatIsQuadratic}>квадратного уравнения</Dep> в общем виде:
      </P>
      <BlockMath>{math`Ax^2 + Bx + C = 0, \quad A \neq 0`}</BlockMath>
      <P>
        Можно найти особое число, <Dep on={uniques.discriminant}>дискриминант</Dep> <M>D</M>, по формуле:
      </P>
      <BlockMath>{math`D = B^2 - 4AC`}</BlockMath>
      <P>Дискриминант показывает, сколько корней имеет квадратное уравнение:</P>
      <List unordered>
        <Li>
          <M>{math`D < 0`}</M> -- квадратное уравнение <B accent>не имеет корней</B>
        </Li>
        <Li>
          <M>{math`D = 0`}</M> -- квадратное уравнение <B accent>имеет один корень</B>
        </Li>
        <Li>
          <M>{math`D > 0`}</M> -- квадратное уравнение <B accent>имеет два различных корня</B>
        </Li>
      </List>
      <P>Корни квадратного уравнения находятся по формуле:</P>
      <BlockMath>{math`\boxed{x = \frac{-B \pm \sqrt{D}}{2A}}`}</BlockMath>
    </Statement>

    <Reference to={$CONTENT.foundations.equations.quadratic.quadraticFormula.practice.$sridharasMethod}>
      Мы вывели общую формулу "классическим" способом. Но он не единственный и даже не самый простой. Есть и много
      других способов, с некоторыми из которых вы встретитесь в Практике...
    </Reference>

    <P>
      Обязательно внимательно разберите каждый шаг вывода формул! Повторите эти шаги самостоятельно! Вывод решений
      квадратного уравнения -- это довольно редкий случай в базовой математике, где надо и преобразовывать выражения, и
      анализировать полученные результаты. Великолепная возможность прокачать свои мозги!
    </P>

    <P>
      Квадратные уравнения в базовой и высшей математике встречаются сплошь и рядом. Поэтому после того как вы
      убедились, что осознали и поняли каждый шаг вывода, формулы дискриминанта и корней <B>надо запомнить наизусть</B>.
      Хотя бы ради того, чтобы каждый раз не тратить целый лист бумаги на их вывод 😂
    </P>

    <P>
      Но это всё мелочи. У нас на руках появился универсальный алгоритм решения абсолютно любого квадратного уравнения!
      Не надо больше ничего выделять, ничего подбирать и придумывать. Просто подставляй числа в формулы и получай ответ.
      Пробуем:
    </P>

    <Problems $={uniques.examples} title="Примеры решения квадратных уравнений" level="example">
      <P>
        Решите квадратное уравнение с помощью <Dep on={uniques.formula}>общей формулы корней</Dep>.
      </P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 2x - 8 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[4, -2]} />
        <ProblemAnswer>
          <BlockMath>{math`\boxed{x_1 = 4} >> \boxed{x_2 = -2}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 1, >> B = -2, >> C = -8`}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`D = B^2 - 4AC = (-2)^2 - 4 \cdot 1 \cdot (-8) = 4 + 32 = 36`}</BlockMath>
          <P>Дискриминант положительный, значит у уравнения точно будет два корня. Находим их по общей формуле:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-2) \pm \sqrt{36}}{2 \cdot 1} = \frac{2 \pm 6}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{2 + 6}{2} = 4 \\ \boxed{x_1 = 4} >>
            x_2 = \frac{2 - 6}{2} = -2 \\ \boxed{x_2 = -2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>4y^2 + 20y + 30 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemAnswer>Уравнение не имеет корней.</ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 4, >> B = 20, >> C = 30`}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`D = B^2 - 4AC = 20^2 - 4 \cdot 4 \cdot 30 = 400 - 480 = -80`}</BlockMath>
          <P>Дискриминант отрицательный, значит у уравнения нет корней!</P>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>6z = 9z^2</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[0, '2/3']} />
        <ProblemAnswer>
          <BlockMath>{math`\boxed{z_1 = 0} >> \boxed{z_2 = \frac{2}{3}}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Приводим уравнение к общему виду. Для этого сгруппируем все данные в одной части уравнения, например правой.
            Из обеих частей вычтем <M>6z</M>.
          </P>
          <BlockMath>{math`0 = 9z^2 - 6z`}</BlockMath>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 9, >> B = -6, >> C = 0`}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`D = B^2 - 4AC = (-6)^2 - 4 \cdot 9 \cdot 0 = 36`}</BlockMath>
          <P>Дискриминант положительный, значит у уравнения точно будет два корня. Находим их по общей формуле:</P>
          <BlockMath>{math`
            z_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-6) \pm \sqrt{36}}{2 \cdot 9} = \frac{6 \pm 6}{18}
          `}</BlockMath>
          <BlockMath>{math`
            z_1 = \frac{6 + 6}{18} = \frac{12}{18} = \frac{2}{3} \\ \boxed{z_1 = \frac{2}{3}} >>
            z_2 = \frac{6 - 6}{18} = 0 \\ \boxed{z_2 = 0}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>-t^2 + 10t - 9 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[1, 9]} />
        <ProblemAnswer>
          <BlockMath>{math`\boxed{t_1 = 1} >> \boxed{t_2 = 9}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = -1, >> B = 10, >> C = -9`}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`D = B^2 - 4AC = 10^2 - 4 \cdot (-1) \cdot (-9) = 100 - 36 = 64`}</BlockMath>
          <P>Дискриминант положительный, значит у уравнения точно будет два корня. Находим их по общей формуле:</P>
          <BlockMath>{math`
            t_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-10 \pm \sqrt{64}}{2 \cdot (-1)} = \frac{-10 \pm 8}{-2}
          `}</BlockMath>
          <BlockMath>{math`
            t_1 = \frac{-10 + 8}{-2} = 1 \\ \boxed{t_1 = 1} >>
            t_2 = \frac{-10 - 8}{-2} = 9 \\ \boxed{t_2 = 9}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>16v^2 = 100</BlockMath>
        </ProblemDescription>
        <RootsCheck
          has
          roots={[
            [-2.5, '-5/2'],
            [2.5, '5/2'],
          ]}
        />
        <ProblemAnswer>
          <BlockMath>{math`\boxed{v_1 = -\frac{5}{2}} >> \boxed{v_2 = \frac{5}{2}}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Приводим уравнение к общему виду. Для этого сгруппируем все данные в одной части уравнения, например левой.
            Из обеих частей вычтем <M>100</M>.
          </P>
          <BlockMath>{math`16v^2 - 100 = 0`}</BlockMath>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 16, >> B = 0, >> C = -100`}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`D = B^2 - 4AC = 0^2 - 4 \cdot 16 \cdot (-100) = 6400`}</BlockMath>
          <P>Дискриминант положительный, значит у уравнения точно будет два корня. Находим их по общей формуле:</P>
          <BlockMath>{math`
            v_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-0 \pm \sqrt{6400}}{2 \cdot 16} = \frac{\pm 80}{32}
          `}</BlockMath>
          <BlockMath>{math`
            v_1 = \frac{80}{32} = \frac{5}{2} \\ \boxed{v_1 = \frac{5}{2}} >>
            v_2 = \frac{-80}{32} = -\frac{5}{2} \\ \boxed{v_2 = -\frac{5}{2}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>(2k-7)^2 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[[3.5, '7/2']]} />
        <ProblemAnswer>
          <BlockMath>{math`\boxed{k = \frac{7}{2}}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем скобки и приводим подобные слагаемые:</P>
          <BlockMath>{math`
            (2k-7)^2 = 0 \\
            (2k-7)(2k-7) = 0 \\
            4k^2 - 14k - 14k + 49 = 0 \\
            4k^2 - 28k + 49 = 0
          `}</BlockMath>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 4, >> B = -28, >> C = 49`}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`D = B^2 - 4AC = (-28)^2 - 4 \cdot 4 \cdot 49 = 784 - 784 = 0`}</BlockMath>
          <P>Дискриминант нулевой, значит у уравнения будет ровно один корень. Находим его по общей формуле:</P>
          <BlockMath>{math`
            k = \frac{-B}{2A} = \frac{-(-28)}{2 \cdot 4} = \frac{28}{8} = \boxed{\frac{7}{2}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <H1>Высшие степени</H1>

    <P>
      Мы вывели общие формулы корней квадратного уравнения. А если замахнуться покруче? Ведь есть ещё и кубические
      уравнения, где <M>x</M> уже в третьей степени. Их тоже можно похожим образом изучить и научиться решать? Конечно!
      Кубические уравнения можно записать в общем виде:
    </P>

    <BlockMath>{math`Ax^3 + Bx^2 + Cx + D = 0, \quad A \neq 0`}</BlockMath>

    <P>
      У таких уравнений может быть до трёх разных корней! Очень хорошенько повозившись с формулами и преобразованиями,
      можно даже вывести общую формулу корней кубических уравнений, которую называют <B>"формулой Кардано"</B>{' '}
      (Джероламо Кардано). Хотя на самом деле метод придумал математик Никколо Тарталья, который и поделился им с
      Кардано под клятву о молчании. Кардано клятву не сдержал, нарушил обещание и опубликовал формулу под своим именем.
      Скандал был громким. В любом случае, вы точно никогда не захотите что-то с её помощью считать:
    </P>

    <BlockMath>{math`
      x = \sqrt[3]{-\frac{Q}{2} + \sqrt{\left(\frac{Q}{2}\right)^2 + \left(\frac{P}{3}\right)^3}} + \sqrt[3]{-\frac{Q}{2} - \sqrt{\left(\frac{Q}{2}\right)^2 + \left(\frac{P}{3}\right)^3}} - \frac{B}{3A}
    `}</BlockMath>

    <P>
      Уравнения четвёртой степени тоже можно решить в общем виде. Для этого надо следовать определённому алгоритму
      действий, который имеет модное название <B>"метод Феррари"</B> (Лудовико Феррари), который, кстати, был учеником
      Кардано. Приятного в этом процессе ещё меньше, чем в формуле Кардано.
    </P>

    <H2>Биквадратные уравнения</H2>

    <P>
      Разберём особый вид уравнений "высшей" степени, которые можно решить без ужасных и страшных формул! Они
      элементарным образом сводятся к квадратным. Это далеко не единственный вид таких уравнений, но один из самых
      простых и часто встречающихся.
    </P>

    <Term
      $={uniques.biquadratic}
      title="Биквадратное уравнение"
      snippet={{
        key: true,
        seo: 'Что такое биквадратное уравнение?',
        search: true,
        description: `
          Особый вид уравнений четвёртой степени, которые можно решить сведением к квадратному уравнению.
        `,
      }}
    >
      <P>Особый вид уравнений четвёртой степени, которые можно записать в общем виде:</P>
      <BlockMath>Ax^4 + Bx^2 + C = 0, \quad A \neq 0</BlockMath>
      <P>Примеры:</P>
      <BlockMath>{math`
        x^4 + 16x^2 + 55 = 0 >>{big}
        \frac{1}{2}y^2 - \sqrt{3}y^4 = 1 >>{big}
        5 = z(z^3 - 2\sqrt{3}z)
      `}</BlockMath>
      <P>
        Такие уравнения имеют до четырёх корней и очень просто решаются сведением к квадратному уравнению через
        подстановку <M>t = x^2</M>:
      </P>
      <BlockMath>At^2 + Bt + C = 0</BlockMath>
    </Term>

    <P>
      <B>Би</B>квадратным оно называется, потому что "би" означает "два". Как бисексуалы, которым нравятся два пола: и
      мужчины, и женщины. Биквадратное уравнение как-бы <B>дважды квадратное</B>. В квадратном было <M>x^2</M> и{' '}
      <M>x^1</M>, в биквадратном степени переменных удвоились и стали <M>x^4</M> и <M>x^2</M>. Попробуем их порешать!
    </P>

    <Problems
      $={uniques.biquadraticExamples}
      title="Примеры решения биквадратных уравнений"
      level="easy"
      snippet={{
        seo: 'Как решить биквадратное уравнение?',
        description: `
          Пошаговый алгоритм решения биквадратных уравнений на нескольких примерах.
        `,
      }}
    >
      <P>Решите биквадратное уравнение:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>2x^4 - 3x^2 + 1 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[1, -1, '1/sqrt(2)', '-1/sqrt(2)']} />
        <ProblemAnswer>
          <BlockMath>{math`
            \boxed{x_1 = 1} >> \boxed{x_2 = -1} >> \boxed{x_3 = \frac{1}{\sqrt{2}}} >> \boxed{x_4 = -\frac{1}{\sqrt{2}}}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Делаем подстановку <M>t = x^2</M> и получаем квадратное уравнение:
          </P>
          <BlockMath>2t^2 - 3t + 1 = 0</BlockMath>
          <P>Считаем дискриминант и находим корни:</P>
          <BlockMath>{math`D = (-3)^2 - 4 \cdot 2 \cdot 1 = 9 - 8 = 1`}</BlockMath>
          <BlockMath>{math`
            t_1 = \frac{3 + \sqrt{1}}{4} = 1 \\ \boxed{t_1 = 1} >>
            t_2 = \frac{3 - \sqrt{1}}{4} = \frac{1}{2} \\ \boxed{t_2 = \frac{1}{2}}
          `}</BlockMath>
          <P>
            Возвращаемся к переменной <M>x</M> и находим корни исходного биквадратного уравнения:
          </P>
          <BlockMath>{math`
            t_1 = x^2 = 1 \\
            x_{1,2} = \pm \sqrt{1} = \boxed{\pm 1}
            >>
            t_2 = x^2 = \frac{1}{2} \\
            x_{3,4} = \pm \sqrt{\frac{1}{2}} = \boxed{\pm \frac{1}{\sqrt{2}}}
          `}</BlockMath>
          <P>Всего у уравнения четыре корня.</P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>-8 = x(2x^3 + 10x)</BlockMath>
        </ProblemDescription>
        <RootsCheck empty />
        <ProblemAnswer>Уравнение не имеет корней.</ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем скобки и группируем все данные в одной части уравнения, например правой:</P>
          <BlockMath>{math`
            -8 = x(2x^3 + 10x) \\
            -8 = 2x^4 + 10x^2 \\
            0 = 2x^4 + 10x^2 + 8
          `}</BlockMath>
          <P>
            Получили биквадратное уравнение. Делаем подстановку <M>t = x^2</M> и получаем квадратное уравнение:
          </P>
          <BlockMath>0 = 2t^2 + 10t + 8</BlockMath>
          <P>Считаем дискриминант и находим корни:</P>
          <BlockMath>{math`D = 10^2 - 4 \cdot 2 \cdot 8 = 100 - 64 = 36`}</BlockMath>
          <BlockMath>{math`
            t_1 = \frac{-10 + \sqrt{36}}{4} = \frac{-10 + 6}{4} = -1 \\ \boxed{t_1 = -1} >>
            t_2 = \frac{-10 - \sqrt{36}}{4} = \frac{-10 - 6}{4} = -4 \\ \boxed{t_2 = -4}
          `}</BlockMath>
          <P>Выполняем обратную подстановку:</P>
          <BlockMath>{math`
            t_1 = x^2 = -1 >>
            t_2 = x^2 = -4
          `}</BlockMath>
          <P>
            Получаем противоречие! Число в квадрате всегда неотрицательное, а у нас получается, что оно должно быть
            отрицательным. Поэтому исходное уравнение не имеет решений, несмотря на то что уравнение с подстановкой
            имеет два корня. Вот такая забавная ситуация.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>3x^4 + 2x^2 - 1 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['1/sqrt(3)', '-1/sqrt(3)']} />
        <ProblemAnswer>
          <BlockMath>{math`
            \boxed{x_1 = \frac{1}{\sqrt{3}}} >> \boxed{x_2 = -\frac{1}{\sqrt{3}}}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Делаем подстановку <M>t = x^2</M> и получаем квадратное уравнение:
          </P>
          <BlockMath>3t^2 + 2t - 1 = 0</BlockMath>
          <P>Считаем дискриминант и находим корни:</P>
          <BlockMath>{math`D = 2^2 - 4 \cdot 3 \cdot (-1) = 4 + 12 = 16`}</BlockMath>
          <BlockMath>{math`
            t_1 = \frac{-2 + \sqrt{16}}{6} = \frac{1}{3} \\ \boxed{t_1 = \frac{1}{3}} >>
            t_2 = \frac{-2 - \sqrt{16}}{6} = -1 \\ \boxed{t_2 = -1}
          `}</BlockMath>
          <P>
            Как видим, один из корней для <M>t</M> отрицательный, из него квадратный корень взять не получится. Поэтому
            у биквадратного уравнения будет всего два решения!
          </P>
          <BlockMath>{math`
            t_1 = x^2 = \frac{1}{3} \\
            x_{1,2} = \pm \sqrt{\frac{1}{3}} = \boxed{\pm \frac{1}{\sqrt{3}}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Reference to={$CONTENT.foundations.equations.quadratic.quadraticFormula.practice.$quadraticInF}>
      Четвёртая степень далеко не предел. К квадратным уравнениям сводятся уравнения и с гораздо более высокими
      степенями. Они поджидают вас в Практикуме... 👀
    </Reference>

    <H2>Бесконечность не предел?</H2>

    <P>
      Раз всё так хорошо идёт, то можно вообще для любых уравнений любых степеней найти общие формулы корней? Самое
      удивительное, что <B>это не так</B>! Уравнения четвёртой степени являются абсолютным максимумом, для которого
      существуют универсальные методы нахождения корней!
    </P>

    <Important
      title="Неразрешимость уравнений высших степеней"
      snippet={{
        key: 'Пределы общих формул',
        title: 'Пределы общих формул корней',
        description: `
          Для уравнений выше четвёртой степени не существует общих формул корней.
        `,
      }}
    >
      Есть строго доказанная теорема Абеля-Руффини, что для уравнений пятой степени и выше <B accent>не существует</B>{' '}
      общих формул корней. Больше никаких "формул Кардано" и "методов Феррари". Сами корни, конечно, есть, их можно
      искать приблизительно, используя численные методы. Но общих формул "подставь -- получи ответ" не существует!
    </Important>
  </>
));
