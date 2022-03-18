import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { MCQuestionDisplay } from "./MCQuestionDisplay";

export function QuizDisplay({ quiz }: { quiz: Quiz }): JSX.Element {
    const [onlyPublished, setOnlyPublished] = useState<boolean>(false);
    return (
        <div>
            <div>
                <h3>Quiz</h3>
                <Form.Check
                    type="checkbox"
                    id="show-published-check"
                    label="Only Show Published Questions"
                    checked={onlyPublished}
                    onChange={() => setOnlyPublished(!onlyPublished)}
                />
            </div>
            {quiz.questions.map((question: Question) => (
                <div key={question.id}>
                    <h4>{question.name}</h4>
                    {question.type === "multiple_choice_question" ? (
                        <MCQuestionDisplay
                            question={question}
                        ></MCQuestionDisplay>
                    ) : (
                        <span>Short Answer Question</span>
                    )}
                </div>
            ))}
        </div>
    );
}
