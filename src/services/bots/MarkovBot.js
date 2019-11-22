import Bot from "./Bot";

class MarkovBot extends Bot {
  makeChoice() {
    // let choice = this.choices[0];
    // return choice;
    return this.getRandomMove();
  }
}

export default MarkovBot;