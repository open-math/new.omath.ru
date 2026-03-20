import { authorContribution } from '#project/utils/contributions';

// #region Problem Scripts
//
//

import zeroProductPropertyScript from './scripts/zero-product-property';

//
//
// #endregion

// #region Link
//
//

const elementaryEquations = $CONTENT.basics.equations.elementary;
const sameActionRule = $CONTENT.basics.equations.elementary.article.$sameActionRule;
const equationSolution = $CONTENT.basics.equations.elementary.article.$equationSolution;

//
//
// #endregion

export const page = definePage({
  title: 'Нулевые множители',
  description: `
    Простой и крайне эффективный способ решать уравнения, состоящие из набора множителей (скобок), произведение которых равно нулю.
    Этот метод надо знать, так как очень много разных типов уравнений сводится к этому виду.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
  dependencies: [
    {
      dependency: $CONTENT.basics.equations.elementary,
      reason: 'Не умеете решать элементарные уравнения, абсолютно точно не сможете решить и эти.',
    },
  ],
});

export const content = defineProse({
  uniques: {
    zeroProductPropertyMethod: Statement,
    zeroProductPropertyExamples: Problems,
  },
})(({ uniques }) => (
  <>
    <H1>Скобки и ноль</H1>

    <P>
      Может показаться, что умение решать <Dep on={elementaryEquations}>элементарные уравнения</Dep> открывает перед
      нами все двери и нам теперь по плечу. Это не совсем так. Пользуясь{' '}
      <Dep on={sameActionRule}>правилом одинакового действия</Dep> мы действительно можем сделать очень многое, но
      существует множество уравнений, для решения которых нужно прибегнуть к хитрости, а не какому-то алгоритму. Вот
      пара примеров:
    </P>

    <BlockMath>{math`
      (x-1)(x-2) = 0 >>{big} 2x(10+x)(2x-1) = 0
    `}</BlockMath>

    <P>
      Просто раскрыть скобки и изолировать <M>x</M> с одной стороны, что может быть проще?! Ну давайте попробуем:
    </P>

    <BlockMath>{math`
      x^2 - 2x - x + 2 = 0 \\
      x^2 - 3x + 2 = 0 \\
      \text{???}
      >>{big}{top}
      2x(20x - 10 + 2x^2 - x) = 0 \\
      2x(2x^2 + 19x - 10) = 0 \\
      4x^3 + 38x^2 - 20x = 0 \\
      \text{???}
    `}</BlockMath>

    <P>
      Пу-пу-пу... Что-то не складывается. Много переменных получается, причём в разных степенях, что делает невозможным
      приводить подобные слагаемые. Мы только что открыли для себя целый класс уравнений, которые не поддаются
      элементарному методу решения. Так как же их решать?
    </P>

    <H1>Логика решения</H1>

    <P>
      А решаются подобные уравнения очень просто! Для начала обратите внимание на вид таких уравнений. Все они
      представляют собой набор множителей, произведение которых <B>обязательно</B> равно нулю:
    </P>

    <BlockMath>{math`
      (x-1)(x-2) = 0 \\
      \underbrace{(x-1)}_{\text{Множитель 1}} \cdot \underbrace{(x-2)}_{\text{Множитель 2}} = 0
      >>{big}{top}
      2x(10+x)(2x-1) = 0 \\
      \underbrace{(2x)}_{\text{Множитель 1}} \cdot \underbrace{(10+x)}_{\text{Множитель 2}} \cdot \underbrace{(2x-1)}_{\text{Множитель 3}} = 0
    `}</BlockMath>

    <P>
      Мы знаем, что всё, что угодно, при умножении на ноль даёт в результате ноль, и совершенно неважно, число это,
      скобка какая-то, выражение с переменными. Все эти данные уничтожаются, и получается ноль:
    </P>

    <BlockMath>{math`
      5 \cdot \red{0} = 0 >>{big}
      \frac{\sqrt{2}}{2} \cdot \red{0} = 0 >>{big}
      \red{0} \cdot (x-2) = 0
    `}</BlockMath>

    <P>
      Мы можем использовать этот замечательный факт. Нам совсем не обязательно решать всё уравнение целиком. Мы знаем,
      что должен получиться ноль, а левая часть это сплошь умножения. Достаточно <B>хотя бы один</B> из множителей
      сделать равным нулю, и он <B>сразу же обнулит</B> все остальные множители и пофиг, какие там числа получатся!
    </P>

    <P>
      Согласно этой логике уравнение <M>(x-1)(x-2) = 0</M> разбивается на два{' '}
      <Dep on={elementaryEquations}>элементарных</Dep> подуравнения:
    </P>

    <Diagram>{math`
      flowchart TD
        original["**Исходное уравнение**<br />$$ (x-1)(x-2) = 0 $$"]
        original -->|Приравниваем к нулю первый множитель| sub1["**Подуравнение 1**<br />$$ x-1 = 0 $$"]
        original -->|Приравниваем к нулю второй множитель| sub2["**Подуравнение 2**<br />$$ x-2 = 0 $$"]
        sub1 --> sol1["$$ x_1 = 1 $$"]
        sub2 --> sol2["$$ x_2 = 2 $$"]

        class sol1,sol2 fill
    `}</Diagram>

    <P>Давайте проверим два найденных корня прямой подстановкой:</P>

    <BlockMath>{math`
      \boxed{\textbf{1}} \quad (\brand{1} - 1) \cdot (\brand{1} - 2) = 0 \\
      \red{0} \cdot (-1) = 0 \\
      0 = 0
      >>{big}
      \boxed{\textbf{2}} \quad (\brand{2} - 1) \cdot (\brand{2} - 2) = 0 \\
      1 \cdot \red{0} = 0 \\
      0 = 0
    `}</BlockMath>

    <P>
      Получили верные равенства, что <Dep on={equationSolution}>доказывает правильность</Dep> найденных корней. Как
      видите, нам совершенно неважно, что там получится в остальных множителях, это "что-то" всё равно будет умножено на
      ноль и в итоге получится ноль.
    </P>

    <P>Решим таким же образом и второе уравнение:</P>

    <Diagram>{math`
      flowchart TD
        original["**Исходное уравнение**<br />$$ 2x(10+x)(2x-1) = 0 $$"]
        original --> sub1["**Подуравнение 1**<br />$$ 2x = 0 $$"]
        original --> sub2["**Подуравнение 2**<br />$$ 10+x = 0 $$"]
        original --> sub3["**Подуравнение 3**<br />$$ 2x-1 = 0 $$"]
        sub1 --> sol1["$$ x_1 = 0 $$"]
        sub2 --> sol2["$$ x_2 = -10 $$"]
        sub3 --> sol3["$$ x_3 = \frac{1}{2} $$"]

        class sol1,sol2,sol3 fill
    `}</Diagram>

    <P>Проверяем корни подстановкой:</P>

    <BlockMath>{math`
      \boxed{\textbf{1}} \quad 2 \cdot \brand{0} \cdot (10 + \brand{0}) \cdot (2 \cdot \brand{0} - 1) = 0 \\
      \red{0} \cdot 10 \cdot (-1) = 0 \\
      0 = 0
      >>{big}
      \boxed{\textbf{2}} \quad 2 \cdot (\brand{-10}) \cdot (10 + \brand{-10}) \cdot (2 \cdot (\brand{-10}) - 1) = 0 \\
      -20 \cdot \red{0} \cdot (-21) = 0 \\
      0 = 0
      >>{big}
      \boxed{\textbf{3}} \quad 2 \cdot \brand{\frac{1}{2}} \cdot \left(10 + \brand{\frac{1}{2}}\right) \cdot \left(2 \cdot \brand{\frac{1}{2}} - 1\right) = 0 \\
      1 \cdot \frac{21}{2} \cdot \red{0} = 0 \\
      0 = 0
    `}</BlockMath>

    <P>Убедились, что все три найденных числа действительно являются корнями уравнения.</P>

    <H1>Метод нулевых множителей</H1>

    <P>
      Как видите, даже к сложным уравнениям можно подобрать ключик, если пользоваться математическими свойствами. Этот
      метод работает как часы и применяется очень часто и в школьной, и в высшей математике. У него нет какого-то
      общепринятого названия. Чтобы раз за разом не повторяться и не описывать способ его действия, давайте назовём его
      "методом нулевых множителей":
    </P>

    <Statement
      $={uniques.zeroProductPropertyMethod}
      title="Метод нулевых множителей"
      snippet={{
        key: true,
        search: true,
        description: `
        Удобный способ быстро решать уравнения в виде набора множителей, произведение которых равно нулю.
      `,
      }}
    >
      <P>
        <B>Любое</B> уравнение, состоящее из набора множителей (скобок), произведение которых равно нулю, можно решить,
        если по отдельности <B accent>приравнять к нулю каждый из множителей</B>.
      </P>
      <Diagram>{math`
        flowchart TD
          sourceEquation["**Исходное уравнение**<br />$$ 11x(x-8)(x^2 - 4)\cdots = 0 $$"]

          sourceEquation --> sub1["**Подуравнение 1**<br />$$ x = 0 $$"]
          sourceEquation --> sub2["**Подуравнение 2**<br />$$ x-8 = 0 $$"]
          sourceEquation --> sub3["**Подуравнение 3**<br />$$ x^2 - 4 = 0 $$"]
          sourceEquation --> subN["**Подуравнение N**<br />$$ \ldots $$"]

          sub1 --> sol1["$$ x_1 = 0 $$"]
          sub2 --> sol2["$$ x_2 = 8 $$"]
          sub3 --> sol3["$$ x_{3,4} = \pm 2 $$"]

          class sol1,sol2,sol3,sol4 fill
      `}</Diagram>
    </Statement>

    <Problems
      $={uniques.zeroProductPropertyExamples}
      title="Отработка метода нулевых множителей"
      level="easy"
      snippet={{
        key: 'Отработка метода',
        search: true,
        description: `
          Задачи на отработку метода нулевых множителей с подробными решениями.
        `,
      }}
    >
      <P>Решите уравнение:</P>

      <SubProblem script={zeroProductPropertyScript()} />

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x(x + 7)(x - 11) = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, -7, 11]} />
        <ProblemHint>
          Здесь множителя уже три и получается три под-уравнения, а значит и три решения у исходного уравнения.
        </ProblemHint>
        <ProblemAnswer>
          <M>0</M>, <M>-7</M> и <M>11</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Здесь множителя уже три и получается три под-уравнения, а значит и три решения у исходного уравнения. Причём
            первое под-уравнение уже "автоматически решено" за нас, так как $x$ в нем уже стоит в одиночестве:
          </P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} & \text{\small Под-уравнение 3} \\
                \boxed{x = 0} & x + 7 = 0 & x - 11 = 0 \\
                & \boxed{x = -7} & \boxed{x = 11}
            \end{array}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`10(x+3)(2x-8)(8x+1) = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-3, 4, [-0.125, '-1/8']]} />
        <ProblemHint>
          Избавьтесь от <M>10</M>, затем решите под-уравнения для каждого множителя.
        </ProblemHint>
        <ProblemHint>
          Первое под-уравнение решается тривиально. Остальные уже надо решать как полноценные уравнения.
        </ProblemHint>
        <ProblemSolution>
          <P>
            Чтобы <M>10</M> нам не мешала решать уравнение, по{' '}
            <Dep on={sameActionRule}>правилу одинакового действия</Dep> разделим обе части уравнения на <M>10</M>.
          </P>
          <BlockMath>{math`
            \brand{\div 10} \ | \ 10(x+3)(2x-8)(8x+1) = 0 \ | \ \brand{\div 10} \\
            \frac{\cancel{10}(x+3)(2x-8)(8x+1)}{\cancel{10}} = \frac{0}{10} \\
            (x+3)(2x-8)(8x+1) = 0
          `}</BlockMath>
          <P>
            Теперь в левой части у нас три множителя с <M>x</M>, а значит три под-уравнения. Первое под-уравнение
            решается тривиально и даёт корень <M>-3</M>, а второе и третье уже надо решать.
          </P>
          <ProblemSection title="Второе под-уравнение">
            <BlockMath>{math`2x - 8 = 0`}</BlockMath>
            <P>
              Чтобы <M>x</M> остался в одиночестве, сначала избавимся от вычитания <M>8</M>, для этого по правилу
              одинакового действия прибавим <M>8</M> к обеим частям уравнения:
            </P>
            <BlockMath>{math`
              \brand{+ 8} \ | \ 2x - 8 = 0 \ | \ \brand{+ 8} \\
              \cancel{8} + 2x - \cancel{8} = 0 + 8 \\
              2x = 8
            `}</BlockMath>
            <P>
              Теперь делим обе части уравнения на <M>2</M>:
            </P>
            <BlockMath>{math`
              \brand{\div 2} \ | \ 2x = 8 \ | \ \brand{\div 2} \\
              \frac{\cancel{2}x}{\cancel{2}} = \frac{8}{2} \\
              \boxed{x = 4}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Третье под-уравнение">
            <BlockMath>{math`8x + 1 = 0`}</BlockMath>
            <P>
              Чтобы <M>x</M> остался один, надо избавиться от умножения на <M>8</M> и сложения <M>1</M>. Сначала
              избавимся от сложения <M>1</M>. Для этого по правилу одинакового действия вычтем <M>1</M> из обеих частей
              уравнения:
            </P>
            <BlockMath>{math`
              \brand{- 1} \ | \ 8x + 1 = 0 \ | \ \brand{- 1} \\
              -\cancel{1} + 8x + \cancel{1} = 0 - 1 \\
              8x = -1
            `}</BlockMath>
            <P>
              Теперь делим обе части уравнения на <M>8</M>:
            </P>
            <BlockMath>{math`
              \brand{\div 8} \ | \ 8x = -1 \ | \ \brand{\div 8} \\
              \frac{\cancel{8}x}{\cancel{8}} = \frac{-1}{8} \\
              \boxed{x = -\frac{1}{8}}
            `}</BlockMath>
          </ProblemSection>
          <ProblemSection title="Итог">
            <P>
              Исходное уравнение имеет три решения: <M>-3</M>, <M>4</M> и <M>{math`-\frac{1}{8}`}</M>, ведь подстановка
              любого из этих трёх чисел вместо <M>x</M> в исходном уравнении приведёт к превращению соответствующего
              множителя в ноль, а он уже умножится на все остальные множители и даст ноль в целом во всей левой части
              уравнения, делая равенство истинным.
            </P>
          </ProblemSection>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`0 = (x^2 - 4)(x + 1)`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-2, 2, -1]} />
        <ProblemHint>Два множителя в правой части приводят к двум под-уравнениям.</ProblemHint>
        <ProblemHint>Первое под-уравнение имеет два корня.</ProblemHint>
        <ProblemAnswer>
          <M>-2</M>, <M>2</M> и <M>-1</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            В правой части уравнения имеем два множителя, каждый из которых даёт корень для исходного уравнения. Корень
            из второго множителя получается элементарно, он равен <M>-1</M>. А для получения корня из первого множителя,
            нужно решить уравнение:
          </P>
          <BlockMath>{math`x^2 - 4 = 0`}</BlockMath>
          <P>
            Чтобы <M>x^2</M> осталось в одиночестве, надо избавиться от вычитания <M>4</M>. Для этого по{' '}
            <Dep on={sameActionRule}>правилу одинакового действия</Dep> прибавим <M>4</M> к обеим частям уравнения:
          </P>
          <BlockMath>{math`
            \brand{+ 4} \ | \ x^2 - 4 = 0 \ | \ \brand{+ 4} \\
            \cancel{4} + x^2 - \cancel{4} = 0 + 4 \\
            x^2 = 4
          `}</BlockMath>
          <P>
            Какое число в квадрате даёт <M>4</M>? Таких чисел два: <M>2</M> и <M>-2</M>.
          </P>
          <P>
            Получается, у исходного уравнения три корня: <M>-1</M>, <M>2</M> и <M>-2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{\left(x + \frac{1}{2}\right)x}{17} = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, [-0.5, '-1/2']]} />
        <ProblemHint>
          Сначала избавьтесь от знаменателя <M>17</M>. Затем решите под-уравнения для каждого множителя.
        </ProblemHint>
        <ProblemAnswer>
          <M>0</M> и <M>{math`-\frac{1}{2}`}</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Чтобы избавиться от знаменателя дроби, по <Dep on={sameActionRule}>правилу одинакового действия</Dep>{' '}
            умножим обе части уравнения на <M>17</M>. Тогда в левой части <M>17</M> и <M>17</M> сократятся:
          </P>
          <BlockMath>{math`
            \brand{\cdot 17} \ | \ \frac{\left(x + \frac{1}{2}\right)x}{17} = 0 \ | \ \brand{\cdot 17} \\
            \cancel{17}\cdot\frac{\left(x + \frac{1}{2}\right)x}{\cancel{17}} = 0\cdot 17 \\
            \left(x + \frac{1}{2}\right)x = 0
          `}</BlockMath>
          <P>
            Имеем два множителя, каждый из которых даёт корень для исходного уравнения. Корень из второго множителя
            получается элементарно, он равен <M>0</M>. А для получения корня из первого множителя, достаточно решить
            тривиальное уравнение:
          </P>
          <BlockMath>{math`
            x + \frac{1}{2} = 0 \\
            \brand{- \frac{1}{2}} \ | \ x + \frac{1}{2} = 0 \ | \ \brand{- \frac{1}{2}} \\
            -\cancel{\frac{1}{2}} + x + \cancel{\frac{1}{2}} = 0 - \frac{1}{2} \\
            \boxed{x = -\frac{1}{2}}
          `}</BlockMath>
          <P>
            Итак, у исходного уравнения два корня: <M>0</M> и <M>{math`-\frac{1}{2}`}</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x+11)(x-1) + 12 = 12`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[-11, 1]} />
        <ProblemHint>
          Подумайте, как можно одним действием избавиться от <M>12</M> в обеих частях уравнения.
        </ProblemHint>
        <ProblemAnswer>
          <M>-11</M> и <M>1</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            У нас и слева, и справа от знака "равно" стоят одинаковые числа <M>12</M>. Мы можем сильно упростить
            уравнение, если по <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем <M>12</M> из обеих
            частей уравнения:
          </P>
          <BlockMath>{math`
            \brand{- 12} \ | \ (x+11)(x-1) + 12 = 12 \ | \ \brand{- 12} \\
            -\cancel{12} + (x+11)(x-1) + \cancel{12} = \cancel{12} - \cancel{12} \\
            (x+11)(x-1) = 0
          `}</BlockMath>
          <P>Дальше уже всё как обычно. Решаем два под-уравнения и получаем два корня:</P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} \\
                x + 11 = 0 & x - 1 = 0 \\
                \boxed{x = -11} & \boxed{x = 1}
            \end{array}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`7x^2 = 42x`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, 6]} />
        <ProblemHint>Упростите уравнение.</ProblemHint>
        <ProblemHint>Сгруппируйте иксы в одной части, например, в левой.</ProblemHint>
        <ProblemHint>Вынесите общий множитель за скобки.</ProblemHint>
        <ProblemAnswer>
          <M>0</M> и <M>6</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Для начала упростим уравнение, по <Dep on={sameActionRule}>правилу одинакового действия</Dep> разделив обе
            части на <M>7</M>:
          </P>
          <BlockMath>{math`
            \brand{\div 7} \ | \ 7x^2 = 42x \ | \ \brand{\div 7} \\
            \frac{\cancel{7}x^2}{\cancel{7}} = \frac{42x}{7} \\
            x^2 = 6x
          `}</BlockMath>
          <P>
            Сгруппируем иксы в левой части уравнения. Для этого от <M>6x</M> в правой части надо избавиться. Чтобы это
            сделать, по правилу одинакового действия вычтем <M>6x</M> из обеих частей уравнения:
          </P>
          <BlockMath>{math`
            \brand{- 6x} \ | \ x^2 = 6x \ | \ \brand{- 6x} \\
            x^2 - 6x = \cancel{6x} - \cancel{6x} \\
            x^2 - 6x = 0
          `}</BlockMath>
          <P>
            В левой части у обоих слагаемых есть общий множитель <M>x</M>. Его можно вынести за скобки:
          </P>
          <BlockMath>{math`x(x-6) = 0`}</BlockMath>
          <P>
            Имеем произведение двух множителей, которое равно нулю. Значит левую часть уравнения можно разбить на два
            под-уравнения:
          </P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} \\
                \boxed{x = 0} & x - 6 = 0 \\
                & \boxed{x = 6}
            \end{array}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`\frac{x^2}{x-3} = 4x`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, 4]} />
        <ProblemHint>
          Сгруппируйте все <M>x</M> в одной части уравнения и вынесите общие множители за скобки.
        </ProblemHint>
        <ProblemAnswer>
          Уравнение имеет два решения: <M>0</M> и <M>4</M>.
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Вытащим <M>x-3</M> из знаменателя. Для этого по <Dep on={sameActionRule}>правилу одинакового действия</Dep>,
            умножим обе части уравнения на <M>x-3</M>:
          </P>
          <BlockMath>{math`
            \brand{\cdot (x-3)} \ | \ \frac{x^2}{x-3} = 4x \ | \ \brand{\cdot (x-3)} \\
            \cancel{(x-3)}\cdot\frac{x^2}{\cancel{x-3}} = 4x\cdot(x-3) \\
            x^2 = 4x^2 - 12x
          `}</BlockMath>
          <P>
            Сгруппируем все иксы в правой части уравнения. Для этого вычтем <M>x^2</M> из обеих частей уравнения:
          </P>
          <BlockMath>{math`
            \brand{- x^2} \ | \ x^2 = 4x^2 - 12x \ | \ \brand{- x^2} \\
            -\cancel{x^2} + \cancel{x^2} = 4x^2 - 12x - x^2 \\
            0 = 3x^2 - 12x
          `}</BlockMath>
          <P>
            Вынесем за скобки <M>3x</M>:
          </P>
          <BlockMath>{math`0 = 3x(x - 4)`}</BlockMath>
          <P>
            Получили произведение множителей, которое равно нулю. Значит, это уравнение разбивается на два
            под-уравнения:
          </P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} \\
                \boxed{x = 0} & x - 4 = 0 \\
                & \boxed{x = 4}
            \end{array}
          `}</BlockMath>
          <P>
            Уравнение имеет два решения: <M>0</M> и <M>4</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^3 - 9x = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, 3, -3]} />
        <ProblemHint>
          Вынесите <M>x</M> за скобки.
        </ProblemHint>
        <ProblemHint>
          Подумайте, какое число в квадрате даёт <M>9</M>.
        </ProblemHint>
        <ProblemAnswer>
          <M>0</M>, <M>3</M> и <M>-3</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Замечаем, что у обоих слагаемых в левой части есть общий множитель <M>x</M>. Вынесем его за скобки:
          </P>
          <BlockMath>{math`x(x^2 - 9) = 0`}</BlockMath>
          <P>
            Получили произведение двух множителей, равное нулю. Первый множитель даёт корень <M>x = 0</M>. Второй
            множитель приравниваем к нулю:
          </P>
          <BlockMath>{math`
            x^2 - 9 = 0 \\
            \brand{+ 9} \ | \ x^2 - 9 = 0 \ | \ \brand{+ 9} \\
            x^2 = 9
          `}</BlockMath>
          <P>
            Какое число в квадрате даёт <M>9</M>? Таких чисел два: <M>3</M> и <M>-3</M>.
          </P>
          <P>
            Итого у уравнения три корня: <M>0</M>, <M>3</M> и <M>-3</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`(x-1)^2 = (x-1)`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[1, 2]} />
        <ProblemHint>
          Перенесите <M>(x-1)</M> из правой части в левую.
        </ProblemHint>
        <ProblemHint>
          Вынесите <M>(x-1)</M> за скобки.
        </ProblemHint>
        <ProblemAnswer>
          <M>1</M> и <M>2</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем <M>(x-1)</M> из обеих частей
            уравнения:
          </P>
          <BlockMath>{math`
            \brand{- (x-1)} \ | \ (x-1)^2 = (x-1) \ | \ \brand{- (x-1)} \\
            (x-1)^2 - (x-1) = \cancel{(x-1)} - \cancel{(x-1)} \\
            (x-1)^2 - (x-1) = 0
          `}</BlockMath>
          <P>
            Замечаем, что у обоих слагаемых в левой части есть общий множитель <M>(x-1)</M>. Вынесем его за скобки:
          </P>
          <BlockMath>{math`(x-1)\big((x-1) - 1\big) = 0 \\ (x-1)(x-2) = 0`}</BlockMath>
          <P>Решаем два под-уравнения:</P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} \\
                x - 1 = 0 & x - 2 = 0 \\
                \boxed{x = 1} & \boxed{x = 2}
            \end{array}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`x^3 = 4x`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, 2, -2]} />
        <ProblemHint>Сгруппируйте все слагаемые в одной части уравнения.</ProblemHint>
        <ProblemHint>Вынесите общий множитель за скобки.</ProblemHint>
        <ProblemAnswer>
          <M>0</M>, <M>2</M> и <M>-2</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> вычтем <M>4x</M> из обеих частей уравнения,
            чтобы сгруппировать всё в левой части:
          </P>
          <BlockMath>{math`
            \brand{- 4x} \ | \ x^3 = 4x \ | \ \brand{- 4x} \\
            x^3 - 4x = \cancel{4x} - \cancel{4x} \\
            x^3 - 4x = 0
          `}</BlockMath>
          <P>
            Вынесем <M>x</M> за скобки:
          </P>
          <BlockMath>{math`x(x^2 - 4) = 0`}</BlockMath>
          <P>
            Первый множитель сразу даёт корень <M>x = 0</M>. Второй множитель приравниваем к нулю:
          </P>
          <BlockMath>{math`
            x^2 - 4 = 0 \\
            \brand{+ 4} \ | \ x^2 - 4 = 0 \ | \ \brand{+ 4} \\
            x^2 = 4
          `}</BlockMath>
          <P>
            Какое число в квадрате даёт <M>4</M>? Таких чисел два: <M>2</M> и <M>-2</M>.
          </P>
          <P>
            Итого у уравнения три корня: <M>0</M>, <M>2</M> и <M>-2</M>.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>{math`3x^2 + 12x = 0`}</BlockMath>
        </ProblemDescription>
        <RootsCheck roots={[0, -4]} />
        <ProblemHint>Вынесите общий множитель за скобки.</ProblemHint>
        <ProblemAnswer>
          <M>0</M> и <M>-4</M>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Замечаем, что у обоих слагаемых в левой части есть общий множитель <M>3x</M>. Вынесем его за скобки:
          </P>
          <BlockMath>{math`3x(x + 4) = 0`}</BlockMath>
          <P>
            По <Dep on={sameActionRule}>правилу одинакового действия</Dep> разделим обе части уравнения на <M>3</M>:
          </P>
          <BlockMath>{math`
            \brand{\div 3} \ | \ 3x(x + 4) = 0 \ | \ \brand{\div 3} \\
            x(x + 4) = 0
          `}</BlockMath>
          <P>Имеем произведение двух множителей, равное нулю. Разбиваем на два под-уравнения:</P>
          <BlockMath>{math`
            \def\arraystretch{1.5}
            \begin{array}{cc}
                \text{\small Под-уравнение 1} & \text{\small Под-уравнение 2} \\
                \boxed{x = 0} & x + 4 = 0 \\
                & \boxed{x = -4}
            \end{array}
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>
  </>
));
