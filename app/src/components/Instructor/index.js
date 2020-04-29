import React from 'react';
import {
  beginClass,
  listenForAnswers,
  startQuestion,
  stopQuestion
} from '../../api';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      answers: []
    };
  }

  componentDidMount() {
    beginClass(code => {
      this.setState({ code });
    });

    listenForAnswers(answer => {
      answer = { id: 'bts2', text: answer };
      this.setState({ answers: [...this.state.answers, answer] });
    });
  }

  toggle = () => {
    const { isActive } = this.state;

    if (isActive) {
      stopQuestion();
    } else {
      startQuestion();
      this.setState({ answers: [] });
    }

    this.setState({ isActive: !isActive });
  }

  render() {
    let { code, isActive, answers } = this.state;

    return (
      <div>
        <div>
          Code: {code}
        </div>

        <button onClick={this.toggle}>{isActive ? 'Stop' : 'Start'}</button>

        <ul>
          {answers.map((answer, i) => <li key={i}>{answer.id}: {answer.text}</li>)}
        </ul>
      </div>
    );
  }
}
