import { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { useAuthContext } from "../context/Context";
import "./login.css";

export const Login = (props) => {
    // console.log("login");
    const { token, setToken, setCurrentUser } = useAuthContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const history = useHistory();

    const sendDetailes = async () => {
        try {
            console.log(email, password);
            const { data } = await usersAPI.post("/users/login", {
                email,
                password,
            });
            setToken(data.token);
            setCurrentUser(data.user);
        } catch (error) {
            console.log(error);
        }
    };

    function setFields({ target }) {
        if (target.name == "email") {
            setEmail(target.value);
        } else if (target.name == "password") {
            setPassword(target.value);
        }
    }

    if (token) {
        // history.goBack();
        return <Redirect to={"/map"} />;
    }

    return (
        <div className="login">
            <div className="form">
                <input
                    name="email"
                    type="email"
                    value={email}
                    placeholder="email"
                    onChange={setFields}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="password"
                    onChange={setFields}
                />
                <button onClick={sendDetailes}>login</button>
                <p>
                    if you didn't have account please{" "}
                    <Link to="./signup">register</Link>
                </p>
            </div>
        </div>
    );
};
