import React from 'react';
import { subscribeToQuestions, answerQuestion } from '../../api';

export default class Remote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 'Waiting for a question...',
      disabled: true
    };
  }

  componentDidMount() {
    subscribeToQuestions(question => {
      console.log("QUESTION!");
      this.setState({ question, disabled: false });
    });
  }

  render() {
    const answers = ['A', 'B', 'C', 'D', 'E'];

    const buttons = answers.map(answer => (
      <button onClick={() => answerQuestion(answer)} disabled={this.state.disabled}>
        {answer}
      </button>
    ));

    return (
      <div className="Remote">
        {this.state.question}
        <div>{buttons}</div>
      </div>
    );
  }
}
