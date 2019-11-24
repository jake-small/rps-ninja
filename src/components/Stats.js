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

  winRatio() {
    return ((this.wins() / (this.wins() + this.losses() + this.ties())) * 100).toFixed(2);
  }
  lossRatio() {
    return ((this.losses() / (this.wins() + this.losses() + this.ties())) * 100).toFixed(2);
  }
  tieRatio() {
    return ((this.ties() / (this.wins() + this.losses() + this.ties())) * 100).toFixed(2);
  }

  render() {
    return (
      <div>
        <header>
          <h2>stats</h2>
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
          Win:
          {this.winRatio()}%
        </div>
        <div>
          Loss:
          {this.lossRatio()}%
        </div>
        <div>
          Tie:
          {this.tieRatio()}%
        </div>
      </div>
    );
  }
}

export default Stats;