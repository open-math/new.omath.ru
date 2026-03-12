import type { XOR } from 'ts-xor';

// #region Assets
//
//

import twoWays from './assets/two-ways.svg';
import factoringStep1 from './assets/factoring-step-1.svg';
import factoringStep2 from './assets/factoring-step-2.svg';
import factoringStep3 from './assets/factoring-step-3.svg';
import virginChad from './assets/virgin-chad.webp';
import quadraticTrinomialPlane from './assets/quadratic-trinomial-plane.svg';

//
//
// #endregion

// #region Links
//
//

const zeroFactors = $CONTENT.basics.equations.elementary.practice.$zeroFactors;
const quadraticPolynomial = $CONTENT.basics.equations.quadratic.whatIsIt.article.$quadraticPolynomial;
const quadraticEquation = $CONTENT.basics.equations.quadratic.whatIsIt.article.$quadraticEquation;
const incompleteQuadratic = $CONTENT.basics.equations.quadratic.incomplete.article.$quadraticMissingTerms;
const completingTheSquare = $CONTENT.basics.equations.quadratic.completingTheSquare;
const compensate = $CONTENT.basics.equations.quadratic.completingTheSquare.article.$compensate;
const quadraticFormula = $CONTENT.basics.equations.quadratic.quadraticFormula.article.$formula;
const discriminant = $CONTENT.basics.equations.quadratic.quadraticFormula.article.$discriminant;

//
//
// #endregion

export const RootsFactoringCheck = (
  props: {
    children?: undefined;
  } & XOR<{ empty: true }, { factoredForm: string; roots: [string | number, ...Array<string | number>] }>,
) => {
  if (props.empty) {
    return (
      <>
        <ProblemCheck label="Можно разложить на множители?" no />
      </>
    );
  }

  return (
    <>
      <ProblemCheck label="Можно разложить на множители?" yes>
        <MathExpressionCheck label="Запись через множители" answer={props.factoredForm} />
        <RootsCheck roots={props.roots} />
      </ProblemCheck>
    </>
  );
};

