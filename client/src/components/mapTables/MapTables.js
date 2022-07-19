import { useState } from "react";
import { Map } from "../map/Map";
import { ToolBar } from "../toolBar/ToolBar";
import "./mapTables.css";

const MapTables = () => {
    const [chosenTableType, setChosenTableType] = useState(0);
    const [chosenTable, setChosenTable] = useState([]);

    const onToolClick = (event) => {
        setChosenTableType(Number(event.currentTarget.id));
        setChosenTable([]);
    };

    const onTableClick = (event) => {
        setChosenTableType(0);
        const id = event.target.parentElement.parentElement.id.split(",");
        const x = Number(id[0]);
        const y = Number(id[1]);
        setChosenTable([x, y]);
    };

    return (
        <div className="container">
            <Map
                chosenTableType={chosenTableType}
                onTableClick={onTableClick}
                chosenTable={chosenTable}
                setChosenTable={setChosenTable}
            ></Map>
            <ToolBar
                chosen={chosenTableType}
                onToolClick={onToolClick}
            ></ToolBar>
        </div>
    );
};

export default MapTables;
