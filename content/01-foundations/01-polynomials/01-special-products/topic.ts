import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Формулы сокращенного умножения',
  description: `
    Квадрат суммы и разности, разность квадратов, куб суммы и разности -- очень полезные формулы, которые позволяют быстро раскладывать или запаковывать выражения со степенями (квадратами, кубами).
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});
