import React, {useEffect, useState} from 'react';
import { subscribeToQuestions, generateQuestion, answerQuestion } from '../../api';

function Remote (props) {
  const [question, setQuestion] = useState(<span className="loading">Waiting for a question</span>);

  useEffect(() => {
    subscribeToQuestions((question) => setQuestion(question));
  }, [props]);

  return (
    <div className="remote">
      <button onClick={generateQuestion}>Generate a question!</button>
      <br />
      <br />

      <div>{question}</div>
      <br />

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

export default Remote;