export default defineProse({
  uniques: {
    whyFactoring: List,
    manualFactoring: Problems,
    generalFactoring: Statement,
    generalFactoringExamples: Problems,
    trinomialsPlane: H1,
  },
})(({ uniques }) => (
  <>
    <H1>Путь плюса и путь умножения</H1>

    <P>
      Любое число можно записать бесконечным количеством разных способов. Все эти способы можно разделить на две
      категории: запись через <B>сумму слагаемых</B> (сложение) и через <B>произведение множителей</B> (умножение).
    </P>

    <Image src={twoWays} width="600px">
      <Caption>А на какой ты стороне?</Caption>
    </Image>

    <P>
      Может показаться, что принципиальной разницы между всеми этими записями нет. Записывай все через плюс и бед не
      знай. Однако запись через множители тоже бывает полезна. Почему? Потому что в сложных выражениях запись через
      множители позволяет проводить сокращение, а через слагаемые -- нет. Посмотрите сами на примере с числом <M>42</M>:
    </P>

    <BlockMath>{math`
      \frac{\yellow{3 + 13 + 26}}{11 \cdot 7 \cdot 3} = \ \red{\text{?!}} >>{big}
      \frac{\blue{2 \cdot \cancel{3} \cdot \cancel{7}}}{11 \cdot \cancel{7} \cdot \cancel{3}} = \green{\frac{2}{11}}
    `}</BlockMath>

    <P>
      Ровно так же, как обычные числа можно записывать через сложение или умножение,{' '}
      <Dep on={quadraticPolynomial}>квадратные трёхчлены</Dep> тоже можно записывать двумя способами. До сих пор мы
      работали с записями только через сложение, например:
    </P>

    <BlockMath>{math`x^2 + 8x + 15`}</BlockMath>

    <P>
      Ну и как это перезаписать через умножение? Это же невозможно! Но если немного поколдовать со средним членом и два
      раза подряд вынести общий множитель за скобки, можно совершить темную магию:
    </P>

    <BlockMath>{math`
      x^2 + 8x + 15 = \\
      = x^2 + \underbrace{3x + 5x}_{\small 8x} + 15 = \\
      = x(x + 3) + 5(x + 3) = \\
      = (x + 3)(x + 5)
    `}</BlockMath>

    <P>
      У нас была сумма из трех слагаемых (<M>x^2</M>, <M>8x</M> и <M>15</M>), а получилось произведение из двух
      множителей (<M>x + 3</M> и <M>x + 5</M>). Процесс, который мы провели, называется разложением квадратного
      трёхчлена на множители:
    </P>

    <Diagram>{math`
      flowchart TD
        sum["$$ x^2 + 8x + 15 $$"]
        product["$$ (x + 3)\cdot(x + 5) $$"]

        sum -->|**Разложение на множители**| product
        product -->|Раскрытие скобок| sum

        class sum,product fill
    `}</Diagram>

    <P>
      Представьте, что у нас было бы сложное выражение. С записью через сумму мы бы ничего не сделали, а вот с записью
      через множители можем упростить!
    </P>

    <BlockMath>{math`
      \frac{\yellow{x^2 + 8x + 15}}{2(x + 3)} = \ \red{\text{?!}} >>{big}
      \frac{\blue{\cancel{(x + 3)} \cdot (x + 5)}}{2\cancel{(x + 3)}} = \green{\frac{x + 5}{2}}
    `}</BlockMath>

    <P>
      Только не надо думать, что теперь всё и всегда надо записывать через умножение. Это не так и существует
      бесчисленное количество ситуаций, где запись через сумму упростит выражение, а запись через множители обосрется:
    </P>

    <BlockMath>{math`
      -\cancel{15} + \yellow{\cancel{x^2} + 8x + \cancel{15}} - \cancel{x^2} = \green{8x} >>{big}
      -15 + \blue{(x + 3) \cdot (x + 5)} - x^2 = \red{\text{?!}}
    `}</BlockMath>

    <Important
      title="И плюс, и умножение важны!"
      snippet={{
        key: true,
        description: `
          В разных ситуациях надо уметь записывать выражения и через сумму, и через произведение множителей.
        `,
      }}
    >
      Оба варианта записи выражений, что <B accent>через сумму</B>, что <B accent>через произведение множителей</B>,
      оказываются очень полезными в разных ситуациях. Для достижения идеальной математической гармонии надо уметь
      свободно владеть обоими стихиями.
    </Important>

    <H1>Зачем вообще это делать?</H1>

    <P>
      Это очень правильный вопрос. Мало нам что ли морального и духовного разложения? Теперь будем разлагать ещё и юные
      и невинные квадратные трёхчлены?! Причины делать так всё же есть, причём их много, и все они довольно веские:
    </P>

    <List
      $={uniques.whyFactoring}
      ordered
      snippet={{
        seo: 'Чем полезно разложение квадратного трёхчлена на множители?',
        key: true,
        title: 'Зачем это нужно?',
        description: `
          Разложение квадратных трёхчленов на множители позволяет упрощать выражения, сразу видеть их корни и даёт альтернативный способ решать квадратные уравнения.
        `,
      }}
    >
      <Li>
        <P>
          <B>Можно упрощать выражения</B>
        </P>
        <P>
          Запись квадратного трёхчлена через произведение множителей частенько позволяет упростить сложные выражения:
        </P>
        <BlockMath>{math`
          \frac{5 \cdot (x^2 - 2x - 24)}{(x+4) \cdot (x-6) \cdot 10} = \frac{5 \cdot \cancel{(x+4)} \cdot \cancel{(x-6)}}{10 \cdot \cancel{(x+4)} \cdot \cancel{(x-6)}} = \frac{5}{10} = \frac{1}{2} = 0.5
        `}</BlockMath>
      </Li>
      <Li>
        <P>
          <B>Из множителей легко получить сумму</B>
        </P>
        <P>
          Из разложенного на множители квадратного трёхчлена запись через сумму получается банальным раскрытием скобок:
        </P>
        <BlockMath>{math`
          2(x-1)(4+x) = 2(4x + x^2 - 4 -x) = 2(x^2 + 3x - 4) = \boxed{2x^2 + 6x - 8}
        `}</BlockMath>
        <P>А вот разложить на множители запись через сумму уже гораздо сложнее!</P>
        <BlockMath>{math`2x^2 + 6x - 8 = \ldots \text{ ? } \ldots = \boxed{2(x-1)(4+x)}`}</BlockMath>
      </Li>
      <Li>
        <P>
          <B>Сразу видны корни уравнения</B>
        </P>
        <P>
          Запись квадратного трёхчлена через произведение множителей позволяет сразу видеть корни его "уравнения". Ведь
          в таком виде он попадает под задачу <Dep on={zeroFactors}>Нулевые множители</Dep> -- достаточно по отдельности
          приравнять каждый из двух множителей к нулю и получится верное равенство <M>0 = 0</M>:
        </P>
        <Diagram>{math`
          flowchart TD
            trinomial["$$ x^2 - 7x + 6 = 0 $$"]
            factors["$$ (x - 1)(x - 6) = 0 $$"]
            trinomial --> whichRoots["Какие корни?!"]
            subEquation1["$$ x - 1 = 0 $$"]
            subEquation2["$$ x - 6 = 0 $$"]
            factors -->|Подуравнение 1| subEquation1
            factors -->|Подуравнение 2| subEquation2
            subEquation1 --> root1["$$ x_1 = 1 $$"]
            subEquation2 --> root2["$$ x_2 = 6 $$"]

            class whichRoots,root1,root2 fill
        `}</Diagram>
        <P>
          В записи через множители корнями являются числа рядом с <M>x</M>, взятые с обратным знаком!
        </P>
      </Li>
      <Li>
        <P>
          <B>Cпособ решать квадратные уравнения</B>
        </P>
        <P>
          Разложение на множители -- ещё один способ решать квадратные уравнения, помимо уже известных вам методов:{' '}
          <Dep on={completingTheSquare}>выделения полного квадрата</Dep> и{' '}
          <Dep on={quadraticFormula}>общей формулы корней</Dep>. Мы одновременно записываем квадратный трёхчлен через
          умножение и сразу видим корни, если бы это выражение было квадратным уравнением. Большим плюсом является и то,
          что так можно находить корни простых квадратных уравнений <B>быстро</B>, иногда <B>даже в уме</B>!
        </P>
      </Li>
    </List>

    <P>
      Из-за этих многочисленных плюсов чаще всего квадратные трёхчлены предпочитают записывать всё же в форме множителей
      и лишь при редких исключениях и большой необходимости быстренько раскрывать скобки и получать запись через сумму.
    </P>

    <Image src={virginChad} />

    <H1>Не путайте трёхчлен с уравнением!</H1>

    <P>
      На всякий случай ещё раз обратим внимание: не путайте <Dep on={quadraticPolynomial}>квадратный трёхчлен</Dep> и{' '}
      <Dep on={quadraticEquation}>квадратное уравнение</Dep>. Квадратный трёхчлен это обычное выражение, совсем не
      обязательно связанное с равенствами или уравнениями! Когда мы раскладываем его на множители, мы просто
      перезаписываем его в другом виде.
    </P>

    <BlockMath>x^2 + 8x + 15 = (x + 3)(x + 5)</BlockMath>

    <P>
      Квадратное уравнение же это не обычное выражение, а равенство, в котором обязательно есть знак равно "<M>=</M>", с
      одной стороны от которого <B>обязательно</B> находится какой-нибудь квадратный трёхчлен, а с другой стороны{' '}
      <B>обязательно</B> стоит ноль. Конечно же, "внутри" квадратного уравнения квадратный трёхчлен тоже можно разложить
      на множители:
    </P>

    <BlockMath>{math`
      x^2 + 8x + 15 = 0 \\
      (x+3)(x+5) = 0
    `}</BlockMath>

    <P>
      Как видите, "побочным эффектом" такого разложения является то, что мы сразу начинаем видеть корни этого
      квадратного уравнения: <M>-3</M> и <M>-5</M>.
    </P>

    <H1
      snippet={{ key: true, description: 'Методика разложения "простых" квадратных трёхчленов на множители вручную.' }}
    >
      Разложение "вручную"
    </H1>

    <P>
      Запись числа <M>42</M> в виде <M>2 \cdot 3 \cdot 7</M>, как и запись квадратного трёхчлена <M>x^2 + 8x + 15</M> в
      виде <M>(x + 3)\cdot(x + 5)</M> -- всё это называется разложением на множители. Разложить число на множители
      обычно легко, а вот разложение трёхчлена превращается в мини-загадку. Сейчас мы научимся разгадывать эту загадку.
    </P>

    <P>
      Основной трюк всегда заключается в том, чтобы разложить коэффициенты <M>B</M> и <M>C</M> на два каких-нибудь
      числа, назовем их <M>t</M> и <M>k</M>. Причем разложить надо не как попало (таких разложений бесконечно много), а
      только так, чтобы их <B>сумма</B> <M>t + k</M> <B>давала коэффициент</B> <M>B</M>, а <B>произведение</B>{' '}
      <M>t \cdot k</M> <B>давало коэффициент</B> <M>C</M>!
    </P>

    <Image src={factoringStep1} invert="dark" width="500px" />

    <P>
      Почему именно <M>B</M> через сложение, а <M>C</M> через умножение? Почему не оба через сложение или оба через
      умножение? А потому что теперь мы можем провести сокрушительную комбинацию из многократного вынесения за скобки
      общего множителя, ведь именно это действие и приводит к появлению "умножения" в выражениях.
    </P>

    <P>
      Сначала выносим за скобки <M>x</M> из первого и второго слагаемых. Потом выносим за скобки <M>k</M> из второго и
      третьего слагаемых. Наконец, выносим за скобки образовавшийся общий множитель <M>(x+t)</M>. Вот мы и разложили
      квадратный трёхчлен на множители!
    </P>

    <Image src={factoringStep2} invert="dark" width="500px" />

    <P>
      Вам наверняка хотелось бы увидеть визуализацию процесса? Она действительно имеется и прекрасно демонстрирует,
      почему числа <M>t</M> и <M>k</M> надо как складывать, так и умножать. Мы имеем квадратик площадью <M>x^2</M>,
      прямоугольник площадью <M>Bx</M> и некую бесформенную фигуру площадью <M>C</M>. Прямоугольник <M>Bx</M> мы делим
      на два прямоугольника поменьше так, чтобы оставшееся место можно было заполнить прямоугольником{' '}
      <M>t \cdot k = C</M>. Короче, во время <Dep on={completingTheSquare}>выделения полного квадрата</Dep> мы из
      фигурок делали квадрат, а сейчас из них мы делаем прямоугольник.
    </P>

    <Image src={factoringStep3} invert="dark" width="600px" />

    <P>
      Теперь, когда вы поняли основную фишку, нужно обязательно закрепить её применение на разнообразных примерах.
      Обязательно попытайтесь самостоятельно решить каждый из них!
    </P>

    <Problems $={uniques.manualFactoring} title="Примеры ручного разложения на множители" level="example">
      <P>Разложите квадратный трёхчлен на множители и найдите корни соответствующего ему квадратного уравнения:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + 5x + 6</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x+2)(x+3)" />
        <RootsCheck roots={[-2, -3]} />
        <ProblemAnswer>
          <BlockMath>(x+2)(x+3)</BlockMath>
        </ProblemAnswer>
        <ProblemHint>
          Какие числа при сложении дают <M>5</M>, а при умножении <M>6</M>?
        </ProblemHint>
        <ProblemSolution>
          <P>
            Подумайте, какие числа при сложении дают <M>5</M>, а при умножении <M>6</M>? Довольно легко можно
            догадаться, что это числа <M>2</M> и <M>3</M>. Раскладываем коэффициенты <M>B</M> и <M>C</M> на эти числа и
            получаем:
          </P>
          <BlockMath>{math`
            x^2 + 5x + 6 = \\
            = x^2 + \underbrace{2x + 3x}_{\small 5x} + \underbrace{2 \cdot 3}_{\small 6} = \\
            = x(x + 2) + 3(x + 2) = \\
            = (x + 2)(x + 3)
          `}</BlockMath>
          <P>Решениями соответствующего уравнения будут числа, противоположные используемым для разложения:</P>
          <BlockMath>{math`
            x^2 + 5x + 6 = 0 \\
            (x+2)(x+3) = 0 \\
            x_1 = -2, \quad x_2 = -3
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + 6x + 9</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x+3)^2" />
        <RootsCheck roots={[-3]} />
        <ProblemAnswer>
          <BlockMath>(x+3)^2</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Какие числа при сложении дают <M>6</M>, а при умножении <M>9</M>? Это числа <M>3</M> и <M>3</M>.
            Раскладываем коэффициенты <M>B</M> и <M>C</M> на эти числа и получаем:
          </P>
          <BlockMath>{math`
            x^2 + 6x + 9 = \\
            = x^2 + \underbrace{3x + 3x}_{\small 6x} + \underbrace{3 \cdot 3}_{\small 9} = \\
            = x(x + 3) + 3(x + 3) = \\
            = (x + 3)(x + 3) = (x + 3)^2
          `}</BlockMath>
          <P>Решением соответствующего уравнения будет число, противоположное используемому для разложения:</P>
          <BlockMath>{math`
            x^2 + 6x + 9 = 0 \\
            (x+3)^2 = 0 \\
            x_{1,2} = -3
          `}</BlockMath>
        </ProblemSolution>
        <ProblemNote>
          <P>
            В этом примере разложение на множители совпало с выделением полного квадрата. Такое тоже часто случается.
            Можно было записать и так:
          </P>
          <BlockMath>{math`
            x^2 + 6x + 9 = \underbrace{(x^2) + 2 \cdot x \cdot 3 + (3^2)}_{a^2 + 2ab + b^2 = (a+b)^2} = (x + 3)^2
          `}</BlockMath>
        </ProblemNote>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + 6x</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="x(x+6)" />
        <RootsCheck roots={[0, -6]} />
        <ProblemHint>
          Для разложения на множители достаточно вынести за скобки <M>x</M>.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>x(x+6)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Перед нами "неполное квадратное выражение" с коэффициентом <M>C = 0</M>. Хотелось бы сказать, что это{' '}
            <Ref to={incompleteQuadratic}>неполное квадратное уравнение</Ref>, но это не уравнение 🤣. Для разложения на
            множители достаточно вынести за скобки <M>x</M>:
          </P>
          <BlockMath>x^2 + 6x = x(x + 6)</BlockMath>
          <P>
            Но можно решить и с использованием нашего трюка. Какие два числа в сумме дают <M>B = 6</M>, а при
            перемножении дают <M>C = 0</M>? Понятное дело, что одно из этих чисел должно быть равно <M>0</M> (чтобы
            обнулить коэффициент <M>C</M>), а второе тогда обязано быть <M>6</M>!
          </P>
          <BlockMath>{math`
            x^2 + 6x = \\
            = x^2 + \underbrace{0x + 6x}_{\small 6x} + \underbrace{0 \cdot 6}_{\small 0} = \\
            = x(x + 0) + 6(x + 0) = \\
            = (x + 0)(x + 6) = x(x + 6)
          `}</BlockMath>
          <P>Решениями соответствующего уравнения будут числа, противоположные используемым для разложения:</P>
          <BlockMath>{math`
            x^2 + 6x = 0 \\
            x(x + 6) = 0 \\
            x_1 = 0, \quad x_2 = -6
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 7x + 6</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x-1)(x-6)" />
        <RootsCheck roots={[1, 6]} />
        <ProblemHint>
          Не обязательно раскладывать именно на два положительных числа... Одно из чисел (или даже оба) могут быть
          отрицательными! Ведь любую разность можно все равно записать в виде суммы: <M>2 - 3 = 2 + (-3)</M> или даже{' '}
          <M>-8 - 10 = (-8) + (-10)</M>!
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>(x-1)(x-6)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Интересная ситуация. Нам при сумме надо получить отрицательное число, а при умножении положительное. Такой
            вариант возможен только если оба числа будут отрицательными. Какие же это числа? Это <M>-1</M> и <M>-6</M>!
            Раскладываем коэффициенты <M>B</M> и <M>C</M> на эти числа и получаем:
          </P>
          <BlockMath>{math`
            x^2 - 7x + 6 = \\
            = x^2 + \underbrace{-1x + -6x}_{\small -7x} + \underbrace{-1 \cdot -6}_{\small 6} = \\
            = x(x - 1) - 6(x - 1) = \\
            = (x - 1)(x - 6)
          `}</BlockMath>
          <P>Решениями соответствующего уравнения будут числа, противоположные используемым для разложения:</P>
          <BlockMath>{math`
            x^2 - 7x + 6 = 0 \\
            (x-1)(x-6) = 0 \\
            x_1 = 1, \quad x_2 = 6
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 1</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x-1)(x+1)" />
        <RootsCheck roots={[1, -1]} />
        <ProblemHint>Воспользуйтесь формулой сокращенного умножения.</ProblemHint>
        <ProblemAnswer>
          <BlockMath>(x-1)(x+1)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Это выражение можно разложить на множители, используя формулу сокращенного умножения под названием "разность
            квадратов":
          </P>
          <BlockMath>{math`
            x^2 - 1 = \underbrace{x^2 - 1^2}_{a^2 - b^2 = (a+b)(a-b)} = (x - 1)(x + 1)
          `}</BlockMath>
          <P>
            Но можно решить и с использованием нашего трюка. Какие два числа в сумме дадут <M>B = 0</M>, а при
            перемножении <M>C = -1</M>. Конечно же это числа <M>1</M> и <M>-1</M>!
          </P>
          <BlockMath>{math`
            x^2 - 1 = \\
            = x^2 + \underbrace{1x + -1x}_{\small 0x} + \underbrace{1 \cdot -1}_{\small -1} = \\
            = x(x + 1) - 1(x + 1) = \\
            = (x + 1)(x - 1)
          `}</BlockMath>
          <P>Решениями соответствующего уравнения будут числа, противоположные используемым для разложения:</P>
          <BlockMath>{math`
            x^2 - 1 = 0 \\
            (x-1)(x+1) = 0 \\
            x_1 = 1, \quad x_2 = -1
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 2x - 24</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="(x-6)(x+4)" />
        <RootsCheck roots={[6, -4]} />
        <ProblemAnswer>
          <BlockMath>(x-6)(x+4)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Какие два числа при сложении дают <M>-2</M>, а при умножении <M>-24</M>? Это числа <M>4</M> и <M>-6</M>.
            Раскладываем коэффициенты <M>B</M> и <M>C</M> на эти числа и получаем:
          </P>
          <BlockMath>{math`
            x^2 - 2x - 24 = \\
            = x^2 + \underbrace{4x + -6x}_{\small -2x} + \underbrace{4 \cdot -6}_{\small -24} = \\
            = x(x + 4) - 6(x + 4) = \\
            = (x + 4)(x - 6)
          `}</BlockMath>
          <P>Решениями соответствующего уравнения будут числа, противоположные используемым для разложения:</P>
          <BlockMath>{math`
            x^2 - 2x - 24 = 0 \\
            (x-6)(x+4) = 0 \\
            x_1 = 6, \quad x_2 = -4
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>2x^2 - 6x + 4</BlockMath>
        </ProblemDescription>
        <MathExpressionCheck label="Запись через множители" answer="2(x-1)(x-2)" />
        <RootsCheck roots={[1, 2]} />
        <ProblemHint>
          Сначала вынесите за скобки <M>2</M> из всех слагаемых.
        </ProblemHint>
        <ProblemAnswer>
          <BlockMath>2(x-1)(x-2)</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>
            Сначала вынесем за скобки <M>2</M> из всех слагаемых:
          </P>
          <BlockMath>{math`
            2x^2 - 6x + 4 = 2(x^2 - 3x + 2)
          `}</BlockMath>
          <P>
            Теперь нам нужно разложить на множители квадратный трёхчлен <M>x^2 - 3x + 2</M>. Какие два числа при
            сложении дают <M>-3</M>, а при умножении <M>2</M>? Это числа <M>-1</M> и <M>-2</M>!
          </P>
          <BlockMath>{math`
            2(x^2 - 3x + 2) = \\
              = 2(x^2 + \underbrace{-1x + -2x}_{\small -3x} + \underbrace{-1 \cdot -2}_{\small 2}) = \\
              = 2(x(x - 1) - 2(x - 1)) = \\
              = 2(x - 1)(x - 2)
          `}</BlockMath>
          <P>Решениями соответствующего уравнения будут числа, противоположные используемым для разложения:</P>
          <BlockMath>{math`
            2x^2 - 6x + 4 = 0 \\
            2(x-1)(x-2) = 0 \\
            x_1 = 1, \quad x_2 = 2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <H1>Разложение в общем виде</H1>

    <P>
      Трюкачество и визуализации, конечно, круты, но подходят лишь для частных случаев. Как и в случае с{' '}
      <Ref to={quadraticFormula}>общей формулой корней</Ref> квадратного уравнения, нам нужно провести разложение не
      конкретных квадратных трёхчленов, а сразу их <Dep on={quadraticPolynomial}>стандартного вида</Dep>:
    </P>

    <BlockMath>Ax^2 + Bx + C, \quad A \neq 0</BlockMath>

    <P>
      План у нас следующий. Мы выделим полный квадрат в квадратном трёхчлене, а затем воспользуемся формулой
      сокращенного умножения "разность квадратов", чтобы получить финальные множители разложения. В упрощенном виде
      выглядеть это будет примерно вот так:
    </P>

    <BlockMath>{math`
      \underbrace{x^2 + 2x + 1}_{\text{полный квадрат}} - 9 =
      \underbrace{(x + 1)^2 - 3^2}_{\text{разность квадратов}} = \\
      = (x + 1 - 3)(x + 1 + 3) = \\
      = (x - 2)(x + 4)
    `}</BlockMath>

    <P>
      Приступим! Сначала нам надо избавиться от коэффициента <M>A</M> при <M>x^2</M>. Зачем? Потому что мы не знаем его
      знак. Не дай бог окажется, что это отрицательное число, тогда мы не сможем взять корень из <M>Ax^2</M>! Поэтому
      выносим его за скобки из всех трех слагаемых:
    </P>

    <BlockMath>{math`A\left( x^2 + \frac{B}{A}x + \frac{C}{A} \right)`}</BlockMath>

    <P>
      Свободный член <M>{math`C/A`}</M> пока что не трогаем. Он нам понадобится для разности квадратов. Оставшиеся два
      слагаемых будем запаковывать в квадрат суммы <M>a^2 + 2ab + b^2 = (a+b)^2</M>. Но данных для выделения полного
      квадрата нам не хватает! Нет двойки и нет третьего слагаемого, играющего роль <M>b^2</M>. Поэтому мы вынуждены
      добавить эти недостающие элементы, а потом отнять их же, чтобы{' '}
      <Dep on={compensate}>не менять значение выражения</Dep>:
    </P>

    <BlockMath>{math`
      A\left( x^2 + \yellow{2} \cdot x\frac{B}{A} \cdot \yellow{\frac{1}{2}} + \frac{C}{A} \right) \\
      A\left( x^2 + 2 \cdot x \cdot \frac{B}{2A} + \frac{C}{A} \right)
    `}</BlockMath>

    <P>
      Дробь <M>{math`\frac{B}{2A}`}</M> естественным образом становится <M>b</M>, потому что роль <M>a</M> уже играет{' '}
      <M>x</M>. Для выделения полного квадрата нам не хватает только добавить и компенсировать <M>b^2</M>:
    </P>

    <BlockMath>{math`
      A\left( \underbrace{x^2 + 2 \cdot x \cdot \frac{B}{2A} + \yellow{\left( \frac{B}{2A} \right)^2}}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{\left( \frac{B}{2A} \right)^2} + \frac{C}{A} \right) \\
      A\left( \left[ x + \frac{B}{2A} \right]^2 - \left[ \frac{B}{2A} \right]^2 + \frac{C}{A} \right) \\
      A\left( \left[ x + \frac{B}{2A} \right]^2 - \left[ \frac{B^2}{4A^2} - \frac{C}{A} \right] \right) \\
      A\left( \left[ x + \frac{B}{2A} \right]^2 - \frac{B^2 - 4AC}{4A^2} \right) \\
    `}</BlockMath>

    <P>
      Замечаем нашего старого знакомого -- <Dep on={discriminant}>дискриминант</Dep>. Проводим замену, чтобы упростить и
      без того сложное выражение:
    </P>

    <BlockMath>{math`
      A\left( \left[ x + \frac{B}{2A} \right]^2 - \frac{D}{4A^2} \right)
    `}</BlockMath>

    <P>
      Мы успешно выделили полный квадрат. Замечаем, что внутри скобок у нас как раз получается разность квадратов.
      Точнее "получится" она только если дискриминант <M>D \geq 0</M> (только в этом случае из него получится взять
      корень). Примем это условие и наконец завершим разложение на множители:
    </P>

    <BlockMath>{math`
      A\left( \left[ x + \frac{B}{2A} \right]^2 - \left[ \frac{\sqrt{D}}{2A} \right]^2 \right) = \\
      = A\left( \left[ x + \frac{B}{2A} - \frac{\sqrt{D}}{2A} \right] \cdot \left[ x + \frac{B}{2A} + \frac{\sqrt{D}}{2A} \right] \right) = \\
      = A\left( x + \frac{B - \sqrt{D}}{2A} \right) \left( x + \frac{B + \sqrt{D}}{2A} \right)
    `}</BlockMath>

    <P>
      Замечаем, что рядом с <M>x</M> в обеих скобках мы почти получили <Dep on={quadraticFormula}>формулы</Dep> обоих
      возможных корней квадратного уравнения. Для полного совпадения нужно только вынести из числителей минус за скобки:
    </P>

    <BlockMath>{math`
      A\left( x - \underbrace{\frac{-B + \sqrt{D}}{2A}}_{\small x_1} \right) \left( x - \underbrace{\frac{-B - \sqrt{D}}{2A}}_{\small x_2} \right) \\
      \boxed{A (x - x_1)(x - x_2)}
    `}</BlockMath>

    <P>
      Вот и всё, этот кошмар закончился. Как видите, процесс разложения квадратного трёхчлена в стандартном виде
      практически повторяет вывод общей формулы корней квадратного уравнения. Отличие лишь в том, что у нас нет
      уравнения, нет его "левой" и "правой" сторон, поэтому вместо взятия квадратного корня "из обеих сторон уравнения"
      мы воспользовались формулой разности квадратов.
    </P>

    <Statement
      $={uniques.generalFactoring}
      title="Разложение квадратного трёхчлена на множители"
      snippet={{
        key: true,
        title: 'Разложение в общем виде',
        seo: 'Формула разложения квадратного трёхчлена на множители',
        description: `
          Если у квадратного трёхчлена есть корни, то его всегда можно разложить на множители с участием этих корней.
        `,
      }}
    >
      <P>
        Если у <Dep on={quadraticPolynomial}>квадратного трёхчлена</Dep> есть <Dep on={quadraticFormula}>корни</Dep>{' '}
        (обозначим их за <M>x_1</M> и <M>x_2</M>), то этот трёхчлен <B>всегда</B> можно{' '}
        <B accent>разложить на множители</B>:
      </P>

      <Diagram>{math`
        flowchart TD
          standartForm["**Стандартный вид**<br />$$ Ax^2 + Bx + C $$"]
          factorsForm["**В виде множителей**<br />$$ A(x - x_1)(x - x_2) $$"]

          factorsForm -->|Раскрытие скобок| standartForm
          standartForm -->|**Разложение на множители**| factorsForm

          class standartForm,factorsForm fill
      `}</Diagram>

      <P>
        Это две разные записи (через сложение и через умножение), которые обозначают одно и то же значение, точно так
        же, как <M>10 + 6</M> и <M>2\cdot8</M> обозначают одно и то же число. Запись квадратного трёхчлена можно менять
        на запись через множители и наоборот <B>абсолютно в любой ситуации</B>!
      </P>
    </Statement>

    <P>
      Больше не нужны никакие трюки. Для разложения на множители квадратного трёхчлена нужно просто любым удобным для
      вас образом решить соответствующее ему квадратное уравнение! Если же корней у уравнения нет, то разложить на
      множители квадратный трёхчлен невозможно. Потренируемся выполнять эту процедуру на примерах:
    </P>

    <Problems $={uniques.generalFactoringExamples} title="Примеры разложения через корни" level="example">
      <P>Разложите квадратный трёхчлен на множители через решение соответствующего квадратного уравнения:</P>
      <SubProblem>
        <ProblemDescription>
          <BlockMath>4x^2 + 15x - 4</BlockMath>
        </ProblemDescription>
        <RootsFactoringCheck factoredForm="4(x - 1/4)(x + 4)" roots={['1/4', -4]} />
        <ProblemAnswer>
          <BlockMath>{math`4\left(x - \frac{1}{4}\right)(x + 4)`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`
            A = 4, \quad B = 15, \quad C = -4
          `}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = 15^2 - 4 \cdot 4 \cdot (-4) = 225 + 64 = 289
          `}</BlockMath>
          <P>Находим корни:</P>
          <BlockMath>{math`
            x_1 = \frac{-B + \sqrt{D}}{2A} = \frac{-15 + 17}{8} = \frac{1}{4} >>
            x_2 = \frac{-B - \sqrt{D}}{2A} = \frac{-15 - 17}{8} = -4
          `}</BlockMath>
          <P>Записываем разложение на множители:</P>
          <BlockMath>{math`
            4x^2 + 15x - 4 = 4\left(x - \frac{1}{4}\right)(x + 4)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>2x^2 - 9x - 18</BlockMath>
        </ProblemDescription>
        <RootsFactoringCheck factoredForm="2(x - 6)(x + 3/2)" roots={[6, '-3/2']} />
        <ProblemAnswer>
          <BlockMath>{math`2(x - 6)\left(x + \frac{3}{2}\right)`}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`
            A = 2, \quad B = -9, \quad C = -18
          `}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = (-9)^2 - 4 \cdot 2 \cdot (-18) = 81 + 144 = 225
          `}</BlockMath>
          <P>Находим корни:</P>
          <BlockMath>{math`
            x_1 = \frac{-B + \sqrt{D}}{2A} = \frac{9 + 15}{4} = 6 >>
            x_2 = \frac{-B - \sqrt{D}}{2A} = \frac{9 - 15}{4} = -\frac{3}{2}
          `}</BlockMath>
          <P>Записываем разложение на множители:</P>
          <BlockMath>{math`
            2x^2 - 9x - 18 = 2(x - 6)\left(x + \frac{3}{2}\right)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 + 5x - 5</BlockMath>
        </ProblemDescription>
        <RootsFactoringCheck
          factoredForm="(x - (-5 + 3*sqrt(5))/2)(x - (-5 - 3*sqrt(5))/2)"
          roots={['(-5 + 3*sqrt(5))/2', '(-5 - 3*sqrt(5))/2']}
        />
        <ProblemAnswer>
          <BlockMath>{math`
            \left(x - \frac{-5 + 3\sqrt{5}}{2}\right)\left(x - \frac{-5 - 3\sqrt{5}}{2}\right)
          `}</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`
            A = 1, \quad B = 5, \quad C = -5
          `}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = 5^2 - 4 \cdot 1 \cdot (-5) = 25 + 20 = 45
          `}</BlockMath>
          <P>Находим корни:</P>
          <BlockMath>{math`
            x_1 = \frac{-B + \sqrt{D}}{2A} = \frac{-5 + 3\sqrt{5}}{2} >>
            x_2 = \frac{-B - \sqrt{D}}{2A} = \frac{-5 - 3\sqrt{5}}{2}
          `}</BlockMath>
          <P>Записываем разложение на множители:</P>
          <BlockMath>{math`
            x^2 + 5x - 5 = \left(x - \frac{-5 + 3\sqrt{5}}{2}\right)\left(x - \frac{-5 - 3\sqrt{5}}{2}\right)
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>3x^2 + 2x + 1</BlockMath>
        </ProblemDescription>
        <RootsFactoringCheck empty />
        <ProblemAnswer>
          <P>У этого трёхчлена нет корней, поэтому разложить его на множители невозможно.</P>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`
            A = 3, \quad B = 2, \quad C = 1
          `}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = 2^2 - 4 \cdot 3 \cdot 1 = 4 - 12 = -8 < 0
          `}</BlockMath>
          <P>
            Раз дискриминант отрицательный, то у квадратного уравнения нет корней, а значит разложить квадратный
            трёхчлен на множители невозможно.
          </P>
        </ProblemSolution>
      </SubProblem>

      <SubProblem>
        <ProblemDescription>
          <BlockMath>x^2 - 4x + 4</BlockMath>
        </ProblemDescription>
        <RootsFactoringCheck factoredForm="(x-2)^2" roots={[2]} />
        <ProblemAnswer>
          <BlockMath>(x-2)^2</BlockMath>
        </ProblemAnswer>
        <ProblemSolution>
          <P>Определяем коэффициенты:</P>
          <BlockMath>{math`
            A = 1, \quad B = -4, \quad C = 4
          `}</BlockMath>
          <P>Находим дискриминант:</P>
          <BlockMath>{math`
            D = B^2 - 4AC = (-4)^2 - 4 \cdot 1 \cdot 4 = 16 - 16 = 0
          `}</BlockMath>
          <P>Находим корни:</P>
          <BlockMath>{math`
            x_{1,2} = \frac{-B}{2A} = \frac{4}{2} = 2
          `}</BlockMath>
          <P>Записываем разложение на множители:</P>
          <BlockMath>{math`
            x^2 - 4x + 4 = (x - 2)(x - 2) = (x - 2)^2
          `}</BlockMath>
        </ProblemSolution>
      </SubProblem>
    </Problems>

    <H1 $={uniques.trinomialsPlane}>"Прямоугольные" квадратные трёхчлены</H1>

    <P>
      Разложение квадратного трёхчлена на множители можно представить в виде сборки из нескольких фигурок цельного
      прямоугольника, это мы уже видели. Однако, это визуализацию можно распространить и для отрицательных чисел{' '}
      <M>t</M> и <M>k</M>, на которые мы разбиваем коэффициенты <M>B</M> и <M>C</M>. Для этого нужно изобразить оба этих
      числа на координатной плоскости, где <M>t</M> будет осью абсцисс, а <M>k</M> -- осью ординат (или наоборот).
    </P>

    <P>
      Любая точка на этой координатной плоскости будет обозначать какой-то квадратный трёхчлен! Назвать её тоже можно
      соответствующим образом, например, плоскость "прямоугольных" трёхчленов. Как вам? 😎
    </P>

    <Image src={quadraticTrinomialPlane} invert="dark" width="550px" />

    <P>
      Коэффициент <M>A</M> мы не учитываем, потому что его всегда можно вынести за скобки, и получится трёхчлен без
      коэффициента <M>A</M>. У них даже отдельное название есть -- <B>приведённые</B> квадратные трёхчлены.
    </P>

    <BlockMath>{math`Ax^2 + Bx + C = A\left( x^2 + \frac{B}{A}x + \frac{C}{A} \right)`}</BlockMath>

    <P>Получается, все квадратные трёхчлены можно разделить на две категории:</P>

    <List ordered>
      <Li>
        <P>
          <B>"Прямоугольные" квадратные трёхчлены</B>
        </P>
        <P>
          Такие квадратные трёхчлены имеют два или один корень, могут быть разложены на множители и представлены в виде
          прямоугольника или линии.
        </P>
      </Li>
      <Li>
        <P>
          <B>"Неправильные" квадратные трёхчлены</B>
        </P>
        <P>
          Такие квадратные трёхчлены не имеют корней, их нельзя разложить на множители, и они не образуют прямоугольник
          или линию.
        </P>
      </Li>
    </List>
  </>
));
