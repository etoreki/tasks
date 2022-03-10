import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: ChangeEvent) {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formMovieName">
                <Form.Label>Your Answer:</Form.Label>
                <Form.Control value={userAnswer} onChange={updateAnswer} />
            </Form.Group>
            <span>{userAnswer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
