import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Решение квадратных уравнений в уме',
  navTitle: 'Решение в уме',
  description: `
    Подробный разбор всех способов решения квадратных уравнений в уме.
    Бесконечно генерируемые задачи на отработку как каждого способа по отдельности, так и всех способов сразу.
  `,
  flags: {
    secondary: true,
    advanced: true,
  },
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
    {
      contributor: $CONTRIBUTOR.nagibin,
      description: 'Метод решения "Перенос A к C".',
    },
  ],
});
