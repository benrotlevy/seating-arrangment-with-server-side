import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./home.css";

export const Home = () => {
    return(
        <div className="home">
            <div className="big-logo"></div>
            <Link to="/guests">
                <div className="home-btn">Seat Allocation</div>
            </Link>
            <Link to="/map">
                <div className="home-btn">Seat Map</div>
            </Link>
        </div>
    )
}