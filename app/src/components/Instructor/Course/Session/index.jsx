import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPlus, FaArrowRight } from 'react-icons/fa';

export default class Session extends React.Component {
  QUESTION_1 = {
    id: 1,
    question: 'What is the runtime to insert a node in a linked list?',
    isActive: true
  };
  QUESTION_2 = {
    id: 2,
    question:
        'Which of the following are desirable properties of a hash function?',
    isActive: true
  };
  QUESTION_3 = {
    id: 3,
    question: 'Which data structure can retrieve data the quickest?',
    isActive: false
  };

  constructor(props) {
    super(props);
    this.state = {
      course: 'CS 225',
      professor: 'Wade',
      sessionCode: 'xYz6a',
      questions: [
        this.QUESTION_1,
        this.QUESTION_2,
        this.QUESTION_3
      ]
    };
  }

  render() {
    const questionList = this.state.questions.map((question) =>
        <Row className="justify-content-center my-3" key={question.id}>
          <Button variant="primary" size="lg" disabled={!question.isActive} block>
            <div className="d-flex justify-content-between"
                 style={{display: "in-line"}}>
              <span className="mx-3" >Q{question.id}</span>
              <span className="mx-3" >{question.question}</span>
              <span className="mx-3 mt-1" ><FaArrowRight /></span>
            </div>
          </Button>
        </Row>
    );

    return (
        <Container className="Session">
          <Col className="mt-3">
            <Row className="justify-content-center">
              <h1>{this.state.course}</h1>
            </Row>
            <Row className="justify-content-center">
              <h4>Professor: {this.state.professor}</h4>
            </Row>
            <Row className="justify-content-center">
              <h4>Session Code: {this.state.sessionCode}</h4>
            </Row>
            {questionList}
            <Row className="justify-content-center mt-3">
              <Button variant="success" size="lg">
                <FaPlus className="mr-3 mb-1"/> Add Question
              </Button>
            </Row>
          </Col>
        </Container>
    );
  }
}