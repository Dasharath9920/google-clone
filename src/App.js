import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/SearchPage' element={<SearchPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
