import Rules from "./Rules";
import React from 'react';
import { ReactComponent as Rock } from '../assets/svg/hand-rock.svg';
import { ReactComponent as Paper } from '../assets/svg/hand-paper.svg';
import { ReactComponent as Scissors } from '../assets/svg/hand-peace.svg';

class StandardRules extends Rules {
  constructor() {
    super();
    this.choices = [
      "rock",
      "paper",
      "scissors"
    ];
    this.choiceIcons = {
      "rock": <Rock width="40px" height="40px" />,
      "paper": <Paper width="40px" height="40px" />,
      "scissors": <Scissors width="40px" height="40px" />
    }
    this.outcomes = {
      "rock": "scissors",
      "paper": "rock",
      "scissors": "paper"
    };
  }
}

export default StandardRules;