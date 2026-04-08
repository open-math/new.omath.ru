export default defineProse({
  uniques: {
    formulas: Diagram,
    methods: Diagram,
  },
})(({ uniques }) => (
  <>
    <Diagram
      $={uniques.formulas}
      snippet={{
        key: true,
        title: 'Схема формул',
        seo: 'Схема формул по квадратным уравнениям',
        description: `
          Наглядная схема всех формул и понятий, связанных с квадратными уравнениями, с учётом логики их вывода.
        `,
      }}
      toc
    >
      {math`
        flowchart TD
          quadraticTrinomial["
            **Квадратный трёхчлен**
            $$ Ax^2 + Bx + C, \ \ A \neq 0 $$
          "]

          quadraticEquation["
            **Квадратное уравнение**
            $$ Ax^2 + Bx + C = 0, \ \ A \neq 0 $$
          "]

          discriminant["
            **Дискриминант**
            $$ D = B^2 - 4AC $$
          "]

          noRoots["Корней нет"]
          oneRoot["Один корень:<br />$$ x = - \frac{B}{2A} $$"]
          twoRoots["Два корня:<br />$$ x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} $$"]

          factoring["
            **Разложение на множители**
            $$ A(x - x_1)(x - x_2) $$
          "]

          vietasFormulas["
            **Формулы Виета**
            $$
              \begin{cases}
                x_1 + x_2 = -\frac{B}{A} \\
                x_1 \cdot x_2 = \frac{C}{A}
              \end{cases}
            $$
          "]

          quadraticTrinomial -->|"Трёхчлен равен $0$"| quadraticEquation
          quadraticEquation -->|"Выделение&nbsp;полного&nbsp;квадрата<br />(преобразовывая уравнение)"| discriminant

          discriminant -->|"$D < 0$"| noRoots
          discriminant -->|"$D = 0$"| oneRoot
          discriminant -->|"$D > 0$"| twoRoots

          twoRoots --> factoring

          quadraticTrinomial -->|"Выделение&nbsp;полного&nbsp;квадрата<br />(эквивалентные&nbsp;преобразования)"| factoring

          factoring -->|Раскрытие скобок| vietasFormulas
      `}
      <Caption>
        Общая схема понятий и формул по квадратным уравнениям
        <CaptionSecondary>Стрелки указывают порядок логики вывода</CaptionSecondary>
      </Caption>
    </Diagram>

    <Hr />

    <Diagram
      $={uniques.methods}
      snippet={{
        key: true,
        title: 'Схема решений',
        seo: 'Схема способов решения квадратных уравнений',
        description: `
          Наглядная схема всех способов решения квадратных уравнений: универсальный способ, неполные квадратные уравнения и способы решения в уме.
        `,
      }}
      toc
    >
      {math`
        flowchart LR
          quadraticEquation["
            **Квадратное уравнение**
            $$ Ax^2 + Bx + C = 0, \ \ A \neq 0 $$
          "]

          quadraticFormula["
            **Общая формула корней**
            $$ D = B^2 - 4AC $$
          "]
          quadraticEquation -->|Универсальный способ| quadraticFormula

          quadraticFormulaRoots["$$ x_{1,2} = \frac{-B \pm \sqrt{D}}{2A} $$"]
          quadraticFormula --> quadraticFormulaRoots

          incomplete["
            **Неполные квадратные уравнения**
            $$ \begin{aligned} 1) \ Ax^2 + C = 0 \\ 2) \ Ax^2 + Bx = 0 \\ 3) \ Ax^2 = 0 \end{aligned} $$
          "]
          quadraticEquation -->|$B$ или $C$ или оба равны нулю| incomplete

          incomplete1Roots["$$ 1) \ x_{1,2} = \pm \sqrt{\frac{-C}{A}} $$"]
          incomplete2Roots["$$ 2) \ x_1 = 0, \ x_2 = -\frac{B}{A} $$"]
          incomplete3Roots["$$ 3) \ x_1 = x_2 = 0 $$"]
          incomplete --> incomplete1Roots
          incomplete --> incomplete2Roots
          incomplete --> incomplete3Roots

          zeroSum["
            **Нулевая сумма**
            $$ A \pm B + C = 0 $$
          "]
          quadraticEquation -->|В уме 1| zeroSum

          zeroSumRoots["$$ x_1 = \pm 1, \ x_2 = \pm \frac{C}{A} $$"]
          zeroSum --> zeroSumRoots

          perfectSquare["
            **Полный квадрат**
            $$ (Kx)^2 \pm 2 \cdot Kx \cdot T + (T)^2 $$
          "]
          quadraticEquation -->|В уме 2| perfectSquare

          perfectSquareRoots["$$ x_1 = x_2 = \mp \frac{T}{K} $$"]
          perfectSquare --> perfectSquareRoots

          factoring["
            **Разложение на множители**
            $$ x^2 + (t + k)x + tk $$
          "]
          quadraticEquation -->|В уме 3| factoring

          factoringRoots["$$ x_1 = -t, \ x_2 = -k $$"]
          factoring --> factoringRoots

          AtoC["
            **Перенос A к С**
            $$ x'^2 + Bx' + AC = 0 $$
          "]
          quadraticEquation -->|В уме 4| AtoC

          AtoCRoots["$$ x_{1,2} = \frac{x'_{1,2}}{A} $$"]
          AtoC --> AtoCRoots

          class incomplete,quadraticFormula,zeroSum,perfectSquare,factoring,AtoC fill
      `}
      <Caption>Общая схема способов решения квадратных уравнений</Caption>
    </Diagram>
  </>
));
