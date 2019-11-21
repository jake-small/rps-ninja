class Rules {
  constructor(choices, rules) {
    this.choices = choices;
    this.rules = rules;
  }

  result(playerChoice, botChoice) {
    if (playerChoice === undefined || botChoice === undefined) {
      return;
    } else if (this.rules[playerChoice] === botChoice) {
      return "won";
    } else if (this.rules[botChoice] === playerChoice) {
      return "lost";
    }
    else {
      return "tied";
    }
  }
}

export default Rules;