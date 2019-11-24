import React from 'react';
import './App.css';
import '../node_modules/cutestrap/dist/css/cutestrap.min.css';
import Game from './components/Game';
import History from './components/History';
import Stats from './components/Stats';
import StandardRules from './services/StandardRules';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { history: [], rules: new StandardRules() }
  }

  updateHistory(playerChoice, botChoice, playerResult) {
    const { history } = this.state;

    this.setState(state => ({
      history: [[playerChoice, botChoice, playerResult], ...history]
    }));
  }

  render() {
    const { history, rules } = this.state;

    return (
      <div className='App'>
        <section className='grid grid--large wrapper-large'>
          <div className='component column--heavy '>
            <Game rules={rules} history={history} sendHistory={this.updateHistory.bind(this)} />
            <br />
            <br />
            <Stats rules={rules} history={history} />
          </div>
          <div className='component secondary-component' >
            <History history={history} />
          </div>
        </section>
        <footer>
          check it out on github <a href='https://github.com/jake-small/rps-ninja'>
            jake-small/rps-ninja</a>
        </footer>
      </div>
    );
  }
}

export default App;
