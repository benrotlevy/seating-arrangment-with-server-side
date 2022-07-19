import React from "react";

export const SelectBox = ({ tables, onSelectChange, selectedTable, all }) => {
    const insertOptions = () => {
        if (!tables) return;
        const arrOfOptions = [];
        for (let table of tables) {
            if (!isTableFull(table.type, table.guests) || all) {
                arrOfOptions.push(
                    <option
                        key={table._id}
                        value={table.number}
                    >{`Table ${table.number}`}</option>
                );
            }
        }
        // for (let i = 1; i < 32; i++) {
        //     if (available[i].numOfChairs > available[i].taken || all) {
        //         arrOfOptions.push(
        //             <option key={i} value={i}>{`Table ${i}`}</option>
        //         );
        //     }
        // }
        return arrOfOptions;
    };

    const isTableFull = (type, tableGuests) => {
        const length = tableGuests.length + 1;
        switch (type) {
            case 1:
                return length === 10;
            case 2:
                return length === 16;
            case 3:
                return length === 12;
            case 4:
                return length === 18;
        }
    };

    return (
        <>
            <select value={selectedTable} onChange={onSelectChange}>
                <option value={""}>
                    {all ? "Select Table" : "Choose Table"}
                </option>
                {insertOptions()}
            </select>
        </>
    );
};
