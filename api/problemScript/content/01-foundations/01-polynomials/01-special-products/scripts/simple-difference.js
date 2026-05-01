var { Dep, P, ProblemDescription, ProblemHint, ProblemSolution, ProblemAnswer, BlockMath, M, math, jsx, jsxs, Fragment, defineProblemScript, MathValueCheck } = globalThis.ERUDIT_GLOBAL;

// content/01-foundations/01-polynomials/01-special-products/scripts/simple-difference.tsx
var simple_difference_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const n = random.integer(1e4, 999999);
  const d = random.integer(2, 15);
  const n1 = n - d;
  const n2 = n + d;
  const answer = d * d;
  const diffOfSquares = {"__ERUDIT_globalContentItem":true,"__path":"foundations/polynomials/special-products/article/$diffOfSquares"};
  const simpleProduct = {"__ERUDIT_globalContentItem":true,"__path":"foundations/polynomials/special-products/practice/$simpleProduct"};
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        "Вычислите выражение",
        " ",
        /* @__PURE__ */ jsxs(M, { children: [
          n,
          "^2 - ",
          n1,
          " \\cdot ",
          n2
        ] }),
        "."
      ] }),
      /* @__PURE__ */ jsx(MathValueCheck, { answer }),
      /* @__PURE__ */ jsxs(ProblemHint, { children: [
        "Это модифицированная версия задачи ",
        /* @__PURE__ */ jsx(Dep, { on: simpleProduct, children: "Простое произведение" }),
        "."
      ] }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(M, { children: answer }) }),
      /* @__PURE__ */ jsxs(ProblemSolution, { children: [
        /* @__PURE__ */ jsxs(P, { children: [
          "Заметим, что",
          " ",
          /* @__PURE__ */ jsxs(M, { children: [
            n1,
            " = ",
            n,
            " - ",
            d
          ] }),
          " ",
          "и",
          " ",
          /* @__PURE__ */ jsxs(M, { children: [
            n2,
            " = ",
            n,
            " + ",
            d
          ] }),
          " ",
          ", то есть множители симметрично расположены вокруг ",
          /* @__PURE__ */ jsx(M, { children: n }),
          ". Применим формулу",
          " ",
          /* @__PURE__ */ jsx(Dep, { on: diffOfSquares, children: "разности квадратов" }),
          " к их произведению:"
        ] }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            ${n1} \cdot ${n2} = (${n} - ${d})(${n} + ${d}) = ${n}^2 - ${d}^2
          ` }),
        /* @__PURE__ */ jsx(P, { children: "Подставляем в исходное выражение:" }),
        /* @__PURE__ */ jsx(BlockMath, { children: math`
            ${n}^2 - ${n1} \cdot ${n2} = ${n}^2 - \left(${n}^2 - ${d}^2\right) = \cancel{${n}^2} - \cancel{${n}^2} + ${d}^2 = ${d}^2 = ${answer}
          ` }),
        /* @__PURE__ */ jsxs(P, { children: [
          "Слагаемые ",
          /* @__PURE__ */ jsxs(M, { children: [
            n,
            "^2"
          ] }),
          " взаимоуничтожаются, и от огромного числа остаётся лишь маленький квадрат разности",
          " ",
          /* @__PURE__ */ jsxs(M, { children: [
            d,
            "^2 = ",
            answer
          ] }),
          "."
        ] })
      ] })
    ] })
  };
});
export {
  simple_difference_default as default
};
