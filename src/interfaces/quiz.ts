import { Question } from "./question";

/** A representation of a Question in a quizzing application */
export interface Quiz {
    /** The human-friendly title of the quiz */
    name: string;
    /** The description of the Quiz */
    description: string;
    /** All the questions in the Quiz */
    questions: Question[];
}
