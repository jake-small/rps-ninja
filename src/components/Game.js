import React from "react";
import Bot from "../services/bots/Bot";
import MarkovBot from "../services/bots/MarkovBot";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.baseState;
    this.rules = this.props.rules;
    this.bot = new MarkovBot(this.rules.choices);
  }

  baseState = {
    computerChoice: "",
    playerChoice: "",
  };

  choiceOnClick = (choice) => {
    let botChoice = this.bot.makeChoice();

    this.props.sendHistory(choice, botChoice);

    this.setState(state => ({
      botChoice: botChoice,
      playerChoice: choice
    }));
  };

  render() {
    const { botChoice, playerChoice } = this.state;
    const { choices } = this.rules;

    var outcome = "Make your move.";
    if (playerChoice !== undefined && botChoice !== undefined) {
      outcome = playerChoice + " " + botChoice;
    }

    var result = this.props.rules.result(playerChoice, botChoice);

    return (
      <div>
        <h1>rock paper scissors</h1>
        <div>
          {outcome}
        </div>
        <div>
          {choices.map(c => (
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