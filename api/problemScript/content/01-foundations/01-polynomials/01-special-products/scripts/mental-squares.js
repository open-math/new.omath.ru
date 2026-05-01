var { Br, ProblemDescription, ProblemHint, ProblemAnswer, M, jsx, jsxs, Fragment, defineProblemScript, MathValueCheck } = globalThis.ERUDIT_GLOBAL;

// content/01-foundations/01-polynomials/01-special-products/scripts/mental-squares.tsx
var mental_squares_default = defineProblemScript('__auto_generated__',{
  isGenerator: true
})(({ random }) => {
  const isSum = random.boolean();
  let n;
  let round;
  let offset;
  if (isSum) {
    round = random.integer(1, 9) * 10;
    offset = random.integer(1, Math.min(5, 99 - round));
    n = round + offset;
  } else {
    round = random.integer(2, 10) * 10;
    offset = random.integer(1, Math.min(5, round - 11));
    n = round - offset;
  }
  const answer = n * n;
  return {
    problemContent: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(ProblemDescription, { children: [
        "Не выполняя прямого умножения возведите в квадрат число ",
        /* @__PURE__ */ jsx(M, { children: n }),
        ".",
        /* @__PURE__ */ jsx(Br, {}),
        "Попытайтесь сделать это в уме."
      ] }),
      /* @__PURE__ */ jsx(MathValueCheck, { answer }),
      /* @__PURE__ */ jsx(ProblemHint, { children: isSum ? "Используйте формулу квадрата суммы." : "Используйте формулу квадрата разности." }),
      /* @__PURE__ */ jsx(ProblemAnswer, { children: /* @__PURE__ */ jsx(M, { children: answer }) })
    ] })
  };
});
export {
  mental_squares_default as default
};
