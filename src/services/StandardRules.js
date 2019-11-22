import Rules from "./Rules";

class StandardRules extends Rules {
  constructor() {
    super();
    this.choices = [
      "rock",
      "paper",
      "scissors"
    ];
    this.outcomes = {
      "rock": "scissors",
      "paper": "rock",
      "scissors": "paper"
    };
  }
}

export default StandardRules;