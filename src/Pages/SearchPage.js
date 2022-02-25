import React,{useContext} from 'react';
import './searchPage.css';
import {GlobalContext} from '../components/GlobalStateContext';
import useGoogleSearch from './useGoogleSearch';
import SearchIcon from '@mui/icons-material/Search';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ArticleIcon from '@mui/icons-material/Article';
import BookIcon from '@mui/icons-material/Book';
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Search from './Search';
import {results} from './response';
import {Link} from 'react-router-dom';

function SearchPage() {

   const [{term},dispatch] = useContext(GlobalContext);
   // Live API call
   const {data} = useGoogleSearch(term);

   // Storing results calling once. Because getting data live each time is expensive and only 100 free calls per user.
   // You can get this in console > Network > response
   // const data = results;
  return (
    <div className = "searchPage">
      <div className="searchPage-header">
         <Link to='/'>
            <img className = 'header-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9YII3UewjukW9TbL1wKcj4i1G_HmWthPRQ&usqp=CAU" alt="google logo" />
         </Link>

         <div className = 'searchPage-header-input'>
            <Search className = 'searchComp' hideButtons = {true}/>
            <div className="searchPage-options">
               <div className="searchPage-options-left">
                  <button className="option"><SearchIcon sx={{fontSize: 17}}/> All</button>
                  <button className="option"><InsertPhotoIcon sx={{fontSize: 17}}/>Images</button>
                  <button className="option"><ArticleIcon sx={{fontSize: 17}}/>News</button>
                  <button className="option"><BookIcon sx={{fontSize: 17}}/>Books</button>
                  <button className="option"><VideocamIcon sx={{fontSize: 17}}/>Videos</button>
                  <button className="option"><MoreVertIcon sx={{fontSize: 17}}/>More</button>
               </div>
               <div className = 'searchPage-options-left'>
                  <button className="option">Settings</button>
                  <button className="option">Tools</button>
               </div>
            </div>
         </div>
      </div>

      {term && (
         <div className="searchPage-results">
            <p className="results-count">About {data?.searchInformation.formattedTotalResults}&nbsp;
            results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>

            {
               data?.items.map((item) => {
                  let new_id = Math.random().toString();
                  return <div className="search_result_item" key = {new_id}>
                     <a href={item.link}>https://{item.displayLink}</a>
                     <a href={item.link}>
                        <h2 className="item_title">{item.title}</h2>
                     </a>
                     <p>{item.snippet}</p>
                  </div>
               })
            }
         </div>  
      )} 
    </div>
  )
}

export default SearchPage;