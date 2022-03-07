import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday = "🎄" | "🦃" | "🎃" | "❤️" | "🐰";

const NEXT_ALPHABETICAL_HOLIDAY: Record<Holiday, Holiday> = {
    "🎄": "🐰",
    "🐰": "🎃",
    "🎃": "🦃",
    "🦃": "❤️",
    "❤️": "🎄"
};

const NEXT_YEARLY_HOLIDAY: Record<Holiday, Holiday> = {
    "🎄": "❤️",
    "🐰": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "❤️": "🐰"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button
                    onClick={() =>
                        setHoliday(NEXT_ALPHABETICAL_HOLIDAY[holiday])
                    }
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => setHoliday(NEXT_YEARLY_HOLIDAY[holiday])}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
