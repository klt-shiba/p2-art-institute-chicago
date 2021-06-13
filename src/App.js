// import logo from './logo.svg';
import './App.css';

// import Card from './components/Card';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './index.css'

import NavBar from './components/NavBar';
import Home from './components/pages/Home'
import Exhibitions from './components/pages/Exhibitions';
import Artworks from './components/pages/Artworks';
import Favourite from './components/pages/Favourites';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/exhibitions" component={Exhibitions}/>
          <Route exact path="/artworks" component={Artworks}/>
          <Route exact path="/favourites" component={Favourite}/>
          <Route exact path="/" component={Home}/>
        </div>
    </Router>

    </div>
  );
}

export default App;







{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}