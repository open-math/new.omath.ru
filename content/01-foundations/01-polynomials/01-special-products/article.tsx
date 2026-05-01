// #region Scripts
//
//

import mentalSquares from './scripts/mental-squares';

//
//
// #endregion

// #region Assets
//
//

import abSquaredMeme from './assets/a-b-squared-meme.svg';
import squareSumSchema from './assets/square-sum-schema.svg';
import squareDiffSchema from './assets/square-diff-schema.svg';
import fountainMethodSchema from './assets/fountain-method.svg';
import ancientFormula from './assets/ancient-formula.webp';
import differenceOfSquaresSchema from './assets/diff-of-squares.svg';
import cubeSumAnimation from './assets/cube-sum.mp4';

//
//
// #endregion

// #region Links
//
//

const completingTheSquare = $CONTENT.foundations.equations.quadratic.completingTheSquare;
const vietasFormulas = $CONTENT.foundations.equations.quadratic.vietasFormulas;
const cubeSumDiffFactorization = $CONTENT.foundations.polynomials.specialProducts.practice.$cubeSumDiffFactorization;

//
//
// #endregion

// Объяснить, почему у них такие названия и как не путаться в них
// Сами названия уже дают подсказку для формулы

// Для всех Statement SEO название указывать в формате "Формула квадрата суммы", "Формула квадрата разности" и так далее.

// У нас на русском метод "фонтаничка"
// У них на английском метод FOIL (First, Outer, Inner, Last)

// В английской версии использовать термин Freshman's Dream, а не мечта первокурсника.

// #region TODO
//
//

// TODO: Добавить Reference ссылку на статью про Бином Ньютона (без зависимости) в конце этой статьи.

//
//
// #endregion

