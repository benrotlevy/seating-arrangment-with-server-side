import { useRef, useState } from "react";
import { usersAPI } from "../../api/api";
import { useAuthContext } from "../context/Context";
import { SelectBox } from "../selectBox/SelectBox";
import "./row.css";

const Row = ({ content, remove, setSpinner, isEdit, setIsEdit }) => {
    const { currentUser, setCurrentUser, token } = useAuthContext();
    const guestData = useRef(content);
    const [isEditMode, setIsEditMode] = useState(false);
    const [firstName, setFirstName] = useState(content.firstName);
    const [lastName, setLastName] = useState(content.lastName);
    const [gender, setGender] = useState(content.title);
    const [label, setLabel] = useState(content.label);
    const [table, setTable] = useState(content.table);

    const genderChanged = ({ target }) => {
        setGender(target.value);
    };

    const tableChanged = ({ target }) => {
        setTable(target.value);
    };

    const insertEditDelete = () => {
        const btn1Class = isEditMode ? "save" : "edit";
        const btn2Class = isEditMode ? "cancel" : "delete";
        return (
            <div className="cell edit-delete">
                <div className={btn1Class} onClick={handleEdit}></div>
                <div className={btn2Class} onClick={deleteGuest}></div>
            </div>
        );
    };

    const handleEdit = () => {
        if (isEditMode) {
            editGuest();
        } else {
            if (isEdit) return;
            setIsEditMode((prev) => !prev);
            setIsEdit(true);
        }
    };

    const editGuest = async () => {
        try {
            const newDetailes = {
                firstName: firstName,
                lastName: lastName,
                title: gender,
                label: label,
                table: table,
            };
            const userToSave = { ...currentUser };
            let guestToEdit = userToSave.guests.find(
                (guest) => guest._id === guestData.current._id
            );

            if (guestToEdit.table !== newDetailes.table && guestToEdit.table) {
                const oldTable = userToSave.tables.find(
                    (table) => table.number === Number(guestToEdit.table)
                );
                oldTable.guests = oldTable.guests.filter(
                    (guest) =>
                        guest !==
                        guestToEdit.firstName + " " + guestToEdit.lastName
                );
            }
            if (newDetailes.table) {
                const newTable = userToSave.tables.find(
                    (table) => table.number === Number(newDetailes.table)
                );
                newTable.guests.push(
                    newDetailes.firstName + " " + newDetailes.lastName
                );
            }
            userToSave.guests = userToSave.guests.map((guest) => {
                if ((guest) => guest._id === guestData.current._id) {
                    return newDetailes;
                }
                return guest;
            });

            setSpinner(true);
            const { data } = await usersAPI.patch(
                "/users/me",
                { guests: userToSave.guests, tables: userToSave.tables },
                {
                    headers: { Authorization: "Bearer " + token },
                }
            );
            setSpinner(false);
            guestData.current = guestToEdit;
            // edit(data);
            setCurrentUser(data);
            setIsEdit(false);
            setIsEditMode((prev) => !prev);
        } catch (error) {
            setSpinner(false);
            console.log(error);
        }
    };

    const deleteGuest = async () => {
        if (isEditMode) {
            setIsEdit(false);
            setIsEditMode((prev) => !prev);
        } else {
            if (isEdit) return;
            try {
                const userToSave = { ...currentUser };
                if (guestData.current.table) {
                    const tableToChange = userToSave.tables.find((table) => {
                        return table.number === Number(guestData.current.table);
                    });
                    console.log(tableToChange);
                    tableToChange.guests = tableToChange.guests.filter(
                        (guest) => {
                            return (
                                guest !==
                                guestData.current.firstName +
                                    " " +
                                    guestData.current.lastName
                            );
                        }
                    );
                }
                userToSave.guests = userToSave.guests.filter((guest) => {
                    return guest._id !== guestData.current._id;
                });
                setSpinner(true);
                const { data } = await usersAPI.patch(
                    "/users/me",
                    { guests: userToSave.guests, tables: userToSave.tables },
                    {
                        headers: { Authorization: "Bearer " + token },
                    }
                );
                setSpinner(false);
                console.log(data);
                setCurrentUser(data);
                // remove(data.id);
            } catch (error) {
                setSpinner(false);
                console.log(error);
            }
        }
    };

    if (isEditMode) {
        return (
            <div className="row">
                <div className="gender cell">
                    <select onChange={genderChanged} value={gender}>
                        <option value="מר">מר</option>
                        <option value="גברת">גברת</option>
                    </select>
                </div>
                <div className="first-name cell">
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="last-name cell">
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="label cell">
                    <input
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                </div>
                <div className="table cell">
                    <SelectBox
                        onSelectChange={tableChanged}
                        selectedTable={table}
                        tables={currentUser.tables}
                        all={false}
                    />
                </div>
                {insertEditDelete()}
            </div>
        );
    }

    return (
        <div className="row" dir="rtl">
            <div className="gender cell">{guestData.current.title}</div>
            <div className="first-name cell">{guestData.current.firstName}</div>
            <div className="last-name cell">{guestData.current.lastName}</div>
            <div className="label cell">{guestData.current.label}</div>
            <div className="table cell">
                {guestData.current.table
                    ? `Table ${guestData.current.table}`
                    : ""}
            </div>
            {insertEditDelete()}
        </div>
    );
};

export default Row;
