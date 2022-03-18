import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import sampleQuizzes from "../data/sample_quizzes.json";
import { Question } from "../interfaces/question";

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
    const [addingQuiz, setAddingQuiz] = useState<boolean>(false);
    const [newQuizName, setNewQuizName] = useState<string>("");
    const [newQuizDesc, setNewQuizDesc] = useState<string>("");
    function setCurrentQuizByName(expectedName: string) {
        const newQuiz = quizzes.findIndex(
            (quiz: Quiz): boolean => quiz.name === expectedName
        );
        setCurrentQuiz(quizzes[newQuiz]);
    }
    function removeQuiz() {
        setQuizzes(
            quizzes.filter(
                (quiz: Quiz): boolean => quiz.name !== currentQuiz.name
            )
        );
        setCurrentQuiz(quizzes[0]);
    }
    function addQuiz() {
        setQuizzes([
            ...quizzes,
            { name: newQuizName, description: newQuizDesc, questions: [] }
        ]);
        setAddingQuiz(false);
        setNewQuizDesc("");
        setNewQuizName("");
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setNewQuizName(event.target.value);
    }
    function updateDesc(event: React.ChangeEvent<HTMLInputElement>) {
        setNewQuizDesc(event.target.value);
    }
    return (
        <div>
            <h3>Quizzer</h3>
            <Row style={{ border: "1px solid black" }}>
                <Col>
                    <strong>Quiz Name</strong>
                </Col>
                <Col>
                    <strong>Description</strong>
                </Col>
                <Col>
                    <strong>Number of Questions</strong>
                </Col>
            </Row>
            {quizzes.map((quiz: Quiz) => (
                <Row style={{ border: "1px solid black" }} key={quiz.name}>
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
            <div>
                <Button onClick={() => setAddingQuiz(!addingQuiz)}>
                    Add Quiz
                </Button>
                <Button onClick={removeQuiz}>Delete Seleccted Quiz</Button>
            </div>
            <div>
                {addingQuiz && (
                    <div>
                        <Form.Group controlId="formQuizName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                value={newQuizName}
                                onChange={updateName}
                            />
                        </Form.Group>
                        <Form.Group controlId="formQuizDescription">
                            <Form.Label>Quiz Description:</Form.Label>
                            <Form.Control
                                value={newQuizDesc}
                                onChange={updateDesc}
                            />
                        </Form.Group>
                        <Button onClick={addQuiz}>Add Quiz</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
