import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { BigTable } from "../bigTable/BigTable";
import { LongTable } from "../longTable/LongTable";
import { RoundTable } from "../roundTable/RoundTable";
import { SquareTable } from "../square-table/SquareTable";
import "./mapTables.css";

const MapTables = () => {
  const [tables, setTables] = useState({
    1: { numOfChairs: 14, map: [] },
    2: { numOfChairs: 14, map: [] },
    3: { numOfChairs: 18, map: [] },
    4: { numOfChairs: 18, map: [] },
    5: { numOfChairs: 18, map: [] },
    6: { numOfChairs: 10, map: [] },
    7: { numOfChairs: 10, map: [] },
    8: { numOfChairs: 10, map: [] },
    9: { numOfChairs: 10, map: [] },
    10: { numOfChairs: 12, map: [] },
    11: { numOfChairs: 12, map: [] },
    12: { numOfChairs: 12, map: [] },
    13: { numOfChairs: 12, map: [] },
    14: { numOfChairs: 12, map: [] },
    15: { numOfChairs: 12, map: [] },
    16: { numOfChairs: 12, map: [] },
    17: { numOfChairs: 12, map: [] },
    18: { numOfChairs: 12, map: [] },
    19: { numOfChairs: 12, map: [] },
    20: { numOfChairs: 12, map: [] },
    21: { numOfChairs: 12, map: [] },
    22: { numOfChairs: 12, map: [] },
    23: { numOfChairs: 12, map: [] },
    24: { numOfChairs: 12, map: [] },
    25: { numOfChairs: 12, map: [] },
    26: { numOfChairs: 12, map: [] },
    27: { numOfChairs: 12, map: [] },
    28: { numOfChairs: 12, map: [] },
    29: { numOfChairs: 12, map: [] },
    30: { numOfChairs: 12, map: [] },
    31: { numOfChairs: 12, map: [] },
  });

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await usersAPI.get("/");
  //       extractTablesData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const extractTablesData = (guestsList) => {
    const tables = {};
    guestsList.forEach((guest) => {
      if (guest.table) {
        if (tables[guest.table]) {
          tables[guest.table].push(guest);
        } else {
          tables[guest.table] = [guest];
        }
      }
    });
    organizeAvailableChairs(tables);
  };

  const organizeAvailableChairs = (tables) => {
    const availableChairs = {
      1: { numOfChairs: 14, map: [] },
      2: { numOfChairs: 14, map: [] },
      3: { numOfChairs: 18, map: [] },
      4: { numOfChairs: 18, map: [] },
      5: { numOfChairs: 18, map: [] },
      6: { numOfChairs: 10, map: [] },
      7: { numOfChairs: 10, map: [] },
      8: { numOfChairs: 10, map: [] },
      9: { numOfChairs: 10, map: [] },
      10: { numOfChairs: 12, map: [] },
      11: { numOfChairs: 12, map: [] },
      12: { numOfChairs: 12, map: [] },
      13: { numOfChairs: 12, map: [] },
      14: { numOfChairs: 12, map: [] },
      15: { numOfChairs: 12, map: [] },
      16: { numOfChairs: 12, map: [] },
      17: { numOfChairs: 12, map: [] },
      18: { numOfChairs: 12, map: [] },
      19: { numOfChairs: 12, map: [] },
      20: { numOfChairs: 12, map: [] },
      21: { numOfChairs: 12, map: [] },
      22: { numOfChairs: 12, map: [] },
      23: { numOfChairs: 12, map: [] },
      24: { numOfChairs: 12, map: [] },
      25: { numOfChairs: 12, map: [] },
      26: { numOfChairs: 12, map: [] },
      27: { numOfChairs: 12, map: [] },
      28: { numOfChairs: 12, map: [] },
      29: { numOfChairs: 12, map: [] },
      30: { numOfChairs: 12, map: [] },
      31: { numOfChairs: 12, map: [] },
    };
    for (let key in tables) {
      availableChairs[key].guests = [...tables[key]];
      for (let i = 0; i < tables[key].length; i++) {
        availableChairs[key].map.push(true);
      }
    }
    pushFalse(availableChairs);
  };

  const pushFalse = (chairs) => {
    for (let key in chairs) {
      for (let i = chairs[key].map.length; i < chairs[key].numOfChairs; i++) {
        chairs[key].map.push(false);
      }
    }
    // console.log(chairs);
    setTables(chairs);
  };

  const isFull = (id) => {
    if (!tables[id].map[0]) return false;
    const res = tables[id].map.find((bool) => bool === false);
    if (res === false) return false;
    return true;
  };

  return (
    <div className="map-container">
      {/* <RoundTable guestsList={[1, 4, 6, 7, 7, 7, 7, 7, 7]}></RoundTable>
      <SquareTable guestsList={[1, 4, 6, 7, 5, 5, 5, 5, 5, 5, 5]}></SquareTable>
      <LongTable
        guestsList={[1, 4, 6, 7, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6]}
      ></LongTable>
      <BigTable
        guestsList={[1, 4, 6, 7, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7]}
      ></BigTable> */}
    </div>
  );
};

export default MapTables;
