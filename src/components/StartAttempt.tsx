import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startQuiz(): void {
        setInProgress(true);
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
