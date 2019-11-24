import React from 'react';

class Stats extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("resize", this.render.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.render.bind(this));
  }

  drawBarGraph(canvas, wins, losses, ties = 0) {
    if (!canvas || wins === 0 && losses === 0 && ties === 0) {
      return;
    }
    const ctx = canvas.getContext('2d');
    const width = document.getElementById('canvasParent').clientWidth;
    canvas.width = width;
    const winPercentage = wins / (wins + ties + losses);
    const tiePercentage = ties / (wins + losses + ties);
    const lossPercentage = losses / (wins + ties + losses);
    const winBar = Math.round(winPercentage * width);
    const tieBar = Math.round(tiePercentage * width);
    const lossBar = Math.round(lossPercentage * width);

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, 30);

    ctx.fillStyle = '#33d9ff';
    ctx.fillRect(0, 0, winBar, 30);

    ctx.fillStyle = 'white';
    ctx.fillRect(winBar, 0, tieBar, 30);

    ctx.fillStyle = '#ff8000';
    ctx.fillRect(winBar + tieBar, 0, lossBar, 30);
    ctx.fillStyle = 'black';
    ctx.strokeRect(1, 1, width - 2, 28);

    ctx.font = "20px Avenir, Avenir Next, Helvetica Neue, Segoe UI, Verdana, sans-serif";
    if (winPercentage > 0) { ctx.fillText((winPercentage * 100).toFixed(0) + '%', Math.round(winBar / 2) - 18, 22) };
    if (ties > 0) { ctx.fillText((tiePercentage * 100).toFixed(0) + '%', Math.round(tieBar / 2) + winBar - 18, 22) };
    if (lossPercentage > 0) { ctx.fillText((lossPercentage * 100).toFixed(0) + '%', Math.round(lossBar / 2) + winBar + tieBar - 18, 22) };
  }

  wins() {
    var wins = 0;
    for (var play of this.props.history) {
      var result = this.props.rules.result(play[0], play[1]);
      if (result === 'won') {
        wins = wins + 1;
      }
    }
    return wins;
  }

  losses() {
    var wins = 0;
    for (var play of this.props.history) {
      var result = this.props.rules.result(play[0], play[1]);
      if (result === 'lost') {
        wins = wins + 1;
      }
    }
    return wins;
  }

  ties() {
    var wins = 0;
    for (var play of this.props.history) {
      var result = this.props.rules.result(play[0], play[1]);
      if (result === 'tied') {
        wins = wins + 1;
      }
    }
    return wins;
  }

  winRatio() {
    return (this.wins() / (this.wins() + this.losses() + this.ties()));
  }
  lossRatio() {
    return (this.losses() / (this.wins() + this.losses() + this.ties()));
  }
  tieRatio() {
    return (this.ties() / (this.wins() + this.losses() + this.ties()));
  }

  render() {
    this.drawBarGraph(document.getElementById('winLossCanvas'), this.wins(), this.losses());
    this.drawBarGraph(document.getElementById('winTieLossCanvas'), this.wins(), this.losses(), this.ties());
    return (
      <div>
        <div id='canvasParent'>
          <canvas id="winLossCanvas" height={30} />
        </div>
        {this.wins() + this.ties() + this.losses() > 0 &&
          <div style={{ marginBottom: 15 }}>
            <small>
              <span>wins: {this.wins()}</span>
              <span>&nbsp; &nbsp;</span>
              <span>ties: {this.ties()}</span>
              <span>&nbsp; &nbsp;</span>
              <span>losses: {this.losses()}</span>
            </small>
          </div>
        }
        <div id='canvasParent'>
          <canvas id="winTieLossCanvas" height={30} />
        </div>
        {this.wins() + this.ties() + this.losses() > 0 &&
          <div>
            <small>
              total: {this.wins() + this.losses() + this.ties()}
            </small>
          </div>
        }
      </div>
    );
  }
}

export default Stats;