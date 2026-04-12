// #region Assets
//
//

import areYouAdvancedMeme from './assets/are-you-advanced.mp4';
import methodSquareSchema from './assets/method-square.svg';
import methodFactoringSchema from '../5-factoring/assets/factoring-step-1.svg';
import methodAtoCSchema from './assets/method-A-to-C-schema.svg';

//
//
// #endregion

// #region Scripts
//
//

import zeroSumScript from './scripts/zero-sum';
import perfectSquareScript from './scripts/perfect-square';
import factoringScript from './scripts/factoring';
import atoCScript from './scripts/a-to-c';
import mixedScript from './scripts/mixed';

//
//
// #endregion

// #region Links
//
//

const zeroProductProperty = $CONTENT.foundations.equations.zeroProductProperty;
const incompleteQuadratics = $CONTENT.foundations.equations.quadratic.incomplete;
const incompleteQuadraticsDef = $CONTENT.foundations.equations.quadratic.incomplete.article.$quadraticMissingTerms;
const quadraticFormula = $CONTENT.foundations.equations.quadratic.quadraticFormula.article.$formula;
const oneRootOne = $CONTENT.foundations.equations.quadratic.factoring.practice.$oneRootOne;
const vietasFormulas = $CONTENT.foundations.equations.quadratic.vietasFormulas.article.$vietasFormulas;
const manualFactoring = $CONTENT.foundations.equations.quadratic.factoring.article.$manualFactoring;
const factoringSigns = $CONTENT.foundations.equations.quadratic.factoring.practice.$factoringSigns;

//
//
// #endregion

