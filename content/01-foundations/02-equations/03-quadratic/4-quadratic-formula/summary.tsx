import article from './article';

// #region Links
//

const articleLink = $CONTENT.foundations.equations.quadratic.quadraticFormula.article;
const completingTheSquare = $CONTENT.foundations.equations.quadratic.completingTheSquare;

//
// #endregion

export default defineProse({
  uniques: {
    algorithm: Diagram,
  },
})(({ uniques }) => (
  <>
    <Include toc="Суть общих формул">{article.uniques.generalFormulas}</Include>

    <Hr />

    <Diagram
      $={uniques.algorithm}
      snippet={{
        seo: 'Алгоритм решения квадратных уравнений',
        key: 'Алгоритм решения',
        search: true,
        title: 'Алгоритм решения квадратного уравнения',
        description: 'Диаграмма, которая показывает, как решить абсолютно любое квадратное уравнение.',
      }}
      toc="Алгоритм решения"
    >
      {math`
        flowchart TD
          equation["**Записать&nbsp;в&nbsp;общем&nbsp;виде**<br />$$ Ax^2 + Bx + C = 0 $$"]
          equation --> discriminant["**Вычислить&nbsp;дискриминант**<br />$$ D = B^2 - 4AC $$"]

          discriminant --> positive["$$ D > 0 $$"]
          discriminant --> zero["$$ D = 0 $$"]
          discriminant --> negative["$$ D < 0 $$"]

          positive -->|Два корня| twoRoots["$$ x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} $$"]
          zero -->|Один корень| oneRoot["$$ x = \frac{-B}{2A} $$"]
          negative --> noRoots["**Корней нет**"]

          class twoRoots,oneRoot,noRoots fill
      `}
      <Caption>Алгоритм решения любого квадратного уравнения</Caption>
    </Diagram>

    <Hr />

    <P>
      Прямой вывод формулы путём <Dep on={completingTheSquare}>выделения полного квадрата</Dep>. Если вам нужны более
      подробные объяснения, в <Ref to={articleLink}>статье</Ref> есть детальный разбор каждого шага.
    </P>

    <Table
      snippet={{
        key: true,
        seo: 'Вывод формулы корней квадратного уравнения',
        title: 'Вывод формулы корней',
        description: 'Пошаговый вывод формулы корней квадратного уравнения с пояснениями.',
      }}
      toc
    >
      <Tr>
        <Td> </Td>
        <Td>
          <B>Действие</B>
        </Td>
        <Td center>
          <B>Уравнение</B>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>1</B>
        </Td>
        <Td>Записываем в общем виде.</Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle Ax^2 + Bx + C = 0`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>2</B>
        </Td>
        <Td>
          Делим обе части равенства на <M>A</M>.
        </Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle x^2 + \frac{B}{A}x + \frac{C}{A} = 0`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>3</B>
        </Td>
        <Td>Переносим свободный член в правую часть.</Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle x^2 + \frac{B}{A}x = -\frac{C}{A}`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>4</B>
        </Td>
        <Td>Добавляем и компенсируем двойку для выделения полного квадрата.</Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle x^2 + \yellow{2} \cdot  x \frac{B}{A} \cdot \yellow{\frac{1}{2}} = -\frac{C}{A}`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>5</B>
        </Td>
        <Td>
          Добавляем и компенсируем <M>b^2</M> для выделения полного квадрата.
        </Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle \underbrace{x^2 + 2\cdot x \cdot \frac{B}{2A} + \yellow{\left( \frac{B}{2A} \right)^2}}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{\left( \frac{B}{2A} \right)^2} = -\frac{C}{A}`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>6</B>
        </Td>
        <Td>Выделяем полный квадрат в левой части.</Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle \left( x + \frac{B}{2A} \right)^2 = -\frac{C}{A} + \left( \frac{B}{2A} \right)^2`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>7</B>
        </Td>
        <Td>Приводим правую часть к общему знаменателю.</Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle \left( x + \frac{B}{2A} \right)^2 = \frac{B^2 - 4AC}{4A^2}`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>8</B>
        </Td>
        <Td>
          Вводим понятие <Dep on={article.uniques.discriminant}>дискриминанта</Dep>.
        </Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle \left( x + \frac{B}{2A} \right)^2 = \frac{\brand{D}}{4A^2}`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>9</B>
        </Td>
        <Td>
          Берём квадратный корень из обеих частей (если <M>D \ge 0</M>).
        </Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle x_{1,2} + \frac{B}{2A} = \pm \frac{\sqrt{D}}{2A}`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>10</B>
        </Td>
        <Td>
          Изолируем <M>x</M> и получаем готовую формулу.
        </Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle x_{1,2} = \frac{-B \pm \sqrt{D}}{2A}`}</M>
        </Td>
      </Tr>
    </Table>

    <Include toc>{article.uniques.discriminant}</Include>

    <Include toc>{article.uniques.formula}</Include>

    <Include toc>{article.uniques.examples}</Include>

    <Hr />

    <Include toc>{article.uniques.biquadratic}</Include>

    <Include toc>{article.uniques.biquadraticExamples}</Include>
  </>
));
