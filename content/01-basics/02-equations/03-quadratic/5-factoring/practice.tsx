import article from './article';

// #region Assets
//
//

import interestingDots from './assets/plane-interesting-dots.svg';
import planeSymmetry from './assets/plane-symmetry.svg';

//
//
// #endregion

// #region Scripts
//
//

import mentalRoots from './scripts/mental-roots';
import thereAndBack from './scripts/there-and-back';
import factoring from './scripts/factor-quadratic';

//
//
// #endregion

// #region Links
//
//

const biquadraticEquation = $CONTENT.basics.equations.quadratic.quadraticFormula.article.$biquadratic;

//
//
// #endregion

export default defineProse()(() => (
  <>
    <Problem title="К гадалке не ходи" level="easy" script={mentalRoots()} />

    <Problem title="Туда и обратно" level="easy" script={thereAndBack()} />

    <Problem
      title="Разложение на множители"
      level="easy"
      snippet={{
        seo: 'Задачи на разложение квадратного трёхчлена на множители',
        description: `
          Бесконечно генерируемые задачи на отработку навыка разложения квадратного трёхчлена на множители через его корни.
        `,
      }}
      script={factoring()}
    />

    <Problems title="Скобочный беспредел" level="medium">
      <P>Упростите уравнение до набора множителей и найдите корни:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x + 5)(x - 1) = 3x + 7`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x+4)(x-3)" />
        <RootsCheck roots={[-4, 3]} />
        <ProblemAnswer>
          <BlockMath>{math`(x + 4)(x - 3) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем скобки в левой части:</P>
          <BlockMath>{math`
            x^2 + 4x - 5 = 3x + 7
          `}</BlockMath>
          <P>Группируем все данные с одной стороны равенства, например, с левой:</P>
          <BlockMath>{math`
            x^2 + 4x - 5 - 3x - 7 = 0 \\
            x^2 + x - 12 = 0
          `}</BlockMath>
          <P>
            Разложим на множители. Какие два числа дают в сумме <M>1</M>, а в произведении <M>-12</M>? Это числа{' '}
            <M>4</M> и <M>-3</M>:
          </P>
          <BlockMath>{math`(x + 4)(x - 3) = 0`}</BlockMath>
          <P>
            Корнями тогда будут числа, противоположные тем, что стоят рядом с <M>x</M> в каждой скобке: <M>-4</M> и{' '}
            <M>3</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x + 4)(x - 1) = 2(x + 1)`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x+3)(x-2)" />
        <RootsCheck roots={[-3, 2]} />
        <ProblemAnswer>
          <BlockMath>{math`(x + 3)(x - 2) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем скобки с обеих сторон:</P>
          <BlockMath>{math`
            x^2 + 3x - 4 = 2x + 2
          `}</BlockMath>
          <P>Группируем все слева:</P>
          <BlockMath>{math`
            x^2 + 3x - 4 - 2x - 2 = 0 \\
            x^2 + x - 6 = 0
          `}</BlockMath>
          <P>
            Раскладываем на множители. Сумма должна быть равна <M>1</M>, а произведение <M>-6</M>. Это числа <M>3</M> и{' '}
            <M>-2</M>:
          </P>
          <BlockMath>{math`(x + 3)(x - 2) = 0`}</BlockMath>
          <P>
            Корнями будут числа, противоположные тем, что стоят рядом с <M>x</M> в каждой скобке: <M>-3</M> и <M>2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(2x + 1)(x - 4) - (x - 3)(x + 2) + 3 = 0`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x-1)(x-5)" />
        <RootsCheck roots={[1, 5]} />
        <ProblemAnswer>
          <BlockMath>{math`(x - 1)(x - 5) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем скобки:</P>
          <BlockMath>{math`
            2x^2 - 4x + x - 4 - (x^2 + 2x - 3x - 6) + 3 = 0 \\
            2x^2 - 7x - 4 - (x^2 - x - 6) + 3 = 0 \\
            2x^2 - 7x - 4 - x^2 + x + 6 + 3 = 0 \\
            x^2 - 6x + 5 = 0
          `}</BlockMath>
          <P>
            Раскладываем на множители. В сумме должно быть <M>-6</M>, а в произведении <M>5</M>. Это числа <M>-1</M> и{' '}
            <M>-5</M>:
          </P>
          <BlockMath>{math`(x - 1)(x - 5) = 0`}</BlockMath>
          <P>
            Корнями будут числа, противоположные тем, что стоят рядом с <M>x</M> в каждой скобке: <M>1</M> и <M>5</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x + 3)(x - 2) + (x - 4)(x + 1) = (x + 5)(x - 6) + 26`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x-3)(x+2)" />
        <RootsCheck roots={[-2, 3]} />
        <ProblemAnswer>
          <BlockMath>{math`(x - 3)(x + 2) = 0`}</BlockMath>
        </ProblemAnswer>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x + 2)^2 + (x - 3)^2 = (x + 1)(x - 1) + 22`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x-4)(x+2)" />
        <RootsCheck roots={[-2, 4]} />
        <ProblemAnswer>
          <BlockMath>{math`(x - 4)(x + 2) = 0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем квадраты слева и произведение справа по формулам сокращённого умножения:</P>
          <BlockMath>{math`
            (x + 2)^2 = x^2 + 4x + 4 \\
            (x - 3)^2 = x^2 - 6x + 9 \\
            (x + 1)(x - 1) = x^2 - 1
          `}</BlockMath>
          <P>Подставляем:</P>
          <BlockMath>{math`
            (x^2 + 4x + 4) + (x^2 - 6x + 9) = (x^2 - 1) + 22 \\
            2x^2 - 2x + 13 = x^2 + 21
          `}</BlockMath>
          <P>Группируем слева:</P>
          <BlockMath>{math`
            x^2 - 2x - 8 = 0
          `}</BlockMath>
          <P>
            Раскладываем на множители. В сумме должно быть <M>-2</M>, а в произведении <M>-8</M>. Это числа <M>-4</M> и{' '}
            <M>2</M>:
          </P>
          <BlockMath>{math`(x - 4)(x + 2) = 0`}</BlockMath>
          <P>
            Корнями будут числа, противоположные тем, что стоят рядом с <M>x</M> в каждой скобке: <M>4</M> и <M>-2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems title="Мастер обеих стихий" level="medium" pretty>
      <P>
        В совершенстве овладейте искусством работы с квадратными трёхчленами, которые записаны сразу в двух формах:
        через сумму и через множители (инь и янь). Упростите выражение:
      </P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x - 3)(x + 5) - x^2 + 9`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Ответ" answer="2(x - 3)" />
        <ProblemAnswer>
          <BlockMath>2(x - 3)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем скобки и в конце выносим за скобки общий множитель:</P>
          <BlockMath>{math`
            (x - 3)(x + 5) - x^2 + 9 = \\
            = x^2 + 5x - 3x - 15 - x^2 + 9 = \\
            = \cancel{x^2} + 2x - 15 - \cancel{x^2} + 9 = \\
            = 2x - 6 = 2(x - 3)
          `}</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          Без раскрытия скобок упростить это выражение не получится -- слагаемые в разных "формах", слева через
          множители, справа через сумму. Но стоило раскрыть скобки, как <M>x^2</M> взаимоуничтожились и остался простой
          линейный член.
        </ProblemNote>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2 + 5x + 6}{x + 2} - (x - 1)`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Ответ" answer="4" />
        <ProblemAnswer>
          <BlockMath>4</BlockMath>
        </ProblemAnswer>
        <ProblemHint>Разложите числитель дроби на множители.</ProblemHint>
        <ProblemSolution>
          <P>Раскладываем числитель дроби на множители:</P>
          <BlockMath>{math`
            x^2 + 5x + 6 = (x + 2)(x + 3)
          `}</BlockMath>
          <P>Подставляем и сокращаем:</P>
          <BlockMath>{math`
            \frac{\cancel{(x + 2)}(x + 3)}{\cancel{x + 2}} - (x - 1) = \\
            = (x + 3) - (x - 1) = \\
            = \cancel{x} + 3 - \cancel{x} + 1 = 4
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{(x + 1)(x - 4) + 2x + 2}{x - 2}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Ответ" answer="x + 1" />
        <ProblemAnswer>
          <BlockMath>x + 1</BlockMath>
        </ProblemAnswer>
        <ProblemHint>
          Раскройте скобки в числителе, приведите подобные слагаемые и снова разложите на множители.
        </ProblemHint>
        <ProblemSolution>
          <P>Раскрываем произведение в числителе:</P>
          <BlockMath>{math`
            (x + 1)(x - 4) + 2x + 2 = \\
            = x^2 - 4x + x - 4 + 2x + 2 = \\
            = x^2 - x - 2
          `}</BlockMath>
          <P>
            Разложим получившийся трёхчлен на множители. Какие числа в сумме дают <M>-1</M>, а в произведении <M>-2</M>?
            Это <M>1</M> и <M>-2</M>:
          </P>
          <BlockMath>{math`
            x^2 - x - 2 = (x + 1)(x - 2)
          `}</BlockMath>
          <P>Подставляем упрощённый числитель обратно в дробь и сокращаем:</P>
          <BlockMath>{math`
            \frac{(x + 1)\cancel{(x - 2)}}{\cancel{x - 2}} = x + 1
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x - 2)(x + 4) - (x - 1)(x + 1)`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Ответ" answer="2x - 7" />
        <ProblemAnswer>
          <BlockMath>2x - 7</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Раскрываем обе пары скобок:</P>
          <BlockMath>{math`
            (x - 2)(x + 4) - (x - 1)(x + 1) = \\
            = (x^2 + 4x - 2x - 8) - (x^2 - 1) = \\
            = \cancel{x^2} + 2x - 8 - \cancel{x^2} + 1 = \\
            = 2x - 7
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2 - 7x + 12}{x - 3} + \frac{(x + 2)(x - 2) - x^2}{x + 5}`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Ответ" answer="x - 4 - 4/(x + 5)" />
        <ProblemAnswer>
          <BlockMath>{math`x - 4 - \frac{4}{x + 5}`}</BlockMath>
        </ProblemAnswer>
        <ProblemHint>
          В первой дроби разложите числитель на множители. Во второй дроби раскройте скобки в числителе.
        </ProblemHint>
        <ProblemSolution>
          <P>Разбираемся с первой дробью. Раскладываем числитель на множители:</P>
          <BlockMath>{math`
            x^2 - 7x + 12 = (x - 3)(x - 4)
          `}</BlockMath>
          <P>Сокращаем:</P>
          <BlockMath>{math`
            \frac{\cancel{(x - 3)}(x - 4)}{\cancel{x - 3}} = x - 4
          `}</BlockMath>
          <P>Разбираемся со второй дробью. Раскрываем скобки в числителе:</P>
          <BlockMath>{math`
            (x + 2)(x - 2) - x^2 = x^2 - 4 - x^2 = -4
          `}</BlockMath>
          <P>Получаем:</P>
          <BlockMath>{math`
            (x - 4) + \frac{-4}{x + 5} = x - 4 - \frac{4}{x + 5}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Problems
      title="Разложение биквадратных трёхчленов"
      level="hard"
      snippet={{
        key: 'Разложение биквадратных',
        seo: 'Разложение биквадратного трёхчлена на множители',
        description: `
          Задачи на отработку разложения биквадратных трёхчленов на множители через промежуточную подстановку.
        `,
      }}
    >
      <P>
        Разложите <Dep on={biquadraticEquation}>биквадратный трёхчлен</Dep> на множители, насколько это возможно:
      </P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^4 - 5x^2 + 4</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x-1)(x+1)(x-2)(x+2)" />
        <ProblemAnswer>
          <BlockMath>(x - 1)(x + 1)(x - 2)(x + 2)</BlockMath>
        </ProblemAnswer>
        <ProblemHint>
          Сначала разложите на множители для переменной <M>t = x^2</M>, а затем продолжите разложение для переменной{' '}
          <M>x</M>.
        </ProblemHint>
        <ProblemSolution>
          <P>
            Делаем замену <M>t = x^2</M>:
          </P>
          <BlockMath>{math`t^2 - 5t + 4`}</BlockMath>
          <P>
            Какие два числа в сумме дают <M>-5</M>, а при умножении <M>4</M>? Это <M>-1</M> и <M>-4</M>:
          </P>
          <BlockMath>{math`t^2 - 5t + 4 = (t - 1)(t - 4)`}</BlockMath>
          <P>
            Возвращаемся к переменной <M>x</M>:
          </P>
          <BlockMath>{math`
            (x^2 - 1)(x^2 - 4)
          `}</BlockMath>
          <P>Каждая из скобок является разностью квадратов:</P>
          <BlockMath>{math`
            \underbrace{(x - 1)(x + 1)}_{\small x^2 - 1}\underbrace{(x - 2)(x + 2)}_{\small x^2 - 4}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^4 - 13x^2 + 36</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x-2)(x+2)(x-3)(x+3)" />
        <ProblemAnswer>
          <BlockMath>(x - 2)(x + 2)(x - 3)(x + 3)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Делаем замену <M>t = x^2</M>:
          </P>
          <BlockMath>{math`t^2 - 13t + 36 = (t - 4)(t - 9)`}</BlockMath>
          <P>
            Возвращаемся к <M>x</M> и раскладываем разности квадратов:
          </P>
          <BlockMath>{math`
            (x^2 - 4)(x^2 - 9) = (x - 2)(x + 2)(x - 3)(x + 3)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^4 + 3x^2 - 4</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x-1)(x+1)(x^2+4)" />
        <ProblemAnswer>
          <BlockMath>(x - 1)(x + 1)(x^2 + 4)</BlockMath>
        </ProblemAnswer>
        <ProblemHint>Один из квадратных множителей дальше раскладывается, а другой -- нет.</ProblemHint>
        <ProblemSolution>
          <P>
            Делаем замену <M>t = x^2</M>:
          </P>
          <BlockMath>{math`t^2 + 3t - 4 = (t - 1)(t + 4)`}</BlockMath>
          <P>
            Возвращаемся к <M>x</M>:
          </P>
          <BlockMath>{math`(x^2 - 1)(x^2 + 4)`}</BlockMath>
          <P>
            Первая скобка <M>(x^2 - 1)</M> -- разность квадратов, раскладывается на <M>(x - 1)(x + 1)</M>. А вот вторая
            скобка <M>(x^2 + 4)</M> -- сумма квадратов, и дальше разложить её на множители не получится. Итого:
          </P>
          <BlockMath>{math`(x - 1)(x + 1)(x^2 + 4)`}</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          Если все "корни для переменной <M>t</M>" положительные, то каждую скобку можно разложить на два линейных
          множителя через разность квадратов. Если один или даже оба "корня для переменной <M>t</M>" отрицательные, то
          соответствующая скобка будет "суммой квадратов" и дальше не раскладывается.
        </ProblemNote>
      </SubProblem>
    </Problems>

    <Problems title="Исследование плоскости трёхчленов" level="hard">
      <P>
        Давайте вместе поизучаем <Dep on={article.uniques.trinomialsPlane}>координатную плоскость</Dep> "прямоугольных"
        квадратных трёхчленов:
      </P>
      <SubProblem label="Особые виды">
        <ProblemDescription>
          <P>
            Изучите, какого вида квадратные трёхчлены получаются в местах, отмеченных красными точками. Опишите общий
            вид и приведите по паре примеров с конкретными числами.
          </P>
          <Image src={interestingDots} invert="dark" width="500px" />
        </ProblemDescription>
        <ProblemAnswer>
          <ProblemSection title="Центр координат">
            <P>
              В центре координат обе переменные равны нулю <M>t = k = 0</M>. Получается вот такое разложение и
              квадратный трёхчлен:
            </P>
            <BlockMath>(x+0)(x+0) = x \cdot x = x^2</BlockMath>
          </ProblemSection>
          <ProblemSection title="Оси Ot и Ok">
            <P>
              Что на оси <M>Ot</M>, что на <M>Ok</M>, какое-то из чисел окажется равным <M>0</M>. Поэтому точки,
              расположенные на этих осях, будут иметь общий вид <M>(x+0)(x+k)</M> или <M>(x+t)(x+0)</M> и производить
              квадратные трёхчлены без свободного члена <M>C</M>:
            </P>
            <BlockMath>{math`x(x-2) = x^2 - 2x >> (x+8)x = x^2 + 8x >> \left(x - \frac{\sqrt{2}}{2}\right)x = x^2 - \frac{\sqrt{2}}{2}x`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Диагональ под 45 градусов">
            <P>
              На этой диагонали числа <M>t</M> и <M>k</M> одинаковые и по значению, и по знаку. Все точки на этой
              диагонали образуют полные квадраты либо через квадрат суммы (положительные <M>t</M> и <M>k</M>), либо
              через квадрат разности (отрицательные <M>t</M> и <M>k</M>):
            </P>
            <BlockMath>{math`(x+2)^2 = x^2 + 4x + 4 >> (x-1)^2 = x^2 - 2x + 1 >> \left(x + \frac{\sqrt{3}}{2}\right)^2 = x^2 + \sqrt{3}x + \frac{3}{4}`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Диагональ под -45 градусов">
            <P>
              На этой диагонали числа <M>t</M> и <M>k</M> одинаковые по значению, но противоположные по знаку. Абсолютно
              все точки на этой прямой образуют разность квадратов:
            </P>
            <BlockMath>{math`(x-2)(x+2) = x^2 - 4 >> (x+10)(x-10) = x^2 - 100`}</BlockMath>
          </ProblemSection>
        </ProblemAnswer>
      </SubProblem>
      <SubProblem label="Симметричные точки">
        <ProblemDescription>
          <P>
            В чём сходства и различия квадратных трёхчленов, которые образованы точками, симметричными относительно
            начала координат? Изучите поведение коэффициентов <M>B</M> и <M>C</M>, а также поведение корней
            соответствующих уравнений.
          </P>
          <Image src={planeSymmetry} invert="dark" width="500px" />
        </ProblemDescription>
        <ProblemAnswer>
          <ProblemSection title="Первая и третья четверти">
            <P>
              Симметричные точки в первой и третьей четвертях координатной плоскости образуют пары чисел <M>t</M> и{' '}
              <M>k</M> одинаковые по значению, но с противоположными знаками:
            </P>
            <BlockMath>(x+3)(x+10) = x^2 + 13x + 30 \quad | \quad (x-3)(x-10) = x^2 - 13x + 30</BlockMath>
            <P>
              Получающиеся квадратные трёхчлены отличаются только знаком коэффициента <M>B</M>, при этом коэффициент{' '}
              <M>C</M> всегда положительный. Корни соответствующих уравнений тоже одинаковые по значению, но с
              противоположными знаками.
            </P>
          </ProblemSection>
          <ProblemSection title="Вторая и четвёртая четверти">
            <P>
              Ситуация точно такая же, но коэффициент <M>C</M> всегда отрицательный:
            </P>
            <BlockMath>(x-3)(x+10) = x^2 + 7x - 30 \quad | \quad (x+3)(x-10) = x^2 - 7x - 30</BlockMath>
          </ProblemSection>
        </ProblemAnswer>
      </SubProblem>
      <SubProblem label="Третий лишний">
        <ProblemDescription>Имеются ли на этой координатной плоскости "лишние" четверти?</ProblemDescription>
        <ProblemHint>Возможно, какие-то из плоскостей дают одинаковые квадратные трёхчлены?</ProblemHint>
        <ProblemAnswer>
          <P>
            Лишней является либо вторая четверть, либо четвёртая четверть, так как получаемые в них квадратные трёхчлены
            ничем друг от друга не отличаются. Разницы нет, потому что от перестановки мест множителей произведение не
            меняется:
          </P>
          <BlockMath>{math`
            x^2 + 7x - 30 = \underbrace{(x-3)(x+10)}_{\small\text{Вторая четверть}} = \underbrace{(x+10)(x-3)}_{\small\text{Четвёртая четверть}} = x^2 + 7x - 30
          `}</BlockMath>
        </ProblemAnswer>
      </SubProblem>
    </Problems>
  </>
));
