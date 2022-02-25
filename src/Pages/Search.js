import React,{useState, useContext} from 'react'
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import MicOutlined from '@mui/icons-material/MicOutlined';
import {useNavigate} from 'react-router-dom';
import { GlobalContext } from '../components/GlobalStateContext';
import { actionTypes } from '../components/reducer';
import './home.css';

function Search({hideButtons = false}) {

  const [input,setInput] = useState('');
  const [{},dispatch] = useContext(GlobalContext);
  const history = useNavigate();

  const search = e => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })
    
    history ('/SearchPage');
  }

  return (
    <form className="home-body">
      <div className="search-input">
        <SearchOutlined />
        <input value={input} onChange = {(e) => setInput(e.target.value)} type="text" placeholder='Search Google or type a URL'/>
        <MicOutlined />
      </div>
      {
        !hideButtons? (
          <div className="search-btns">
            <button type='submit' onClick = {search}>Google Search</button>
            <button>I'm Feeling Lucky</button>
          </div>
        ):
        (
          <div className="search-btns hide-buttons">
            <button type='submit' onClick = {search}>Google Search</button>
            <button>I'm Feeling Lucky</button>
          </div>
        )
      }
    </form>
  )
}

export default Search;