import { useEffect, useState } from "react";

export const LongTable = ({ guestsList, num }) => {
    const [guestsIndicators, setGuestsIndicators] = useState(
        Array(16).fill(false)
    );
    const [full, setFull] = useState(false);

    useEffect(() => {
        setGuestsIndicators((prev) => {
            const arr = prev.map((indicator, index) => {
                if (guestsList[index]) return true;
                return false;
            });
            return arr;
        });
        if (guestsList.length === 16) {
            setFull(true);
        } else if (full && guestsList.length < 16) {
            setFull(false);
        }
    }, [guestsList]);

    return (
        <svg
            id={num}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 50 50"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
        >
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(10.43021 32.000001)"
                fill={guestsIndicators[0] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(10.43021 18.000001)"
                fill={guestsIndicators[1] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(7 21.841095)"
                fill={guestsIndicators[2] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(43 21.841095)"
                fill={guestsIndicators[3] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(7 28.032088)"
                fill={guestsIndicators[4] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(43 28.032088)"
                fill={guestsIndicators[5] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(16.195329 32.000001)"
                fill={guestsIndicators[6] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(16.195329 18.000001)"
                fill={guestsIndicators[7] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(21.880462 32.000001)"
                fill={guestsIndicators[8] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(21.880462 18.000001)"
                fill={guestsIndicators[9] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(27.740881 32)"
                fill={guestsIndicators[10] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(27.740881 18)"
                fill={guestsIndicators[11] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(33.477136 32)"
                fill={guestsIndicators[12] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(33.477136 18)"
                fill={guestsIndicators[13] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(39.337556 32.000001)"
                fill={guestsIndicators[14] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <ellipse
                rx="2.43021"
                ry="2.517447"
                transform="translate(39.337556 18.000001)"
                fill={guestsIndicators[15] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
            />
            <rect
                width="32.527418"
                height="11.914257"
                rx="0"
                ry="0"
                transform="matrix(1.099619 0 0 1.167866 7 18.085745)"
                fill={full ? "#003B5D" : "#d2dbed"}
                stroke="#000"
                strokeWidth="0.3"
            />
        </svg>
    );
};
