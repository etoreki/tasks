import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
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
    const [currentQuiz, setCurrentQuiz] = useState<Quiz>(quizzes[0]);
    function setCurrentQuizByName(expectedName: string) {
        const newQuiz = quizzes.findIndex(
            (quiz: Quiz): boolean => quiz.name === expectedName
        );
        setCurrentQuiz(quizzes[newQuiz]);
    }
    return (
        <div>
            <h3>Quizzer</h3>
            {quizzes.map((quiz: Quiz) => (
                <Row key={quiz.name}>
                    <Col>
                        {" "}
                        <Form.Check
                            key={quiz.name}
                            inline
                            type="radio"
                            name="quizzes"
                            onChange={(e) =>
                                setCurrentQuizByName(e.target.value)
                            }
                            id={quiz.name}
                            label={quiz.name}
                            value={quiz.name}
                            checked={currentQuiz.name === quiz.name}
                        />
                    </Col>
                    <Col>{quiz.description}</Col>
                    <Col>There are {quiz.questions.length} questions.</Col>
                </Row>
            ))}
        </div>
    );
}
