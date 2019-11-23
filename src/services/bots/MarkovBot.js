import Bot from "./Bot";

class MarkovBot extends Bot {
  constructor(rules) {
    super(rules);

    Object.keys(this.sequentialPlays).forEach(move => {
      this.sequentialPlays[move].set('rock', 0);
      this.sequentialPlays[move].set('paper', 0);
      this.sequentialPlays[move].set('scissors', 0);
    });
  }

  sequentialPlays = {
    'rock': new Map(),
    'paper': new Map(),
    'scissors': new Map()
  };

  makeChoice(history) {
    if (history.length < 2 || history === undefined) {
      return this.getRandomMove();
    }
    const playersLastMove = history[0][0];
    const playersSecondToLastMove = history[1][0];
    this.updateHistory(playersLastMove, playersSecondToLastMove);
    const lastMoveMap = this.sequentialPlays[playersLastMove];
    // TODO: be smarter if there are ties (especially at 0)
    const mostCommonNextMove = [...lastMoveMap.entries()].reduce((a, e) => e[1] > a[1] ? e : a)[0];
    return this.getWinningMove(mostCommonNextMove);
  }

  updateHistory(lastMove, secondToLastMove) {
    const tally = this.sequentialPlays[secondToLastMove].get(lastMove);
    this.sequentialPlays[secondToLastMove].set(lastMove, tally + 1);
  }

  processHistory(history) {
    for (let i = 0; i < history.length; i++) {
      if (i === 0) {
        continue;
      }
      const lastRound = history[i];
      const secondToLastRound = history[i - 1];
      const key = lastRound[0] + " " + secondToLastRound[0];
      this.sequentialPlays.set(key, this.sequentialPlays.get(key) + 1);
    }
  }
}

export default MarkovBot;