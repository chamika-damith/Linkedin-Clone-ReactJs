import React from 'react'
import './Sidebar.css';
import { Avatar } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
        <h1>I am a sidebar</h1>
        <div className='sidebar__top'>
            <img src='' alt=''/>
            <Avatar />
        </div>
    </div>
  )
}

export default Sidebar