export default defineProse({
  uniques: {
    introExamples: Problems,
    whatAreSpecialProducts: Term,
    squareSum: Statement,
    squareSumExpandExamples: Problems,
    squareSumFactorExamples: Problems,
    squareDiff: Statement,
    squareDiffExamples: Problems,
    fastSquare: Problems,
    diffOfSquares: Statement,
    diffOfSquaresExamples: Problems,
    cubeSum: Statement,
    cubeDiff: Statement,
    cubeSumDiffExamples: Problems,
    memorizationTips: List,
  },
})(({ uniques }) => (
  <>
    <H1
      snippet={{
        seo: 'Что такое формулы сокращенного умножения (ФСУ)?',
        description: `
          Формулы сокращенного умножения (ФСУ) - это набор формул, которые позволяют быстро раскрывать скобки или же наоборот, запаковывать выражения в скобки.
        `,
      }}
    >
      Что такое ФСУ?
    </H1>

    <P>
      В алгебре регулярно встречаются выражения, в которых скобки возводятся в степень, перемножаются друг на друга или
      стоят в числителе и знаменателе дроби. Упрощать каждое такое выражение с нуля вручную -- утомительно и легко
      допустить ошибку в длинных вычислениях. Попробуйте сами:
    </P>

    <Problems $={uniques.introExamples} title="Упрощение выражений" level="example">
      <P>Упростите выражение:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x+5)^2 - (x-5)(x+5) - 10(x+5)`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="0" />
        <ProblemAnswer>
          <BlockMath>{math`0`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Раскроем каждую часть поочерёдно. Сначала квадрат суммы -- запишем его как произведение скобки на себя и
            раскроем «фонтанчиком»:
          </P>
          <BlockMath>{math`
            (x+5)^2 = (x+5)(x+5) = x^2 + 5x + 5x + 25 = x^2 + 10x + 25
          `}</BlockMath>
          <P>Теперь второе произведение -- тем же способом:</P>
          <BlockMath>{math`
            (x-5)(x+5) = x^2 + \cancel{5x} - \cancel{5x} - 25 = x^2 - 25
          `}</BlockMath>
          <P>
            Слагаемые <M>+5x</M> и <M>-5x</M> сразу сократились. Третья часть тривиальна:
          </P>
          <BlockMath>{math`10(x+5) = 10x + 50`}</BlockMath>
          <P>Подставляем всё обратно и собираем:</P>
          <BlockMath>{math`
            (x^2 + 10x + 25) - (x^2 - 25) - (10x + 50)
            = \cancel{x^2} + \cancel{10x} + 25 - \cancel{x^2} + 25 - \cancel{10x} - 50
            = \boxed{0}
          `}</BlockMath>
          <P>Казалось бы, такое сложное выражение, а ровно оно нулю!</P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{(a+b)^2 - (a-b)^2}{4ab}`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="1" />
        <ProblemAnswer>
          <BlockMath>{math`1`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Вручную раскроем оба квадрата в числителе по отдельности:</P>
          <BlockMath>{math`
            (a+b)^2 = (a + b)(a+b) = a^2 + ab + ba + b^2  = a^2 + 2ab + b^2 \\
            (a-b)^2 = (a - b)(a-b) = a^2 - ab - ba + b^2  = a^2 - 2ab + b^2
          `}</BlockMath>
          <P>Вычтем второе из первого:</P>
          <BlockMath>{math`
            (a^2 + 2ab + b^2) - (a^2 - 2ab + b^2)
            = \cancel{a^2} + 2ab + \cancel{b^2} - \cancel{a^2} + 2ab - \cancel{b^2}
            = 4ab
          `}</BlockMath>
          <P>
            Числитель целиком свернулся в <M>4ab</M> -- ровно то, что стоит в знаменателе:
          </P>
          <BlockMath>{math`\frac{\cancel{4ab}}{\cancel{4ab}} = \boxed{1}`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{(m+n)^2 - m^2 - n^2}{mn} \cdot \frac{(m-n)^2 - m^2 - n^2}{mn}`}</BlockMath>
        </ProblemDescription>
        <MathValueCheck answer="-4" />
        <ProblemAnswer>
          <BlockMath>{math`-4`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Разберёмся с каждым числителем отдельно. Раскроем квадрат в первом:</P>
          <BlockMath>{math`
            (m+n)^2 - m^2 - n^2 = \cancel{m^2} + 2mn + \cancel{n^2} - \cancel{m^2} - \cancel{n^2} = 2mn
          `}</BlockMath>
          <P>И во втором:</P>
          <BlockMath>{math`
            (m-n)^2 - m^2 - n^2 = \cancel{m^2} - 2mn + \cancel{n^2} - \cancel{m^2} - \cancel{n^2} = -2mn
          `}</BlockMath>
          <P>Подставляем обратно и сокращаем:</P>
          <BlockMath>{math`
            \frac{2\cancel{mn}}{\cancel{mn}} \cdot \frac{-2\cancel{mn}}{\cancel{mn}} = 2 \cdot (-2) = \boxed{-4}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <P>
      Во всех трёх примерах мы раз за разом проводили рутинные действия -- раскрытие скобок в каких-то степенях.
      Результаты раскрытия скобок похоже друг на друга -- квадраты, коэффициенты <M>2</M> и так далее. Чтобы каждый раз
      не тратить время на рутинные вычисления вручную умные математики самые часто встречающиеся ситуации разложения
      изучили и оформили в виде формул. Отсюда и название -- формулы сокращенного умножения (ФСУ). Не путать с ФСО и
      ФСБ!
    </P>

    <Term
      $={uniques.whatAreSpecialProducts}
      title="Формулы сокращённого умножения"
      snippet={{
        key: 'Что такое ФСУ?',
        description: `
          Формулы, которые позволяют быстро "разворачивать" компактные выражения со степенями в какое-то разложение или
          наоборот, "сворачивать" длинные суммы в компактную форму. Эти формулы нужны, чтобы не тратить время на рутинные
          вычисления вручную.
        `,
      }}
    >
      Формулы, которые позволяют быстро "разворачивать" компактные выражения со степенями в какое-то разложение или
      наоборот, "сворачивать" длинные суммы в компактную форму. Эти формулы нужны, чтобы не тратить время на рутинные
      вычисления вручную.
    </Term>

    <H1>Квадрат суммы</H1>

    <P>
      Начнём с классической ошибки, которую допускают <M>90%</M> людей, чаще всего школьников, у которых "не очень" с
      математикой. Ситуация настолько распространенная, что про неё даже отдельный мем есть:
    </P>

    <Image src={abSquaredMeme} width="400px" />

    <P>
      Очень хотелось бы, чтобы последний ответ был именно таким. Так сильно хочется, что у этой мечты о возможности
      напрямую применить степень к слагаемым <M>{math`(a+b)^n = a^n + b^n`}</M> есть своё название --{' '}
      <Ref to="https://w.wiki/Pjb">"Freshman's Dream"</Ref>, что можно перевести как "Мечта первокурсника". В
      несбыточности этой мечты можно убедиться очень быстро, попробовав подставить конкретные числа вместо букв:
    </P>

    <BlockMath>{math`
      \red{(1+2)^2 = 1^2 + 2^2 = 5} \\
      \boxed{\green{(1 + 2)^2 = 3^2 = 9}}
      >>{big}
      \red{(2+3)^3 = 2^3 + 3^3 = 35} \\
      \boxed{\green{(2 + 3)^3 = 5^3 = 125}}
    `}</BlockMath>

    <P>
      В меме и первом примере степень равна двум, а выражение <M>(a+b)^2</M> называют <B>"квадратом суммы"</B>, потому
      что ко всей этой сумме <M>a + b</M> применяется квадрат (возведение во вторую степень). Отсюда и название --
      "квадрат <I>всей</I> суммы". Правильная формула для квадрата суммы <M>(a+b)^2</M> очень похожа на "Мечту
      первокурсника", но чуть-чуть сложнее. Вывести её можно вручную и очень быстро. Самый прямой способ -- напрямую
      расписать квадрат как двойное произведение и умножить скобку на скобку методом "фонтанчика":
    </P>

    <Image src={fountainMethodSchema} invert="dark" width="300px">
      <Caption>Умножение скобок методом "фонтанчика"</Caption>
    </Image>

    <BlockMath>{math`
      (a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = \boxed{a^2 + 2ab + b^2}
    `}</BlockMath>

    <P>
      В обратную сторону, из "суммы" в запакованное "произведение", выводится тоже просто -- разбиваем <M>2ab</M> на два
      слагаемых и несколько раз подряд производим вынесение общего множителя за скобки:
    </P>

    <BlockMath>{math`
      a^2 + 2ab + b^2 = a^2 + ab + ab + b^2 = a(a + b) + b(a + b) = (a + b)(a + b) = \boxed{(a + b)^2}
    `}</BlockMath>

    <P>
      Второй способ вывода -- геометрический. Числа <M>a</M> и <M>b</M> можно представить в виде двух отрезков. Их сумма
      в квадрате равна площади квадрата со стороной, составленной из этих двух отрезков. Общую площадь можно найти, если
      сложить площади "составных" фигур: площадь квадрата <M>a^2</M>, два прямоугольника с площадями <M>ab</M> и площадь
      квадрата <M>b^2</M>.
    </P>

    <Image src={squareSumSchema} invert="dark">
      <Caption>Геометрический вывод формулы квадрата суммы</Caption>
    </Image>

    <Statement
      $={uniques.squareSum}
      title="Формула квадрата суммы"
      snippet={{
        key: true,
        search: ['Формула квадрата суммы'],
        title: 'Квадрат суммы',
        description: `
          Одна из формул сокращенного умножения (ФСУ): (a+b)² = a² + 2ab + b².
          Позволяет быстро раскрывать скобки или же наоборот, запаковывать в них уже разложенные выражения.
        `,
      }}
    >
      <BlockMath>(a + b)^2 = a^2 + 2ab + b^2</BlockMath>
    </Statement>

    <P>
      С этого момента можно вам больше никогда вручную дважды не перемножать скобки! Достаточно в уме или на бумаге
      найти три числа <B>слева направо</B>: квадрат первого слагаемого, удвоенное произведение этих слагаемых, квадрат
      второго слагаемого, а затем просто записать все полученные числа через плюс. Попробуйте сами:
    </P>

    <Problems $={uniques.squareSumExpandExamples} title="Разложение по квадрату суммы" level="example">
      <P>Раскройте скобки:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>(m+5)^2</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="m^2 + 10m + 25" />
        <ProblemAnswer>
          <BlockMath>m^2 + 10m + 25</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Роль <M>a</M> играет буква <M>m</M>, а роль <M>b</M> число <M>5</M>. Слева направо находим квадрат первого,
            удвоенное произведение первого на второе и квадрат второго. На таких простых числах делать это желательно в
            уме:
          </P>
          <BlockMath>{math`
            m^2 >>{big} 2 \cdot m \cdot 5 = 10m >>{big} 5^2 = 25
          `}</BlockMath>
          <P>Записываем все эти числа через плюс и получаем готовое разложение:</P>
          <BlockMath>(m+5)^2 = m^2 + 10m + 25</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\left( 2 + \frac{1}{8}x \right)^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="4 + \frac{1}{2}x + \frac{1}{64}x^2" />
        <ProblemAnswer>
          <BlockMath>{math`4 + \frac{1}{2}x + \frac{1}{64}x^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Роль <M>a</M> играет число <M>2</M>, а роль <M>b</M> дробь <M>{math`\frac{1}{8}x`}</M>. Слева направо
            находим квадрат первого, удвоенное произведение первого на второе и квадрат второго. Тут числа уже сложнее,
            поэтому можно считать все три по отдельности на бумаге. Не забывайте проводить сокращение!
          </P>
          <BlockMath>{math`
            2^2 = 4 >>{big}
            \cancel{2} \cdot \cancel{2} \cdot \frac{1}{\cancel{8}_{\small\cancel{4}_{\small 2}}}x = \frac{1}{2}x >>{big}
            \left( \frac{1}{8}x \right)^2 = \left(\frac{1}{8}\right)^2 x^2 = \frac{1}{64}x^2 
          `}</BlockMath>
          <P>Записываем все эти числа через плюс и получаем готовое разложение:</P>
          <BlockMath>{math` \left( 2 + \frac{1}{8}x \right)^2 = 4 + \frac{1}{2}x + \frac{1}{64}x^2 `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(-7a - 3b)^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="49a^2 + 42ab + 9b^2" />
        <ProblemHint>
          <P>
            Вариант <M>1</M> - запишите сумму под квадратом с явным знаком плюса:
          </P>
          <BlockMath>{math`(-7a - 3b)^2 = \left( (-7a) + (-3b) \right)^2`}</BlockMath>
          <P>Вариант 2 -- внутри суммы вынесите минус за скобки.</P>
        </ProblemHint>

        <ProblemAnswer>
          <BlockMath>{math`49a^2 + 42ab + 9b^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="Через явный знак плюса">
            <P>
              Минус в сумме <M>-7a - 3b</M> можно рассматривать двояко. С одной стороны он может образовывать разность
              чисел <M>-7a</M> и <M>3b</M>. Но можно этот минус "прилепить" к <M>3b</M>. И тогда получится сумма двух
              чисел <M>-7a</M> и <M>-3b</M>, которую явным образом можно записать вот так:
            </P>
            <BlockMath>{math`(-7a - 3b)^2 = \left( (-7a) + (-3b) \right)^2`}</BlockMath>
            <P>
              А дальше по уже отработанной схеме. Роль <M>a</M> в формуле квадрата суммы играет число <M>-7a</M>, а роль{' '}
              <M>b</M> число <M>-3b</M>. Слева направо находим квадрат первого, удвоенное произведение первого на второе
              и квадрат второго.
            </P>
            <BlockMath>{math`
              (-7a)^2 = (-7)^2 a^2 = 49a^2 >>{big} 2 \cdot (-7a) \cdot (-3b) = 42ab >>{big} (-3b)^2 = (-3)^2 b^2 = 9b^2
            `}</BlockMath>
            <P>Записываем все эти числа через плюс и получаем готовое разложение:</P>
            <BlockMath>{math`(-7a - 3b)^2 = 49a^2 + 42ab + 9b^2`}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Вынесение минуса за скобки">
            <P>
              Вынесем минус за скобки из выражения <M>-7a - 3b</M>:
            </P>
            <BlockMath>{math`-7a - 3b = -(7a + 3b)`}</BlockMath>
            <P>Теперь у нас есть сумма внутри скобок, а отдельный минус "уничтожит" возведение в квадрат:</P>
            <BlockMath>{math`(-(7a + 3b))^2 = (-1)^2 \cdot (7a + 3b)^2 = (7a + 3b)^2 = 49a^2 + 42ab + 9b^2`}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <P>
      Формула квадрата суммы позволяет не только быстро раскрывать скобки, но и наоборот -- запаковывать уже разложенные
      выражения обратно в "скобку в квадрате", в квадрат суммы. Этот процесс часто называют "выделением полного
      квадрата" и о нем мы еще поговорим отдельно ниже.
    </P>

    <P>
      Процесс "запаковки" чуть сложнее разложения. Основная цель -- найти <M>a</M> и <M>b</M>, чтобы составить квадрат
      суммы <M>(a+b)^2</M>. Найти их можно двумя способами. Первый и самый быстрый -- посмотреть на{' '}
      <B>крайние слагаемые</B>: в простых случаях там сразу видны "красивые" квадраты, которые мгновенно выдают <M>a</M>{' '}
      и <M>b</M>. После этого остаётся лишь убедиться, что <M>2ab</M> совпадает с центральным слагаемым, и "запаковка"
      готова.
    </P>

    <P>
      Второй способ -- начинать с <B>центрального слагаемого</B>: оно скрывает в себе всю информацию об <M>a</M> и{' '}
      <M>b</M>. Берём центральное слагаемое, делим его на <M>2</M>, получаем произведение <M>ab</M>. Остается лишь
      догадаться, что в нем является <M>a</M>, а что <M>b</M>.
    </P>

    <Problems $={uniques.squareSumFactorExamples} title="Запаковка в квадрат суммы" level="example">
      <P>Запишите сумму в виде квадрата суммы:</P>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`49 + 14x + x^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(7 + x)^2" />
        <ProblemAnswer>
          <BlockMath>{math`(7 + x)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="По крайним слагаемым">
            <P>
              Смотрим на крайние слагаемые: <M>49 = 7^2</M> и <M>x^2 = x^2</M>. Оба являются "красивыми" квадратами,
              значит сразу видно: <M>a = 7</M> и <M>b = x</M>. Проверяем центральное слагаемое:{' '}
              <M>2ab = 2 \cdot 7 \cdot x = 14x</M> -- совпадает! Записываем результат:
            </P>
            <BlockMath>{math`
              49 + 14x + x^2 = \underset{a^2}{7^2} + 2 \cdot \underset{a}{7} \cdot \underset{b}{x} + \underset{b^2}{x^2} = (7 + x)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="По центральному слагаемому">
            <P>
              Начинаем с центрального слагаемого <M>14x</M>. Делим его на <M>2</M> и получаем <M>7x</M>. Это
              произведение надо разложить на два множителя так, чтобы их квадраты совпадали с крайними слагаемыми{' '}
              <M>49</M> и <M>x^2</M>. В нашем случае делается это элементарно: <M>7x = 7 \cdot x</M>, значит{' '}
              <M>a = 7</M> и <M>b = x</M>.
            </P>
            <BlockMath>{math`
              49 + 14x + x^2 = \underset{a^2}{7^2} + 2 \cdot \underset{a}{7} \cdot \underset{b}{x} + \underset{b^2}{x^2} = (7 + x)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`1 + 8y + 16y^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(1 + 4y)^2" />
        <ProblemHint>
          Воспользуйтесь тем, что <M>1^2 = 1</M>
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`(1 + 4y)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="По крайним слагаемым">
            <P>
              Смотрим на крайние слагаемые: <M>1 = 1^2</M> и <M>16y^2 = (4y)^2</M>. Оба являются "красивыми" квадратами,
              значит сразу видно: <M>a = 1</M> и <M>b = 4y</M>. Проверяем центральное слагаемое:{' '}
              <M>2ab = 2 \cdot 1 \cdot 4y = 8y</M> -- совпадает! Записываем результат:
            </P>
            <BlockMath>{math`
              1 + 8y + 16y^2 = \underset{a^2}{1^2} + 2 \cdot \underset{a}{1} \cdot \underset{b}{4y} + \underset{b^2}{(4y)^2} = (1 + 4y)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="По центральному слагаемому">
            <P>
              Начинаем с центрального слагаемого <M>8y</M>. Делим его на <M>2</M> и получаем <M>4y</M>. Это произведение
              надо разложить на два множителя так, чтобы их квадраты совпадали с крайними слагаемыми <M>1</M> и{' '}
              <M>16y^2</M>. Вспоминаем, что <M>1^2 = 1</M>, поэтому искусственно добавим единицу в разложение:{' '}
              <M>1 \cdot 4y</M>. Проверяем: <M>1^2 = 1 = a</M> и <M>(4y)^2 = 16y^2 = b^2</M>. Всё совпадает! Записываем
              квадрат суммы:
            </P>
            <BlockMath>{math`
              1 + 8y + 16y^2 = \underset{a^2}{1^2} + 2 \cdot \underset{a}{1} \cdot \underset{b}{4y} + \underset{b^2}{(4y)^2} = (1 + 4y)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{1}{4}k^2 + k + 1`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(k/2 + 1)^2" />
        <ProblemHint>
          Не всегда центральное слагаемое нацело делится на два. Пускай вас это не останавливает...
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`\left(\frac{k}{2} + 1 \right)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="По крайним слагаемым">
            <P>
              Смотрим на крайние слагаемые: <M>{math`\frac{1}{4}k^2 = \left(\frac{k}{2}\right)^2`}</M> и <M>1 = 1^2</M>.
              Оба являются "красивыми" квадратами, значит сразу видно: <M>{math`a = \frac{k}{2}`}</M> и <M>b = 1</M>.
              Проверяем центральное слагаемое: <M>{math`2ab = 2 \cdot \frac{k}{2} \cdot 1 = k`}</M> -- совпадает!
              Записываем результат:
            </P>
            <BlockMath>{math`
              \frac{1}{4}k^2 + k + 1 =
              \underset{a^2}{\left( \frac{k}{2} \right)^2} + 2 \cdot \underset{a}{\frac{k}{2}} \cdot \underset{b}{1} + \underset{b^2}{1^2} =
              \left(\frac{k}{2} + 1 \right)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="По центральному слагаемому">
            <P>
              Начинаем с центрального слагаемого <M>k</M>. Делим его на <M>2</M> даже несмотря на то, что оно не делится
              нацело. Получается <M>{math`\frac{k}{2}`}</M>. Нужно эту дробь запись через два множителя так, чтобы их
              квадраты совпадали с крайними слагаемыми <M>{math`\frac{1}{4}k^2`}</M> и <M>1</M>. Вспоминаем, что{' '}
              <M>1^2 = 1</M>, поэтому искусственно добавим единицу в разложение: <M>{math`\frac{k}{2} \cdot 1`}</M>.
              Проверяем: <M>{math`\left( \frac{k}{2} \right)^2 = \frac{1}{4}k^2 = a^2`}</M> и <M>1^2 = 1 = b^2</M>. Всё
              совпадает! Записываем квадрат суммы:
            </P>
            <BlockMath>{math`
              \frac{1}{4}k^2 + k + 1 =
              \underset{a^2}{\left( \frac{k}{2} \right)^2} + 2 \cdot \underset{a}{\frac{k}{2}} \cdot \underset{b}{1} + \underset{b^2}{1^2} =
              \left(\frac{k}{2} + 1 \right)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`16t^2 + 36m^2 + 48tm`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(4t + 6m)^2" />
        <ProblemHint>
          Не всегда слагаемые в сумме стоят в том же порядке, что и в формуле квадрата суммы. В таких случаях можно
          поменять их местами, пользуясь тем, что перестановка мест слагаемых сумму не меняет.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`(4t + 6m)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            У суммы необычный вид: во втором слагаемом тоже есть квадрат. Поменяем местами второе и третье слагаемые
            (сумма от этого не поменяется), чтобы «чистые» квадраты оказались по краям, а смешанное слагаемое -- в
            середине:
          </P>
          <BlockMath>{math`16t^2 + 48tm + 36m^2`}</BlockMath>
          <ProblemSection title="По крайним слагаемым">
            <P>
              Смотрим на крайние слагаемые: <M>16t^2 = (4t)^2</M> и <M>36m^2 = (6m)^2</M>. Оба являются "красивыми"
              квадратами, значит сразу видно: <M>a = 4t</M> и <M>b = 6m</M>. Проверяем центральное слагаемое:{' '}
              <M>2ab = 2 \cdot 4t \cdot 6m = 48tm</M> -- совпадает! Записываем результат:
            </P>
            <BlockMath>{math`
              16t^2 + 36m^2 + 48tm = \underset{a^2}{(4t)^2} + 2 \cdot \underset{a}{4t} \cdot \underset{b}{6m} + \underset{b^2}{(6m)^2} = (4t + 6m)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="По центральному слагаемому">
            <P>
              Начинаем с центрального слагаемого <M>48tm</M>. Делим его на <M>2</M> и получаем <M>24tm</M>. Это
              произведение надо разложить на два множителя так, чтобы их квадраты совпадали с крайними слагаемыми{' '}
              <M>16t^2</M> и <M>36m^2</M>. В нашем случае делается это элементарно: <M>24tm = 4t \cdot 6m</M>, значит{' '}
              <M>a = 4t</M> и <M>b = 6m</M>. Проверяем: <M>(4t)^2 = 16t^2 = a^2</M> и <M>(6m)^2 = 36m^2 = b^2</M>. Всё
              совпадает! Записываем квадрат суммы:
            </P>
            <BlockMath>{math`
              16t^2 + 36m^2 + 48tm = \underset{a^2}{(4t)^2} + 2 \cdot \underset{a}{4t} \cdot \underset{b}{6m} + \underset{b^2}{(6m)^2} = (4t + 6m)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <Callout title="Очень древние формулы" icon={ancientFormula}>
      <P>
        Формулы сокращенного умножения были известны еще в глубокой древности, аж древнегреческим математикам. Например
        Евклиду, который уже в 3-ем веке до нашей эры использовал их геометрически для подсчета площадей. Формулу
        квадрата суммы он сформулировал вот так:
      </P>
      <P center>
        <I>
          "Если отрезок как-либо разбит на два отрезка, то площадь квадрата, построенного на всём отрезке, равна сумме
          площадей квадратов, построенных на каждом из отрезков, и удвоенной площади прямоугольника, сторонами которого
          служат эти два отрезка."
        </I>
      </P>
      <P>
        Современный вид ФСУ приобрели много позже, в 16-17 веках, благодаря математикам Франсуа Виету (тот самый, в
        честь которого названы <Ref to={vietasFormulas}>формулы Виета</Ref>) и Рене Декарту. До сих пор эти формулы
        являются одними из самых часто используемых математических "трюков" везде в математике, от упрощения выражений в
        алгебре до разбития уравнений на множители в криптографии.
      </P>
    </Callout>

    <H1>Квадрат разности</H1>

    <P>
      По аналогии с квадратом суммы, "квадратом разности" называют выражение вида <M>(a-b)^2</M>. И понятно почему, ведь
      у нас есть некая разность между двумя числами <M>a-b</M> и мы хотим возвести всю эту разность целиком в квадрат,
      то есть во вторую степень. Отсюда и получается название -- "квадрат <I>всей</I> разности".
    </P>

    <P>
      Алгеброически формула квадрата разности в "обе стороны" выводится ровно точно так же, как и формула квадрата
      суммы: раскрываем скобки фонтанчиком в одну сторону или разбиваем удвоенное слагаемое с выносом за скобки общих
      множителей в другую:
    </P>

    <BlockMath>{math`
      (a - b)^2 = (a - b)(a - b) = a^2 - ab - ba + b^2 = \boxed{a^2 - 2ab + b^2} \\
      a^2 - 2ab + b^2 = a^2 - ab - ab + b^2 = a(a - b) - b(a - b) = (a - b)(a - b) = \boxed{(a - b)^2}
    `}</BlockMath>

    <P>
      Геометрический вывод тоже возможен. В квадрате суммы мы искали общую площадь большого квадрата со стороной из двух
      отрезков. Сейчас у нас уже есть большой квадрат со стороной <M>a</M>, и мы укорачиваем его стороны на длину{' '}
      <M>b</M>. Площадь уменьшенного квадрата и будет численно равна <M>(a-b)^2</M>:
    </P>

    <Image src={squareDiffSchema} invert="dark">
      <Caption>Геометрический вывод формулы квадрата разности</Caption>
    </Image>

    <Statement
      $={uniques.squareDiff}
      title="Формула квадрата разности"
      snippet={{
        key: true,
        search: ['Формула квадрата разности'],
        title: 'Квадрат разности',
        description: `
          Одна из формул сокращенного умножения (ФСУ): (a-b)² = a² - 2ab + b².
          Позволяет быстро раскрывать скобки или же наоборот, запаковывать в них уже разложенные выражения.
        `,
      }}
    >
      <BlockMath>(a - b)^2 = a^2 - 2ab + b^2</BlockMath>
    </Statement>

    <P>
      Как видите, формула квадрата разности отличается от формулы квадрата суммы только изменением первого знака с плюса
      на минус. Достаточно помнить "плюсовой" её вариант и при необходимости первый встречный знак поменять на минус.
    </P>

    <Important title="Минус есть, а все равно сумма!">
      <P>
        Из-за двоякости знака "минус" в математике <B accent>любую "разность" можно представить как сумму</B>, если под
        знаками минуса понимать отрицание числа. Не "три минус два" <M>3-2</M>, а "сложение тройки с отрицательной
        двойкой" <M>3+(-2)</M>. С выражениями тоже работает:
      </P>
      <BlockMath>- a - b + c - d = (-a) + (-b) + c + (-d)</BlockMath>
      <P>
        Поэтому не удивляйтесь, когда математики называют какие-то выражения "суммами",{' '}
        <B>даже если никаких плюсов там нет!</B> Мы будем поступать точно так же.
      </P>
    </Important>

    <P>
      Потренируйтесь с помощью формулы квадрата разности быстро раскрывать скобки и запаковывать выражения обратно.
      Схема использования этой формулы точно такая, как и квадрата суммы, главное в минусах не запутайтесь. При
      "запаковке" сумм в скобки делить надо не на <M>2</M>, а на <M>-2</M>. На этот раз оба упражнения (раскрытие скобок
      и "запаковку") объединим в одно:
    </P>

    <Problems $={uniques.squareDiffExamples} title="Примеры использования квадрата разности" level="example">
      <SubProblem>
        <ProblemDescription>
          <P>Раскройте скобки:</P>
          <BlockMath>(6-c)^2</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="36 - 12c + c^2" />
        <ProblemAnswer>
          <BlockMath>36 - 12c + c^2</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Роль <M>a</M> играет число <M>6</M>, а роль <M>b</M> буква <M>c</M>. Слева направо находим квадрат первого,
            взятое с минусом удвоенное произведение первого на второе и квадрат второго. С такими простыми числами
            делать вычисления желательно в уме:
          </P>
          <BlockMath>{math`
            6^2 = 36 >>{big} -2 \cdot 6 \cdot c = -12c >>{big} c^2
          `}</BlockMath>
          <P>Записываем все полученные числа вместе:</P>
          <BlockMath>(6-c)^2 = 36 - 12c + c^2</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          <P>
            Многие новички часто совершают ошибку "двойного минуса". При применении формулы квадрата разности один минус
            они берут "из формулы", а второй от <M>-b</M>. В итоге минус на минус у них дает плюс и получается
            неправильный ответ:
          </P>
          <BlockMath>{math`
            (6-c)^2 = 36 - 2 \cdot 6 \cdot (-c) + c^2 = \red{36 + 12c + c^2}
          `}</BlockMath>
          <P>
            Запомните раз и навсегда --{' '}
            <B>любой минус уже "учтен" заранее в квадрате разности! Вообще не думайте про знаки!</B>
          </P>
        </ProblemNote>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Запишите сумму в виде квадрата разности:</P>
          <BlockMath>9x^2 - 6x + 1</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(3x - 1)^2" />
        <ProblemHint>
          Вы ведь не забыли, что <M>1^2 = 1</M>?
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`(3x - 1)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="По крайним слагаемым">
            <P>
              Смотрим на крайние слагаемые: <M>9x^2 = (3x)^2</M> и <M>1 = 1^2</M>. Оба являются "красивыми" квадратами,
              значит сразу видно: <M>a = 3x</M> и <M>b = 1</M>. Проверяем центральное слагаемое:{' '}
              <M>-2ab = -2 \cdot 3x \cdot 1 = -6x</M> -- совпадает! Записываем результат:
            </P>
            <BlockMath>{math`
              9x^2 - 6x + 1 = \underset{a^2}{(3x)^2} - 2 \cdot \underset{a}{3x} \cdot \underset{b}{1} + \underset{b^2}{1^2} = (3x - 1)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="По центральному слагаемому">
            <P>
              Начинаем с центрального слагаемого <M>-6x</M>. Делим его на <M>-2</M> и получаем <M>3x</M>. Это
              произведение надо разложить на два множителя так, чтобы их квадраты совпадали с крайними слагаемыми{' '}
              <M>9x^2</M> и <M>1</M>. Вспоминаем, что <M>1^2 = 1</M>, поэтому искусственно добавим единицу в разложение:{' '}
              <M>3x = 3x \cdot 1</M>, значит <M>a = 3x</M> и <M>b = 1</M>. Проверяем: <M>9x^2 = (3x)^2 = a^2</M> и{' '}
              <M>1 = 1^2 = b^2</M>. Всё совпадает! Записываем квадрат разности:
            </P>
            <BlockMath>{math`
              9x^2 - 6x + 1 = \underset{a^2}{(3x)^2} - 2 \cdot \underset{a}{3x} \cdot \underset{b}{1} + \underset{b^2}{1^2} = (3x - 1)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Раскройте скобки:</P>
          <BlockMath>(-7 + 2a)^2</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="4a^2 - 28a + 49" />
        <ProblemHint>Воспользуйтесь тем, что при перестановке мест слагаемых сумма не меняется.</ProblemHint>
        <ProblemAnswer>
          <BlockMath>4a^2 - 28a + 49</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            У суммы необычный вид. Минус стоит не в середине, а в начале. Поменяем местами первое и второе слагаемые
            (сумма от этого не поменяется), чтобы было удобнее сравнивать с формулой квадрата разности:
          </P>
          <BlockMath>{math`(-7 + 2a)^2 = (2a - 7)^2`}</BlockMath>
          <P>
            Теперь роль <M>a</M> в формуле квадрата разности играет число <M>2a</M>, а роль <M>b</M> буква <M>7</M>.
            Слева направо находим квадрат первого, взятое с минусом удвоенное произведение первого на второе и квадрат
            второго:
          </P>
          <BlockMath>{math`
            (2a)^2 = 4a^2 >>{big} -2 \cdot 2a \cdot 7 = -28a >>{big} 7^2 = 49
          `}</BlockMath>
          <P>Записываем все полученные числа вместе:</P>
          <BlockMath>(-7 + 2a)^2 = 4a^2 - 28a + 49</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Запишите сумму в виде квадрата разности:</P>
          <BlockMath>{math`- 12k + 4k^2 + 9`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(2k - 3)^2" />
        <ProblemHint>Переставьте слагаемые в сумме в том же порядке, что и в формуле квадрата разности.</ProblemHint>
        <ProblemAnswer>
          <BlockMath>{math`(2k - 3)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            У суммы необычный вид: «чистые» квадраты не стоят по краям. Переставим слагаемые (сумма от этого не
            поменяется), чтобы смешанное слагаемое оказалось в середине:
          </P>
          <BlockMath>{math`- 12k + 4k^2 + 9 = 4k^2 - 12k + 9`}</BlockMath>
          <ProblemSection title="По крайним слагаемым">
            <P>
              Смотрим на крайние слагаемые: <M>4k^2 = (2k)^2</M> и <M>9 = 3^2</M>. Оба являются "красивыми" квадратами,
              значит сразу видно: <M>a = 2k</M> и <M>b = 3</M>. Проверяем центральное слагаемое:{' '}
              <M>-2ab = -2 \cdot 2k \cdot 3 = -12k</M> -- совпадает! Записываем результат:
            </P>
            <BlockMath>{math`
              4k^2 - 12k + 9 = \underset{a^2}{(2k)^2} - 2 \cdot \underset{a}{2k} \cdot \underset{b}{3} + \underset{b^2}{3^2} = (2k - 3)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="По центральному слагаемому">
            <P>
              Начинаем с центрального слагаемого <M>-12k</M>. Делим его на <M>-2</M> и получаем <M>6k</M>. Это
              произведение надо разложить на два множителя так, чтобы их квадраты совпадали с крайними слагаемыми{' '}
              <M>4k^2</M> и <M>9</M>. В нашем случае делается это элементарно: <M>6k = 2k \cdot 3</M>, значит{' '}
              <M>a = 2k</M> и <M>b = 3</M>. Проверяем: <M>(2k)^2 = 4k^2 = a^2</M> и <M>3^2 = 9 = b^2</M>. Всё совпадает!
              Записываем квадрат разности:
            </P>
            <BlockMath>{math`
              4k^2 - 12k + 9 = \underset{a^2}{(2k)^2} - 2 \cdot \underset{a}{2k} \cdot \underset{b}{3} + \underset{b^2}{3^2} = (2k - 3)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Раскройте скобки:</P>
          <BlockMath>{math`
            \left( 5y - \frac{3}{4}x \right)^2
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="25y^2 - 15xy/2 + 9x^2/16" />
        <ProblemAnswer>
          <BlockMath>{math`
            25y^2 - \frac{15}{2}xy + \frac{9}{16}x^2
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Роль <M>a</M> в формуле квадрата разности играет число <M>5y</M>, а роль <M>b</M> буква{' '}
            <M>{math`\frac{3}{4}x`}</M>. Слева направо находим квадрат первого, взятое с минусом удвоенное произведение
            первого на второе и квадрат второго. Тут числа уже сложнее, поэтому можно считать все три по отдельности на
            бумаге. Не забывайте проводить сокращение!
          </P>
          <BlockMath>{math`
            (5y)^2 = 5^2y^2 = 25y^2 >>{big} -\cancel{2} \cdot 5y \cdot \frac{3}{\cancel{4}_{\small 2}}x = -\frac{15}{2}xy >>{big} \left( \frac{3}{4}x \right)^2 = \left(\frac{3}{4}\right)^2 x^2 = \frac{9}{16}x^2
          `}</BlockMath>
          <P>Записываем все полученные числа вместе:</P>
          <BlockMath>{math`
            \left( 5y - \frac{3}{4}x \right)^2 = 25y^2 - \frac{15}{2}xy + \frac{9}{16}x^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Запишите сумму в виде квадрата разности:</P>
          <BlockMath>{math`
            \frac{1}{4}m^2 - 5m + 25
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(m/2 - 5)^2" />
        <ProblemAnswer>
          <BlockMath>{math`\left(\frac{m}{2} - 5\right)^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <ProblemSection title="По крайним слагаемым">
            <P>
              Смотрим на крайние слагаемые: <M>{math`\frac{1}{4}m^2 = \left(\frac{m}{2}\right)^2`}</M> и <M>25 = 5^2</M>
              . Оба являются "красивыми" квадратами, значит сразу видно: <M>{math`a = \frac{m}{2}`}</M> и <M>b = 5</M>.
              Проверяем центральное слагаемое: <M>{math`-2ab = -2 \cdot \frac{m}{2} \cdot 5 = -5m`}</M> -- совпадает!
              Записываем результат:
            </P>
            <BlockMath>{math`
              \frac{1}{4}m^2 - 5m + 25 =
              \underset{a^2}{\left(\frac{1}{2}m\right)^2} - 2 \cdot \underset{a}{\frac{1}{2}m} \cdot \underset{b}{5} + \underset{b^2}{5^2} =
              \left(\frac{m}{2} - 5\right)^2
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="По центральному слагаемому">
            <P>
              Начинаем с центрального слагаемого <M>-5m</M>. Делим его на <M>-2</M> даже несмотря на то, что оно не
              делится нацело. Получается <M>{math`\frac{5m}{2}`}</M>. Нужно эту дробь записать через два множителя так,
              чтобы их квадраты совпадали с крайними слагаемыми <M>{math`\frac{1}{4}m^2`}</M> и <M>25</M>. Раскладываем:{' '}
              <M>{math`\frac{5m}{2} = \frac{m}{2} \cdot 5`}</M>, значит <M>{math`a = \frac{m}{2}`}</M> и <M>b = 5</M>.
              Проверяем: <M>{math`\left(\frac{m}{2}\right)^2 = \frac{1}{4}m^2 = a^2`}</M> и <M>5^2 = 25 = b^2</M>. Всё
              совпадает! Записываем квадрат разности:
            </P>
            <BlockMath>{math`
              \frac{1}{4}m^2 - 5m + 25 =
              \underset{a^2}{\left(\frac{1}{2}m\right)^2} - 2 \cdot \underset{a}{\frac{1}{2}m} \cdot \underset{b}{5} + \underset{b^2}{5^2} =
              \left(\frac{m}{2} - 5\right)^2
            `}</BlockMath>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <H1
      snippet={{
        seo: 'Где в жизни используются квадрат суммы и разности?',
        description: `
          Практические примеры применения формул сокращенного умножения (ФСУ) для квадрата суммы и разности в различных областях математики и реальной жизни.
        `,
      }}
    >
      Применение квадрата суммы или разности
    </H1>

    <P>
      Ранее уже упоминалось о пользе ФСУ в виде возможности быстро перезаписывать выражения как через сумму, так и через
      произведение. Это позволяет упрощать сложные выражения. Пора привести ещё парочку очень полезных и конкретных
      примеров применения формул сокращенного умножения.
    </P>

    <H2>Быстрое возведение в квадрат</H2>

    <P>
      Практически каждый умеет возводить в квадрат любые числа от <M>0</M> до <M>10</M>. Ну потому что это обычная
      таблица умножения: <M>4^2 = 16</M>, <M>6^2 = 36</M>, <M>9^2 = 81</M>. У вас ведь нет проблем с таблицей умножения?
      👀 Прошаренные в математике ребята и всякие олимпиадники наизусть помнят все квадраты вплоть до <M>20</M>.
      Например <M>11^2 = 121</M>, <M>15^2 = 225</M>, <M>19^2 = 361</M>.
    </P>

    <P>
      Выходит, <M>99%</M> всех людей что-то про квадраты наизусть знают только в диапазоне от <M>0</M> до <M>20</M>. А
      что делать, если вам нужно быстро возвести какое-то относительно большое <M>{math`> 15`}</M> число в квадрат, не
      тратя время на умножение столбиком?
    </P>

    <P>
      В наше современное цифровое время это, конечно, вообще не вопрос -- достаешь телефон, врубаешь калькулятор и
      считаешь. А если телефона нет (например, на экзамене) или за ним надо идти? Вот тут на помощь и приходят формулы
      квадрата суммы и разности!
    </P>

    <Problems
      $={uniques.fastSquare}
      title="Быстрые квадраты"
      level="easy"
      method
      snippet={{
        key: true,
        seo: 'Как быстро возвести число в квадрат в уме?',
        description: `
          Универсальный метод быстрого возведения в квадрат любого числа с помощью формул квадрата суммы и разности.
          Для небольших чисел в пределах 100 можно выполнять этот процесс даже в уме!
        `,
      }}
    >
      <SubProblem label="Образец суммы">
        <ProblemDescription>
          Не выполняя прямого умножения возведите в квадрат число <M>62</M>.<Br />
          Попытайтесь сделать это в уме.
        </ProblemDescription>
        <MathValueCheck answer={3844} />
        <ProblemHint>
          Можно ли представить число <M>62</M> в виде суммы двух более простых чисел?
        </ProblemHint>
        <ProblemHint>
          <M>62</M> уж очень близко стоит к "круглому" числу <M>60</M>...
        </ProblemHint>
        <ProblemAnswer>
          <M>3844</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Замечаем, что число <M>62</M> это почти что <M>60 </M>. А если точно, то <M>62 = 60 + 2</M>. Вместо ручного
            расчета <M>62^2</M> проще использовать формулу квадрата суммы:
          </P>
          <BlockMath>{math`
            62^2 = (60 + 2)^2 = 60^2 + 2 \cdot 60 \cdot 2 + 2^2 = 3600 + 240 + 4 = 3844
          `}</BlockMath>
          <P>
            Мы один сложный процесс разбили на несколько простых шагов, каждый из которых легко выполнить даже в уме:
            возведение в квадрат двух легких чисел <M>60</M> и <M>2</M> и простейшее умножение <M>2 \cdot 60 \cdot 2</M>
            . Потом просто складываем!
          </P>
          <P>
            Дополнительная простота состоит в том, что первые два числа в разложении всегда будут оканчиваться на ноль,
            как вот в примере выше получилось <M>3600</M> и <M>240</M>. Такие числа проще складывать и вычитать!
          </P>
        </ProblemSolution>
        <ProblemNote>
          <P>
            Идея следующая -- если число, которое вы хотите возвести в квадрат, чуть-чуть больше (в пределах <M>5</M>)
            ближайшего "круглого" числа с нулём на конце, то можно представить его как сумму и посчитать результат по
            формуле квадрата суммы. Примеры таких чисел:
          </P>
          <BlockMath>{math`
            24 \Rightarrow 20 + 4 >>{big}
            31 \Rightarrow 30 + 1 >>{big}
            44 \Rightarrow 40 + 4 >>{big}
            53 \Rightarrow 50 + 3
          `}</BlockMath>
        </ProblemNote>
      </SubProblem>

      <SubProblem label="Образец разности">
        <ProblemDescription>
          Не выполняя прямого умножения возведите в квадрат число <M>48</M>.<Br />
          Попытайтесь сделать это в уме.
        </ProblemDescription>
        <MathValueCheck answer={2304} />
        <ProblemHint>
          Можно ли представить число <M>48</M> в виде разности двух более простых чисел?
        </ProblemHint>
        <ProblemHint>
          <M>48</M> уж очень близко стоит к "круглому" числу <M>50</M>...
        </ProblemHint>
        <ProblemAnswer>
          <M>2304</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Замечаем, что число <M>48</M> это почти что <M>50 </M>. А если точно, то <M>48 = 50 - 2</M>. Вместо ручного
            расчета <M>48^2</M> проще использовать формулу квадрата разности:
          </P>
          <BlockMath>{math`
            48^2 = (50 - 2)^2 = 50^2 - 2 \cdot 50 \cdot 2 + 2^2 = 2500 - 200 + 4 = 2304
          `}</BlockMath>
          <P>
            Опять же, единый сложный процесс мы разбили на несколько простых шагов, каждый из которых легко выполнить
            даже в уме: возведение в квадрат двух легких чисел <M>50</M> и <M>2</M> и простейшее умножение{' '}
            <M>2 \cdot 50 \cdot 2</M>. Потом просто складываем!
          </P>
        </ProblemSolution>
        <ProblemNote>
          <P>
            Идея следующая -- если число, которое вы хотите возвести в квадрат, чуть-чуть меньше (в пределах <M>5</M>)
            ближайшего "круглого" числа с нулём на конце, то можно представить его как разность и посчитать результат по
            формуле квадрата разности. Примеры таких чисел:
          </P>
          <BlockMath>{math`
            27 \Rightarrow 30 - 3 >>{big}
            39 \Rightarrow 40 - 1 >>{big}
            46 \Rightarrow 50 - 4 >>{big}
            57 \Rightarrow 60 - 3
          `}</BlockMath>
        </ProblemNote>
      </SubProblem>

      <SubProblem label="Отработка" script={mentalSquares()} />
    </Problems>

    <P>
      Итак, вы просто смотрите, насколько ваше число отстоит от ближайшего «круглого» числа с нулём на конце. Если оно{' '}
      чуть-чуть <B>больше</B> этого «круглого» числа -- представьте его как сумму и используйте формулу квадрата суммы.
      Если чуть-чуть <B>меньше</B> -- как разность и используйте формулу квадрата разности. В обоих случаях разложение
      даст три слагаемых, причём <B>первые два всегда оканчиваются на ноль</B>, что упрощает дальнейшее сложение.
    </P>

    <H2>Решение квадратных уравнений</H2>

    <P>
      Множество самых разных процессов: в бытовой жизни, в физике, в математике и других науках, сводятся к очень
      похожим друг на друга равенствам по типу вот таких:
    </P>

    <BlockMath>{math`
      x^2 + 2x + 1 = 0 >>{big}
      36 - 18t + 9t^2 = 0 >>{big}
      4z^2 + 48z + 144 = 0
    `}</BlockMath>

    <P>
      Все они называются "квадратными уравнениями" и задача состоит в том, чтобы определить, какое число "прячется" за
      буквой. Это должно быть такое число, чтобы при подстановке его вместо буквы слева получился ноль (<M>0 = 0</M>),
      иначе равенство не будет выполняться!
    </P>

    <P>
      Ну и какие это числа? Только если пальцем в небо тыкать и пытаться наугад подставлять разные числа. Но все резко
      упрощается, если заметить, что слева стоят готовенькие развернутые выражения квадрата суммы и разности!
      Запаковываем их в скобки и получаем:
    </P>

    <BlockMath>{math`
      (x+1)^2 = 0 >>{big}
      (6 - 3t)^2 = 0 >>{big}
      (2z + 12)^2 = 0
    `}</BlockMath>

    <P>
      Теперь все просто! Какое число подставить вместо <M>x</M>, чтобы в сумме с <M>1</M> получился ноль? Правильно,
      вместо <M>x</M> надо подставить <M>-1</M>. А какое число подставить вместо <M>t</M>, чтобы от <M>6</M> отнялось
      это число, и получился ноль? Правильно, вместо <M>t</M> надо подставить <M>2</M>. Наконец, что подставить вместо{' '}
      <M>z</M>, чтобы в сумме с <M>12</M> получился ноль? Надо подставить <M>-6</M>.
    </P>

    <BlockMath>{math`
      (\underset{x}{-1} + 1)^2 = 0 >>{big}
      (6 - 3 \cdot \underset{t}{2})^2 = 0 >>{big}
      (2 \cdot \underset{z}{-6} + 12)^2 = 0
    `}</BlockMath>

    <P>
      Кажется, что мы решили просто какие-то математические головоломки, но на самом деле эти буквы могут обозначать
      количество купленных пачек печенья, время работы двигателя машины и прочие реальные величины!
    </P>

    <Reference to={completingTheSquare}>
      Процесс запаковки развернутого выражения в скобку в квадрате с использованием формулы квадрата суммы или квадрата
      разности называется "выделением полного квадрата" и является универсальным способом решения любых квадратных
      уравнений.
    </Reference>

    <H1>Разность квадратов</H1>

    <P>
      Есть ещё одна очень полезная и простая формула сокращенного умножения, которую надо знать наизусть. Называется она
      "разность квадратов" и записывается буквально так же, как и читается: <M>a^2 - b^2</M> (разность <B>двух</B>{' '}
      квадратов, разность двух чисел в квадрате).
    </P>

    <P>
      Сходу понять, чему равна разность квадратов <M>a^2 - b^2</M>, не получится, поэтому будет удобнее начать с
      геометрического вывода. Для этого из большего квадрата площадью <M>a^2</M> вырежем меньший квадрат площадью{' '}
      <M>b^2</M>. По горизонтали длина отрезка так и останется <M>a</M>, а вот высота уменьшится на <M>b</M>, то есть
      станет равна <M>a - b</M>. Выступающий кусочек отрежем, развернем и приклеим так, чтобы получился прямоугольник:
    </P>

    <Image src={differenceOfSquaresSchema} invert="dark">
      <Caption>Геометрический вывод формулы разности квадратов</Caption>
    </Image>

    <Statement
      $={uniques.diffOfSquares}
      title="Формула разности квадратов"
      snippet={{
        key: true,
        search: ['Формула разности квадратов'],
        title: 'Разность квадратов',
        description: `
          Одна из формул сокращенного умножения (ФСУ): a² - b² = (a + b)(a - b).
          Позволяет вдвое снизить или увеличить степень.
          Используется для упрощения выражений.
        `,
      }}
    >
      <StatementMain>
        <BlockMath>a^2 - b^2 = (a + b)(a - b)</BlockMath>
      </StatementMain>
      <StatementSection title="Алгебраический вывод">
        <P>
          Получим из произведения скобок разность квадратов. Для этого надо просто раскрыть эти скобки любым образом,
          например по "правилу фонтанчика":
        </P>
        <BlockMath>{math`
          (a+b)(a-b) = a \cdot a - a \cdot b + b \cdot a - b \cdot b = \boxed{a^2 - b^2}
        `}</BlockMath>
        <Hr />
        <P>
          В обратную сторону выводится чуть сложнее. Нам нужно искусственно добавить и сразу вычесть слагаемое, а затем
          выносить общие множители за скобки:
        </P>
        <BlockMath>{math`
          a^2 - b^2 = a^2 + \underbrace{ab - ab}_{\text{Добавили и вычли}} - b^2 = a(a+b) - b(a+b) = \boxed{(a+b)(a-b)}
        `}</BlockMath>
      </StatementSection>
    </Statement>

    <Important title="Разность квадратов ≠ Квадрат разности!">
      Изучающие ФСУ новички очень часто путают разность квадратов с квадратом разности. Избежать этой ошибки элементарно
      -- просто на секунду дольше подумайте над названием формулы. "Разность квадрат<B accent>ов</B>" означает, что{' '}
      <B accent>квадратов несколько</B>, то есть это <M>a^2 - b^2</M>. А вот "квадр<B accent>ат</B> разности" означает,
      что <B accent>квадрат всего один</B>, то есть это <M>(a - b)^2</M>.
    </Important>

    <P>
      Нафига вообще эта формула нужна? А вся её фишка в том, что она позволяет практически на коленке вдвое снизить или
      повысить степень двух любых выражений. Скоро вы сами убедитесь, сколько всего эта одна простая формула резко
      упрощает и как лихо она "сворачивает" сложные выражения. Но сначала потренируйтесь просто использовать её на
      примерах для повышения и понижения степеней:
    </P>

    <Problems $={uniques.diffOfSquaresExamples} title="Примеры использования разности квадратов" level="example">
      <SubProblem>
        <ProblemDescription>
          <P>Запишите в виде произведения скобок:</P>
          <BlockMath>x^2 - 36</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(x + 6)(x - 6)" />
        <ProblemAnswer>
          <BlockMath>{math`(x + 6)(x - 6)`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Видим два явных квадрата: <M>x \Rightarrow x^2</M> и <M>6 \Rightarrow 36</M>. Значить роль <M>a</M> в
            формуле разности квадратов играет <M>x</M>, а роль <M>b</M> играет <M>6</M>. Записываем скобки согласно
            формуле:
          </P>
          <BlockMath>{math`
            x^2 - 36 =
            \underset{a}{x^2} - \underset{b}{6^2} = (x + 6)(x - 6)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Раскройте скобки:</P>
          <BlockMath>{math`(3 - x)(3 + x)`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="9 - x^2" />
        <ProblemAnswer>
          <BlockMath>{math`9 - x^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Замечаем отличительную черту формулы разности квадратов -- две почти одинаковые скобки, в одной плюс, а во
            второй минус. Значит мы можем использовать формулу разности квадратов. Возводим первое число в квадрат,
            потом второе:
          </P>
          <BlockMath>{math`3^2 = 9 >>{big} x^2`}</BlockMath>
          <P>Записываем их через минус:</P>
          <BlockMath>{math`9 - x^2`}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Запишите в виде произведения скобок:</P>
          <BlockMath>{math`\frac{4}{81}k^2 - \frac{1}{25}b^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(2k/9 + b/5)(2k/9 - b/5)" />
        <ProblemAnswer>
          <BlockMath>{math`\left(\frac{2k}{9} + \frac{b}{5}\right)\left(\frac{2k}{9} - \frac{b}{5}\right)`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Найдём корни каждого из слагаемых:</P>
          <BlockMath>{math`
            \frac{4}{81}k^2 = \frac{2^2}{9^2}k^2 = \left(\frac{2k}{9}\right)^2 >>{big}
            \frac{1}{25}b^2 = \frac{1^2}{5^2}b^2 = \left(\frac{b}{5}\right)^2
          `}</BlockMath>
          <P>
            Значит роль <M>a</M> в формуле разности квадратов играет <M>2k/9</M>, а роль <M>b</M> играет <M>b/5</M>.
            Записываем скобки согласно формуле:
          </P>
          <BlockMath>{math`
            \frac{4}{81}k^2 - \frac{1}{25}b^2 =
            \underset{a}{\left(\frac{2k}{9}\right)^2} - \underset{b}{\left(\frac{b}{5}\right)^2} =
            \left(\frac{2k}{9} + \frac{b}{5}\right)\left(\frac{2k}{9} - \frac{b}{5}\right)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Раскройте скобки:</P>
          <BlockMath>{math`\left( t + \frac{3}{4} \right)\left( \frac{3}{4} - t \right)`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="9/16 - t^2" />
        <ProblemAnswer>
          <BlockMath>{math`\frac{9}{16} - t^2`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Замечаем отличительную черту формулы разности квадратов -- две почти одинаковые скобки, в одной плюс, а во
            второй минус. Вот только сами слагаемые в скобках стоят в разном порядке. В скобке с плюсом поменяем их
            местами, там сумма не поменяется, зато мы получим нужный вид для применения формулы разности квадратов:
          </P>
          <BlockMath>{math`
            \left( t + \frac{3}{4} \right)\left( \frac{3}{4} - t \right) =
            \left( \frac{3}{4} + t \right)\left( \frac{3}{4} - t \right) = \ldots
          `}</BlockMath>
          <P>Теперь применяем эту самую формулу:</P>
          <BlockMath>{math`
            \ldots = \left( \frac{3}{4} + t \right)\left( \frac{3}{4} - t \right) =
            \left(\frac{3}{4}\right)^2 - t^2 =
            \frac{9}{16} - t^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Запишите в виде произведения скобок:</P>
          <BlockMath>{math`9x^4z^2 - 0.09y^2`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(3x^2z + 0.3y)(3x^2z - 0.3y)" />
        <ProblemAnswer>
          <BlockMath>{math`(3x^2z + 0.3y)(3x^2z - 0.3y)`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Найдём корни каждого из слагаемых:</P>
          <BlockMath>{math`
            9x^4z^2 = 3^2(x^2)^2z^2 = (3x^2z)^2 >>{big}
            0.09y^2 = \frac{9y^2}{100} = \frac{3^2y^2}{10^2} = \left(\frac{3y}{10}\right)^2 = (0.3y)^2
          `}</BlockMath>
          <P>
            Значит роль <M>a</M> в формуле разности квадратов играет <M>3x^2z</M>, а роль <M>b</M> играет <M>0.3y</M>.
            Записываем скобки согласно формуле:
          </P>
          <BlockMath>{math`
            9x^4z^2 - 0.09y^2 =
            \underset{a}{(3x^2z)^2} - \underset{b}{(0.3y)^2} =
            (3x^2z + 0.3y)(3x^2z - 0.3y)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <H1>Куб суммы и разности</H1>

    <P>
      Все время до этого момента мы игрались с "квадратами", то есть со второй степенью. И получили аж три интересные
      формулы? квадрат суммы, квадрат разности и разность квадратов. А можно ли пойти дальше? Возможно, существуют
      удобные формулы для быстрой работы с кубами, то есть с третьей степенью? Конечно же они есть! Учить наизусть не
      обязательно, но полезно будет хотя бы ознакомиться с ними.
    </P>

    <P>
      Вообще ФСУ довольно много, но мы затроним только самые базовые -- куб суммы и разности. Названия говорят сами за
      себя. Куб суммы/разности означает, что есть какая-то сумма или разность двух чисел, и вся она взята в куб, то есть
      в третью степень. Формулы для них выводятся так же, как и для квадрата суммы -- раскрытием скобок по "методу
      фонтанчика":
    </P>

    <BlockMath>{math`
      (a+b)^3 = (a+b)^2(a+b) = (a^2 + 2ab + b^2)(a+b) = \boxed{a^3 + 3a^2b + 3ab^2 + b^3} \\
      (a-b)^3 = (a-b)^2(a-b) = (a^2 - 2ab + b^2)(a-b) = \boxed{a^3 - 3a^2b + 3ab^2 - b^3}
    `}</BlockMath>

    <Reference to={cubeSumDiffFactorization}>
      Вывод в обратную сторону, из разложенной формы в запакованную, уже довольно хитрый. Настолько, что он вполне тянет
      на отдельную задачку вам на подумать 😈 Можете решить её сейчас или отложить до момента, пока не добьете статью.
    </Reference>

    <P>
      Геометрически обе формулы тоже можно вывести. Уже из названия можно понять, что речь будет идти уже о трехмерных
      фигурах. И собирать мы будем не квадрат, а куб. Выглядит это вот так:
    </P>

    <Video src={cubeSumAnimation} invert="light" autoplay width="380px">
      <Caption>
        Геометрический вывод куба суммы
        <CaptionSecondary>
          Взято с TikTok канала{' '}
          <Ref to="https://www.tiktok.com/@complex_math/video/7358570064724970759">@complex_math</Ref>
        </CaptionSecondary>
      </Caption>
    </Video>

    <P>
      Из этой визуализации сразу становится понятно, откуда в формуле коэффициенты <M>3</M> и выражения вида <M>a^2b</M>{' '}
      <M>ab^2</M>. Потому что для заполнения всего куба нужно по три параллелепипеда с основаниями <M>a^2</M> и{' '}
      <M>b^2</M> и высотами <M>b</M> и <M>a</M> соответственно.
    </P>

    <Statement
      $={uniques.cubeSum}
      title="Формула куба суммы"
      snippet={{
        key: true,
        search: ['Формула куба суммы'],
        title: 'Куб суммы',
        description: `
          Одна из формул сокращенного умножения (ФСУ): (a + b)³ = a³ + 3a²b + 3ab² + b³.
          Позволяет быстро разложить куб суммы двух выражений.
          Используется для упрощения выражений и решения уравнений.
        `,
      }}
    >
      <BlockMath>(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3</BlockMath>
    </Statement>

    <Statement
      $={uniques.cubeDiff}
      title="Формула куба разности"
      snippet={{
        key: true,
        search: ['Формула куба разности'],
        title: 'Куб разности',
        description: `
          Одна из формул сокращенного умножения (ФСУ): (a - b)³ = a³ - 3a²b + 3ab² - b³.
          Позволяет быстро разложить куб разности двух выражений.
          Используется для упрощения выражений и решения уравнений.
        `,
      }}
    >
      <BlockMath>(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3</BlockMath>
    </Statement>

    <Problems $={uniques.cubeSumDiffExamples} title="Примеры использования кубов суммы и разности" level="example">
      <SubProblem>
        <ProblemDescription>
          <P>Запишите в виде произведения скобок:</P>
          <BlockMath>{math`(x + 2)^3`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="x^3 + 6x^2 + 12x + 8" />
        <ProblemAnswer>
          <BlockMath>{math`x^3 + 6x^2 + 12x + 8`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Роль <M>a</M> в формуле куба суммы играет <M>x</M>, а роль <M>b</M> играет <M>2</M>. Подставляем их в
            формулу, последовательно считая каждый член:
          </P>
          <BlockMath>{math`
            (x + 2)^3 = x^3 + 3 \cdot x^2 \cdot 2 + 3 \cdot x \cdot 2^2 + 2^3 = x^3 + 6x^2 + 12x + 8
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Запишите в виде произведения скобок:</P>
          <BlockMath>{math`\left(\frac{1}{3} - \frac{2}{k}\right)^3`}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="1/27 - 2/(3k) + 4/k^2 - 8/k^3" />
        <ProblemAnswer>
          <BlockMath>{math`\frac{1}{27} - \frac{2}{3k} + \frac{4}{k^2} - \frac{8}{k^3}`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Роль <M>a</M> в формуле куба разности играет <M>1/3</M>, а роль <M>b</M> играет <M>2/k</M>. Подставляем их в
            формулу, расписывая каждый член:
          </P>
          <BlockMath>{math`
            \left(\frac{1}{3} - \frac{2}{k}\right)^3 =
            \left(\frac{1}{3}\right)^3 - 3\left(\frac{1}{3}\right)^2 \cdot \frac{2}{k} + 3 \cdot \frac{1}{3} \cdot \left(\frac{2}{k}\right)^2 - \left(\frac{2}{k}\right)^3 = \\
            \frac{1}{27} - \cancel{3} \cdot \frac{1}{\cancel{9}_{\small 3}} \cdot \frac{2}{k} + \cancel{3} \cdot \frac{1}{\cancel{3}_{\small 1}} \cdot \frac{4}{k^2} - \frac{8}{k^3} = \\
            \frac{1}{27} - \frac{2}{3k} + \frac{4}{k^2} - \frac{8}{k^3}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Запишите в виде произведения скобок:</P>
          <BlockMath>{math`
            m^3 + 6m^2n + 12mn^2 + 8n^3
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(m + 2n)^3" />
        <ProblemAnswer>
          <BlockMath>{math`(m + 2n)^3`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Определим <M>a</M> и <M>b</M> из крайних членов: из первого -- <M>a^3 = m^3</M>, значит <M>a = m</M>; из
            последнего -- <M>b^3 = 8n^3 = (2n)^3</M>, значит <M>b = 2n</M>. Приведем каждый член к виду, в котором будет
            видно, что он соответствует формуле куба суммы, подпишем их и запакуем:
          </P>
          <BlockMath>{math`
            \underbrace{m^3}_{a^3} + 3 \cdot \underbrace{m^2}_{a^2} \cdot \underbrace{2n}_{b} + 3 \cdot \underbrace{m}_{a} \cdot \underbrace{(2n)^2}_{b^2} + \underbrace{(2n)^3}_{b^3} = (m + 2n)^3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <P>Запишите в виде произведения скобок:</P>
          <BlockMath>{math`
            \frac{x^3}{8} - \frac{x^2y}{4} + \frac{xy^2}{6} - \frac{y^3}{27}
          `}</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck answer="(x/2 - y/3)^3" />
        <ProblemAnswer>
          <BlockMath>{math`\left(\frac{x}{2} - \frac{y}{3}\right)^3`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Определим <M>a</M> и <M>b</M> из крайних членов: из первого -- <M>a^3 = x^3/8 = (x/2)^3</M>, значит{' '}
            <M>a = x/2</M>; из последнего -- <M>b^3 = y^3/27 = (y/3)^3</M>, значит <M>b = y/3</M>. Приведем каждый член
            к виду, в котором будет видно, что он соответствует формуле куба разности, подпишем их и запакуем:
          </P>
          <BlockMath>{math`
            \frac{x^3}{8} - \frac{x^2y}{4} + \frac{xy^2}{6} - \frac{y^3}{27} = \\
            \underbrace{\frac{x^3}{8}}_{a^3} - 3 \cdot \underbrace{\frac{x^2}{4}}_{a^2} \cdot \underbrace{\frac{y}{3}}_{b} + 3 \cdot \underbrace{\frac{x}{2}}_{a} \cdot \underbrace{\frac{y^2}{9}}_{b^2} - \underbrace{\frac{y^3}{27}}_{b^3} = \\
            \left(\frac{x}{2} - \frac{y}{3}\right)^3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <H1>Как запомнить ФСУ?</H1>

    <P>
      Наизусть запомнить нужно только три формулы: квадрат суммы <M>(a + b)^2</M>, квадрат разности <M>(a - b)^2</M> и
      разность квадратов <M>a^2 - b^2</M>. Они просто вездесущие и абсолютно необходимо уметь их сразу замечать и
      заменять разложение на скобки или наоброт. А вот формулы с кубами желательно просто уметь узнавать. Вот несколько
      советов, как проще все эти формулы запоминать:
    </P>

    <List
      $={uniques.memorizationTips}
      unordered
      snippet={{
        key: true,
        seo: 'Как запомнить формулы сокращенного умножения?',
        title: 'Как запомнить ФСУ?',
        description: `
          Набор советов и приемов, которые помогут наизусть запомнить формулы сокращенного умножения (ФСУ) и не путаться в них.
        `,
      }}
    >
      <Li>
        <P>
          <B>Знак плюс-минус</B>
        </P>
        <P>
          Не запоминайте по отдельности <M>4</M> формулы: квадрат суммы, квадрат разности, куб суммы и куб разности.
          Достаточно запомнить <M>2</M> формулы, если использовать знак плюс-минус, ведь кроме знаков больше ничего в
          них не меняется:
        </P>
        <BlockMath>{math`
          (a \pm b)^2 = a^2 \pm 2ab + b^2 \\
          (a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3
        `}</BlockMath>
        <P>
          В суммах все знаки <B>всегда плюсы</B>. В разности <B>минус всегда идет сразу</B> после первого слагаемого в
          разложении. В случае куба еще и у последнего слагаемого.
        </P>
      </Li>
      <Li>
        <P>
          <B>Разность квадратов особняком</B>
        </P>
        <P>
          Формулы, названия которых начинаются со степени ("квадрат ..." и "куб ..."), имеют похожую форму и их можно
          вывести естественным образом через раскрытие скобок <M>(a+b)^2 = (a+b)(a+b) = \ldots</M>
        </P>
        <P>
          А вот разность квадратов <M>a^2-b^2</M> стоит особняком. Во-первых, она раскладывается в скобки с плюсом и
          минусом. Во-вторых из формы <M>a^2 - b^2</M> нельзя естественным и явным образом получить из самой разности
          произведение <M>(a+b)(a-b)</M>.
        </P>
      </Li>
      <Li>
        <P>
          <B>Какая степень -- такой и коэффициент</B>
        </P>
        <P>
          В квадрате/кубе суммы/разности степень (вторая или третья) встречается и как коэффициент в разложении. Для
          квадрата суммы/разности это <M>2</M>, для куба суммы/разности это <M>3</M>:
        </P>
        <BlockMath>{math`
          (a \pm b)^{\normalsize\brand{2}} = a^2 \pm \brand{2}ab + b^2 \\
          (a \pm b)^{\normalsize\brand{3}} = a^3 \pm \brand{3}a^2b + \brand{3}ab^2 \pm b^3
        `}</BlockMath>
        <P>
          А еще коэффициент легко вспоминть по геометрическому выводу формул. Для "квадрата ..." мы составляем квадрат и
          в процессе появляются <B>два</B> прямоугольника. А для "куба ..." мы составляем куб и в процессе появляются
          два вида из <B>трех</B> параллелепипедов.
        </P>
      </Li>
    </List>

    <H1>Сумма и разность высших степеней</H1>

    <P>
      Заметили, что чем больше степень, тем сложнее и длиннее становятся формулы сокращенного умножения? Можно ли
      продолжать повышать степень бесконечно? Можно ли найти ультимативную разгадку "Мечты первокурсника"?
    </P>

    <BlockMath>{math`
      (a \pm b)^1 = a \pm b \\
      (a \pm b)^2 = a^2 \pm 2ab + b^2 \\
      (a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3 \\
      \text{???}
    `}</BlockMath>

    <P>
      На самом деле можно. Существует мега-крутая универсальная формула, которая автоматически выдает формулы
      сокращенного умножения для абсолютно любой степени! Называется она <B>Бином Ньютона</B> и выглядит вот так:
    </P>

    <BlockMath>{math`
      (a+b)^n = \sum\limits_{k=0}^{n} \binom{n}{k} a^{n-k}b^k, \quad \text{где } \binom{n}{k} = \frac{n!}{k!(n-k)!}
    `}</BlockMath>

    <P>
      Вы скорее всего в шоке. Это нормально, формула действительно выглядит страшно, а для её вывода надо разбираться в
      комбинаторике, в учебнике про которую она и выводится. Причём никакой высшей математики не требуется, и получить
      её можно на "школьном" уровне знаний!
    </P>

    <P>
      Так что ответ на вопрос про бесконечное количество формул сокращенного умножения утвердительный. Да, можно
      бесконечно повышать степень и получать все новые и новые формулы:
    </P>

    <BlockMath>{math`
      (a \pm b)^4 = a^4 \pm 4a^3b + 6a^2b^2 \pm 4ab^3 + b^4 \\
      (a \pm b)^5 = a^5 \pm 5a^4b + 10a^3b^2 \pm 10a^2b^3 + 5ab^4 \pm b^5 \\
      \ldots
    `}</BlockMath>

    <P>
      Бином Ньютона вообще очень часто встречается в самых разных разделах математики, и в базовой, а в особенности в
      высшей. Подобно тому, как ФСУ позволяют перегонять суммы в произведения скобок и наоборот для небольших степеней,
      бином Ньютона позволяет проворачивать это с выражениями любой сложности.
    </P>
  </>
));
