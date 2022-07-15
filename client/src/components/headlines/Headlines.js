import React, { useState } from "react";
import "./headlines.css";

export const Headlines = ({sortList, list}) => {

    const [genderAscend, setGenderAscend] = useState(true);
    const [firstNameAscend, setFirstNameAscend] = useState(true);
    const [lastNameAscend, setLastNameAscend] = useState(true);
    const [labelAscend, setLabelAscend] = useState(true);
    const [tableAscend, setTableAscend] = useState(true);


    const sortByField = (field, ascend) => {
        let num= 1;
        if(!ascend) {
            num = -1;
        }
        const sorted = [...list];
        sorted.sort((a,b) => {
            if(a[field] > b[field]) {
                return num;
            } else if(a[field] === b[field]) {
                return 0;
            }
            return num*-1;
        });
        sortList(sorted);
    }

    const sortByNum = (ascend) => {
        let num = 1;
        if(!ascend) num = -1;
        const sorted = [...list];
        sorted.sort((a,b)=> (a.table - b.table)*num);
        sortList(sorted);
    }

    const genderSort = () => {
        sortByField("gender", genderAscend);
        setGenderAscend(prev => !prev);
    }
    const firstSort = () => {
        sortByField("firstName", firstNameAscend);
        setFirstNameAscend(prev => !prev);
    }
    const lastSort = () => {
        sortByField("lastName", lastNameAscend);
        setLastNameAscend(prev => !prev);
    }
    const labelSort = () => {
        sortByField("label", labelAscend);
        setLabelAscend(prev => !prev);
    }
    const tableSort = () => {
        sortByNum(tableAscend);
        setTableAscend(prev => !prev);
    }

    return (
        <>
            <div className="row">
                <div onClick={genderSort} className="gender cell headline">Title</div>
                <div onClick={firstSort} className="first-name cell headline">First Name</div>
                <div onClick={lastSort} className="last-name cell headline">Last Name</div>
                <div onClick={labelSort} className="label cell headline">Tag</div>
                <div onClick={tableSort} className="table cell headline">Table</div>
                <div className="empty cell"></div>
            </div>
        </>
    )
}