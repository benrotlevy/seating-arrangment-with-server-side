import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logoBig from "../../logo-big.png";
import { useAuthContext } from "../context/Context";
import { usersAPI } from "../../api/api";

export const Header = () => {
    const { token, setCurrentUser, setToken } = useAuthContext();
    const logout = async () => {
        try {
            await usersAPI.post(
                "/users/logout",
                {},
                {
                    headers: { Authorization: "Bearer " + token },
                }
            );
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <nav className="nav-container" dir="rtl">
                <div className="nav-cell logo-cont">
                    <Link to="./">
                        <img alt="#" src={logoBig} className="logo" />
                    </Link>
                </div>
                <div className="nav-cell links-container">
                    <Link to="/">
                        <div className="nav-btn">בית</div>
                    </Link>
                    <Link to="/map">
                        <div className="nav-btn">מפת שולחנות</div>
                    </Link>
                    <Link to="/guests">
                        <div className="nav-btn">הושבת אורחים</div>
                    </Link>
                </div>

                <div className="nav-cell log-container">
                    {token ? (
                        <p
                            onClick={() => {
                                logout();
                                setToken("");
                                setCurrentUser("");
                            }}
                        >
                            התנתקות
                        </p>
                    ) : (
                        <Link to="./login">
                            <p>התחבר</p>
                        </Link>
                    )}
                </div>
            </nav>
        </>
    );
};
