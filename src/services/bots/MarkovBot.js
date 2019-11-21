import Bot from "./Bot";

class MarkovBot extends Bot {
  makeChoice() {
    let choice = this.choices[0];
    return choice;
  }
}

export default MarkovBot;