import { useEffect, useState } from "react";

export const BigTable = ({ guestsList, num }) => {
    const [guestsIndicators, setGuestsIndicators] = useState(
        Array(18).fill(false)
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
        if (guestsList.length === 18) {
            setFull(true);
        } else if (full && guestsList.length < 18) {
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
            <text x="22" y="7" fontSize="0.5rem">
                {num}
            </text>
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(6.986548 11.208043)"
                fill={guestsIndicators[0] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(6.986548 36.208043)"
                fill={guestsIndicators[1] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(2.929054 17.057163)"
                fill={guestsIndicators[2] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(46.929054 17.057163)"
                fill={guestsIndicators[3] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(2.929054 24)"
                fill={guestsIndicators[4] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(46.929054 24)"
                fill={guestsIndicators[5] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(2.929054 30.906283)"
                fill={guestsIndicators[6] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(46.929054 30.906283)"
                fill={guestsIndicators[7] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(14.101536 11.208043)"
                fill={guestsIndicators[8] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(14.101536 36.208043)"
                fill={guestsIndicators[9] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(21.780494 11.208043)"
                fill={guestsIndicators[10] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(21.780494 36.208043)"
                fill={guestsIndicators[11] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(28.689433 11.208043)"
                fill={guestsIndicators[12] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(28.689433 36.208043)"
                fill={guestsIndicators[13] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(35.689433 11.208043)"
                fill={guestsIndicators[14] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(35.689433 36.208043)"
                fill={guestsIndicators[15] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(42.689433 11.208043)"
                fill={guestsIndicators[16] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            <ellipse
                rx="3.057494"
                ry="2.92456"
                transform="translate(42.689433 36.208043)"
                fill={guestsIndicators[17] ? "#ff0000" : "#2ee712"}
                stroke="#000"
                strokeWidth="0.3"
                strokeMiterlimit="1"
            />
            {/* <ellipse
        rx="3.057494"
        ry="2.92456"
        transform="translate(35.689433 11.208043)"
        fill={guestsIndicators[18] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
        strokeMiterlimit="1"
      /> */}
            <rect
                width="40.412097"
                height="18.743768"
                rx="0"
                ry="0"
                transform="matrix(1.084276 0 0 1.307199 2.929054 11.208043)"
                fill={full ? "#003B5D" : "#d2dbed"}
                stroke="#000"
                strokeWidth="0.3"
            />
        </svg>
    );
};
