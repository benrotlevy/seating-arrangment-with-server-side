import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { useAuthContext } from "../context/Context";
import "./login.css";

export const Login = () => {
    const { token, setToken, setCurrentUser } = useAuthContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendDetailes = async () => {
        try {
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

    if (token)
        return (
            // <div className="login">
            //     <h4>you are logged in</h4>
            // </div>
            <Redirect to={"/map"} />
        );

    return (
        <div className="login">
            <div className="form">
                <input
                    name="email"
                    type="email"
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
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
