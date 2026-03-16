import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Выделение полного квадрата',
  navTitle: 'Полный квадрат',
  description: `
    Процесс "запаковки" развёрнутого выражения в короткую скобку в квадрате.
    С его помощью можно решить любое квадратное уравнение!
    Разберёмся, как его проводить на подробных и наглядных примерах с визуализацией.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});
