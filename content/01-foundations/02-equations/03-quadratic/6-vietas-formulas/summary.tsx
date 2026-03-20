import article from './article';

export default defineProse()(() => (
  <>
    <Diagram
      snippet={{
        key: true,
        seo: 'Быстрый алгоритм вывода формул Виета',
        title: 'Алгоритм вывода',
        description: `
          Достаточно записать равенство стандартного вида квадратного трёхчлена и его разложения на множители.
          Потом просто раскрыть скобки.
        `,
      }}
      toc
    >
      {math`
        flowchart TD
          equality["$$ Ax^2 + Bx + C = A(x-x_1)(x-x_2) $$"]
          expanded["$$ Ax^2 + Bx + C = Ax^2 - \underbrace{A(x_1 + x_2)}_{\small B}x + \underbrace{Ax_1x_2}_{\small C} $$"]
          vietasFormulas["**Формулы Виета**<br />$$ \begin{cases} x_1 + x_2 = -\frac{B}{A} \\ x_1x_2 = \frac{C}{A} \end{cases} $$"]
          equality -->|**Раскрытие скобок**| expanded
          expanded -->|**Изоляция корней**| vietasFormulas
      `}
      <Caption>Вывод формул Виета</Caption>
    </Diagram>

    <Hr />

    <Include toc>{article.uniques.vietasFormulas}</Include>

    <Include toc="Пояснения к теореме">{article.uniques.formulasFaq}</Include>

    <H1>Применение теоремы Виета</H1>

    <P>
      Основная ценность формул Виета в том, что они простым и прямым образом связывают корни квадратного уравнения с его
      коэффициентами. Это можно использовать самыми разными способами:
    </P>

    <Include toc>{article.uniques.usageFastCheck}</Include>

    <Include toc>{article.uniques.usageConstructing}</Include>

    <Include toc>{article.uniques.usageCoefficients}</Include>
  </>
));
