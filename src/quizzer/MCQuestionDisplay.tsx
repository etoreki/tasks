import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Question } from "../interfaces/question";

export function MCQuestionDisplay({
    question
}: {
    question: Question;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>();
    return (
        <div>
            <p>{question.body}</p>
            {question.options.map((answer: string) => (
                <Form.Check
                    key={answer}
                    type="radio"
                    name="answers"
                    onChange={(e) => setUserAnswer(e.target.value)}
                    id={"answer-choice-" + answer}
                    label={answer}
                    value={answer}
                    checked={userAnswer === answer}
                />
            ))}
        </div>
    );
}
