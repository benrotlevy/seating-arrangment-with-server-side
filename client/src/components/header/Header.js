import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logoBig from "../../logo-big.png";
import { useAuthContext } from "../context/Context";

export const Header = () => {
    const { token, setCurrentUser, setToken } = useAuthContext();
    return (
        <>
            <nav className="nav-container">
                <div className="nav-cell logo-cont">
                    <Link to="./">
                        <img alt="#" src={logoBig} className="logo" />
                    </Link>
                </div>
                <div className="nav-cell links-container">
                    <Link to="./">
                        <div className="nav-btn">Home</div>
                    </Link>
                    <Link to="./map">
                        <div className="nav-btn">Seat Map</div>
                    </Link>
                    <Link to="./guests">
                        <div className="nav-btn">Seat Allocation</div>
                    </Link>
                </div>

                <div className="nav-cell log-container">
                    {token ? (
                        <p
                            onClick={() => {
                                setToken("");
                                setCurrentUser("");
                            }}
                        >
                            Logout
                        </p>
                    ) : (
                        <Link to="./login">Login</Link>
                    )}
                </div>
            </nav>
        </>
    );
};
