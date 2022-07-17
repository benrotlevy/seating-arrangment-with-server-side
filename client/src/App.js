import { Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/context/Context";
import Guests from "./components/guests/Guests";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import MapTables from "./components/mapTables/MapTables";
import { Signup } from "./components/signup/Signup";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={MapTables} />
        <Route exact path="/guests" component={Guests} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </AuthProvider>
    </div>
  );
}

export default App;
