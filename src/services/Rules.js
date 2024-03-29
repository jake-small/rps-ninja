class Rules {
  constructor(choices, choiceIcons, outcomes) {
    this.choices = choices;
    this.choiceIcons = choiceIcons;
    this.outcomes = outcomes;
  }

  result(playerChoice, botChoice) {
    if (playerChoice === undefined || botChoice === undefined) {
      return;
    } else if (this.outcomes[playerChoice] === botChoice) {
      return "won";
    } else if (this.outcomes[botChoice] === playerChoice) {
      return "lost";
    }
    else {
      return "tied";
    }
  }
}

export default Rules;