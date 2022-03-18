import React from "react";
import { render } from "@testing-library/react";
import { QuizDisplay } from "./Quiz";

describe("Quiz Tests", () => {
    beforeEach(() => {
        render(
            <QuizDisplay
                quiz={{
                    name: "example",
                    description: "desc example",
                    questions: []
                }}
            />
        );
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
    });
});
