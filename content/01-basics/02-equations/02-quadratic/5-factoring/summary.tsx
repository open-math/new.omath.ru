import article from './article';

// #region Assets
//
//

import factoringAlgorithm from './assets/factoring-algorithm.svg';

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

    <Include toc>{article.uniques.generalFactoring}</Include>

    <Include toc>{article.uniques.generalFactoringExamples}</Include>
  </>
));
