import React from "react";

// const tables = {
//     1: {numOfChairs:14,
//         guests: {},
//     },
//     2: {numOfChairs:14,
//         guests: {},
//     },
//     3: {numOfChairs:18,
//         guests: {},
//     },
//     4: {numOfChairs:18,
//         guests: {},
//     },
//     5: {numOfChairs:18,
//         guests: {},
//     },
//     6: {numOfChairs:10,
//         guests: {},
//     },
//     7: {numOfChairs:10,
//         guests: {},
//     },
//     8: {numOfChairs:10,
//         guests: {},
//     },
//     9: {numOfChairs:10,
//         guests: {},
//     },
//     10: {numOfChairs:12,
//         guests: {},
//     },
//     11: {numOfChairs:12,
//         guests: {},
//     },
//     12: {numOfChairs:12,
//         guests: {},
//     },
//     13: {numOfChairs:12,
//         guests: {},
//     },
//     14: {numOfChairs:12,
//         guests: {},
//     },
//     15: {numOfChairs:12,
//         guests: {},
//     },
//     16: {numOfChairs:12,
//         guests: {},
//     },
//     17: {numOfChairs:12,
//         guests: {},
//     },
//     18: {numOfChairs:12,
//         guests: {},
//     },
//     19: {numOfChairs:12,
//         guests: {},
//     },
//     20: {numOfChairs:12,
//         guests: {},
//     },
//     21: {numOfChairs:12,
//         guests: {},
//     },
//     22: {numOfChairs:12,
//         guests: {},
//     },
//     23: {numOfChairs:12,
//         guests: {},
//     },
//     24: {numOfChairs:12,
//         guests: {},
//     },
//     25: {numOfChairs:12,
//         guests: {},
//     },
//     26: {numOfChairs:12,
//         guests: {},
//     },
//     27: {numOfChairs:12,
//         guests: {},
//     },
//     28: {numOfChairs:12,
//         guests: {},
//     },
//     29: {numOfChairs:12,
//         guests: {},
//     },
//     30: {numOfChairs:12,
//         guests: {},
//     },
//     31: {numOfChairs:12,
//         guests: {},
//     }, 
// }

export const SelectBox = ({available, onSelectChange, selectedTable, all}) => {

    // useEffect(()=> {
    //     console.log(1);
    //     const copy = {...tables};
    //     guestsList.forEach(guest => {
    //         copy[guest.table].taken = copy[guest.table].taken +1;
    //     })
    //     console.log(copy);
    //     setTables(copy);
    // }, [guestsList])

    // const getTablesData = () => {
    //     const copy = {...tables};
    //     guestsList.forEach(guest => {
    //         copy[guest.table].guests[guest.id] = guest;
    //     })
    //     for(let key in copy) {
    //         let taken = 0;
    //         for(let key2 in copy[key].guests) {
    //             taken++;
    //         }
    //         copy[key].taken = taken;
    //     }
    //     // console.log(copy);
    //     return copy;
    // }

    const insertOptions = () => {
        // const data = getTablesData();
        const arrOfOptions = [];
        for(let i=1; i<32; i++) {
            if(available[i].numOfChairs > available[i].taken || all) {
                arrOfOptions.push(<option key={i} value={i}>{`Table ${i}`}</option>)
            }
        }
        return arrOfOptions;
    }

    return (
        <>
            <select value={selectedTable} onChange={onSelectChange}>
                <option value={""}>{all? "Select Table": "Choose Table"}</option>
                {insertOptions()}
            </select>
        </>
    )
}