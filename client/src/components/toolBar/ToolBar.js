import { usersAPI } from "../../api/api";
import { useAuthContext } from "../context/Context";
import "./toolBar.css";

export const ToolBar = ({ chosen, onToolClick }) => {
    const { token, currentUser } = useAuthContext();

    const saveData = async () => {
        const newObj = { tables: currentUser.tables };
        try {
            const { data } = await usersAPI.patch("/users/me", newObj, {
                headers: { Authorization: "Bearer " + token },
            });
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="tool-bar">
            <div className="tables">
                <div className="tool" id={1} onClick={onToolClick}>
                    <svg
                        className={chosen === 1 ? "chosen" : ""}
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
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.376641"
                            ry="2.320054"
                            transform="translate(31.139656 17.55285)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.376641"
                            ry="2.320054"
                            transform="translate(34.892938 22.192958)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.376641"
                            ry="2.320054"
                            transform="translate(34.892938 28.421458)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.376641"
                            ry="2.320054"
                            transform="translate(31.139656 32.884562)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.376641"
                            ry="2.320054"
                            transform="translate(24.990267 34.355817)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.376641"
                            ry="2.320054"
                            transform="translate(18.860344 32.884562)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.376641"
                            ry="2.320054"
                            transform="translate(15.107062 28.244454)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.376641"
                            ry="2.320054"
                            transform="translate(15.107062 22.192958)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.376641"
                            ry="2.320054"
                            transform="translate(18.860344 17.55285)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="9.280217"
                            ry="8.431417"
                            transform="matrix(1.174829 0 0 1.118604 24.990267 24.924399)"
                            fill="#d2dbed"
                            stroke="rgba(0,0,0,0.94)"
                            strokeWidth="0.3"
                        />
                    </svg>
                </div>
                <div className="tool" id={2} onClick={onToolClick}>
                    <svg
                        className={chosen === 2 ? "chosen" : ""}
                        id="e1wSEVkOxLB1"
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
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(10.43021 18.000001)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(7 21.841095)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(43 21.841095)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(7 28.032088)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(43 28.032088)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(16.195329 32.000001)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(16.195329 18.000001)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(21.880462 32.000001)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(21.880462 18.000001)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(27.740881 32)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(27.740881 18)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(33.477136 32)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(33.477136 18)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(39.337556 32.000001)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="2.43021"
                            ry="2.517447"
                            transform="translate(39.337556 18.000001)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <rect
                            width="32.527418"
                            height="11.914257"
                            rx="0"
                            ry="0"
                            transform="matrix(1.099619 0 0 1.167866 7 18.085745)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                    </svg>
                </div>
                <div className="tool" id={3} onClick={onToolClick}>
                    <svg
                        className={chosen === 3 ? "chosen" : ""}
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
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="3.177966"
                            ry="3.240279"
                            transform="translate(11.5 17.270188)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="3.177966"
                            ry="3.240279"
                            transform="translate(38.5 17.270188)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="3.177966"
                            ry="3.240279"
                            transform="translate(11.5 25.270188)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="3.177966"
                            ry="3.240279"
                            transform="translate(38.5 25.270188)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="3.177966"
                            ry="3.240279"
                            transform="translate(11.5 33.270188)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="3.177966"
                            ry="3.240279"
                            transform="translate(38.5 33.270188)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="3.177966"
                            ry="3.240279"
                            transform="translate(16.500009 37.999999)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="3.177966"
                            ry="3.240279"
                            transform="translate(25 12)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="3.177966"
                            ry="3.240279"
                            transform="translate(25 38)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="3.177966"
                            ry="3.240279"
                            transform="translate(33.211865 12.270188)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <ellipse
                            rx="3.177966"
                            ry="3.240279"
                            transform="translate(33.211873 37.999999)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                        <rect
                            width="27"
                            height="25.729811"
                            rx="0"
                            ry="0"
                            transform="translate(11.5 12.270189)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                    </svg>
                </div>
                <div className="tool" id={4} onClick={onToolClick}>
                    <svg
                        className={chosen === 4 ? "chosen" : ""}
                        id="eqY5jIE8aFn1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 50 50"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                    >
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(6.986548 11.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(6.986548 36.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(2.929054 17.057163)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(46.929054 17.057163)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(2.929054 24)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(46.929054 24)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(2.929054 30.906283)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(46.929054 30.906283)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(14.101536 11.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(14.101536 36.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(21.780494 11.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(21.780494 36.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(28.689433 11.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(28.689433 36.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(35.689433 11.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(35.689433 36.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(42.689433 11.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <ellipse
                            rx="3.057494"
                            ry="2.92456"
                            transform="translate(42.689433 36.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                            strokeMiterlimit="1"
                        />
                        <rect
                            width="40.412097"
                            height="18.743768"
                            rx="0"
                            ry="0"
                            transform="matrix(1.084276 0 0 1.307199 2.929054 11.208043)"
                            fill="#d2dbed"
                            stroke="#000"
                            strokeWidth="0.3"
                        />
                    </svg>
                </div>
            </div>
            <div className="tool-buttons">
                <button onClick={saveData}>Save</button>
            </div>
        </div>
    );
};
