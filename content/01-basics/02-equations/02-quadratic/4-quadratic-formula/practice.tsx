import article from './article';

// #region Scripts
//
//
//

import evenA1 from './scripts/even/a1';
import evenGeneral from './scripts/even/general';
import quadraticInteger from './scripts/quadratic/integer';
import quadraticFraction from './scripts/quadratic/fraction';
import quadraticIrrational from './scripts/quadratic/irrational';
import biquadraticInteger from './scripts/biquadratic/integer';
import biquadraticFraction from './scripts/biquadratic/fraction';
import biquadraticIrrational from './scripts/biquadratic/irrational';
import davidGoliath from './scripts/david-goliath';

//
//
// #endregion

// #region Assets
//
//

import palindromial from './assets/palindromial.svg';

//
//
// #endregion

// #region Links
//
//

const zeroFactors = $CONTENT.basics.equations.elementary.practice.$zeroFactors;

//
//
// #endregion

export default defineProse({
  uniques: {
    sridharasMethod: Problem,
    quadraticInF: Problems,
    palindromials: Problems,
  },
})(({ uniques }) => (
  <>
    <Problems
      title="Квадратные уравнения"
      level="easy"
      snippet={{
        seo: 'Задачи на решение квадратных уравнений',
        description: 'Задачи на отработку решения квадратных уравнений по общей формуле корней.',
      }}
    >
      <P>
        Решите квадратное уравнение, используя <Dep on={article.uniques.formula}>общую формулу корней</Dep>:
      </P>
      <SubProblem label="Целые корни" script={quadraticInteger()} />
      <SubProblem label="Дробные корни" script={quadraticFraction()} />
      <SubProblem label="Иррациональные корни" script={quadraticIrrational()} />
    </Problems>

    <Problems
      title="Биквадратные уравнения"
      level="easy"
      snippet={{
        seo: 'Задачи на решение биквадратных уравнений',
        description: 'Задачи на отработку решения биквадратных уравнений через сведение их к квадратным.',
      }}
    >
      <P>
        Решите <Dep on={article.uniques.biquadratic}>биквадратное уравнение</Dep>:
      </P>
      <SubProblem label="Целые корни" script={biquadraticInteger()} />
      <SubProblem label="Дробные корни" script={biquadraticFraction()} />
      <SubProblem label="Иррациональные корни" script={biquadraticIrrational()} />
    </Problems>

    <Problem title="Давид и Голиаф" level="easy" script={davidGoliath()} />

    <Problems
      title="Чётный коэффициент"
      level="medium"
      snippet={{
        seo: 'Квадратное уравнение с чётным коэффициентом',
        key: true,
        description: 'Общая и более простая формула корней квадратного уравнения с чётным коэффициентом B.',
      }}
      method
    >
      <SubProblem label="Общая формула">
        <ProblemDescription>
          Выведите общую формулу корней квадратного уравнения исходя из предположения, что коэффициент <M>B</M> --
          какое-то чётное число. А также отдельную формулу для случая, когда при чётном <M>B</M> ещё и <M>A = 1</M>.
        </ProblemDescription>
        <ProblemHint>
          Представьте коэффициент <M>B</M> как <M>2K</M>.
        </ProblemHint>
        <ProblemHint>
          Подставьте <M>2K</M> вместо <M>B</M> в уже готовой общей формуле или проведите её вывод снова.
        </ProblemHint>
        <ProblemAnswer>
          <P>
            Формула корней для чётного коэффициента <M>B = 2K</M>:
          </P>
          <BlockMath>{math`\boxed{x = \frac{-K \pm \sqrt{K^2 - AC}}{A}}`}</BlockMath>
          <P>
            Если при этом <M>A = 1</M>:
          </P>
          <BlockMath>{math`\boxed{x = -K \pm \sqrt{K^2 - C}}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Раз коэффициент <M>B</M> чётный, значит он нацело делится на два. То есть его можно записать в виде{' '}
            <M>B = 2K</M>, где <M>K</M> -- некоторое целое число. Во всех дальнейших рассуждениях будем использовать эту
            запись вместо <M>B</M>.
          </P>
          <ProblemSection title="Подстановка в общую формулу">
            <P>
              Запишем <Dep on={article.uniques.formula}>общую формулу корней</Dep> квадратного уравнения:
            </P>
            <BlockMath>{math`\boxed{x = \frac{-B \pm \sqrt{D}}{2A}}`}</BlockMath>
            <P>
              Вместо <M>B</M> подставим <M>2K</M> и проведём упрощения:
            </P>
            <BlockMath>{math`
              x = \frac{-2K \pm \sqrt{(2K)^2 - 4AC}}{2A} \\
              x = \frac{-2K \pm \sqrt{4K^2 - 4AC}}{2A} \\
              x = \frac{-2K \pm \sqrt{4(K^2 - AC)}}{2A} \\
              x = \frac{-2K \pm \sqrt{4}\sqrt{K^2 - AC}}{2A} \\
              x = \frac{-2K \pm 2\sqrt{K^2 - AC}}{2A} \\
              x = \frac{\cancel{2}(-K \pm \sqrt{K^2 - AC})}{\cancel{2}A} \\
              \boxed{x = \frac{-K \pm \sqrt{K^2 - AC}}{A}}
            `}</BlockMath>
            <P>
              В случае, если <M>A = 1</M>, формула упрощается до:
            </P>
            <BlockMath>{math`\boxed{x = -K \pm \sqrt{K^2 - C}}`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Повторный вывод формулы">
            <P>Выпишем квадратное уравнение в общем виде:</P>
            <BlockMath>Ax^2 + Bx + C = 0</BlockMath>
            <P>
              Подставим <M>2K</M> вместо <M>B</M>:
            </P>
            <BlockMath>Ax^2 + 2Kx + C = 0</BlockMath>
            <P>
              Делим обе части уравнения на <M>A</M> и выделяем полный квадрат:
            </P>
            <BlockMath>{math`
              x^2 + \frac{2Kx}{A} + \frac{C}{A} = 0 \\
              \brand{x}^2 + 2 \cdot \brand{x} \cdot \frac{K}{A} + \frac{C}{A} = 0 \\
              \underbrace{x^2 + 2 \cdot x \cdot \frac{K}{A} + \yellow{\left(\frac{K}{A}\right)^2}}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{\left(\frac{K}{A}\right)^2} + \frac{C}{A} = 0 \\
              \left(x + \frac{K}{A}\right)^2 - \frac{K^2}{A^2} + \frac{C}{A} = 0 \\
              \left(x + \frac{K}{A}\right)^2 = \frac{K^2}{A^2} - \frac{C}{A} \\
              \left(x + \frac{K}{A}\right)^2 = \frac{K^2 - AC}{A^2}
            `}</BlockMath>
            <P>
              Берём квадратный корень из обеих частей (исходя из предположения, что "упрощённый"{' '}
              <Ref to={article.uniques.discriminant}>дискриминант</Ref> <M>K^2 - AC</M> неотрицателен):
            </P>
            <BlockMath>{math`
              x + \frac{K}{A} = \pm \frac{\sqrt{K^2 - AC}}{A} \\
              x = -\frac{K}{A} \pm \frac{\sqrt{K^2 - AC}}{A} \\
              \boxed{x = \frac{-K \pm \sqrt{K^2 - AC}}{A}}
            `}</BlockMath>
            <P>
              При <M>A = 1</M> формула упрощается до:
            </P>
            <BlockMath>{math`\boxed{x = -K \pm \sqrt{K^2 - C}}`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
        <ProblemNote>
          <P>
            Более простые формулы без лишних умножений позволяют решать квадратные уравнения с чётным коэффициентом
            быстрее и даже в уме. Проще всего запомнить, что при чётном коэффициенте <M>B</M> формула корней{' '}
            <B>такая же, как и общая</B>, только вместо <M>B</M> пишем <M>K</M> и убираем все числа:
          </P>

          <BlockMath>{math`
            \frac{-\yellow{B} \pm \sqrt{\yellow{B}^2 - \red{4}AC}}{\red{2}A} \implies
            \frac{-\brand{K} \pm \sqrt{\brand{K}^2 - AC}}{A}
          `}</BlockMath>
        </ProblemNote>
      </SubProblem>
      <SubProblem label="Отработка при A = 1" script={evenA1()} />
      <SubProblem label="Общая отработка" script={evenGeneral()} />
    </Problems>

    <Problems title="Корни с буквами" level="medium">
      <P>Выведите выражения для корней уравнений:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 7ax + 12a^2 = 0</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Выражения для корней" answers={['3a', '4a']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 4a >> x_2 = 3a`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = -7a >> C = 12a^2`}</BlockMath>
          <P>Определяем дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (-7a)^2 - 4 \cdot 1 \cdot 12a^2 = \\
            = 49a^2 - 48a^2 = \\
            = a^2
          `}</BlockMath>
          <P>Находим корни уравнения:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-7a) \pm \sqrt{a^2}}{2} = \frac{7a \pm a}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{7a + a}{2} \\
            x_1 = \frac{8a}{2} \\
            \boxed{x_1 = 4a}
            >>
            x_2 = \frac{7a - a}{2} \\
            x_2 = \frac{6a}{2} \\
            \boxed{x_2 = 3a}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + 5bx + 6b^2 = 0</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Выражения для корней" answers={['-2b', '-3b']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -2b >> x_2 = -3b`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = 5b >> C = 6b^2`}</BlockMath>
          <P>Определяем дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (5b)^2 - 4 \cdot 1 \cdot 6b^2 = \\
            = 25b^2 - 24b^2 = \\
            = b^2
          `}</BlockMath>
          <P>Находим корни уравнения:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-5b \pm \sqrt{b^2}}{2} = \frac{-5b \pm b}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{-5b + b}{2} \\
            x_1 = \frac{-4b}{2} \\
            \boxed{x_1 = -2b}
            >>
            x_2 = \frac{-5b - b}{2} \\
            x_2 = \frac{-6b}{2} \\
            \boxed{x_2 = -3b}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>7x^2 - 4ax - 3a^2 = 0</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Выражения для корней" answers={['a', '-3a/7']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = a >> x_2 = -\frac{3a}{7}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 7 >> B = -4a >> C = -3a^2`}</BlockMath>
          <P>Определяем дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (-4a)^2 - 4 \cdot 7 \cdot (-3a^2) = \\
            = 16a^2 + 84a^2 = \\
            = 100a^2
          `}</BlockMath>
          <P>Находим корни уравнения:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-4a) \pm \sqrt{100a^2}}{2 \cdot 7} = \frac{4a \pm 10a}{14}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{4a + 10a}{14} \\
            x_1 = \frac{14a}{14} \\
            \boxed{x_1 = a}
            >>
            x_2 = \frac{4a - 10a}{14} \\
            x_2 = \frac{-6a}{14} \\
            \boxed{x_2 = -\frac{3a}{7}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>7x^2 + 13bx + 6b^2 = 0</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Выражения для корней" answers={['-6b/7', '-b']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -\frac{6b}{7} >> x_2 = -b`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 7 >> B = 13b >> C = 6b^2`}</BlockMath>
          <P>Определяем дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (13b)^2 - 4 \cdot 7 \cdot 6b^2 = \\
            = 169b^2 - 168b^2 = \\
            = b^2
          `}</BlockMath>
          <P>Находим корни уравнения:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-13b \pm \sqrt{b^2}}{2 \cdot 7} = \frac{-13b \pm b}{14}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{-13b + b}{14} \\
            x_1 = \frac{-12b}{14} \\
            \boxed{x_1 = -\frac{6b}{7}}
            >>
            x_2 = \frac{-13b - b}{14} \\
            x_2 = \frac{-14b}{14} \\
            \boxed{x_2 = -b}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problem
      $={uniques.sridharasMethod}
      title="Метод Сридхары"
      level="medium"
      snippet={{
        key: true,
        search: true,
        seo: 'Формула корней квадратного уравнения по методу Сридхары',
        description: 'Более простой способ вывести формулу корней квадратного уравнения, но с небольшим трюком.',
      }}
      pretty
    >
      <ProblemDescription>
        Индийский математик Сридхара ещё в <M>8</M> веке придумал способ вывода общей формулы корней квадратного
        уравнения, в котором дроби не появляются вплоть до самого последнего шага. Первым действием в своём методе он
        умножил обе части уравнения на <M>4A</M>. Завершите вывод формулы.
      </ProblemDescription>
      <ProblemHint>
        После умножения обеих частей на <M>4A</M> коэффициент при <M>x^2</M> становится равен <M>4A^2</M> и вот из него
        уже можно взять квадратный корень.
      </ProblemHint>
      <ProblemSolution>
        <P>Как и всегда, начинаем с записи квадратного уравнения в общем виде:</P>
        <BlockMath>Ax^2 + Bx + C = 0</BlockMath>
        <P>
          При обычном выводе формулы корней нам коэффициент <M>A</M> очень мешает своей неопределённостью. Из него
          нельзя взять корень, потому что неясно, положительный он или отрицательный. Поэтому мы делим уравнение на{' '}
          <M>A</M>, чтобы оставить <M>x^2</M> в одиночестве.
        </P>
        <P>
          Сридхара нашёл альтернативный способ решить проблему. Умножаем обе части уравнения на <M>4A</M>:
        </P>
        <BlockMath>4A \cdot (Ax^2 + Bx + C) = 4A \cdot 0 \\ 4A^2 x^2 + 4ABx + 4AC = 0</BlockMath>
        <P>
          Избавляемся от свободного члена, вычтя из обеих частей уравнения <M>4AC</M>:
        </P>
        <BlockMath>4A^2 x^2 + 4ABx = -4AC</BlockMath>
        <P>Теперь выделить полный квадрат в левой части вообще элементарно:</P>
        <BlockMath>{math`
          (\brand{2Ax})^2 + 2 \cdot \brand{2Ax} \cdot B = - 4AC
        `}</BlockMath>
        <P>
          Коэффициент <M>B</M> естественным образом берёт на себя роль <M>b</M> в формуле квадрата суммы{' '}
          <M>a^2 + 2ab + b^2 = (a+b)^2</M>. Остаётся лишь добавить и сразу компенсировать <M>B^2</M>:
        </P>
        <BlockMath>{math`
          \underbrace{(2Ax)^2 + 2 \cdot (2Ax) \cdot B + \yellow{B^2}}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{B^2} = -4AC \\
          (2Ax + B)^2 - B^2 = -4AC \\
          (2Ax + B)^2 = B^2 - 4AC
        `}</BlockMath>
        <P>
          В правой части замечаем уже знакомую формулу <Dep on={article.uniques.discriminant}>дискриминанта</Dep>:
        </P>
        <BlockMath>(2Ax + B)^2 = D</BlockMath>
        <P>
          В такой записи ещё более наглядна его роль -- слева точно неотрицательное число, а справа уж точно от знака
          дискриминанта зависит, будут ли решения у уравнения или нет. Берём квадратный корень из обеих частей
          (предполагая, что <M>D \geq 0</M>):
        </P>
        <BlockMath>{math`
          2Ax + B = \pm \sqrt{D} \\
          2Ax = -B \pm \sqrt{D} \\
          \boxed{x = \frac{-B \pm \sqrt{D}}{2A}}
        `}</BlockMath>
        <QED />
      </ProblemSolution>
      <ProblemNote>
        В целом метод Сридхары более простой и быстрый, чем классический. Однако у него есть один недостаток -- нужно
        помнить "трюк" с умножением на <M>4A</M> в первом действии, тогда как при классическом подходе все действия
        интуитивно понятные и логичные.
      </ProblemNote>
    </Problem>

    <Problem
      title="Формула корней биквадратного уравнения"
      level="medium"
      snippet={{
        seo: true,
        description: `
          Общая формула, по которой можно быстро найти все решения любого биквадратного уравнения.
        `,
      }}
    >
      <ProblemDescription>
        <P>
          Выведите общую формулу корней <Dep on={article.uniques.biquadratic}>биквадратного уравнения</Dep>:
        </P>
        <BlockMath>Ax^4 + Bx^2 + C = 0</BlockMath>
      </ProblemDescription>
      <ProblemHint>
        Распишите <Dep on={article.uniques.formula}>общую формулу корней</Dep> в два отдельных выражения.
      </ProblemHint>
      <ProblemAnswer>
        <BlockMath>{math`
          x_{1,2} = \pm \sqrt{\frac{-B + \sqrt{D}}{2A}} >>
          x_{3,4} = \pm \sqrt{\frac{-B - \sqrt{D}}{2A}}
        `}</BlockMath>
        <P>Если какой-то из корней не берется, то соответствующего решения или решений уравнения не существует.</P>
      </ProblemAnswer>
    </Problem>

    <Problem title="Метод подстановки" level="hard">
      <ProblemDescription>
        <P>
          Ещё один способ вывести формулу корней квадратного уравнения -- хитро произвести замену переменной, чтобы
          получилось простейшее неполное квадратное уравнение вида <M>u^2 = s</M>, которое решается элементарно. Для
          этого используют следующую подстановку:
        </P>
        <BlockMath>{math`x = u - \frac{B}{2A}`}</BlockMath>
        <P>Выполните эту подстановку и завершите вывод формулы корней квадратного уравнения.</P>
      </ProblemDescription>
      <ProblemSolution>
        <P>Записываем квадратное уравнение в общем виде:</P>
        <BlockMath>Ax^2 + Bx + C = 0</BlockMath>
        <P>Выполняем подстановку, раскрываем скобки, приводим подобные слагаемые:</P>
        <BlockMath>{math`
          A\left(u - \frac{B}{2A}\right)^2 + B\left(u - \frac{B}{2A}\right) + C = 0 \\
          A\left(u^2 - 2u \cdot \frac{B}{2A} + \frac{B^2}{4A^2}\right) + Bu - \frac{B^2}{2A} + C = 0 \\
          Au^2 - \cancel{Bu} + \frac{B^2}{4A} + \cancel{Bu} - \frac{B^2}{2A} + C = 0 \\
          Au^2 + \frac{B^2}{4A} - \frac{B^2}{2A} + C = 0 \\
          Au^2 + C - \frac{B^2}{4A} = 0
        `}</BlockMath>
        <P>
          Как видите, переменная в первой степени <M>u</M> у нас самоустранилась из уравнения. В этом и была цель
          подстановки. У нас осталась только переменная в квадрате и кучка чисел под буквами. Изолируем <M>u^2</M>:
        </P>
        <BlockMath>{math`
          Au^2 = \frac{B^2}{4A} - C \\
          u^2 = \frac{B^2 - 4AC}{4A^2} \\
          u^2 = \frac{D}{4A^2}
        `}</BlockMath>
        <P>Берём квадратный корень из обеих частей:</P>
        <BlockMath>{math`
          u = \pm \frac{\sqrt{D}}{2A}
        `}</BlockMath>
        <P>
          Выразим <M>u</M> из нашей подстановки:
        </P>
        <BlockMath>{math`
          x = u - \frac{B}{2A} \implies u = x + \frac{B}{2A}
        `}</BlockMath>
        <P>
          Производим замену, наконец возвращаясь к переменной <M>x</M>:
        </P>
        <BlockMath>{math`
          x + \frac{B}{2A} = \pm \frac{\sqrt{D}}{2A} \\
          x = -\frac{B}{2A} \pm \frac{\sqrt{D}}{2A} \\
          \boxed{x = \frac{-B \pm \sqrt{D}}{2A}}
        `}</BlockMath>
        <QED />
      </ProblemSolution>
      <ProblemNote>
        <P>
          Из трёх рассмотренных нами методов вывода формулы корней квадратного уравнения (классический,{' '}
          <Ref to={uniques.sridharasMethod}>Сридхары</Ref> и подстановки) этот самый искусственный, неинтуитивный и
          неудобный. Однако он хорошо показывает, что можно подобрать такую хитрую подстановку, чтобы в процессе
          преобразований члены с переменной в первой степени взаимоуничтожили друг друга.
        </P>
        <P>
          Это не редкость и не уникальный случай. Самые разнообразные хитрые подстановки очень часто используются в
          математике, особенно высшей. Привыкайте 😉
        </P>
        <P>Кстати, почти такая же подстановка используется и для решения кубических уравнений:</P>
        <BlockMath>{math`x = u - \frac{B}{3A}`}</BlockMath>
        <P>
          С её помощью удаётся избавиться от переменной во второй степени, прямо как в случае с квадратными уравнениями
          мы избавлялись от переменной в первой степени.
        </P>
      </ProblemNote>
    </Problem>

    <Problems title="Хитрожопый дискриминант" level="hard" pretty>
      <P>Решите уравнение:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 - (\sqrt{2} + 1)x + \sqrt{2} = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[1, 'sqrt(2)']} />
        <ProblemHint>
          Чтобы не получить страшные выражения для корней, выделите полный квадрат в дискриминанте.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 1 >> x_2 = \sqrt{2}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = -(\sqrt{2} + 1) >> C = \sqrt{2}`}</BlockMath>
          <P>Определяем дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (-(\sqrt{2} + 1))^2 - 4 \cdot 1 \cdot \sqrt{2} = \\
            = (\sqrt{2} + 1)^2 - 4\sqrt{2} = \\
            = 2 + 2\sqrt{2} + 1 - 4\sqrt{2} = \\
            = 3 - 2\sqrt{2}
          `}</BlockMath>
          <P>
            Казалось бы, "красивый" корень из дискриминанта взять не получится. Но мы можем перезаписать его так, чтобы
            выделить полный квадрат:
          </P>
          <BlockMath>{math`
            D = 3 - 2\sqrt{2} = \\
            = (\sqrt{2})^2 - 2 \cdot \sqrt{2} \cdot 1 + (1)^2 = \\
            = (1 - \sqrt{2})^2
          `}</BlockMath>
          <P>Находим корни уравнения:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(-(\sqrt{2} + 1)) \pm \sqrt{(\sqrt{2} - 1)^2}}{2} = \frac{\sqrt{2} + 1 \pm (1 - \sqrt{2})}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{\sqrt{2} + 1 + 1 - \sqrt{2}}{2} \\
            x_1 = \frac{2}{2} \\
            \boxed{x_1 = 1}
            >>
            x_2 = \frac{\sqrt{2} + 1 - 1 + \sqrt{2}}{2} \\
            x_2 = \frac{2\sqrt{2}}{2} \\
            \boxed{x_2 = \sqrt{2}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2  + (\sqrt{3} - 2)x - 2\sqrt{3} = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[2, '-sqrt(3)']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 2 >> x_2 = -\sqrt{3}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = (\sqrt{3} - 2) >> C = -2\sqrt{3}`}</BlockMath>
          <P>Определяем дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (\sqrt{3} - 2)^2 - 4 \cdot 1 \cdot (-2\sqrt{3}) = \\
            = 3 - 4\sqrt{3} + 4 + 8\sqrt{3} = \\
            = 7 + 4\sqrt{3}
          `}</BlockMath>
          <P>Выделяем полный квадрат в дискриминанте:</P>
          <BlockMath>{math`
            D = 7 + 4\sqrt{3} = \\
            = (2)^2 + 2 \cdot 2 \cdot \sqrt{3} + (\sqrt{3})^2 = \\
            = (2 + \sqrt{3})^2
          `}</BlockMath>
          <P>Находим корни уравнения:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(\sqrt{3} - 2) \pm (2 + \sqrt{3})}{2} = \frac{-\sqrt{3} + 2 \pm (2 + \sqrt{3})}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{-\sqrt{3} + 2 + 2 + \sqrt{3}}{2} \\
            x_1 = \frac{4}{2} \\
            \boxed{x_1 = 2}
            >>
            x_2 = \frac{-\sqrt{3} + 2 - 2 - \sqrt{3}}{2} \\
            x_2 = \frac{-2\sqrt{3}}{2} \\
            \boxed{x_2 = -\sqrt{3}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 + (\sqrt{2} + \sqrt{6})x + 2\sqrt{3} = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['-sqrt(6)', '-sqrt(2)']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -\sqrt{6} >> x_2 = -\sqrt{2}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = (\sqrt{2} + \sqrt{6}) >> C = 2\sqrt{3}`}</BlockMath>
          <P>Определяем дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (\sqrt{2} + \sqrt{6})^2 - 4 \cdot 1 \cdot 2\sqrt{3} = \\
            = (\sqrt{2})^2 + 2 \cdot \sqrt{2} \cdot \underbrace{\sqrt{2}\sqrt{3}}_{\small\sqrt{6}} + (\sqrt{2}\sqrt{3})^2 - 8\sqrt{3} = \\
            = (\sqrt{2})^2 + 4\sqrt{3} - 8\sqrt{3} + (\sqrt{2}\sqrt{3})^2 = \\
            = (\sqrt{2})^2 - 4\sqrt{3} + (\sqrt{2}\sqrt{3})^2 = \\
            = (\sqrt{2})^2 - 2 \cdot \sqrt{2} \cdot \sqrt{2}\sqrt{3} + (\sqrt{2}\sqrt{3})^2 = \\
            = (\sqrt{2} - \sqrt{6})^2
          `}</BlockMath>
          <P>Находим корни уравнения:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(\sqrt{2} + \sqrt{6}) \pm (\sqrt{2} - \sqrt{6})}{2} = \frac{-\sqrt{2} - \sqrt{6} \pm (\sqrt{2} - \sqrt{6})}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{-\sqrt{2} - \sqrt{6} + \sqrt{2} - \sqrt{6}}{2} \\
            x_1 = \frac{-2\sqrt{6}}{2} \\
            \boxed{x_1 = -\sqrt{6}}
            >>
            x_2 = \frac{-\sqrt{2} - \sqrt{6} - \sqrt{2} + \sqrt{6}}{2} \\
            x_2 = \frac{-2\sqrt{2}}{2} \\
            \boxed{x_2 = -\sqrt{2}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^2 + (\sqrt{5} - \sqrt{15})x - 5\sqrt{3} = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['sqrt(15)', '-sqrt(5)']} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = \sqrt{15} >> x_2 = -\sqrt{5}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`A = 1 >> B = (\sqrt{5} - \sqrt{15}) >> C = -5\sqrt{3}`}</BlockMath>
          <P>Определяем дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = \\
            = (\sqrt{5} - \sqrt{15})^2 - 4 \cdot 1 \cdot (-5\sqrt{3}) = \\
            = (\sqrt{5})^2 - 2 \cdot \sqrt{5} \cdot \underbrace{\sqrt{5}\sqrt{3}}_{\small\sqrt{15}} + (\sqrt{5}\sqrt{3})^2 + 20\sqrt{3} = \\
            = (\sqrt{5})^2 - 10 \sqrt{3} + (\sqrt{5}\sqrt{3})^2 + 20\sqrt{3} = \\
            = (\sqrt{5})^2 + 10 \sqrt{3} + (\sqrt{5}\sqrt{3})^2 = \\
            = (\sqrt{5})^2 + 2 \cdot \sqrt{5} \cdot \sqrt{5}\sqrt{3} + (\sqrt{5}\sqrt{3})^2 = \\
            = (\sqrt{5} + \sqrt{15})^2
          `}</BlockMath>
          <P>Находим корни уравнения:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{-(\sqrt{5} - \sqrt{15}) \pm (\sqrt{5} + \sqrt{15})}{2} = \frac{-\sqrt{5} + \sqrt{15} \pm (\sqrt{5} + \sqrt{15})}{2}
          `}</BlockMath>
          <BlockMath>{math`
            x_1 = \frac{-\sqrt{5} + \sqrt{15} + \sqrt{5} + \sqrt{15}}{2} \\
            x_1 = \frac{2\sqrt{15}}{2} \\
            \boxed{x_1 = \sqrt{15}}
            >>
            x_2 = \frac{-\sqrt{5} + \sqrt{15} - \sqrt{5} - \sqrt{15}}{2} \\
            x_2 = \frac{-2\sqrt{5}}{2} \\
            \boxed{x_2 = -\sqrt{5}}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems
      $={uniques.quadraticInF}
      title="Трёхчленные уравнения"
      level="hard"
      method
      snippet={{
        title: 'Трёхчленное уравнение',
        description: `
          Особый вид уравнений из трёх членов с одинаковой "неизвестной функцией" в разных степенях, которые могут быть сведены к квадратному уравнению.
        `,
        key: true,
        search: true,
        seo: {
          title: 'Что такое трёхчленное уравнение?',
          description:
            'Определение трёхчленных уравнений и примеры с подробным разбором их решения через сведение к квадратным уравнениям.',
        },
      }}
    >
      <P>Решите уравнение:</P>
      <SubProblem label="Образец" standalone>
        <ProblemDescription>
          <P>
            <B>Трёхчленное уравнение</B> -- любое уравнение, которое может быть сведено к виду:
          </P>
          <BlockMath>{math`Af^2(x) + Bf(x) + C = 0`}</BlockMath>
          <P>Придумайте способ решать такие уравнения и опробуйте его на уравнении:</P>
          <BlockMath>{math`2x^6 - 3x^3 + 1 = 0`}</BlockMath>
        </ProblemDescription>
        <ProblemHint>Нужно выполнить замену переменной.</ProblemHint>
        <ProblemAnswer>
          <P>
            Решается заменой переменной <M>t = f(x)</M>, что сводит уравнение к квадратному. Решения уравнения образца:
          </P>
          <BlockMath>{math`x_1 = 1 >> x_2 = \frac{1}{\sqrt[3]{2}}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Идея решения">
            <P>
              Замечаем, что <M>f(x)</M> дважды повторяется. Введём новую переменную <M>t = f(x)</M>, тогда уравнение
              примет вид:
            </P>
            <BlockMath>{math`At^2 + Bt + C = 0`}</BlockMath>
            <P>Это обычное квадратное уравнение.</P>
          </ProblemSection>
          <ProblemSection title="Решение образца">
            <P>
              В нашем случае <M>f(x) = x^3</M>:
            </P>
            <BlockMath>{math`2(x^3)^2 - 3(x^3) + 1 = 0`}</BlockMath>
            <P>
              Производим замену переменной <M>t = x^3</M>:
            </P>
            <BlockMath>{math`2t^2 - 3t + 1 = 0`}</BlockMath>
            <P>
              Считаем дискриминант и находим корни для <M>t</M>:
            </P>
            <BlockMath>{math`
              D = (-3)^2 - 4 \cdot 2 \cdot 1 = 9 - 8 = 1
            `}</BlockMath>
            <BlockMath>{math`
              t_1 = \frac{3 + \sqrt{1}}{4} = 1 \\ t_1 = 1 >>
              t_2 = \frac{3 - \sqrt{1}}{4} = \frac{1}{2} \\ t_2 = \frac{1}{2}
            `}</BlockMath>
            <P>
              Теперь возвращаемся к исходной переменной <M>x</M>:
            </P>
            <BlockMath>{math`
              t_1 = x^3 = 1 \\ x_1 = \sqrt[3]{1} \\ \boxed{x_1 = 1} >>
              t_2 = x^3 = \frac{1}{2} \\ x_2 = \sqrt[3]{\frac{1}{2}} \\ \boxed{x_2 = \frac{1}{\sqrt[3]{2}}}
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
        <ProblemNote>
          <P>
            В некоторых источниках трёхчленные уравнения обобщают ещё больше до уровня любого уравнения, состоящего из
            трёх членов с одинаковой функцией в разных степенях:
          </P>
          <BlockMath>Af^p(x) + Bf^q(x) + Cf^r(x) = 0</BlockMath>
          <P>
            В этом более общем понимании, конечно же, далеко не все из таких уравнений можно через сведение к
            квадратному уравнению.
          </P>
          <Hr />
          <P>
            Кстати, <Ref to={article.uniques.biquadratic}>биквадратное уравнение</Ref> тоже является частным видом
            трёхчленного уравнения, потому что может быть записано в виде:
          </P>
          <BlockMath>{math`A(x^2)^2 + B(x^2) + C = 0`}</BlockMath>
        </ProblemNote>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^6 - 7x^3 - 8 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-1, 2]} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -1 >> x_2 = 2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В нашем случае <M>f(x) = x^3</M>:
          </P>
          <BlockMath>{math`(x^3)^2 - 7(x^3) - 8 = 0`}</BlockMath>
          <P>
            Производим замену переменной <M>t = x^3</M>:
          </P>
          <BlockMath>{math`t^2 - 7t - 8 = 0`}</BlockMath>
          <P>
            Решаем квадратное уравнение для <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = 8 >> t_2 = -1
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M>:
          </P>
          <BlockMath>{math`
            t_1 = x^3 = 8 \\ x_1 = \sqrt[3]{8} = 2 >> t_2 = x^3 = -1 \\ x_2 = \sqrt[3]{-1} = -1
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^8 - 15x^4 - 16 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-2, 2]} />
        <ProblemAnswer>
          <BlockMath>{math`x_1 = -2 >> x_2 = 2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В этом уравнении <M>f(x) = x^4</M>:
          </P>
          <BlockMath>{math`(x^4)^2 - 15(x^4) - 16 = 0`}</BlockMath>
          <P>
            Производим замену переменной <M>t = x^4</M>:
          </P>
          <BlockMath>{math`t^2 - 15t - 16 = 0`}</BlockMath>
          <P>
            Решаем квадратное уравнение для <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = 16 >> t_2 = -1
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M>:
          </P>
          <BlockMath>{math`
            t_1 = x^4 = 16 \\ x = \sqrt[4]{16} \\ x_{1,2} = \pm 2 >>
            t_2 = x^4 = -1 \\ \text{ (нет корня)}
          `}</BlockMath>
          <P>
            При возведении в четвёртую степень число не может оказаться отрицательным, поэтому <M>-1</M> получить никак
            не выйдет. Значит <M>t_2</M> не даёт корней для исходного уравнения.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>36x^8 - 13x^4 + 1 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['-1/sqrt(2)', '1/sqrt(2)', '-1/sqrt(3)', '1/sqrt(3)']} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = -\frac{1}{\sqrt{2}} >>
            x_2 = \frac{1}{\sqrt{2}} >>
            x_3 = -\frac{1}{\sqrt{3}} >>
            x_4 = \frac{1}{\sqrt{3}}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В этом уравнении <M>f(x) = x^4</M>:
          </P>
          <BlockMath>{math`(x^4)^2 - 15(x^4) - 16 = 0`}</BlockMath>
          <P>
            Производим замену переменной <M>t = x^4</M>:
          </P>
          <BlockMath>{math`36t^2 - 13t + 1 = 0`}</BlockMath>
          <P>
            Решаем квадратное уравнение для <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = \frac{1}{4} >>
            t_2 = \frac{1}{9}
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M>:
          </P>
          <BlockMath>{math`
            t_1 = x^4 = \frac{1}{4} \\ x_{1,2} = \pm \frac{1}{\sqrt{2}} >>
            t_2 = x^4 = \frac{1}{9} \\ x_{3,4} = \pm \frac{1}{\sqrt{3}}
          `}</BlockMath>
          <P>Аж четыре корня вышло!</P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>(x^2 - 2x)^2 - 2(x^2 - 2x) - 3 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-1, 1, 3]} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = -1 >> x_2 = 1 >> x_3 = 3
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В этом уравнении <M>f(x) = x^2 - 2x</M>. Производим замену переменной <M>t = x^2 - 2x</M>:
          </P>
          <BlockMath>{math`
            t^2 - 2t - 3 = 0
          `}</BlockMath>
          <P>
            Решаем квадратное уравнение для <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = -1 >> t_2 = 3
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M>:
          </P>
          <BlockMath>{math`
            \overbrace{x^2 - 2x}^{t_1} = -1 \\ x^2 - 2x + 1 \\ (x - 1)^2 = 0 \\ x_1 = 1 >>
            \overbrace{x^2 - 2x}^{t_2} = 3 \\ x^2 - 2x - 3 = 0 \\ x_2 = -1, \quad x_3 = 3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            x^8 - 3x^6 + 2x^2 = 0
          `}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[0, 1, 2]} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = 0 >> x_2 = 1 >> x_3 = 2
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Это уравнение в исходном виде не выглядит как трёхчленное, но его можно сделать таковым, если вынести за
            скобки <M>x^2</M>:
          </P>
          <BlockMath>{math`
            x^2(x^6 - 3x^4 + 2) = 0
          `}</BlockMath>
          <P>
            Получаем типовую ситуацию произведения нескольких множителей, равных нулю (смотрите задачу{' '}
            <Dep on={zeroFactors}>Нулевые множители</Dep>). Такое уравнение разделяется на два подуравнения:
          </P>
          <BlockMath>{math`
            x^2 = 0 >> x^6 - 3x^4 + 2 = 0
          `}</BlockMath>
          <P>Первое подуравнение имеет единственное решение:</P>
          <BlockMath>{math`\boxed{x_1 = 0}`}</BlockMath>
          <P>А вот второе подуравнение уже является трёхчленным:</P>
          <BlockMath>{math`
            (x^3)^2 - 3(x^3) + 2 = 0
          `}</BlockMath>
          <P>
            Производим замену переменной <M>t = x^3</M>:
          </P>
          <BlockMath>{math`
            t^2 - 3t + 2 = 0
          `}</BlockMath>
          <P>
            Решаем квадратное уравнение для <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = 1 >> t_2 = 2
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M>:
          </P>
          <BlockMath>{math`
            t_1 = x^3 = 1 \\ x_2 = \sqrt[3]{1} \\ \boxed{x_2 = 1} >>
            t_2 = x^3 = 2 \\ x_3 = \sqrt[3]{2} \\ \boxed{x_3 = 2}
          `}</BlockMath>
          <P>
            Итак, исходное уравнение имеет три корня: <M>x_1 = 0</M>, <M>x_2 = 1</M> и <M>x_3 = 2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            \frac{x}{1-x} - \frac{3}{2}\sqrt{\frac{x}{1-x}} = 1
          `}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={['4/5', 0.8]} />
        <ProblemAnswer>
          <BlockMath>{math`x = \frac{4}{5}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            На первый взгляд это уравнение может вообще не показаться трёхчленным, но его можно записать более явно:
          </P>
          <BlockMath>{math`
            \left(\sqrt{\frac{x}{1-x}}\right)^2 - \frac{3}{2}\left(\sqrt{\frac{x}{1-x}}\right) - 1 = 0
          `}</BlockMath>
          <P>
            Теперь уже всё понятно. Заменяем дробь с иксами на <M>t</M>:
          </P>
          <BlockMath>{math`
            t^2 - \frac{3}{2}t - 1 = 0
          `}</BlockMath>
          <P>
            Умножим обе части уравнения на <M>2</M>, чтобы избавиться от дроби:
          </P>
          <BlockMath>{math`
            2t^2 - 3t - 2 = 0
          `}</BlockMath>
          <P>
            Решаем квадратное уравнение для <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = 2 >> t_2 = -\frac{1}{2}
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M> для корня <M>t_1</M>. Для решения нам придется возводить в
            квадрат обе части уравнения:
          </P>
          <BlockMath>{math`
            t_1 = \sqrt{\frac{x}{1-x}} = 2 \\
            \sqrt{\frac{x}{1-x}} = 2 \\
            \frac{x}{1-x} = 4 \\
            x = 4 - 4x \\
            5x = 4 \\
            \boxed{x = \frac{4}{5}}
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M> для корня <M>t_2</M>:
          </P>
          <BlockMath>{math`
            t_2 = \sqrt{\frac{x}{1-x}} = -\frac{1}{2}
          `}</BlockMath>
          <P>
            Результатом взятия корня не может быть отрицательное число, поэтому корень <M>t_2</M> не даёт дополнительных
            корней к исходному уравнению.
          </P>
          <P>
            Значит исходное уравнение имеет единственное решение <M>{math`\dfrac{4}{5}`}</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`
            3\sqrt{\frac{x-1}{2x+1}} - \sqrt{\frac{2x+1}{x-1}} = 2
          `}</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-2]} />
        <ProblemHint>
          <P>Воспользуйтесь следующим равенством:</P>
          <BlockMath>{math`\frac{a}{b} = \frac{1}{\dfrac{b}{a}}`}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x = -2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Замечаем, что внутри второго корня стоит перевёрнутая дробь из первого корня. А дроби можно удобно
            "переворачивать" при помощи равенства:
          </P>
          <BlockMath>{math`\frac{a}{b} = \frac{1}{\dfrac{b}{a}}`}</BlockMath>
          <P>Перезапишем уравнение в более удобном виде:</P>
          <BlockMath>{math`
            3\sqrt{\frac{x-1}{2x+1}} - \sqrt{\frac{1}{\dfrac{x-1}{2x+1}}} = 2 \\
            3\sqrt{\frac{x-1}{2x+1}} - \frac{1}{\sqrt{\dfrac{x-1}{2x+1}}} - 2 = 0
          `}</BlockMath>
          <P>
            Обозначим весь сложный корень за <M>t</M>:
          </P>
          <BlockMath>{math`
            t = \sqrt{\frac{x-1}{2x+1}} \implies 3t - \frac{1}{t} - 2 = 0
          `}</BlockMath>
          <P>
            Умножим обе части уравнения на <M>t</M>, чтобы избавиться от дроби:
          </P>
          <BlockMath>{math`
            3t^2 - 1 - 2t = 0 \\
            3t^2 - 2t - 1 = 0
          `}</BlockMath>
          <P>Получилось квадратное уравнение. Решаем его:</P>
          <BlockMath>{math`
            t_1 = 1 >> t_2 = -\frac{1}{3}
          `}</BlockMath>
          <P>
            Переходим к исходной переменной <M>x</M> для корня <M>t_1</M>:
          </P>
          <BlockMath>{math`
            t_1 = \sqrt{\frac{x-1}{2x+1}} = 1 \\
            \sqrt{\frac{x-1}{2x+1}} = 1 \\
            \frac{x-1}{2x+1} = 1 \\
            x - 1 = 2x + 1 \\
            \boxed{-2 = x}
          `}</BlockMath>
          <P>
            Переходим к исходной переменной <M>x</M> для корня <M>t_2</M>:
          </P>
          <BlockMath>{math`
            t_2 = \sqrt{\frac{x-1}{2x+1}} = -\frac{1}{3}
          `}</BlockMath>
          <P>
            Результатом взятия корня не может быть отрицательное число, поэтому корень <M>t_2</M> не даёт дополнительных
            корней к исходному уравнению.
          </P>
          <P>
            Значит исходное уравнение имеет единственное решение <M>-2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems
      $={uniques.palindromials}
      title="Возвратные уравнения"
      level="hard"
      snippet={{
        title: 'Возвратное уравнение',
        description: `
          Особый вид уравнений, в которых коэффициенты повторяются зеркально относительно "центра" уравнения.
        `,
        key: true,
        search: ['симметричное уравнение', 'уравнение палиндром', 'палиндромное уравнение'],
        seo: {
          title: 'Что такое возвратное уравнение?',
          description:
            'Определение возвратных уравнений (уравнений палиндромов) и примеры с подробным разбором их решения через сведение к квадратным уравнениям.',
        },
      }}
      pretty
      method
    >
      <P>Решите уравнение:</P>
      <SubProblem label="Образец" standalone>
        <ProblemDescription>
          <P>
            <B>Возвратными</B> уравнениями, уравнениями <B>палиндромами</B> или <B>симметрическими</B> уравнениями
            называются такие уравнения, в которых коэффициенты перед переменными повторяются зеркально относительно
            "центра" уравнения:
          </P>
          <Image src={palindromial} width="500px" invert="dark" />
          <P>Придумайте способ решать такие уравнения и опробуйте его на уравнении выше.</P>
        </ProblemDescription>
        <RootsCheck has roots={[2, ['1/2', 0.5]]} />
        <ProblemHint>
          Из всей левой части вынесите <M>x^2</M> за скобки. Потом сгруппируйте члены по степени переменной. Подумайте,
          какую замену переменной провести.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`x_1 = 2 >> x_2 = \frac{1}{2}`}</BlockMath>
        </ProblemAnswer>
        <ProblemHint>
          <P>Подумайте, как можно реализовать следующее преобразование:</P>
          <BlockMath>{math`
            x^2 + \frac{1}{x^2} \implies \left(x + \frac{1}{x}\right)^2
          `}</BlockMath>
        </ProblemHint>
        <ProblemSolution>
          <P>
            Для начала стоит сказать, что <M>0</M> точно не является корнем этого уравнения, ведь при его подстановке
            вместо <M>x</M> получается ложное равенство <M>2 = 0</M>. Значит мы можем, не боясь потенциального деления
            на ноль, вынести <M>x^2</M> за скобки из всей левой части уравнения:
          </P>
          <BlockMath>{math`
            x^2\left[ 2x^2 - 3x - 1 - \frac{3}{x} + \frac{2}{x^2} \right] = 0
          `}</BlockMath>
          <P>
            Получаем типичную ситуацию <Dep on={zeroFactors}>Нулевых множителей</Dep>. Как мы уже выше убедились, корень{' '}
            <M>x = 0</M>, который даёт подуравнение <M>x^2</M>, не является решением уравнения. Поэтому можно смело не
            обращать на него внимания и приравнять к нулю остальную часть в квадратных скобках:
          </P>
          <BlockMath>{math`
            2x^2 - 3x - 1 - \frac{3}{x} + \frac{2}{x^2} = 0
          `}</BlockMath>
          <P>Сгруппируем рядышком слагаемые с переменной в одинаковой степени и вынесем лишнее за скобку:</P>
          <BlockMath>{math`
            2x^2 + \frac{2}{x^2} - 3x - \frac{3}{x} - 1 = 0 \\
            2\left(x^2 + \frac{1}{x^2}\right) - 3\left(x + \frac{1}{x}\right) - 1 = 0
          `}</BlockMath>
          <P>
            Обратите внимание, насколько похожие образовались конструкции в круглых скобках. Мешают только квадраты у{' '}
            <M>x</M> в левой круглой скобке. А как несколько квадратов превратить в один? Правильно, с помощью выделения
            полного квадрата!
          </P>
          <BlockMath>{math`
            x^2 + \frac{1}{x^2} = \underbrace{x^2 + \overbrace{2 \cdot \cancel{x} \cdot \frac{1}{\cancel{x}}}^{\small\yellow{2}} + \left(\frac{1}{x}\right)^2}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{2} = \left(x + \frac{1}{x}\right)^2 - 2
          `}</BlockMath>
          <P>
            Гениально, правда? Благодаря тому, что исходные слагаемые у нас обратны друг другу, они взаимоуничтожаются в
            центральном члене при выделении полного квадрата. И там остаётся только двойка без всяких переменных!
          </P>
          <P>Заменяем старое выражение с несколькими квадратами на единый квадрат:</P>
          <BlockMath>{math`
            2\left(x + \frac{1}{x}\right)^2 - 4 - 3\left(x + \frac{1}{x}\right) - 1 = 0 \\
            2\left(x + \frac{1}{x}\right)^2 - 3\left(x + \frac{1}{x}\right) - 5 = 0
          `}</BlockMath>
          <P>
            Вот теперь можно произвести замену переменной <M>{math`t = x + \dfrac{1}{x}`}</M>:
          </P>
          <BlockMath>{math`
            2t^2 - 3t - 5 = 0
          `}</BlockMath>
          <P>
            Решаем квадратное уравнение для <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = \frac{5}{2} >> t_2 = -1
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M> для корня <M>t_1</M>:
          </P>
          <BlockMath>{math`
            t_1 = x + \frac{1}{x} = \frac{5}{2} \\
            x + \frac{1}{x} = \frac{5}{2} \\
            2x + \frac{2}{x} = 5 \\
            2x^2 - 5x + 2 = 0 \\
            x_1 = 2, \qquad x_2 = \frac{1}{2}
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M> для корня <M>t_2</M>:
          </P>
          <BlockMath>{math`
            t_2 = x + \frac{1}{x} = -1 \\
            x + \frac{1}{x} = -1 \\
            x^2 + 1 = -x \\
            x^2 + x + 1 = 0 \\
            D = 1 - 4 = -3 < 0 \\
            \text{ (нет корней)}
          `}</BlockMath>
          <P>
            Итак, исходное уравнение имеет два корня: <M>x_1 = 2</M> и <M>{math`x_2 = \dfrac{1}{2}`}</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>6x^4 - 25x^3 + 12x^2 + 25x + 6 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[2, 3, [-0.5, '-1/2'], '-1/3']} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = 2 >> x_2 = -\frac{1}{2} >> x_3 = 3 >> x_4 = -\frac{1}{3}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Исходя из того, что <M>0</M> корнем не является, мы можем вынести <M>x^2</M> за скобки из всей левой части
            уравнения:
          </P>
          <BlockMath>{math`
            x^2\left[ 6x^2 - 25x + 12 + \frac{25}{x} + \frac{6}{x^2} \right] = 0
          `}</BlockMath>
          <P>Далее рассматриваем только правую часть уравнения в квадратных скобках:</P>
          <BlockMath>{math`
            6x^2 - 25x + 12 + \frac{25}{x} + \frac{6}{x^2} = 0 \\
            6x^2 + \frac{6}{x^2} - 25x + \frac{25}{x} + 12 = 0 \\
            6\left(x^2 + \frac{1}{x^2}\right) - 25\left(x - \frac{1}{x}\right) + 12 = 0
          `}</BlockMath>
          <P>
            В этот раз нам в левой скобке с квадратами надо выделить полный квадрат через квадрат разности, а не через
            квадрат суммы:
          </P>
          <BlockMath>{math`
            x^2 + \frac{1}{x^2} = \underbrace{x^2 - \overbrace{2 \cdot \cancel{x} \cdot \frac{1}{\cancel{x}}}^{\small\yellow{2}} + \left(\frac{1}{x}\right)^2}_{\small a^2 - 2ab + b^2 = (a-b)^2} + \yellow{2} = \left(x - \frac{1}{x}\right)^2 + 2
          `}</BlockMath>
          <P>Заменяем старое выражение с несколькими квадратами на единый квадрат:</P>
          <BlockMath>{math`
            6\left(x - \frac{1}{x}\right)^2 + 12 - 25\left(x - \frac{1}{x}\right) + 12 = 0 \\
            6\left(x - \frac{1}{x}\right)^2 - 25\left(x - \frac{1}{x}\right) + 24 = 0
          `}</BlockMath>
          <P>
            Производим замену переменной <M>{math`t = x - \dfrac{1}{x}`}</M>:
          </P>
          <BlockMath>{math`
            6t^2 - 25t + 24 = 0
          `}</BlockMath>
          <P>
            Решаем квадратное уравнение для <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = \frac{3}{2} >> t_2 = \frac{8}{3}
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M> для корня <M>t_1</M>:
          </P>
          <BlockMath>{math`
            t_1 = x - \frac{1}{x} = \frac{3}{2} \\
            x - \frac{1}{x} = \frac{3}{2} \\
            2x - \frac{2}{x} = 3 \\
            2x^2 - 3x - 2 = 0 \\
            x_1 = 2, \qquad x_2 = -\frac{1}{2}
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M> для корня <M>t_2</M>:
          </P>
          <BlockMath>{math`
            t_2 = x - \frac{1}{x} = \frac{8}{3} \\
            x - \frac{1}{x} = \frac{8}{3} \\
            3x - \frac{3}{x} = 8 \\
            3x^2 - 8x - 3 = 0 \\
            x_3 = 3, \qquad x_4 = -\frac{1}{3}
          `}</BlockMath>
          <P>Итак, исходное уравнение имеет четыре корня:</P>
          <BlockMath>{math`
            x_1 = 2 >> x_2 = -\frac{1}{2} >> x_3 = 3 >> x_4 = -\frac{1}{3}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>2x^4 - 15x^3 + 35x^2 - 30x + 8 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[1, 2, 4, ['1/2', 0.5]]} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = 1 >> x_2 = 2 >> x_3 = 4 >> x_4 = \frac{1}{2}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemHint>Это не совсем "зеркальное" уравнение, но решается точно по такому же алгоритму.</ProblemHint>
        <ProblemSolution>
          <P>
            Исходя из того, что <M>0</M> корнем не является, мы можем вынести <M>x^2</M> за скобки из всей левой части
            уравнения:
          </P>
          <BlockMath>{math`
            x^2\left[ 2x^2 - 15x + 35 - \frac{30}{x} + \frac{8}{x^2} \right] = 0
          `}</BlockMath>
          <P>Далее рассматриваем только правую часть уравнения в квадратных скобках:</P>
          <BlockMath>{math`
            2x^2 - 15x + 35 - \frac{30}{x} + \frac{8}{x^2} \\
            2x^2 + \frac{8}{x^2} - 15x - \frac{30}{x} + 35 = 0 \\
            2\left(x^2 + \frac{4}{x^2}\right) - 15\left(x + \frac{2}{x}\right) + 35 = 0
          `}</BlockMath>
          <P>Выделяем полный квадрат для левой скобки:</P>
          <BlockMath>{math`
            x^2 + \frac{4}{x^2} = \underbrace{x^2 + \overbrace{2 \cdot \cancel{x} \cdot \frac{2}{\cancel{x}}}^{\small\yellow{4}} + \left(\frac{2}{x}\right)^2}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{4} = \left(x + \frac{2}{x}\right)^2 - 4
          `}</BlockMath>
          <P>Заменяем старое выражение с несколькими квадратами на единый квадрат:</P>
          <BlockMath>{math`
            2\left(x + \frac{2}{x}\right)^2 - 8 - 15\left(x + \frac{2}{x}\right) + 35 = 0 \\
            2\left(x + \frac{2}{x}\right)^2 - 15\left(x + \frac{2}{x}\right) + 27 = 0
          `}</BlockMath>
          <P>
            Производим замену переменной <M>{math`t = x + \dfrac{2}{x}`}</M>:
          </P>
          <BlockMath>{math`
            2t^2 - 15t + 27 = 0
          `}</BlockMath>
          <P>
            Решаем квадратное уравнение для <M>t</M>:
          </P>
          <BlockMath>{math`
            t_1 = 3 >> t_2 = \frac{9}{2}
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M> для корня <M>t_1</M>:
          </P>
          <BlockMath>{math`
            t_1 = x + \frac{2}{x} = 3 \\
            x + \frac{2}{x} = 3 \\
            x^2 + 2 = 3x \\
            x^2 - 3x + 2 = 0 \\
            x_1 = 1, \qquad x_2 = 2
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M> для корня <M>t_2</M>:
          </P>
          <BlockMath>{math`
            t_2 = x + \frac{2}{x} = \frac{9}{2} \\
            2x + \frac{4}{x} = 9 \\
            2x^2 - 9x + 4 = 0 \\
            x_3 = 4, \qquad x_4 = \frac{1}{2}
          `}</BlockMath>
          <P>Итак, исходное уравнение имеет четыре корня:</P>
          <BlockMath>{math`
            x_1 = 1 >> x_2 = 2 >> x_3 = 4 >> x_4 = \frac{1}{2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^6 + x^5 - 6x^4 - 7x^3 - 6x^2 + x + 1 = 0`}</BlockMath>
        </ProblemDescription>
        <ProblemHint>
          <P>Воспользуйтесь формулой сокращенного умножения "куб суммы":</P>
          <BlockMath>{math`
            (a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3
          `}</BlockMath>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = \frac{3 + \sqrt{5}}{2} >> x_2 = \frac{3 - \sqrt{5}}{2} >> x_3 = \frac{-3 + \sqrt{5}}{2} >> x_4 = \frac{-3 - \sqrt{5}}{2}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Исходя из того, что <M>0</M> корнем не является, мы можем вынести <M>x^3</M> за скобки из всей левой части
            уравнения:
          </P>
          <BlockMath>{math`
            x^3\left[ x^3 + x^2 - 6x - 7 - \frac{6}{x} + \frac{1}{x^2} + \frac{1}{x^3} \right] = 0
          `}</BlockMath>
          <P>Далее рассматриваем только правую часть уравнения в квадратных скобках:</P>
          <BlockMath>{math`
            x^3 + x^2 - 6x - 7 - \frac{6}{x} + \frac{1}{x^2} + \frac{1}{x^3} = 0 \\
            x^3 + \frac{1}{x^3} + x^2 + \frac{1}{x^2} - 6\left(x + \frac{1}{x}\right) - 7 = 0
          `}</BlockMath>
          <P>Выделим "полный куб" через формулу суммы кубов слева:</P>
          <BlockMath>{math`
            x^3 + \frac{1}{x^3} = \\
            = \underbrace{x^3 + \overbrace{3 \cdot x^{\cancel{2}} \cdot \frac{1}{\cancel{x}}}^{\small\yellow{3x}} + \overbrace{3 \cdot \cancel{x} \cdot \frac{1}{x^{\cancel{2}}}}^{\small\yellow{\frac{3}{x}}} + \left(\frac{1}{x}\right)^3}_{\small a^3 + 3a^2b + 3ab^2 + b^3 = (a+b)^3} - 3x - \frac{3}{x} = \\
            = \left(x + \frac{1}{x}\right)^3 - 3\left(x + \frac{1}{x}\right)
          `}</BlockMath>
          <P>Выделяем полный квадрат в центре:</P>
          <BlockMath>{math`
            x^2 + \frac{1}{x^2} = \underbrace{x^2 + \overbrace{2 \cdot \cancel{x} \cdot \frac{1}{\cancel{x}}}^{\small\yellow{2}} + \left(\frac{1}{x}\right)^2}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{2} = \left(x + \frac{1}{x}\right)^2 - 2
          `}</BlockMath>
          <P>Заменяем старые выражения на новые:</P>
          <BlockMath>{math`
            \left(x + \frac{1}{x}\right)^3 - 3\left(x + \frac{1}{x}\right) + \left(x + \frac{1}{x}\right)^2 - 2 - 6\left(x + \frac{1}{x}\right) - 7 = 0 \\
            \left(x + \frac{1}{x}\right)^3 + \left(x + \frac{1}{x}\right)^2 - 9\left(x + \frac{1}{x}\right) - 9 = 0
          `}</BlockMath>
          <P>
            Вводим новую переменную <M>{math`t = x + \dfrac{1}{x}`}</M>:
          </P>
          <BlockMath>{math`
            t^3 + t^2 - 9t - 9 = 0
          `}</BlockMath>
          <P>
            Выносим за скобки <M>t</M> из первого и третьего слагаемых:
          </P>
          <BlockMath>{math`
            t(t^2 - 9) + (t^2 - 9) = 0 \\
            (t + 1)(t^2 - 9) = 0
          `}</BlockMath>
          <P>
            Из левой скобки получаем корень <M>t_1 = -1</M>, а из правой корни <M>t_2 = 3</M> и <M>t_3 = -3</M>.
          </P>
          <P>
            Возвращаемся к исходной переменной <M>x</M> для корня <M>t_1</M>:
          </P>
          <BlockMath>{math`
            t_1 = x + \frac{1}{x} = -1 \\
            x^2 + 1 = -x \\
            x^2 + x + 1 = 0 \\
            D = 1 - 4 = -3 < 0 \\
            \text{ (нет корней)}
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M> для корня <M>t_2</M>:
          </P>
          <BlockMath>{math`
            t_2 = x + \frac{1}{x} = 3 \\
            x^2 + 1 = 3x \\
            x^2 - 3x + 1 = 0 \\
            D = 9 - 4 = 5 \\
            x_1 = \frac{3 + \sqrt{5}}{2}, \qquad x_2 = \frac{3 - \sqrt{5}}{2}
          `}</BlockMath>
          <P>
            Возвращаемся к исходной переменной <M>x</M> для корня <M>t_3</M>:
          </P>
          <BlockMath>{math`
            t_3 = x + \frac{1}{x} = -3 \\
            x^2 + 1 = -3x \\
            x^2 + 3x + 1 = 0 \\
            D = 9 - 4 = 5 \\
            x_3 = \frac{-3 + \sqrt{5}}{2}, \qquad x_4 = \frac{-3 - \sqrt{5}}{2}
          `}</BlockMath>
          <P>Итак, исходное уравнение имеет четыре корня:</P>
          <BlockMath>{math`
            x_1 = \frac{3 + \sqrt{5}}{2} >> x_2 = \frac{3 - \sqrt{5}}{2} >> x_3 = \frac{-3 + \sqrt{5}}{2} >> x_4 = \frac{-3 - \sqrt{5}}{2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>
  </>
));
