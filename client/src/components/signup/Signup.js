import { useState } from "react";
import { Link } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { useAuthContext } from "../context/Context";
import "./signup.css";

export const Signup = () => {
    const { token, setToken, setCurrentUser, currentUser } = useAuthContext();
    //   const [success, setSuccess] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendDetailes = async () => {
        if (!name || !email || !password) return;
        try {
            const { data } = await usersAPI.post("/users", {
                name,
                email,
                password,
            });
            setToken(data.token);
            setCurrentUser(data.user);
            //   setSuccess(true);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    if (token)
        return (
            <div className="login">
                <h4>you are logged in</h4>
            </div>
        );

    return (
        <div className="signup">
            <div className="form">
                <input
                    name="name"
                    value={name}
                    placeholder="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                />
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
                    minLength="6"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" onClick={sendDetailes} value={"signup"} />
                <p>
                    if you already have account please{" "}
                    <Link to="./login">
                        <span style={{ color: "blue" }}>login</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};
