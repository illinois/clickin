import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class Student extends React.Component {
  COURSE_1 = {
    id: 1,
    name: 'CS 125'
  };
  COURSE_2 = {
    id: 2,
    name: 'CS 126'
  };
  COURSE_3 = {
    id: 3,
    name: 'CS 173'
  };
  COURSE_4 = {
    id: 4,
    name: 'CS 225'
  };

  constructor(props) {
    super(props);
    this.state = {
      username: 'Tommy',
      courses: [
          this.COURSE_1,
          this.COURSE_2,
          this.COURSE_3,
          this.COURSE_4
      ]
    };
  }

  render() {
    const courseList = this.state.courses.map((course) =>
      <Row className="justify-content-center my-3" key={course.uuid}>
        <Col className="text-center">
          <span>{course.name}</span>
        </Col>
        <Col className="text-center">
          <Button variant="primary" size="lg">
            Join
          </Button>
        </Col>
      </Row>
    );

    return (
        <Container className="Student">
          <Col className="mt-3">
            <Row className="justify-content-center">
              <h1>{this.state.username}</h1>
            </Row>
            {courseList}
            <Row className="justify-content-center mt-3">
              <Button variant="primary" className="px-5" size="lg">
                Add Course
              </Button>
            </Row>
          </Col>
        </Container>
    );
  }
}
