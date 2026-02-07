import article from './article';

// #region Links
//

const whatIsQuadratic = $CONTENT.basics.equations.quadratic.whatIsIt;

//
// #endregion

export default defineProse({
  uniques: {
    allFormulas: Diagram,
  },
})(({ uniques }) => (
  <>
    <P>
      Встретив <Dep to={whatIsQuadratic}>квадратное уравнение</Dep>, не спешите сразу использовать громоздкие методы для
      поиска его решений. Вполне может оказаться, что это квадратное уравнение является неполным:
    </P>

    <Include toc>{article.uniques.quadraticMissingTerms}</Include>

    <P>
      Если это действительно так, то решение такого уравнения будет очень простым и быстрым процессом. Можно решить
      вручную или воспользоваться общими формулами:
    </P>

    <Diagram
      $={uniques.allFormulas}
      toc
      snippet={{
        search: true,
        quick: 'Общие формулы',
        seo: 'Общие формулы для решения неполных квадратных уравнений',
        title: 'Общие формулы неполных квадратных уравнений',
        description: `
          Формулы для всех трёх типов неполных квадратных уравнений:
          когда "B" и "C" равны нулю, когда "C" равен нулю и когда "B" равен нулю.
        `,
      }}
    >{math`
      flowchart TD
        bc0[**B = 0 и C = 0**<br>$$ Ax^2 = 0 $$] --> bc0Roots[$$ x = 0 $$]
        c0[**C = 0**<br>$$ Ax^2 + Bx = 0 $$]
        c0 --> c0Roots1[$$ x_1 = 0 $$]
        c0 --> c0Roots2[$$ x_2 = -\frac{B}{A} $$]
        b0[**B = 0**<br>$$ Ax^2 + C = 0 $$] --> b0Roots[$$ x_{1,2} = \pm \sqrt{-\frac{C}{A}} $$]
        class bc0Roots,c0Roots1,c0Roots2,b0Roots fill
    `}</Diagram>

    <BlockMath>{math`
      \overbrace{5x^2 = 0}^{B = 0 \ и \ C = 0} \\ \boxed{x = 0} >>{big}{top}
      \overbrace{x^2 + 3x = 0}^{C = 0} \\ \boxed{x_1 = 0} \\ \boxed{x_2 = -\frac{3}{1} = -3} >>{big}{top}
      \overbrace{2x^2 - 8 = 0}^{B = 0} \\ x_{1,2} = \pm \sqrt{-\frac{-8}{2}} \\ x_{1,2} = \pm \sqrt{4} \\ \boxed{x_{1,2} = \pm 2}
    `}</BlockMath>

    <Include toc>{article.uniques.doNotMemorize}</Include>
  </>
));
