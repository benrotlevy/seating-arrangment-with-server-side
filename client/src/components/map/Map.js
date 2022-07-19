import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuthContext } from "../context/Context";
import { Pixel } from "../pixel/Pixel";
import "./map.css";

const emptyMatrix = [
    Array(15).fill(0),
    Array(15).fill(0),
    Array(15).fill(0),
    Array(15).fill(0),
    Array(15).fill(0),
    Array(15).fill(0),
    Array(15).fill(0),
    Array(15).fill(0),
    Array(15).fill(0),
    Array(15).fill(0),
];

export const Map = ({
    chosenTableType,
    onTableClick,
    chosenTable,
    setChosenTable,
}) => {
    const { currentUser, setCurrentUser, token } = useAuthContext();

    const [matrix, setMatrix] = useState(emptyMatrix);

    useEffect(() => {
        if (currentUser) {
            setMatrix((prev) => {
                const newMatrix = [...prev];
                if (chosenTable.length > 0) {
                    newMatrix[chosenTable[1]][chosenTable[0]] = 0;
                }
                currentUser.tables.forEach((table) => {
                    const x = table.location[0];
                    const y = table.location[1];
                    newMatrix[y][x] = table;
                });
                return newMatrix;
            });
        }
    }, [currentUser]);

    const handleTableMovment = (x, y) => {
        // console.log(currentUser);
        const userToSave = JSON.parse(JSON.stringify(currentUser));
        userToSave.tables = userToSave.tables.map((table) => {
            if (
                table.location[0] === chosenTable[0] &&
                table.location[1] === chosenTable[1]
            ) {
                table.location = [x, y];
            }
            return table;
        });
        setCurrentUser(userToSave);
    };

    const handleMapClick = (event) => {
        if (!event.target.id && !event.target.parentElement.id) return;
        if (
            event.target.nodeName === "svg" ||
            event.target.className === "matrix-row"
        )
            return;
        if (event.target.parentElement.nodeName === "svg") {
            onTableClick(event);
            return;
        }

        const id = event.target.id.split(",");
        const x = Number(id[0]);
        const y = Number(id[1]);

        if (x > 4 && x < 10) return;

        if (chosenTable.length > 0) {
            return handleTableMovment(x, y);
        }
        if (!chosenTableType) return;
        const userToSave = JSON.parse(JSON.stringify(currentUser));
        const newTable = createNewTable(y, x);
        userToSave.tables.push(newTable);
        setCurrentUser(userToSave);
    };

    const createNewTable = (y, x) => {
        return {
            number: findNumberForTable(),
            type: chosenTableType,
            location: [x, y],
            guests: [],
        };
    };

    const findNumberForTable = () => {
        let num = 1;
        for (let table of currentUser.tables) {
            if (table.number !== num) break;
            num++;
        }
        return num;
    };

    const insertPixels = () => {
        return matrix.map((row, index) => {
            return (
                <div key={index} className="matrix-row" id={index}>
                    {row.map((pixel, innerIndex) => {
                        return (
                            <Pixel
                                chosen={
                                    innerIndex === chosenTable[0] &&
                                    index === chosenTable[1]
                                        ? true
                                        : false
                                }
                                key={innerIndex}
                                id={[innerIndex, index]}
                                table={pixel}
                            ></Pixel>
                        );
                    })}
                </div>
            );
        });
    };

    if (!token) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="map-container" onClick={handleMapClick}>
            <div className="img-container">{insertPixels()}</div>
        </div>
    );
};
