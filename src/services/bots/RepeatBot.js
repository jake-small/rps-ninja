import Bot from "./Bot";

class RepeatBot extends Bot {
  makeChoice(history) {
    if (history === undefined || history.length === 0) {
      return this.getRandomMove();
    }
    return history[0][0];
  }
}

export default RepeatBot;