import GameResult from "./components/gameResult.js";
import Modal from "./components/Modal.js";
import PlayerSelect from "./components/playerSelect.js";
import TotalScore from "./components/totalScore.js";
import { GAME_RESULT_VALUES } from "./utils/innerHTMLValue.js";

export default function App({ target }) {
  this.state = {
    countWinA: 0,
    countWinB: 0,
    winner: "no_one",
    player1Select: "scissors-button",
    player2Select: "scissors-button",
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
    };
    gameResult.setState({
      player1Select: this.state.player1Select,
      player2Select: this.state.player2Select,
    });
  };

  const totalScore = new TotalScore({
    target,
    countWinA: this.state.countWinA,
    countWinB: this.state.countWinB,
  });

  const gameResult = new GameResult({
    target,
    player1Select: this.state.player1Select,
    player2Select: this.state.player2Select,
  });

  const selectingPlayer2 = () => {
    const randomValue = Math.floor(Math.random() * 3);
    const selectedValue = GAME_RESULT_VALUES[randomValue];
    return selectedValue;
  };
  const playerSelect = new PlayerSelect({
    target,
    onPlayerClick: (e) => {
      const button = e.target.closest("button");
      if (button) {
        selectingPlayer2();
        this.setState(
          ((this.state.player1Select = button.id),
          (this.state.player2Select = selectingPlayer2()))
        );
      }
    },
  });

  const modal = new Modal();
}
