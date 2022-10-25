export const $ = (target) => {
  return document.querySelector(target);
};

export const create$ = (target, className) => {
  const createdElement = document.createElement(target);
  if (className !== "undefined") {
    createdElement.setAttribute("class", className);
  }
  return createdElement;
};
export const makeInnerHTML = (targetElement, innerValue) => {
  targetElement.innerHTML = `
  ${innerValue}`;
};
