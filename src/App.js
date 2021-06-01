// import logo from './logo.svg';
import './App.css';
// import Card from './components/Card';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
      <div>
          <NavBar/>
          <Route path="/" component={Home}/>
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