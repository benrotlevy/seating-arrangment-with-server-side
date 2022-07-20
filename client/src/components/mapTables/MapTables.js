import { useEffect, useState } from "react";
import { useAuthContext } from "../context/Context";
import { Map } from "../map/Map";
import { ToolBar } from "../toolBar/ToolBar";
import "./mapTables.css";

const MapTables = () => {
    const { setCurrentUser, currentUser } = useAuthContext();
    const [chosenTableType, setChosenTableType] = useState(0);
    const [chosenTable, setChosenTable] = useState([]);
    const [arrayOfUsers, setArrayOfUsers] = useState([]);
    const [pointer, setPointer] = useState(0);

    useEffect(() => {
        setArrayOfUsers([currentUser]);
    }, []);

    useEffect(() => {
        console.log(pointer);
        setChosenTable([]);
    }, [pointer]);

    // useEffect(() => {
    //     console.log(arrayOfUsers);
    // }, [arrayOfUsers]);

    const changePointer = (num) => {
        if (pointer + num < 0 || pointer + num >= arrayOfUsers.length) return;
        // console.log(arrayOfUsers);
        setCurrentUser(arrayOfUsers[pointer + num]);
        setPointer((prev) => prev + num);
    };

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

    const addUsersToArray = (user) => {
        setArrayOfUsers((prev) => [...prev, user]);
        setPointer((prev) => prev + 1);
    };

    return (
        <div className="container">
            <Map
                chosenTableType={chosenTableType}
                onTableClick={onTableClick}
                chosenTable={chosenTable}
                addUsersToArray={addUsersToArray}
            ></Map>
            <ToolBar
                addUsersToArray={addUsersToArray}
                chosenTableLocation={chosenTable}
                chosen={chosenTableType}
                onToolClick={onToolClick}
                changePointer={changePointer}
            ></ToolBar>
        </div>
    );
};

export default MapTables;
