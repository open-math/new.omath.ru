export default defineProse({
    uniques: {
        twister: Problem,
    },
})(({ uniques }) => (
    <>
        <P>Мой параграф</P>

        <Problem title="Тестовая проблема" level="easy">
            <ProblemDescription>Описание проблемы</ProblemDescription>
        </Problem>

        <Problem
            $={uniques.twister}
            title="Кручу-верчу, запутать хочу"
            level="easy"
        >
            <ProblemDescription>
                Вращаю-верчу, запутать хочу. Кто меня раскрутит, тот молодец!
            </ProblemDescription>
        </Problem>
    </>
));
