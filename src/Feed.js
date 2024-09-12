import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

function Feed() {
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input type='text' />
                        <button type='submit'>Send</button>
                    </form>
                </div>

                <div className='feed__inputOption'>
                    <InputOption Icon={ImageIcon} title={'Photo'} color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title={'video'} color="#E7A33E"/>
                    <InputOption Icon={EventIcon} title={'event'} color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title={'write article'} color="#7FC15E"/>
                </div>
            </div>
        </div>
    )
}

export default Feed