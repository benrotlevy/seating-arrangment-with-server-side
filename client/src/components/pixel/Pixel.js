import { BigTable } from "../bigTable/BigTable";
import { LongTable } from "../longTable/LongTable";
import { RoundTable } from "../roundTable/RoundTable";
import { SquareTable } from "../square-table/SquareTable";
import "./pixel.css";

export const Pixel = ({ table, id, chosen }) => {
    if (table?.type === 1) {
        return (
            <div className={"pixel " + `${chosen && "chosen"}`} id={id}>
                {/* <div className="table-num">{table.number}</div> */}
                <RoundTable
                    num={table.number}
                    guestsList={table.guests}
                ></RoundTable>
            </div>
        );
    }

    if (table?.type === 2) {
        return (
            <div className={"pixel " + `${chosen && "chosen"}`} id={id}>
                {/* <div className="table-num">{table.number}</div> */}
                <LongTable
                    num={table.number}
                    guestsList={table.guests}
                ></LongTable>
            </div>
        );
    }

    if (table?.type === 3) {
        return (
            <div className={"pixel " + `${chosen && "chosen"}`} id={id}>
                {/* <div className="table-num">{table.number}</div> */}
                <SquareTable
                    num={table.number}
                    guestsList={table.guests}
                ></SquareTable>
            </div>
        );
    }

    if (table?.type === 4) {
        return (
            <div className={"pixel " + `${chosen && "chosen"}`} id={id}>
                {/* <div className="table-num">{table.number}</div> */}
                <BigTable
                    num={table.number}
                    guestsList={table.guests}
                ></BigTable>
            </div>
        );
    }

    return <div className="pixel" id={id}></div>;
};
