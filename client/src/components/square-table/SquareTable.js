import { useEffect, useState } from "react";

export const SquareTable = ({ guestsList }) => {
  const [guestsIndicators, setGuestsIndicators] = useState(
    Array(12).fill(false)
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
    if (guestsList.length === 12) {
      setFull(true);
    } else if (full && guestsList.length < 12) {
      setFull(false);
    }
  }, [guestsList]);

  return (
    <svg
      id="eXbuKt6m4qj1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnslink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <ellipse
        rx="3.177966"
        ry="3.240279"
        transform="translate(16.5 12.270188)"
        fill={guestsIndicators[0] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="3.177966"
        ry="3.240279"
        transform="translate(11.5 17.270188)"
        fill={guestsIndicators[1] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="3.177966"
        ry="3.240279"
        transform="translate(38.5 17.270188)"
        fill={guestsIndicators[2] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="3.177966"
        ry="3.240279"
        transform="translate(11.5 25.270188)"
        fill={guestsIndicators[3] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="3.177966"
        ry="3.240279"
        transform="translate(38.5 25.270188)"
        fill={guestsIndicators[4] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="3.177966"
        ry="3.240279"
        transform="translate(11.5 33.270188)"
        fill={guestsIndicators[5] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="3.177966"
        ry="3.240279"
        transform="translate(38.5 33.270188)"
        fill={guestsIndicators[6] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="3.177966"
        ry="3.240279"
        transform="translate(16.500009 37.999999)"
        fill={guestsIndicators[7] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="3.177966"
        ry="3.240279"
        transform="translate(25 12)"
        fill={guestsIndicators[8] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="3.177966"
        ry="3.240279"
        transform="translate(25 38)"
        fill={guestsIndicators[9] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="3.177966"
        ry="3.240279"
        transform="translate(33.211865 12.270188)"
        fill={guestsIndicators[10] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="3.177966"
        ry="3.240279"
        transform="translate(33.211873 37.999999)"
        fill={guestsIndicators[11] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <rect
        width="27"
        height="25.729811"
        rx="0"
        ry="0"
        transform="translate(11.5 12.270189)"
        fill={full ? "#003B5D" : "#d2dbed"}
        stroke="#000"
        strokeWidth="0.3"
      />
    </svg>
  );
};
