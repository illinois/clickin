import React from 'react';
import { subscribeToAnswers, askQuestion } from './api';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 'What is 2+2?',
      answers: []
    };
  }

  componentDidMount() {
    subscribeToAnswers(answer => {
      this.setState({ answers: [...this.state.answers, answer] });
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    askQuestion(this.state.question);
    this.setState({ answers: [] });
  }

  handleChange = event => {
    const question = event.target.value;
    this.setState({ question });
  }

  render() {
    const answers = this.state.answers.map(answer => <li>{answer}</li>);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.question} onChange={this.handleChange} />
          <input type="submit" value="Ask" />
        </form>

        <ul>{answers}</ul>
      </div>
    );
  }
}
