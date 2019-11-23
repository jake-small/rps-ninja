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

  choiceOnClick = (choice) => {
    const { history, rules } = this.props;
    const { bot } = this.state;
    let botChoice = bot.makeChoice(history);
    var result = rules.result(choice, botChoice);

    this.props.sendHistory(choice, botChoice, result);

    this.setState(state => ({
      botChoice: botChoice,
      playerChoice: choice,
      result: result
    }));
  };

  render() {
    const { botChoice, playerChoice, result, rules } = this.state;

    var outcome = "Make your move.";
    if (playerChoice && botChoice) {
      outcome = playerChoice + " " + botChoice;
    }

    return (
      <div>
        <h1>rock paper scissors</h1>
        <div>
          {outcome}
        </div>
        <div>
          {rules.choices.map(c => (
            <button onClick={() => this.choiceOnClick(c)}>
              {c}
            </button>))
          }
        </div>
        <h2>
          {result}
        </h2>
      </div>
    );
  };
}

export default Game;