import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import { collection, addDoc,query, onSnapshot,orderBy, serverTimestamp } from 'firebase/firestore';


function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })));
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const sendPost = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'posts'), {
                name: 'chamika damith',
                description: 'this is a description',
                message: input,
                photoUrl: '',
                timestamp: serverTimestamp(),
            });
            setInput(""); 
        } catch (error) {
            console.error("Error adding post: ", error);
        }
    }
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className='feed__inputOption'>
                    <InputOption Icon={ImageIcon} title={'Photo'} color="#70B5F9" />
                    <InputOption Icon={EventIcon} title={'event'} color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title={'write article'} color="#7FC15E" />
                </div>
            </div>

            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}

                />
            ))}
        </div>
    )
}

export default Feed