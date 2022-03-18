import React from "react";
import { render } from "@testing-library/react";
import { Quiz } from "./Quiz";

describe("Quiz Tests", () => {
    beforeEach(() => {
        render(<Quiz />);
    });
    test("The Quizzer renders", () => {
        // Up to you to decide what your tests are!
        // Add more tests, more components, more test files!
    });
});
