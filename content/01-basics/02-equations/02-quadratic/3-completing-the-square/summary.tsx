import article from './article';

import completingTheSquare from './assets/completing-the-square.excalidraw.svg';

export default defineProse()(() => (
  <>
    <Image
      src={completingTheSquare}
      invert="dark"
      snippet={{
        key: true,
        seo: 'Визуализация выделения полного квадрата',
        title: 'Визуализация процесса',
        description: `
          Как в прямом смысле из фигур поменьше собирают или "выделяют" большой квадрат.
        `,
      }}
      toc={true}
    >
      <Caption>
        Визуализация процесса выделения полного квадрата
        <CaptionSecondary>
          Частный случай: <M>{math`x^2 + bx = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2`}</M>
        </CaptionSecondary>
      </Caption>
    </Image>
    <Hr />
    <Include toc>{article.uniques.whatIsIt}</Include>
    <P>Зачем выделять полный квадрат?</P>
    <List ordered toc="Зачем это делать?">
      <Li>Позволяет решать любые квадратные уравнения.</Li>
      <Li>
        <P>
          Для упрощения выражений. До выделения полного квадрата неизвестная встречается в выражении дважды -- во второй
          и в первой степени.
        </P>
        <BlockMath>{math`9\underset{\text{Раз}}{\red{x^2}} + 6\underset{\text{Два}}{\red{x}} + 1`}</BlockMath>
        <P>
          После выделения полного квадрата неизвестная встречается только один раз. Это может быть полезно не только для
          решения уравнений, но и для других задач.
        </P>
        <BlockMath>{math`(3\underset{\text{Раз}}{\brand{x}} + 1)^2`}</BlockMath>
      </Li>
    </List>
    <P>
      Иногда выделить полный квадрат можно напрямую, в один ход. Так получается сделать, когда выражение уже имеет
      развёрнутый вид <M>a^2 \pm 2ab + b^2</M>:
    </P>
    <Include toc>{article.uniques.completeSimple}</Include>
    <P>
      Но бывает и так, что данных для выделения полного квадрата недостаточно. Тогда приходится их добавлять и не
      забывать <Ref to={article.uniques._compensate}>компенсировать</Ref>:
    </P>
    <Include toc>{article.uniques.completeHard}</Include>
    <P>Выделение полного квадрата позволяет решать любые квадратные уравнения:</P>
    <Include toc>{article.uniques.solvingQuadratics}</Include>
  </>
));
