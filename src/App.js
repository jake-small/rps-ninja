import React from 'react';
import './App.css';
import '../node_modules/cutestrap/dist/css/cutestrap.min.css';
import Game from './components/Game';
import History from './components/History';
import Stats from './components/Stats';
import Rules from './services/Rules';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { history: [], rules: this.baseRules }
  }

  baseRules = new Rules(
    [
      "rock",
      "paper",
      "scissors"
    ],
    {
      "rock": "scissors",
      "paper": "rock",
      "scissors": "paper"
    }
  );

  updateHistory(playerChoice, botChoice) {
    const { history } = this.state;

    this.setState(state => ({
      history: [[playerChoice, botChoice], ...history]
    }));
  }

  render() {
    const { history, rules } = this.state;

    return (
      <div className="App">
        <section class="grid grid--large wrapper-large">
          <div class="component secondary-component" >
            <History history={history} />
          </div>
          <div class="component column--heavy ">
            <Game rules={rules} sendHistory={this.updateHistory.bind(this)} />
          </div>
          <div class="component secondary-component ">
            <Stats rules={rules} history={history} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;