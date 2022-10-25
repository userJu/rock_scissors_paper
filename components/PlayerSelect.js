import { ROCK_SCISSORS_PAPER } from "../utils/innerHTMLValue.js";
import { create$, makeInnerHTML } from "../utils/selectorHook.js";

export default function PlayerSelect({ target, onPlayerClick }) {
  // 승자 판별하기
  // player1 선택. 컴퓨터 선택

  this.sectionElement = create$("section", "row button_box");
  target.appendChild(this.sectionElement);

  this.sectionElement.addEventListener("click", onPlayerClick);

  const render = () => {
    makeInnerHTML(this.sectionElement, ROCK_SCISSORS_PAPER);
  };

  render();
}
