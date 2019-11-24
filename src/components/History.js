import React from "react";

class History extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h2>history</h2>
        </header>
        <div>
          {this.props.history.map(h => (
            <div class={h[2] === 'won' && 'playerColor' || h[2] === 'lost' && 'botColor'}>
              {h[2]} {h[0]} {h[1]}
            </div>))
          }
        </div>
      </div>
    );
  }
}

export default History;