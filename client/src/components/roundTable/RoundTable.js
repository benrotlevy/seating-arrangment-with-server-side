import { useEffect, useState } from "react";

export const RoundTable = ({ guestsList }) => {
  const [guestsIndicators, setGuestsIndicators] = useState(
    Array(10).fill(false)
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
    if (guestsList.length === 10) {
      setFull(true);
    } else if (full && guestsList.length < 10) {
      setFull(false);
    }
  }, [guestsList]);

  return (
    <svg
      id="eNbZ9ofGzAl1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <ellipse
        rx="2.376641"
        ry="2.320054"
        transform="translate(24.990267 15.644183)"
        fill={guestsIndicators[0] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="2.376641"
        ry="2.320054"
        transform="translate(31.139656 17.55285)"
        fill={guestsIndicators[1] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="2.376641"
        ry="2.320054"
        transform="translate(34.892938 22.192958)"
        fill={guestsIndicators[2] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="2.376641"
        ry="2.320054"
        transform="translate(34.892938 28.421458)"
        fill={guestsIndicators[3] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="2.376641"
        ry="2.320054"
        transform="translate(31.139656 32.884562)"
        fill={guestsIndicators[4] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="2.376641"
        ry="2.320054"
        transform="translate(24.990267 34.355817)"
        fill={guestsIndicators[5] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="2.376641"
        ry="2.320054"
        transform="translate(18.860344 32.884562)"
        fill={guestsIndicators[6] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="2.376641"
        ry="2.320054"
        transform="translate(15.107062 28.244454)"
        fill={guestsIndicators[7] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="2.376641"
        ry="2.320054"
        transform="translate(15.107062 22.192958)"
        fill={guestsIndicators[8] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="2.376641"
        ry="2.320054"
        transform="translate(18.860344 17.55285)"
        fill={guestsIndicators[9] ? "#ff0000" : "#2ee712"}
        stroke="#000"
        strokeWidth="0.3"
      />
      <ellipse
        rx="9.280217"
        ry="8.431417"
        transform="matrix(1.174829 0 0 1.118604 24.990267 24.924399)"
        fill={full ? "#003B5D" : "#d2dbed"}
        stroke="rgba(0,0,0,0.94)"
        strokeWidth="0.3"
      />
    </svg>
  );
};
