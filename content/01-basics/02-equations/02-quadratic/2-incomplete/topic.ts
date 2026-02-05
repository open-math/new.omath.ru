import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Неполные квадратные уравнения',
  navTitle: 'Неполная форма',
  description: `
    Неполные квадратные уравнения — простейшие формы квадратных уравнений, в которых отсутствуют коэффициент B, C или оба сразу.
    Разберемся, как их правильно решать в каждом отдельном случае.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});
