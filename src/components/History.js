import React from "react";

class History extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h3>history</h3>
        </header>
        <div>
          {this.props.history.map(h => (
            <div>
              {h[0]} {h[1]} {h[2]}
            </div>))
          }
        </div>
      </div>
    );
  }
}

export default History;