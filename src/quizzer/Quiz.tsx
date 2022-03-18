import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function Quiz(): JSX.Element {
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
        </div>
    );
}
