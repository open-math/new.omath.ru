import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Теорема Виета',
  description: `
    Две простые и очень полезные формулы, которые связывают корни и коэффициенты квадратного трёхчлена.
    Они позволяют быстро проверять корни, составлять уравнения и изучать особые виды квадратных уравнений.
  `,
  flags: {
    secondary: true,
  },
  dependencies: [
    {
      dependency: $CONTENT.foundations.equations.quadratic.factoring,
      reason: `
        Запись квадратного трёхчлена через множители напрямую приводит к формулам Виета, поэтому раскладывать на множители надо уметь обязательно!
      `,
    },
  ],
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});
