import React, { useEffect, useState } from "react";
import { guestsAPI } from "../../api/api";
import { SelectBox } from "../selectBox/SelectBox";
import "./addGuest.css";

export const AddGuest = ({add, available, selectedTable, setSpinner}) => {
    const [firstNameVal, setFirstNameVal] = useState("");
    const [LastNameVal, setLastNameVal] = useState("");
    const [gender, setGender] = useState("Mr.");
    const [labelVal, setLabelVal] = useState("");
    const [table, setTable] = useState("");
    const [defaultMode, setDefaultMode] = useState(true);

    useEffect(()=> {
        setDefaultMode(true);
    }, [selectedTable])

    const genderChanged = ({target}) => {
        setGender(target.value);
    }

    const tableChanged = ({target}) => {
        setTable(target.value);
        setDefaultMode(false);
    }

    const addGuest = async() => {
        const newGuest = {
            firstName: firstNameVal,
            lastName: LastNameVal,
            gender: gender,
            label: labelVal,
            table: table,
        }
        if(defaultMode) newGuest.table = selectedTable;
        try {
            setSpinner(true);
            const {data} = await guestsAPI.post("/", newGuest);
            setSpinner(false);
            add(data);
            setFirstNameVal("");
            setLabelVal("");
            setGender("Mr.");
            setLastNameVal("");
            setTable("");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="row add-guest">
                <div className="gender cell">
                    <select onChange={genderChanged} value={gender}>
                        <option value="Mr." >Mr.</option>
                        <option value="Mrs." >Mrs.</option>
                    </select>
                </div>
                <div className="first-name cell">
                    <input value={firstNameVal} onChange={(e)=> setFirstNameVal(e.target.value)} />
                </div>
                <div className="last-name cell">
                    <input value={LastNameVal} onChange={(e)=> setLastNameVal(e.target.value)} />
                </div>
                <div className="label cell">
                    <input value={labelVal} onChange={(e)=> setLabelVal(e.target.value)} />
                </div>
                <div className="table cell">
                    <SelectBox onSelectChange={tableChanged} selectedTable={defaultMode? selectedTable: table} available={available} all={false}/>
                    {/* <input type="number" max={20} min="1" value={table} onChange={tableChanged} /> */}
                </div>
                <div className="cell add">
                    <div className="add-img" onClick={addGuest}></div>
                </div>
            </div>
        </>
    )

}