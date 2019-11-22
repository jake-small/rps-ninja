class Bot {
  constructor(rules) {
    this.choices = rules.choices;
    this.outcomes = rules.outcomes;
  }

  makeChoice(history) {
    return this.getRandomMove();
  }

  getRandomMove() {
    return this.choices[Math.floor(Math.random() * this.choices.length)];
  }

  getWinningMove(move) {
    const outcomes = this.outcomes;
    return Object.keys(outcomes).find(key => outcomes[key] === move);
  }
}

export default Bot;