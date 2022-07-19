import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AddGuest } from "../addGuest/AddGuest";
import { useAuthContext } from "../context/Context";
import { Headlines } from "../headlines/Headlines";
import Row from "../row/Row";
import { SelectBox } from "../selectBox/SelectBox";
import { Spinner } from "../spinner/Spinner";
import "./guests.css";

const Guests = () => {
    const location = useLocation();

    const [isLoading, setIsLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [guestsList, setGuestsList] = useState([]);
    const [guestsListToDisplay, setGuestsListToDisplay] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [selectedTable, setSelectedTable] = useState("");
    const { currentUser } = useAuthContext();
    const [available, setAvailable] = useState({
        1: { numOfChairs: 14, guests: {} },
        2: { numOfChairs: 14, guests: {} },
        3: { numOfChairs: 18, guests: {} },
        4: { numOfChairs: 18, guests: {} },
        5: { numOfChairs: 18, guests: {} },
        6: { numOfChairs: 10, guests: {} },
        7: { numOfChairs: 10, guests: {} },
        8: { numOfChairs: 10, guests: {} },
        9: { numOfChairs: 10, guests: {} },
        10: { numOfChairs: 12, guests: {} },
        11: { numOfChairs: 12, guests: {} },
        12: { numOfChairs: 12, guests: {} },
        13: { numOfChairs: 12, guests: {} },
        14: { numOfChairs: 12, guests: {} },
        15: { numOfChairs: 12, guests: {} },
        16: { numOfChairs: 12, guests: {} },
        17: { numOfChairs: 12, guests: {} },
        18: { numOfChairs: 12, guests: {} },
        19: { numOfChairs: 12, guests: {} },
        20: { numOfChairs: 12, guests: {} },
        21: { numOfChairs: 12, guests: {} },
        22: { numOfChairs: 12, guests: {} },
        23: { numOfChairs: 12, guests: {} },
        24: { numOfChairs: 12, guests: {} },
        25: { numOfChairs: 12, guests: {} },
        26: { numOfChairs: 12, guests: {} },
        27: { numOfChairs: 12, guests: {} },
        28: { numOfChairs: 12, guests: {} },
        29: { numOfChairs: 12, guests: {} },
        30: { numOfChairs: 12, guests: {} },
        31: { numOfChairs: 12, guests: {} },
    });

    useEffect(() => {
        if (currentUser) {
            setGuestsList(currentUser.guests);
        }
        // if (location.state) {
        //     console.log(location.state);
        //     setSelectedTable(location.state);
        // }
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
                    key={guest._id}
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

    return (
        <>
            {isLoading && <Spinner />}
            <div>
                <div className="search">
                    {`Filter:`}
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
