import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./home.css";

export const Home = () => {
    return (
        <div className="home">
            <div className="big-logo"></div>
            <Link to="/guests">
                <div className="home-btn">הושבת אורחים</div>
            </Link>
            <Link to="/map">
                <div className="home-btn">מפת שולחנות</div>
            </Link>
        </div>
    );
};
