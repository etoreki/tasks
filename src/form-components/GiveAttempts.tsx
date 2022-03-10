import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [addedAttempts, setAddedAttempts] = useState<number>(0);
    return (
        <div>
            <h3>Give Attemtps</h3>
            <div>Attempts Left: {attempts}</div>
            <Form.Group controlId="formAddedAttempts">
                <Form.Label>Number of Attempts to add:</Form.Label>
                <Form.Control
                    type="number"
                    value={addedAttempts}
                    onChange={(event: ChangeEvent) =>
                        setAddedAttempts(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts <= 0}
                >
                    use
                </Button>
                <Button onClick={() => setAttempts(attempts + addedAttempts)}>
                    gain
                </Button>
            </div>
        </div>
    );
}
