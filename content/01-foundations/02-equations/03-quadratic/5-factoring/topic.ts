import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Разложение квадратного трехчлена на множители',
  navTitle: 'Разложение на множители',
  description: `
    Запись квадратных трехчленов и квадратных уравнений в виде произведения множителей, а не суммы слагаемых.
    Помогает быстро решать уравнения, упрощать сложные выражения и сразу видеть корни.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
  dependencies: [
    {
      dependency: $CONTENT.foundations.equations.quadratic.completingTheSquare,
      reason: `
        Выделение полного квадрата необходимо для разложения на множители квадратного трехчлена в общем виде, поэтому уметь использовать этот метод надо обязательно!
      `,
    },
    {
      dependency: $CONTENT.foundations.equations.quadratic.quadraticFormula,
      reason: `
        Разложение на множители квадратного трехчлена использует понятие дискриминанта, а также общую формулу корней квадратного уравнения. Всё это обязательно надо знать!
      `,
    },
  ],
});