export default defineProse({
  uniques: {
    methodsIncomplete: Diagram,
    methodZeroSum: Statement,
    methodSquare: Statement,
    methodFactoring: Statement,
    methodAtoC: Statement,
    methodsAll: Diagram,
    methodsAllPractice: Problem,
    factorizationSigns: Statement,
  },
})(({ uniques }) => (
  <>
    <P>
      Любые квадратные уравнения можно решить при помощи <Ref to={quadraticFormula}>общей формулы корней</Ref>. Но
      существуют отдельные адепты, которые любят делать всё быстро в уме и ненавидят что-то записывать на бумаге. Если
      вы тоже из таких, то вы попали прямо по адресу!
    </P>

    <P>
      У решения квадратных уравнений в уме есть и реальный плюс -- почти всегда в школах, а частенько и в университетах
      квадратные уравнения специально подбираются так, чтобы у них были "красивые" корни в виде целых чисел. Обладая
      навыком решать их в уме вы будете <B>тратить в разы меньше времени</B> на их решение. Ну и ещё у ваших
      одноклассников будут глаза округляться от черной математической магии, которую вы применяете. Нам всем хочется
      чувствовать себя Гауссами или Эйлерами, правда? 😏
    </P>

    <Important title="Научитесь решать письменно!">
      Прежде чем пытаться решать квадратные уравнения в уме, выработайте навык уверенно решать их письменно.{' '}
      <B accent>Бесполезно и бессмысленно</B> решать в уме то, что вы плохо умеете выполнять даже на бумаге!
    </Important>

    <H1>Неполные уравнения</H1>

    <P>
      Все <Dep on={incompleteQuadraticsDef}>неполные квадратные уравнения</Dep> можно (и нужно) решать в уме. В отличие
      от полноценных квадратных уравнений, в неполных даже угадывать ничего не надо. Они всегда решаются и всегда
      элементарно!
    </P>

    <Diagram
      $={uniques.methodsIncomplete}
      snippet={{
        key: true,
        seo: 'Решение неполных квадратных уравнений в уме',
        title: 'Решение неполных',
        description: `
          Все неполные квадратные уравнения решаются в уме при помощи одной из трех формул.
          Не нужно ничего угадывать.
          Находится решение элементарно.
        `,
      }}
    >
      {math`
        flowchart TD
          methods["**Решение в уме**<br />Неполные квадратные"]

          methods --> methodB0["
            **B равен 0**
            $$ \begin{aligned} Ax^2 + C = 0 \\ 5x^2 - 20 = 0 \end{aligned} $$
          "]
          methodB0 --> rootsB0["$$x_{1,2} = \pm\sqrt{-\frac{C}{A}}$$"]

          methods --> methodC0["
            **C равен 0**
            $$ \begin{aligned} Ax^2 + Bx = 0 \\ 3x^2 + 12x = 0 \end{aligned} $$
          "]
          methodC0 --> root1C0["$$x_1 = 0$$"]
          methodC0 -->|1-я формула Виета| root2C0["$$x_2 = -\frac{B}{A}$$"]

          methods --> methodBC0["
            **B и C равны 0**
            $$ \begin{aligned} Ax^2 = 0 \\ 4x^2 = 0 \end{aligned} $$
          "]
          methodBC0 --> rootBC0["$$x_1 = x_2 = 0$$"]

        class methodB0,methodC0,methodBC0 fill
      `}
      <Caption>Схема способов решения неполных квадратных уравнений в уме</Caption>
    </Diagram>

    <P>
      Для продвинутого уровня вопросов "откуда взялись эти формулы?" появиться не должно. Вы ведь продвинутого уровня и
      зашли сюда не по приколу, так? 👀
    </P>

    <Video src={areYouAdvancedMeme} autoplay />

    <P>
      Шутка 😏 Но если всё же возникли сложности, с подробным выводом всего этого можно ознакомиться в теме про{' '}
      <Dep on={incompleteQuadratics}>неполные квадратные уравнения</Dep>. Далее будем рассматривать только полноценные
      квадратные уравнения, с которыми всё сильно хитрее...
    </P>

    <H1>Нулевая сумма</H1>

    <P>
      Самый быстрый и лёгкий метод. Его полезно знать вообще всем увлекающимся математикой и без разницы, есть ли
      намерение научиться решать квадратные уравнения в уме или нет.
    </P>

    <Statement
      $={uniques.methodZeroSum}
      title="Нулевая сумма"
      snippet={{
        key: true,
        seo: 'Решение квадратных уравнений в уме по сумме коэффициентов',
        description: `
          Нулевая сумма коэффициентов позволяет моментально получить корни.
          Это самый простой и полезный способ решать квадратные уравнения в уме.
        `,
      }}
    >
      <StatementMain>
        <P>
          Если сумма коэффициентов квадратного уравнения равна <M>0</M>, то один из корней равен <M>1</M>, а второй{' '}
          <M>C/A</M>. Если в сумме взять отрицательное <M>-B</M>, то корни тоже будут отрицательными:
        </P>
        <BlockMath>{math`
          A + B + C = 0 \\
          \boxed{x_1 = 1 \quad x_2 = \frac{C}{A}}
          >>{big}
          A - B + C = 0 \\
          \boxed{x_1 = -1 \quad x_2 = -\frac{C}{A}}
        `}</BlockMath>
      </StatementMain>
      <StatementProof>
        Смотрите доказательство в решении задачи <Dep on={oneRootOne}>Один корень один</Dep>.
      </StatementProof>
    </Statement>

    <P>
      С корнями <M>1</M> и <M>-1</M> понятно, а как не забыть, чему равен второй корень? Можно и забыть, ничего
      страшного. Для нахождения второго корня просто воспользуйтесь второй <Dep on={vietasFormulas}>формулой Виета</Dep>
      , которая про умножение:
    </P>

    <BlockMath>{math`
      x_1 \cdot x_2 = \frac{C}{A} >>{big}
      \pm 1 \cdot x_1 = \pm \frac{C}{A}
    `}</BlockMath>

    <P>
      Теперь посмотрите на образцы решения и прочно отработайте этот метод решения квадратных уравнений в уме на
      реальных примерах:
    </P>

    <Problems title="Нулевая сумма -- Практика" level="easy" method>
      <P>
        В уме определите, можно ли решить квадратное уравнение по{' '}
        <Dep on={uniques.methodZeroSum}>методу нулевой суммы</Dep>. Если можно, решите его также в уме. Если нельзя,
        объясните почему.
      </P>

      <SubProblem label="Сумма с плюсом">
        <ProblemDescription>
          <BlockMath>{math`2x^2 + 3x - 5 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[1, '-5/2']} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = 1 >>{big} x_2 = -\frac{5}{2}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Сумма коэффициентов равна нулю:</P>
          <BlockMath>2 + 3 - 5 = 0</BlockMath>
          <P>
            Значит один корень равен <M>1</M>, а второй высчитывается по формуле <M>C/A</M>:
          </P>
          <BlockMath>{math`
            x_1 = 1 >>{big}
            x_2 = \frac{-5}{2}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Сумма с минусом">
        <ProblemDescription>
          <BlockMath>{math`4y^2 + 5y + 1 = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-1, '-1/4']} />
        <ProblemAnswer>
          <BlockMath>{math`
            y_1 = -1 >>{big} y_2 = -\frac{1}{4}
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Сумма коэффициентов с отрицательным <M>B</M> равна нулю:
          </P>
          <BlockMath>4 - 5 + 1 = 0</BlockMath>
          <P>
            Значит один корень равен <M>-1</M>, а второй высчитывается по формуле <M>-C/A</M>:
          </P>
          <BlockMath>{math`
            y_1 = -1 >>{big}
            y_2 = -\frac{1}{4}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Отработка" script={zeroSumScript()} />
    </Problems>

    <P>
      Из-за своей простоты и эффективности выполнять проверку на сумму коэффициентов стоит абсолютно всегда, прежде чем
      решать вручную или переходить к более хитрым методам решения в уме. Времени занимает пару секунд, а решение
      получается моментально.
    </P>

    <H1>Выделение полного квадрата</H1>

    <P>
      Если и существуют формулы, которые никогда не бросят вас в беде, так это формулы сокращенного умножения. А
      конкретно формулы квадрата суммы и квадрата разности:
    </P>

    <BlockMath>{math`a^2 + 2ab + b^2 = (a + b)^2 >>{big} a^2 - 2ab + b^2 = (a - b)^2`}</BlockMath>

    <P>
      Если повезет, то квадратное уравнение целиком получится запаковать в скобку в квадрате и сразу же получить корень!
    </P>

    <Statement
      $={uniques.methodSquare}
      title="Полный квадрат"
      snippet={{
        key: true,
        seo: 'Решение квадратных уравнений в уме через полный квадрат',
        description: `
          Иногда квадратное уравнение можно целиком запаковать в квадрат суммы или разности.
          В таком случае у него будет один корень, который находится элементарно.
        `,
      }}
    >
      <StatementMain>
        <P>
          Если <B>оба</B> "крайних" коэффициента <M>A</M> и <M>C</M> квадратного уравнения являются полными квадратами (
          <M>1, 2, 4, 9, \ldots</M>), то возможно и всё уравнение целиком можно запаковать в квадрат суммы или квадрат
          разности. Это зависит от того, можно ли разложить "центральный" коэффициент <M>B</M> на произведение <M>2</M>{' '}
          и корней из двух других коэффициентов:
        </P>
        <Image src={methodSquareSchema} invert="dark" width="300px" />
        <P>
          Если такая запаковка возможна, то у уравнения есть ровно <B>один</B> корень, причём знак этого корня{' '}
          <B>противоположен</B> знаку перед коэффициентом <M>B</M>:
        </P>
        <BlockMath>{math`\boxed{x_1 = x_2 = \mp\frac{T}{K}}`}</BlockMath>
      </StatementMain>
      <StatementProof>
        <P>Предположим, что квадратное уравнение всё же можно запаковать в квадрат суммы или квадрат разности:</P>
        <BlockMath>{math`
          Ax^2 \pm Bx + C = 0 \\
          (Kx)^2 \pm 2 \cdot Kx \cdot T + (T)^2 = 0 \\
          (Kx \pm T)^2 = 0 \\
          (Kx \pm T)(Kx \pm T) = 0
        `}</BlockMath>
        <P>
          Это уравнение можно решить по <Dep on={zeroProductProperty}>методу нулевых множителей</Dep>. Так обе скобки
          одинаковые, достаточно только одну из них приравнять к нулю и получить единственный корень уравнения:
        </P>
        <BlockMath>{math`
          Kx \pm T = 0 \\
          Kx = \mp T \\
          \boxed{x = \mp \frac{T}{K}}
        `}</BlockMath>
        <QED />
      </StatementProof>
    </Statement>

    <P>
      Как запомнить, какое число в формуле корня находится в числителе, а какое в знаменателе? Элементарно! Во всех
      наших действиях и формулах с квадратными трехчленами и уравнениями (
      <Ref to={quadraticFormula}>формула корней</Ref>, <Ref to={vietasFormulas}>формулы Виета</Ref>, да даже описанный
      выше <Ref to={uniques.methodZeroSum}>метод нулевой суммы</Ref>) всё время так получается, что коэффициент <M>A</M>{' '}
      <B>всегда оказывается "внизу"</B>. Опущенный коэффициент какой-то.
    </P>

    <P>
      Вот и в текущей формуле число <M>K</M> мы получили из <M>A</M>! И эта <M>K</M> "по наследству" переняла черту
      находиться снизу. Поэтому именно <M>K</M> находится в знаменателе! А вот так этот метод работает на реальных
      уравнениях:
    </P>

    <Problems title="Полный квадрат -- Практика" level="medium" method>
      <P>
        Если возможно по <Dep on={uniques.methodSquare}>методу полного квадрата</Dep>, решите его также в уме. Если
        невозможно, объясните почему.
      </P>

      <SubProblem label="С плюсом">
        <ProblemDescription>
          <BlockMath>{math`36x^2 + 6x + \frac{1}{4} = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck root="-1/12" />
        <ProblemHint>
          Дробь <M>1/4</M> это квадрат дроби <M>1/2</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`-\frac{1}{12}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Коэффициенты <M>A</M> и <M>C</M> являются полными квадратами:
          </P>
          <BlockMath>{math`
            36 = 6^2 >>{big} \frac{1}{4} = \left(\frac{1}{2}\right)^2
          `}</BlockMath>
          <P>
            Коэффициент <M>B</M> можно разложить на множители, состоящие из <M>2</M> и корней двух других коэффициентов:
          </P>
          <BlockMath>{math`
            6x = 2 \cdot 6x \cdot \frac{1}{2}
          `}</BlockMath>
          <P>Везде знаки плюса, значит можно это квадратное уравнение запаковать в квадрат суммы:</P>
          <BlockMath>{math`\left( 6x + \frac{1}{2} \right)^2 = 0`}</BlockMath>
          <P>
            По формуле находим корень. Раз перед <M>B</M> у нас знак плюса в исходном уравнении, то у корня будет знак
            минуса:
          </P>
          <BlockMath>{math`
            x = - \frac{\frac{1}{2}}{6} = -\frac{1}{2 \cdot 6} = - \frac{1}{12}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="С минусом">
        <ProblemDescription>
          <BlockMath>4y^2 - 28y + 49 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck root="7/2" />
        <ProblemAnswer>
          <BlockMath>{math`\frac{7}{2}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Коэффициенты <M>A</M> и <M>C</M> являются полными квадратами:
          </P>
          <BlockMath>{math`
            4 = 2^2 >>{big} 49 = 7^2
          `}</BlockMath>
          <P>
            Коэффициент <M>B</M> можно разложить на множители, состоящие из <M>2</M> и корней двух других коэффициентов:
          </P>
          <BlockMath>{math`
            28y = 2 \cdot 2y \cdot 7
          `}</BlockMath>
          <P>
            Перед коэффициентом <M>B</M> стоит минус, у остальных коэффициентов плюсы. Значит можно это квадратное
            уравнение запаковать в квадрат разности:
          </P>
          <BlockMath>{math`(2y - 7)^2 = 0`}</BlockMath>
          <P>
            По формуле находим корень. Раз перед <M>B</M> у нас знак минуса, то у корня будет плюс:
          </P>
          <BlockMath>{math`y = \frac{7}{2}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Нерешаемые">
        <ProblemDescription>
          <P>Для уравнений ниже объясните, почему их нельзя решить по методу полного квадрата:</P>
          <BlockMath>{math`
            1) \ x^2 + 14x + 8 = 0 >>{big}
            2) \ 4y^2 - 5y + 9 = 0 >>{big}
            3) \ 16z^2 - 56z - 49 = 0
          `}</BlockMath>
        </ProblemDescription>
        <ProblemSolution>
          <ProblemSection title="Уравнение 1">
            Коэффициент <M>A</M> является полным квадратом <M>1 = 1^2</M>, а вот коэффициент <M>C</M> -- нет. Всё,
            дальше что-то проверять бесполезно, метод применить не получится.
          </ProblemSection>
          <ProblemSection title="Уравнение 2">
            Коэффициенты <M>A</M> и <M>C</M> являются полными квадратами (<M>4 = 2^2</M> и <M>9 = 3^2</M>), но
            коэффициент <M>B</M> невозможно разложить на множители <M>2, 2</M> и <M>3</M>.
          </ProblemSection>
          <ProblemSection title="Уравнение 3">
            <P>
              Это самое хитрое. Здесь и крайние коэффициенты являются полными квадратами, и центральный коэффициент
              раскладывается хорошо. Единственная проблема -- перед коэффициентом <M>C = 49</M> стоит минус, что не
              позволяет нам запаковать квадратный трехчлен в квадрат суммы или квадрат разности. Обе эти формулы требуют
              знак плюса на этом месте:
            </P>
            <BlockMath>{math`
              a^2 \pm 2 \cdot a \cdot \ b \ \green{+} \ b^2 = (a \pm b)^2 \\
              (4z)^2 - 2 \cdot 4z \cdot 7 \red{-} (7)^2 = 🚫
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Отработка" script={perfectSquareScript()} />
    </Problems>

    <H1>Разложение на множители</H1>

    <P>
      Переходим к самой настоящей классике -- разложению на множители. Именно этот способ нужно попробовать, если перед
      вами оказалось <B>приведённое</B> квадратное уравнение, то есть с коэффициентом <M>A = 1</M>:
    </P>

    <BlockMath>{math`
      x^2 + 8x + 15 = 0 >>{big}
      x^2 - 5x + 6 = 0 >>{big}
      x^2 - 6x - 16 = 0
    `}</BlockMath>

    <P>
      Для решения этих и многих похожих уравнений достаточно в уме разложить их на множители по методике{' '}
      <Dep on={manualFactoring}>разложения "вручную"</Dep>.
    </P>

    <Statement
      $={uniques.methodFactoring}
      title="Разложение на множители"
      snippet={{
        key: true,
        seo: 'Решение квадратных уравнений в уме через разложение на множители',
        description: `
          Если квадратное уравнение приведённое (A = 1), то его можно попытаться разложить на множители в уме.
          Для этого надо найти такие t и k, чтобы t + k = B и tk = C. Корнями тогда будут числа -t и -k.
        `,
      }}
    >
      <StatementMain>
        <P>
          Приведённое квадратное уравнение (<M>A = 1</M>) можно попытаться в уме разложить на множители. Для этого
          коэффициенты <M>B</M> и <M>C</M> нужно представить в виде суммы и произведения двух чисел. Если это возможно,
          то <B accent>корнями будут эти два числа, но с противоположными знаками.</B>
        </P>
        <Image src={methodFactoringSchema} invert="dark" width="400px" />
        <BlockMath>{math`
          (x+t)(x+k) = 0 \\
          \boxed{x_1 = -t \quad x_2 = -k}
        `}</BlockMath>
      </StatementMain>
      <StatementProof>
        <P>
          Пускай мы смогли найти такие числа и <Dep on={manualFactoring}>разложить</Dep> квадратное уравнение на
          множители:
        </P>
        <BlockMath>{math`
          x^2 + Bx + C = 0 \\
          x^2 + (t + k)x + tk = 0 \\
          (x+t)(x+k) = 0
        `}</BlockMath>
        <P>
          Это типичное уравнение из множителей, произведение которых равно нулю. Для его решения применяем{' '}
          <Dep on={zeroProductProperty}>метод нулевых множителей</Dep> и приравниваем каждую скобку к нулю:
        </P>
        <BlockMath>{math`
          x+t = 0 \\
          \boxed{x = -t}
          >>{big}
          x+k = 0 \\
          \boxed{x = -k}
        `}</BlockMath>
        <QED />
      </StatementProof>
    </Statement>

    <P>
      Многие предпочитают подбирать сразу корни, подходящие под <Ref to={vietasFormulas}>формулы Виета</Ref>. Там тоже
      надо искать сумму и произведение. Но есть и проблема, вместо суммы в виде <M>B</M> приходится мысленно искать
      сумму в виде <M>-B</M>, что неудобно. В нашем же методе не надо ничего дополнительно в голове менять. Просто ищем
      числа, которые дадут <M>B</M> и <M>C</M>, а потом у обоих найденных чисел меняем знаки. Вот это удобно!
    </P>

    <P>
      Разложение на множители в уме очень сильно упрощает понимание того, какие вообще знаки имеют числа, на которые
      происходит разложение. Моментально понять это можно при помощи полезного приёма, который впервые был упомянут в
      задаче <Ref to={factoringSigns}>Знаки разложения</Ref>. Задача, кстати, классная, решите её сейчас, если не решали
      ранее. А сам приём в общем формулируется так:
    </P>

    <Statement $={uniques.factorizationSigns} title="Знаки при разложении на множители">
      <StatementMain>
        <P>
          Знаки чисел <M>t</M> и <M>k</M> при разложении на множители квадратного трёхчлена можно узнать из знаков
          коэффициентов <M>B</M> и <M>C</M>:
        </P>
        <BlockMath>{math`
          +C \quad +B \\
          \boxed{+t \quad +k} >>{big}{top}
          +C \quad -B \\
          \boxed{-t \quad -k} >>{big}{top}
          -C \\
          \boxed{\text{Знаки t и k разные}}
        `}</BlockMath>
      </StatementMain>
      <StatementProof>
        <P>
          Если коэффициент <M>C</M> положительный, то числа <M>t</M> и <M>k</M> либо оба положительные, либо оба
          отрицательные, потому что только два положительных или два отрицательных числа при перемножении дадут
          положительное число. Положительный <M>B</M> означает, что числа <M>t</M> и <M>k</M> будут положительными
          ("плюс + плюс = плюс"). Если коэффициент <M>B</M> отрицательный, то числа <M>t</M> и <M>k</M> будут
          отрицательными ("минус + минус = минус").
        </P>

        <P>
          Если же коэффициент <M>C</M> отрицательный, то числа <M>t</M> и <M>k</M> будут разных знаков ("минус умножить
          на плюс равно минус").
        </P>

        <QED />
      </StatementProof>
    </Statement>

    <P>
      Теперь, умея определять нужные знаки, попробуйте порешать квадратные уравнения в уме через разложение их на
      множители:
    </P>

    <Problems title="Разложение на множители -- Практика" level="medium" method>
      <P>
        Если возможно, решите квадратное уравнение в уме по{' '}
        <Dep on={uniques.methodFactoring}>методу разложения на множители</Dep>. Если невозможно, объясните почему.
      </P>

      <SubProblem label="С плюсами">
        <ProblemDescription>
          <BlockMath>x^2 + 8x + 15 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-3, -5]} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = -3 >>{big} x_2 = -5
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Видим положительные коэффициенты <M>B</M> и <M>C</M>. Значит мы ищем два{' '}
            <Dep on={uniques.factorizationSigns}>положительных числа</Dep>, которые при сложении дают <M>B</M>, а при
            умножении <M>C</M>.
          </P>
          <P>
            Легко догадаться, что числа <M>3</M> и <M>5</M> при сложении дают <M>8</M>, а при умножении <M>15</M>.
            Значит противоположные им числа <M>-3</M> и <M>-5</M> будут корнями уравнения! Вот и всё!
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="С минусом">
        <ProblemDescription>
          <BlockMath>x^2 - 5x + 6 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[2, 3]} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = 2 >>{big} x_2 = 3
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Видим отрицательный коэффициент <M>B</M> и положительный коэффициент <M>C</M>. Значит мы ищем два{' '}
            <Dep on={uniques.factorizationSigns}>отрицательных числа</Dep>, которые при сложении дают <M>B</M>, а при
            умножении <M>C</M>.
          </P>
          <P>
            Легко догадаться, что числа <M>-2</M> и <M>-3</M> при сложении дают <M>-5</M>, а при умножении <M>6</M>.
            Значит противоположные им числа <M>2</M> и <M>3</M> будут корнями уравнения! Вот и всё!
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="С минусами">
        <ProblemDescription>
          <BlockMath>x^2 - 6x - 16 = 0</BlockMath>
        </ProblemDescription>
        <RootsCheck has roots={[-2, 8]} />
        <ProblemAnswer>
          <BlockMath>{math`
            x_1 = -2 >>{big} x_2 = 8
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Видим отрицательный коэффициент <M>B</M> и отрицательный коэффициент <M>C</M>. Значит мы ищем два{' '}
            <Dep on={uniques.factorizationSigns}>числа разных знаков</Dep>, которые при сложении дают <M>B</M>, а при
            умножении <M>C</M>.
          </P>
          <P>
            Легко догадаться, что числа <M>2</M> и <M>-8</M> при сложении дают <M>-6</M>, а при умножении <M>-16</M>.
            Значит противоположные им числа <M>-2</M> и <M>8</M> будут корнями уравнения!
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Отработка" script={factoringScript()} />
    </Problems>

    <H1>Перенос A к C</H1>

    <P>
      В большинстве ситуаций провала по уже перечисленным простым методам решения в уме достаточно, чтобы сдаться и с
      позором начать решать уравнение через <Ref to={quadraticFormula}>формулу корней</Ref>. Но есть ещё один бонусный
      секретный и самый последний способ, при помощи которого можно избавиться от коэффициента <M>A</M> и попытаться
      провести разложение на множители в уме.
    </P>

    <Statement
      $={uniques.methodAtoC}
      title="Перенос A к C"
      snippet={{
        key: true,
        seo: 'Как получить приведённое квадратное уравнение?',
        description: `
          Простой метод получения приведённого квадратного уравнения в форме, позволяющей решить его в уме.
          Для этого надо "перенести" коэффициент A к C.
        `,
      }}
    >
      <StatementMain>
        <P>
          В любом квадратном уравнении <M>Ax^2 + Bx + C = 0</M> можно "перенести <M>A</M> к <M>C</M>" и получить
          приведённое квадратное уравнение <M>x^2 + Bx + AC = 0</M>. Корни исходного уравнения <M>x_1</M> и <M>x_2</M>{' '}
          равны корням приведённого <M>x'_1</M> и <M>x'_2</M>, поделённым на <M>A</M>.
        </P>
        <Image src={methodAtoCSchema} invert="dark" width="300px" />
        <BlockMath>{math`
          \boxed{x_1 = \frac{x'_1}{A} \quad x_2 = \frac{x'_2}{A}}
        `}</BlockMath>
      </StatementMain>
      <StatementSection title="Доказательство через формулы Виета">
        <P>
          Запишем <Dep on={vietasFormulas}>формулы Виета</Dep> для исходного и приведённого уравнений:
        </P>
        <BlockMath>{math`
            \begin{cases}
              x_1 + x_2 = -\frac{B}{A} \\
              x_1 \cdot x_2 = \frac{C}{A}
            \end{cases}
            >>{big}
            \begin{cases}
              x'_1 + x'_2 = -B \\
              x'_1 \cdot x'_2 = AC
            \end{cases}
          `}</BlockMath>
        <P>
          Наша задача -- получить из корней приведённого уравнения, поделённых на <M>A</M>, те же значения, что и в
          формулах Виета для исходного уравнения. Начнем с суммы:
        </P>
        <BlockMath>{math`
            \frac{x'_1}{A} + \frac{x'_2}{A} = \frac{\overbrace{x'_1 + x'_2}^{\small -B}}{A} = \boxed{\frac{-B}{A}}
          `}</BlockMath>
        <P>Теперь проверим произведение:</P>
        <BlockMath>{math`
            \frac{x'_1}{A} \cdot \frac{x'_2}{A} = \frac{x'_1 \cdot x'_2}{A^2} = \frac{\cancel{A}C}{A^{\cancel{2}}} = \boxed{\frac{C}{A}}
          `}</BlockMath>
        <P>
          Итак, сумма и произведение наших двух выражений удовлетворяют формулам Виета для исходного уравнения. Значит
          они и являются корнями исходного уравнения!
        </P>
        <QED />
      </StatementSection>
      <StatementSection title="Доказательство через формулу корней">
        <P>Найдём дискриминанты исходного и приведённого уравнений:</P>
        <BlockMath>{math`
          D = B^2 - 4AC >>{big} D' = B^2 - 4AC
        `}</BlockMath>
        <P>
          Они одинаковые. Раз они равны, то формулы корней будут отличаться только коэффициентом <M>A</M> в знаменателе:
        </P>
        <BlockMath>{math`
          x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} = \frac{1}{A} \cdot \underbrace{\frac{-B \pm \sqrt{D'}}{2}}_{\small x'_{1,2}} \\
          \boxed{x_{1,2} = \frac{x'_{1,2}}{A}}
        `}</BlockMath>
        <QED />
      </StatementSection>
    </Statement>

    <P>
      Да, вы абсолютно правы, вам придётся сначала получить из одного квадратного уравнения другое -- приведённое,
      решить уже его в уме, а потом в уме же поделить найденные корни на <M>A</M>. Способ для настоящих гениев, но
      иногда выручает. Вот так он применяется на практике:
    </P>

    <Problems title="Перенос A к C -- Практика" level="hard" method>
      <P>
        Если это возможно, решите квадратное уравнение в уме по <Dep on={uniques.methodAtoC}>методу переноса</Dep>{' '}
        <M>A</M> к <M>C</M>. Если невозможно, объясните почему.
      </P>
      <SubProblem label="Образцы">
        <ProblemDescription>
          <BlockMath>{math`
            1) \ 5x^2 + 16x - 16 = 0 >>{big}
            2) \ -4y^2 + 33y - 8 = 0 >>{big}
            3) \ 3z^2 - 17z - 6 = 0
          `}</BlockMath>
        </ProblemDescription>
        <MathValueCheck label="Корни уравнения 1" answers={['-4', '4/5']} />
        <MathValueCheck label="Корни уравнения 2" answers={['8', '1/4']} />
        <MathValueCheck label="Корни уравнения 3" answers={['6', '-1/3']} />
        <ProblemSolution>
          <ProblemSection title="Уравнение 1">
            <P>
              Умножаем коэффициент <M>A = 5</M> на <M>C = -16</M> и получаем приведённое уравнение:
            </P>
            <BlockMath>{math`
              x^2 + 16x - 80 = 0
            `}</BlockMath>
            <P>
              Замечаем знак минус у <M>-80</M>, значит при{' '}
              <Dep on={uniques.methodFactoring}>разложении на множители</Dep> одно число будет положительным, а другое
              отрицательным. Становится понятно, что эти числа равны <M>20</M> и <M>-4</M>, а значит корни приведённого
              уравнения противоположны по знаку: <M>-20</M> и <M>4</M>. Для получения корней исходного уравнения делим
              найденные корни на <M>5</M>:
            </P>
            <BlockMath>{math`
              x_1 = \frac{-20}{5} = -4 >>{big}
              x_2 = \frac{4}{5} = \frac{4}{5}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Уравнение 2">
            <P>
              Умножаем коэффициент <M>A = -4</M> на <M>C = -8</M> и получаем приведённое уравнение:
            </P>
            <BlockMath>{math`
              y^2 + 33y + 32 = 0
            `}</BlockMath>
            <P>
              Числа <M>1</M> и <M>32</M> при сложении дают <M>33</M>, а при умножении <M>32</M>. Значит противоположные
              им числа <M>-1</M> и <M>-32</M> будут корнями приведённого уравнения! Для получения корней исходного
              уравнения делим найденные корни на <M>-4</M>:
            </P>
            <BlockMath>{math`
              y_1 = \frac{-1}{-4} = \frac{1}{4} >>{big}
              y_2 = \frac{-32}{-4} = 8
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Уравнение 3">
            <P>
              Умножаем коэффициент <M>A = 3</M> на <M>C = -6</M> и получаем приведённое уравнение:
            </P>
            <BlockMath>{math`
              z^2 - 17z - 18 = 0
            `}</BlockMath>
            <P>
              Замечаем знак минус у <M>-18</M>, значит при{' '}
              <Dep on={uniques.methodFactoring}>разложении на множители</Dep> одно число будет положительным, а другое
              отрицательным. Становится понятно, что эти числа равны <M>-18</M> и <M>1</M>, а значит корни приведённого
              уравнения противоположны по знаку: <M>18</M> и <M>-1</M>. Для получения корней исходного уравнения делим
              найденные корни на <M>3</M>:
            </P>
            <BlockMath>{math`
              z_1 = \frac{18}{3} = 6 >>{big}
              z_2 = \frac{-1}{3} = -\frac{1}{3}
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem label="Отработка" script={atoCScript()} />
    </Problems>

    <P>
      Кстати, запоминать, на что делить корни приведённого уравнения, тоже легко. Опять опущенный коэффициент <M>A</M>{' '}
      находится снизу. На него и делим!
    </P>

    <H1>Всё и сразу</H1>

    <P>
      Соберём все рассмотренные методы решения в уме квадратных уравнений общего вида в одну единую схему. Расположим
      методы в порядке возрастания сложности:
    </P>

    <Diagram
      $={uniques.methodsAll}
      snippet={{
        key: true,
        seo: 'Способы решения квадратных уравнений в уме',
        title: 'Схема способов',
        description: `
          Удобная схема с перечислением всех способов быстрого решения квадратных уравнений в уме.
          Также даны подсказки по корням.
        `,
      }}
    >
      {math`
        flowchart LR
          methods["**Решение в уме**<br />$$ Ax^2 + Bx + C = 0 $$"]

          methods --> methodZeroSum["
            **1. Нулевая сумма**
            $$ \begin{aligned} A \pm B + C = 0 \\ 2x^2 + 3x - 5 = 0 \end{aligned} $$
          "]
          methodZeroSum --> methodZeroSumRoot1["$$ x_1 = \pm 1 $$"]
          methodZeroSum -->|2-я формула Виета| methodZeroSumRoot2["$$ x_2 = \pm \frac{C}{A} $$"]

          methods --> methodSquare["
            **2. Полный квадрат**
            $$ \begin{aligned} (Kx)^2 \pm 2 \cdot Kx \cdot T + (T)^2 \\ 4x^2 + 12x + 9 = 0 \end{aligned} $$
          "]
          methodSquare -->|$A$ всегда внизу<br /> $A \rightarrow K$ тоже внизу| methodSquareRoot["$$ x_1 = x_2 = \mp \frac{T}{K} $$"]

          methods --> methodFactoring["
            **3. Разложение на множители**
            $$ \begin{aligned} x^2 + (t + k)x + tk = 0 \\ x^2 + 8x + 15 = 0 \end{aligned} $$
          "]
          methodFactoring -->|Минус перед $t$| methodFactoringRoot1["$$ x_1 = -t $$"]
          methodFactoring -->|Минус перед $k$| methodFactoringRoot2["$$ x_2 = -k $$"]

          methods --> methodAtoC["
            **4. Перенос A к C**
            $$ \begin{aligned} x'^2 + Bx' + AC = 0 \\ 3x^2 - 17x - 6 = 0 \end{aligned} $$
          "]
          methodAtoC -->|$A$ всегда внизу<br />Делим корни на $A$| methodAtoCRoots["$$ x_{1,2} = \frac{x'_{1,2}}{A} $$"]

          class methodZeroSum,methodSquare,methodFactoring,methodAtoC fill
      `}
      <Caption>
        Схема способов решения квадратных уравнений в уме
        <CaptionSecondary>В порядке возрастания сложности</CaptionSecondary>
      </Caption>
    </Diagram>

    <P>
      Отрабатывать методы по отдельности хорошо, когда вы их только изучаете и хотите запомнить. Но для получения
      реального навыка решения квадратных уравнений в уме нужно отрабатывать их все вместе, причём на таких уравнениях,
      которые не дают понять, какой метод к ним применить. Именно это мы сейчас и сделаем.
    </P>

    <Problem
      $={uniques.methodsAllPractice}
      title="Задачи на решение квадратных уравнений в уме"
      level="medium"
      snippet={{
        key: true,
        seo: 'Задачи на решение квадратных уравнений в уме',
        title: 'Задачи на все способы',
        description: `
          Бесконечно генерируемые задачи на отработку всех способов решения квадратных уравнений в уме:
          нулевой суммы, полного квадрата, разложения на множители и переноса A к C.
        `,
      }}
      script={mixedScript()}
    />
  </>
));
