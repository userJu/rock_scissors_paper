import { PLAYER1_VS_PLAYER2 } from "../utils/innerHTMLValue.js";
import { create$, makeInnerHTML } from "../utils/selectorHook.js";

export default function TotalScore({ target, countWinA, countWinB }) {
  this.headerElement = create$("header", "row");
  this.divElement = create$("div", "row");

  this.state = {
    countWinA,
    countWinB,
  };

  const render = () => {
    target.appendChild(this.headerElement);
    target.appendChild(this.divElement);
    makeInnerHtml();
  };

  const makeInnerHtml = () => {
    makeInnerHTML(
      this.headerElement,
      `
    <span class="m-1">Player1</span>
    <span class="m-1">vs</span>
    <span class="m-1">Player2</span>
    `
    );
    makeInnerHTML(
      this.divElement,
      `
      <span class="countA m-1">0</span>
      <span class="countB m-1">0</span>
      `
    );
  };

  render();
}
