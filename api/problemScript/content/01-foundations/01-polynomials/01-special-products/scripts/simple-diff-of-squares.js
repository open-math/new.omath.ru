var { Dep, P, ProblemDescription, ProblemHint, ProblemSolution, ProblemAnswer, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript, MathValueCheck } = globalThis.ERUDIT_GLOBAL;

// content/01-foundations/01-polynomials/01-special-products/scripts/simple-diff-of-squares.tsx
var simple_diff_of_squares_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const b = random.integer(50, 249);
  const a = b + 1;
  const answer = a + b;
  const diffOfSquares = {"__ERUDIT_globalContentItem":true,"__path":"foundations/polynomials/special-products/article/$diffOfSquares"};
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        "Не вычисляя никаких квадратов, найдите, чему равно",
        " ",
        /* @__PURE__ */ jsxs(M, { children: [
          a,
          "^2 - ",
          b,
          "^2"
        ] }),
        "."
      ] }),
      /* @__PURE__ */ jsx(MathValueCheck, { answer }),
      /* @__PURE__ */ jsx(ProblemHint, { children: /* @__PURE__ */ jsx(Dep, { on: diffOfSquares, children: "Разность квадратов" }) }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(M, { children: answer }) }),
      /* @__PURE__ */ jsxs(ProblemSolution, { children: [
        /* @__PURE__ */ jsxs(P, { children: [
          "Применяем формулу ",
          /* @__PURE__ */ jsx(Dep, { on: diffOfSquares, children: "разности квадратов" }),
          " и записываем разность как произведение двух скобок:"
        ] }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            ${a}^2 - ${b}^2 = (${a} + ${b})(${a} - ${b}) = ${answer} \cdot 1 = ${answer}
          ` }),
        /* @__PURE__ */ jsxs(P, { children: [
          "Вторая скобка оказалась равна ",
          /* @__PURE__ */ jsx(M, { children: "1" }),
          ", поэтому ответ — просто сумма исходных чисел."
        ] })
      ] })
    ] })
  };
});
export {
  simple_diff_of_squares_default as default
};
