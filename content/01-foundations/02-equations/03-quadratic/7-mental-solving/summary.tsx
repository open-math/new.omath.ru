import article from './article';

export default defineProse()(() => (
  <>
    <Include toc="Способы решения неполных уравнений в уме">{article.uniques.methodsIncomplete}</Include>
    <Hr />
    <Include toc="Способы решения квадратных уравнений в уме">{article.uniques.methodsAll}</Include>
    <Include toc>{article.uniques.methodsAllPractice}</Include>
  </>
));
