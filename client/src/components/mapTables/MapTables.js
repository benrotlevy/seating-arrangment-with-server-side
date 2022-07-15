import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { guestsAPI } from "../../api/api";
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

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await guestsAPI.get("/");
        extractTablesData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <svg
        id="eIadmDAU1CR1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1000 650"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        onClick={({ target }) => {
          console.dir(target);
        }}
      >
        <line
          x1="0"
          y1="-336.784465"
          x2="0"
          y2="336.784466"
          transform="translate(0 336.784466)"
          fill="none"
          stroke="#3f5787"
          stroke-width="3"
        />
        <rect
          data-id="31"
          width="37.196049"
          height="35.25"
          rx="0"
          ry="0"
          transform="translate(152.602517 226.729275)"
          fill={isFull(31) ? "#003B5D" : "#d2dbed"}
          stroke="#000"
        />
        <line
          x1="0"
          y1="-328.409718"
          x2="0"
          y2="328.409718"
          transform="translate(1000 328.409719)"
          fill="none"
          stroke="#3f5787"
          stroke-width="3"
        />
        <line
          x1="-500"
          y1="0"
          x2="500"
          y2="0"
          transform="translate(500 650)"
          fill="none"
          stroke="#3f5787"
          stroke-width="3"
        />
        <line
          x1="-503.93429"
          y1="0"
          x2="503.934291"
          y2="0.000001"
          transform="translate(503.934291 0.000001)"
          fill="none"
          stroke="#3f5787"
          stroke-width="3"
        />
      </svg>
    </div>
  );
};

export default MapTables;
