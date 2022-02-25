import React,{useState,useEffect} from 'react';
import Apps from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import Search from './Search';
import './home.css';

function Home() {

  return (
    <div className="home">
      <div className="home-header">
        <div>
          <Link to='/About'>About</Link>
          <Link to='/Store'>Store</Link>
        </div>
        <div>
          <Link to='/Gmail'>Gmail</Link>
          <Link to='/Images'>Images</Link>
          <Link to='/Apps'><Apps /></Link>
          <Link to='/Store'><Avatar /></Link>
        </div>
      </div>
      <div className = 'home-body'>
        <img src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" alt="" />
        <Search />
      </div>
    </div>
  )
}

export default Home;