import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import sampleQuizzes from "../data/sample_quizzes.json";
import { Question, QuestionType } from "../interfaces/question";

const QUIZZES = sampleQuizzes.map(
    (quiz): Quiz => ({
        ...quiz,
        questions: quiz.questions.map(
            (question): Question => ({
                ...question,
                type:
                    question.type === "multiple_choice_question"
                        ? "multiple_choice_question"
                        : "short_answer_question"
            })
        )
    })
);

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
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
