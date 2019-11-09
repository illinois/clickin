import React from 'react';
import { subscribeToQuestions, generateQuestion, answerQuestion } from '../../api';

export default class Remote extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      question: "Waiting for a question..."
    };
  }

  componentDidMount() {
    subscribeToQuestions(question => {
      this.setState({ question: question });
    });
  }

  render() {
    return (
      <div className="Remote">
        <button onClick={generateQuestion}>Generate a question!</button>
        <br />
        <br />

        <div>{this.state.question}</div>
        <div>
          <button onClick={() => answerQuestion('A')} >A</button>
          <button onClick={() => answerQuestion('B')} >B</button>
          <button onClick={() => answerQuestion('C')} >C</button>
          <button onClick={() => answerQuestion('D')} >D</button>
          <button onClick={() => answerQuestion('E')} >E</button>
        </div>
      </div>
    );
  }
}
