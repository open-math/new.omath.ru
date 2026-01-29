import article from './article';

// #region Links
//

const sameActionRule = $CONTENT.basics.equations.elementary.article.$sameActionRule;

//
// #endregion

export default defineProse()(() => (
    <>
        <Diagram>{math`
            flowchart LR
                mathExpressions["
                    **Выражения**
                    $$ x^2 \\ 18\sqrt{z} \\ (y - 1)y \\ m/n \\[2px] 8 - t^2 + 2t \\ k+3k^2 $$
                "]
                -->|Сводимы к виду<br>$Ax^2 + Bx + C$<br>без изменения корней| quadraticPolynomial["
                    **Квадратные трёхчлены**
                    $$ x^2 + 0x + 0 \\ y^2 - y + 0 \\[1px] -t^2 + 2t + 8 \\ 3k^2 + k + 0 $$
                "]
                -->|Являются равенством| quadraticEquation["
                    **Квадратные уравнения**
                    $$ x^2 = 0 \\ (y-1)y = 0 \\[2px] 8 + 2t = t^2 \\ 3k^2 = -k $$
                "]
        `}</Diagram>
        <Hr />
        <P>
            <Dep to={sameActionRule}>Правило</Dep> одинакового действия, конечно, очень мощный инструмент, который
            позволяет легко справляться с простыми уравнениями доведением их до тривиального вида <M>x = A</M> или{' '}
            <M>A = x</M>. Однако часто встречаются и такие уравнения, которые до такого вида упростить нельзя:
        </P>
        <Include toc>{article.uniques.problematicEquations}</Include>
        <P>
            Прежде чем пытаться решать такие уравнения, математики сначала решили научиться их определять, выявить общие
            черты. Для этого сначала ввели понятие квадратного трёхчлена:
        </P>
        <Include toc>{article.uniques.quadraticPolynomial}</Include>
        <P>
            Если удаётся уравнение без изменения корней привести к такому виду, чтобы с одной стороны был квадратный
            трёхчлен, а с другой ноль, то такое уравнение называется "квадратным".
        </P>
        <Include toc>{article.uniques.quadraticEquation}</Include>
        <Include toc>{article.uniques.powerNotOrder}</Include>
        <Include toc>{article.uniques.quadraticOrNot}</Include>
    </>
));
