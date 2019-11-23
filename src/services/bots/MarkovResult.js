import Bot from "./Bot";

class MarkovResult extends Bot {

  sequentialPlays = {
    'won': {
      'rock': new Map([['rock', 0], ['paper', 0], ['scissors', 0]]),
      'paper': new Map([['rock', 0], ['paper', 0], ['scissors', 0]]),
      'scissors': new Map([['rock', 0], ['paper', 0], ['scissors', 0]])
    },
    'lost': {
      'rock': new Map([['rock', 0], ['paper', 0], ['scissors', 0]]),
      'paper': new Map([['rock', 0], ['paper', 0], ['scissors', 0]]),
      'scissors': new Map([['rock', 0], ['paper', 0], ['scissors', 0]])
    },
    'tied': {
      'rock': new Map([['rock', 0], ['paper', 0], ['scissors', 0]]),
      'paper': new Map([['rock', 0], ['paper', 0], ['scissors', 0]]),
      'scissors': new Map([['rock', 0], ['paper', 0], ['scissors', 0]])
    }
  };

  makeChoice(history) {
    if (history.length < 2 || history === undefined) {
      return this.getRandomMove();
    }

    const playersLastMove = history[0][0];
    const playersLastMoveResult = history[0][2];
    const playersSecondToLastMove = history[1][0];
    const playersSecondToLastMoveResult = history[1][2];
    this.updateMarkovChain(playersLastMove, playersSecondToLastMove, playersSecondToLastMoveResult);

    if (history.length < 7) {
      return this.getRandomMove();
    }

    const lastMoveMap = this.sequentialPlays[playersLastMoveResult][playersLastMove];
    const mostCommonNextMove = [...lastMoveMap.entries()].reduce((a, e) => e[1] > a[1] ? e : a)[0];
    return this.getWinningMove(mostCommonNextMove);
  }

  updateMarkovChain(lastMove, secondToLastMove, playersSecondToLastMoveResult) {
    const tally = this.sequentialPlays[playersSecondToLastMoveResult][secondToLastMove].get(lastMove);
    this.sequentialPlays[playersSecondToLastMoveResult][secondToLastMove].set(lastMove, tally + 1);
  }
}

export default MarkovResult;