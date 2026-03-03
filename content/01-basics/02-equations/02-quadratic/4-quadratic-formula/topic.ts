import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Формула корней квадратного уравнения',
  navTitle: 'Формула корней',
  description: `
    Понятный вывод общей формулы корней квадратного уравнения с подробными объяснениями каждого шага.
    Пояснение, что такое дискриминант, откуда он взялся и почему по нему можно узнать количество корней.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
  dependencies: [
    {
      dependency: $CONTENT.basics.equations.quadratic.completingTheSquare,
      reason:
        'Формула корней квадратных уравнений получается через выделение полного квадрата, поэтому знать его надо обязательно!',
    },
  ],
});
