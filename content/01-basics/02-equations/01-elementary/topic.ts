import {
    authorContribution,
    expertContribution,
} from '#project/utils/contributions';

export default defineTopic({
    title: 'Элементарные уравнения',
    description: `
        Научимся решать простейшие уравнения и преобразовывать равенства.
        Просто, наглядно, с примерами и без заучивания наизусть кучи странных правил.
        Это ключевой и необходимый навык в математике и всех остальных точных науках.
    `,
    contributions: [
        {
            contributor: $CONTRIBUTOR.gwynerva,
            description: authorContribution,
        },
        {
            contributor: $CONTRIBUTOR.nagibin,
            description: expertContribution,
        },
        {
            contributor: $CONTRIBUTOR.igorRadko,
            description:
                'Красивое сравнение, что числа не перелетные птицы и не летают через знак равно.',
        },
    ],
});
