import { Route } from 'react-router-dom';
import './App.css';
import Guests from './components/guests/Guests';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import MapTables from './components/mapTables/MapTables';

function App() {

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/map" component={MapTables} />
      <Route exact path="/guests" component={Guests} />
    </div>
  );
}

export default App;
