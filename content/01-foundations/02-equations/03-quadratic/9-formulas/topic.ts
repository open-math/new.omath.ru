import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Формулы квадратных уравнений',
  navTitle: 'Общие формулы',
  description: `
    Наглядные схемы всех формул, понятий и методов решения квадратных уравнений, с учётом логики их вывода.
    Набор смешанных задач, которые сводятся к квадратным трёхчленам и квадратным уравнениям.
  `,
  flags: {
    secondary: true,
  },
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});
