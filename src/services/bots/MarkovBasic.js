import Bot from "./Bot";

class MarkovBasic extends Bot {

  sequentialPlays = {
    'rock': new Map([['rock', 0], ['paper', 0], ['scissors', 0]]),
    'paper': new Map([['rock', 0], ['paper', 0], ['scissors', 0]]),
    'scissors': new Map([['rock', 0], ['paper', 0], ['scissors', 0]])
  };

  makeChoice(history) {
    if (history.length < 2 || history === undefined) {
      return this.getRandomMove();
    }
    const playersLastMove = history[0][0];
    const playersSecondToLastMove = history[1][0];
    this.updateMarkovChain(playersLastMove, playersSecondToLastMove);

    if (history.length < 7) {
      return this.getRandomMove();
    }

    const lastMoveMap = this.sequentialPlays[playersLastMove];
    const mostCommonNextMove = [...lastMoveMap.entries()].reduce((a, e) => e[1] > a[1] ? e : a)[0];
    return this.getWinningMove(mostCommonNextMove);
  }

  updateMarkovChain(lastMove, secondToLastMove) {
    const tally = this.sequentialPlays[secondToLastMove].get(lastMove);
    this.sequentialPlays[secondToLastMove].set(lastMove, tally + 1);
  }
}

export default MarkovBasic;