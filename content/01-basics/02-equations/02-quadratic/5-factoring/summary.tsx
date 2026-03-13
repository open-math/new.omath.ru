import article from './article';

// #region Assets
//
//

import factoringAlgorithm from './assets/factoring-algorithm.svg';

//
//
// #endregion

// #region Links
//
//

const articleLink = $CONTENT.basics.equations.quadratic.factoring.article;
const completingTheSquare = $CONTENT.basics.equations.quadratic.completingTheSquare;
const discriminant = $CONTENT.basics.equations.quadratic.quadraticFormula.article.$discriminant;
const quadraticFormula = $CONTENT.basics.equations.quadratic.quadraticFormula.article.$formula;

//
//
// #endregion

export default defineProse()(() => (
  <>
    <Diagram
      toc={true}
      snippet={{
        key: true,
        title: 'Варианты разложения',
        description: `
          Все возможные варианты разложения квадратного трёхчлена на множители.
        `,
      }}
    >
      {math`
        flowchart TD
          trinomial["**Квадратный трехчлен**<br />$$Ax^2 + Bx + C$$"]
          trinomial <-->|$$ D > 0 $$| twoRoots["$$A(x-x_1)(x-x_2)$$"]
          trinomial <-->|$$ D = 0 $$| oneRoot["$$A(x-x_{0})^2$$"]
          trinomial -->|$$ D < 0 $$| noRoots["**Нельзя разложить**"]

          class twoRoots,oneRoot,noRoots fill
      `}
      <Caption>Варианты разложения квадратного трёхчлена на множители</Caption>
    </Diagram>

    <H1>Зачем раскладывать?</H1>

    <Include>{article.uniques.whyFactoring}</Include>

    <H1>Разложение "вручную"</H1>

    <P>
      Простые квадратные трёхчлены иногда можно разложить на множители вручную. Для этого коэффициент <M>B</M> надо
      представить в виде суммы двух чисел, а коэффициент <M>C</M> как произведение <B>тех же самых</B> двух чисел.
      Геометрически это означает, что мы из нескольких фигур поменьше собираем один большой прямоугольник.
    </P>

    <Image src={factoringAlgorithm} invert="dark" />

    <Include toc>{article.uniques.manualFactoring}</Include>

    <H1>Разложение в общем виде</H1>

    <P>
      Прямой вывод общей формулы разложения путем <Dep on={completingTheSquare}>выделения полного квадрата</Dep> и
      формулы разности квадратов. Если вам нужны более подробные объяснения, в <Ref to={articleLink}>статье</Ref> есть
      детальный разбор каждого шага.
    </P>

    <Table
      snippet={{
        key: true,
        seo: 'Вывод формулы разложения квадратного трёхчлена',
        title: 'Вывод формулы разложения',
        description: 'Пошаговый вывод формулы разложения квадратного трёхчлена на множители с пояснениями.',
      }}
      toc
    >
      <Tr>
        <Td> </Td>
        <Td>
          <B>Действие</B>
        </Td>
        <Td center>
          <B>Выражение</B>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>1</B>
        </Td>
        <Td>Записываем в общем виде.</Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle Ax^2 + Bx + C`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>2</B>
        </Td>
        <Td>
          Выносим коэффициента <M>A</M> за скобку.
        </Td>
        <Td center freeze>
          <M currentColor>{math`\displaystyle A\left(x^2 + \frac{B}{A}x + \frac{C}{A}\right)`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>3</B>
        </Td>
        <Td>Добавляем и компенсируем двойку для выделения полного квадрата.</Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle A\left(x^2 + \yellow{2} \cdot x \frac{B}{A} \cdot \yellow{\frac{1}{2}} + \frac{C}{A}\right)`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>4</B>
        </Td>
        <Td>
          Добавляем и компенсируем <M>b^2</M> для выделения полного квадрата.
        </Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle A\left(\underbrace{x^2 + 2 \cdot x \frac{B}{A} \cdot \frac{1}{2} + \yellow{\left(\frac{B}{2A}\right)^2}}_{\small a^2 + 2ab + b^2 = (a+b)^2} - \yellow{\left(\frac{B}{2A}\right)^2} + \frac{C}{A}\right)`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>5</B>
        </Td>
        <Td>Выделяем полный квадрат.</Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle A\left(\left[x + \frac{B}{2A}\right]^2 - \frac{B^2}{4A^2} + \frac{C}{A}\right)`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>6</B>
        </Td>
        <Td>Приводим к общему знаменателю правую часть.</Td>
        <Td center freeze>
          <M
            currentColor
          >{math`\displaystyle A\left(\left[x + \frac{B}{2A}\right]^2 - \frac{B^2 - 4AC}{4A^2}\right)`}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>7</B>
        </Td>
        <Td>
          Вводим понятие <Dep on={discriminant}>дискриминанта</Dep>.
        </Td>
        <Td center freeze>
          <M currentColor>{math`
            \displaystyle A\left(\left[x + \frac{B}{2A}\right]^2 - \frac{\brand{D}}{4A^2}\right)
          `}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>8</B>
        </Td>
        <Td>Раскладываем на множители по формуле разности квадратов.</Td>
        <Td center freeze>
          <M currentColor>{math`
            \displaystyle A\left(x + \frac{B}{2A} - \frac{\sqrt{D}}{2A}\right)\left(x + \frac{B}{2A} + \frac{\sqrt{D}}{2A}\right)
          `}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>9</B>
        </Td>
        <Td>Приводим к общему знаменателю.</Td>
        <Td center freeze>
          <M currentColor>{math`
            \displaystyle A\left(x - \underbrace{\frac{-B - \sqrt{D}}{2A}}_{\text{Корень 1}}\right)\left(x - \underbrace{\frac{-B + \sqrt{D}}{2A}}_{\text{Корень 2}}\right)
          `}</M>
        </Td>
      </Tr>
      <Tr>
        <Td center>
          <B>10</B>
        </Td>
        <Td>
          Заменяем дроби на обозначения согласно <Dep on={quadraticFormula}>общей формуле корней</Dep>.
        </Td>
        <Td center freeze>
          <M currentColor>{math`
            \displaystyle A(x - x_1)(x - x_2)
          `}</M>
        </Td>
      </Tr>
    </Table>

    <Include toc>{article.uniques.generalFactoring}</Include>

    <Include toc>{article.uniques.generalFactoringExamples}</Include>
  </>
));
