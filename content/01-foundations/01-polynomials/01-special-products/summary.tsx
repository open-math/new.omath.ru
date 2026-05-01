import article from './article';

export default defineProse({
  uniques: {
    specialProductsTable: Table,
    squareSumDiffDetails: Details,
  },
})(({ uniques }) => (
  <>
    <Table
      $={uniques.specialProductsTable}
      snippet={{
        key: 'Таблица ФСУ',
        search: ['Таблица ФСУ', 'ФСУ'],
        title: 'Таблица формул сокращенного умножения',
        description: `
          Единая таблица со всеми формулами сокращенного умножения.
        `,
      }}
      toc="Таблица ФСУ"
    >
      <Tr>
        <Td center hspan={3}>
          <B>Формулы сокращенного умножения</B>
        </Td>
      </Tr>
      <Tr>
        <Td center hspan={3}>
          <I>Квадраты -- Знать наизусть</I>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <B>Квадрат суммы и разности</B>
        </Td>
        <Td center freeze>
          <M currentColor>(a \pm b)^2 = a^2 \pm 2ab + b^2</M>
        </Td>
        <Td>
          <Ref to={uniques.squareSumDiffDetails}>Примеры</Ref>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <B>Разность квадратов</B>
        </Td>
        <Td center freeze>
          <M currentColor>a^2 - b^2 = (a+b)(a-b)</M>
        </Td>
        <Td>
          <Ref to={article.uniques.diffOfSquaresExamples}>Примеры</Ref>
        </Td>
      </Tr>
      <Tr>
        <Td center hspan={3}>
          <I>Кубы -- Знать не наизусть, но уметь распознать</I>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <B>Куб суммы и разности</B>
        </Td>
        <Td center freeze>
          <M currentColor>(a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3</M>
        </Td>
        <Td>
          <Ref to={article.uniques.cubeSumDiffExamples}>Примеры</Ref>
        </Td>
      </Tr>
    </Table>

    <Details $={uniques.squareSumDiffDetails} title="Примеры квадрата суммы и разности">
      <Include>{article.uniques.squareSumExpandExamples}</Include>
      <Include>{article.uniques.squareSumFactorExamples}</Include>
      <Include>{article.uniques.squareDiffExamples}</Include>
    </Details>

    <Hr />

    <Include toc="Что такое ФСУ?">{article.uniques.whatAreSpecialProducts}</Include>

    <Hr />

    <Include toc>{article.uniques.memorizationTips}</Include>
  </>
));
