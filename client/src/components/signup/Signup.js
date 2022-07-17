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
    try {
      const { data } = await usersAPI.post("/users", { name, email, password });
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={sendDetailes}>signup</button>
        <p>
          if you already have account please <Link to="./login">login</Link>
        </p>
      </div>
    </div>
  );
};
