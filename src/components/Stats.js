import React from "react";

class Stats extends React.Component {
  wins() {
    var wins = 0;
    for (var play of this.props.history) {
      var result = this.props.rules.result(play[0], play[1]);
      if (result === "won") {
        wins = wins + 1;
      }
    }
    return wins;
  }

  losses() {
    var wins = 0;
    for (var play of this.props.history) {
      var result = this.props.rules.result(play[0], play[1]);
      if (result === "lost") {
        wins = wins + 1;
      }
    }
    return wins;
  }

  ties() {
    var wins = 0;
    for (var play of this.props.history) {
      var result = this.props.rules.result(play[0], play[1]);
      if (result === "tied") {
        wins = wins + 1;
      }
    }
    return wins;
  }

  winLossRatio() {
    return (this.wins() / this.losses()).toFixed(2);
  }

  render() {
    return (
      <div>
        <header>
          <h3>stats</h3>
        </header>
        <div>
          wins:
          {this.wins()}
        </div>
        <div>
          losses:
          {this.losses()}
        </div>
        <div>
          ties:
          {this.ties()}
        </div>
        <div>
          Win/Loss:
          {this.winLossRatio()}
        </div>
      </div>
    );
  }
}

export default Stats;