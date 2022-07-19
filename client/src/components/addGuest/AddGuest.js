import React, { useEffect, useState } from "react";
import { usersAPI } from "../../api/api";
import { useAuthContext } from "../context/Context";
import { SelectBox } from "../selectBox/SelectBox";
import "./addGuest.css";

export const AddGuest = ({ selectedTable, setSpinner }) => {
    const { token, currentUser, setCurrentUser } = useAuthContext();
    const [firstNameVal, setFirstNameVal] = useState("");
    const [LastNameVal, setLastNameVal] = useState("");
    const [gender, setGender] = useState("Mr.");
    const [labelVal, setLabelVal] = useState("");
    const [table, setTable] = useState("");
    const [defaultMode, setDefaultMode] = useState(true);

    useEffect(() => {
        setDefaultMode(true);
    }, [selectedTable]);

    const genderChanged = ({ target }) => {
        setGender(target.value);
    };

    const tableChanged = ({ target }) => {
        setTable(target.value);
        setDefaultMode(false);
    };

    const addGuest = async () => {
        const newGuest = {
            firstName: firstNameVal,
            lastName: LastNameVal,
            title: gender,
            label: labelVal,
            table: table,
        };
        if (defaultMode) newGuest.table = selectedTable;

        const userToSave = { ...currentUser };
        userToSave.guests.push(newGuest);
        if (newGuest.table) {
            const tableToSeat = userToSave.tables.find(
                (table) => table.number === Number(newGuest.table)
            );
            tableToSeat.guests.push(
                newGuest.firstName + " " + newGuest.lastName
            );
        }

        try {
            setSpinner(true);
            const { data } = await usersAPI.patch(
                "/users/me",
                { guests: userToSave.guests, tables: userToSave.tables },
                {
                    headers: { Authorization: "Bearer " + token },
                }
            );
            setSpinner(false);
            setCurrentUser(data);
            setFirstNameVal("");
            setLabelVal("");
            setGender("Mr.");
            setLastNameVal("");
            setTable("");
        } catch (error) {
            setSpinner(false);
            console.log(error);
        }
    };

    return (
        <>
            <div className="row add-guest">
                <div className="gender cell">
                    <select onChange={genderChanged} value={gender}>
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                    </select>
                </div>
                <div className="first-name cell">
                    <input
                        value={firstNameVal}
                        onChange={(e) => setFirstNameVal(e.target.value)}
                    />
                </div>
                <div className="last-name cell">
                    <input
                        value={LastNameVal}
                        onChange={(e) => setLastNameVal(e.target.value)}
                    />
                </div>
                <div className="label cell">
                    <input
                        value={labelVal}
                        onChange={(e) => setLabelVal(e.target.value)}
                    />
                </div>
                <div className="table cell">
                    <SelectBox
                        tables={currentUser.tables}
                        onSelectChange={tableChanged}
                        selectedTable={defaultMode ? selectedTable : table}
                        all={false}
                    />
                </div>
                <div className="cell add">
                    <div className="add-img" onClick={addGuest}></div>
                </div>
            </div>
        </>
    );
};
