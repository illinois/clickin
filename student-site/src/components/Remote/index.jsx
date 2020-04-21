import React from 'react';

import {
  joinClass,
  answerQuestion
} from '../../api';

export default class Remote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: props.match.params.code,
      received: false
    };
  }

  componentDidMount() {
    const { code } = this.state;
    joinClass(code);
  }

  click = answer => {
    answerQuestion(answer, () => {
      this.setState({ received: true });
    });
  }

  render() {
    const { code, received } = this.state;

    const buttons = ['A', 'B', 'C', 'D', 'E'].map(answer => (
      <button key={answer} onClick={() => this.click(answer)}>
        {answer}
      </button>
    ));

    return (
      <div className="Remote">
        <div>
          Code: {code}
        </div>

        <div>
          {buttons}
          {received && ' 👍'}
        </div>
      </div>
    );
  }
}
