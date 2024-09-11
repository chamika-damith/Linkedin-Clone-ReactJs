import React from 'react'
import './Sidebar.css';
import { Avatar } from '@mui/material';

function Sidebar() {
    const recentItem= (topic) =>(
        <div className='sidebar_recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2545.jpg?w=1060&t=st=1726075012~exp=1726075612~hmac=cebd5bc6f6e10d49b2dea451e6a0368f0b2ff2476aacd2b8a4d3daa7c38d5c62' alt=''/>
            <Avatar className='sidebar__avatar'/>
            <h2>Chamika damith</h2>
            <h4>Chamikadamith9gmail.com</h4>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>who viewed you</p>
                    <div className='sidebar__statNumber'>
                        2,534
                    </div>
                </div>

                <div className='sidebar__stat'>
                <p>views on post</p>
                    <div className='sidebar__statNumber'>
                        2,442
                    </div>
                </div>
            </div>
        </div>

        <div className='sidebar__buttom'>
            <p>Recent</p>
            {recentItem('rectJs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar