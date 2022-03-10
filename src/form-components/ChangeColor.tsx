import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "yellow",
    "orange",
    "green",
    "cyan",
    "magenta",
    "black",
    "purple"
];

export function ChangeColor(): JSX.Element {
    const [chosen, setChosen] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                The current color is{" "}
                <span style={{ backgroundColor: chosen, color: "white" }}>
                    {chosen}
                </span>
            </div>
            {COLORS.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    onChange={(e) => setChosen(e.target.value)}
                    id={"colors-choice-" + color}
                    label={
                        <span
                            style={{ backgroundColor: color, color: "white" }}
                        >
                            {color}
                        </span>
                    }
                    value={color}
                    checked={chosen === color}
                />
            ))}
        </div>
    );
}
