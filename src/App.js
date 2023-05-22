import logo from './logo.svg';
import './App.css';

import { Nav } from './components/Navbar';
import { FeedbackForm } from './components/Feedback';
import QuranPage from './components/Qrn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>

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
      </header>

      <div className='Quran'>
        <QuranPage/>
      </div>

      <div className="FeedbackForm">
        <FeedbackForm/>
      </div>
    </div>
  );
}

export default App;
