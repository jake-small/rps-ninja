class Bot {
  constructor(choices) {
    this.choices = choices;
  }

  makeChoice() {
    return this.getRandomMove();
  }

  getRandomMove() {
    return this.choices[Math.floor(Math.random() * this.choices.length)];
  }
}

export default Bot;