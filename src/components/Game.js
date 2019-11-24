import React from "react";
import MarkovBasic from "../services/bots/MarkovBasic";
import MarkovResult from "../services/bots/MarkovResult";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      botChoice: "",
      playerChoice: "",
      rules: this.props.rules,
      bot: new MarkovResult(this.props.rules)
    };
  }

  choiceOnClick = (playerChoice) => {
    const { history, rules } = this.props;
    const { bot } = this.state;
    let botChoice = bot.makeChoice(history);
    var result = rules.result(playerChoice, botChoice);

    this.props.sendHistory(playerChoice, botChoice, result);

    this.setState(state => ({
      botChoice: botChoice,
      playerChoice: playerChoice,
      result: result
    }));
  };

  render() {
    const { botChoice, playerChoice, result, rules } = this.state;

    var outcome = "Make your move.";
    if (playerChoice && botChoice) {
      outcome = playerChoice + " vs " + botChoice;
    }

    return (
      <div>
        <h1>rock paper scissors</h1>
        <div>
          {rules.choices.map(c => (
            <button disabled style={botChoice && playerChoice === c ? { visibility: 'visible' } : { visibility: 'hidden' }}>
              {rules.choiceIcons !== undefined ? rules.choiceIcons[botChoice] : botChoice}
            </button>))
          }
        </div>
        <div>
          {rules.choices.map(c => (
            <button onClick={() => this.choiceOnClick(c)} title={c}>
              {rules.choiceIcons !== undefined ?
                rules.choiceIcons[c] : c
              }
            </button>))
          }
        </div>
        <div>
          {outcome}
        </div>
        <h2>
          {result}
        </h2>
      </div>
    );
  };
}

export default Game;