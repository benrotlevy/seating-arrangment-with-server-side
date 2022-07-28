import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { AddGuest } from "../addGuest/AddGuest";
import { useAuthContext } from "../context/Context";
import { Headlines } from "../headlines/Headlines";
import { Login } from "../login/Login";
import Row from "../row/Row";
import { SelectBox } from "../selectBox/SelectBox";
import { Spinner } from "../spinner/Spinner";
import "./guests.css";

const Guests = () => {
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [guestsList, setGuestsList] = useState([]);
    const [guestsListToDisplay, setGuestsListToDisplay] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [selectedTable, setSelectedTable] = useState("");
    const { currentUser, token } = useAuthContext();

    useEffect(() => {
        if (history.location.state) {
            console.log(history.location.state);
            // console.log(location.state);
            setSelectedTable(history.location.state.data.toString());
        }
    }, []);

    useEffect(() => {
        if (currentUser) {
            setGuestsList(currentUser.guests);
        }
    }, [currentUser]);

    useEffect(() => {
        setGuestsListToDisplay(
            guestsList.filter((guest) => {
                const guestToString =
                    guest.firstName + " " + guest.lastName + " " + guest.label;
                return (
                    guestToString
                        .toLowerCase()
                        .includes(searchInput.toLowerCase()) &&
                    (guest.table === selectedTable || !selectedTable)
                );
            })
        );
    }, [searchInput, guestsList, selectedTable]);

    const removeGuest = (id) => {
        setGuestsList((prev) => prev.filter((guest) => guest.id !== id));
    };

    // const editGuest = (editedGuest) => {
    //     setGuestsList((prev) =>
    //         prev.map((guest) => {
    //             if (guest.id === editedGuest.id) {
    //                 return editedGuest;
    //             }
    //             return guest;
    //         })
    //     );
    // };

    const drawTable = () => {
        return guestsListToDisplay.map((guest) => {
            return (
                <Row
                    key={
                        guest._id +
                        guest.firstName +
                        guest.lastName +
                        guest.table +
                        guest.label +
                        guest.title
                    }
                    content={guest}
                    remove={removeGuest}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    setSpinner={setIsLoading}
                />
            );
        });
    };

    const onFilterChange = ({ target }) => {
        setSelectedTable(target.value);
    };

    const sortList = (sortedLIst) => {
        setGuestsListToDisplay(sortedLIst);
    };

    if (!token) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            {isLoading && <Spinner />}
            <div dir="rtl">
                <div className="search">
                    {`סנן:`}
                    <input
                        className="filter"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <SelectBox
                        onSelectChange={onFilterChange}
                        tables={currentUser.tables}
                        selectedTable={selectedTable}
                        all={true}
                    />
                </div>
                <div className="table">
                    <Headlines list={guestsListToDisplay} sortList={sortList} />
                    {drawTable()}
                    <AddGuest
                        selectedTable={selectedTable}
                        setSpinner={setIsLoading}
                    />
                </div>
            </div>
        </>
    );
};

export default Guests;
