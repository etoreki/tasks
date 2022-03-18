import React from "react";
import { Question } from "../interfaces/question";

export function MCQuestionDisplay({
    question
}: {
    question: Question;
}): JSX.Element {
    return <div>{question.body}</div>;
}
