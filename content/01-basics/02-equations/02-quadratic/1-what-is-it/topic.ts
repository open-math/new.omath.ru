import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
  title: 'Что такое квадратное уравнение?',
  navTitle: 'Что это такое?',
  description: `
    Разберемся, что вообще такое квадратное уравнение и квадратный трехчлен.
    Как эти термины появились, чем они похожи, а чем отличаются.
    Научимся определять, является ли уравнение квадратным.
  `,
  contributions: [
    {
      contributor: $CONTRIBUTOR.gwynerva,
      description: authorContribution,
    },
  ],
});
