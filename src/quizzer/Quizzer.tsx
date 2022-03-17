import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>();
    return (
        <div>
            <h3>Quizzer</h3>
            {quizzes.map((quiz: Quiz) => (
                <Row key={quiz.name}>
                    <Col>{quiz.name}</Col>
                    <Col>{quiz.description}</Col>
                    <Col>There are {quiz.questions.length} questions.</Col>
                </Row>
            ))}
        </div>
    );
}
