import { create$ } from "../utils/selectorHook.js";

export default function GameResult({ target, player1Select, player2Select }) {
  this.mainElement = create$("main", "row");
  target.appendChild(this.mainElement);

  this.state = {
    player1Select,
    player2Select,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    render();
  };

  const imageFormat = (string) => {
    const stringArray = string.split("-");
    return stringArray[0];
  };

  const render = () => {
    this.mainElement.innerHTML = `
    <div class="player m-1">
    <img
      draggable="false"
      id="player1-img"
      src="./img/${imageFormat(this.state.player1Select)}.png"
      alt=""
    />
  </div>
  <div class="player m-1">
    <img
      draggable="false"
      id="player2-img"
      src="./img/${imageFormat(this.state.player2Select)}.png"
      alt=""
    />
  </div>
    `;
  };
  render();
}
