import React, { useState } from 'react'
import './Login.css'
import { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from './firebase'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { updateProfile } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [ProfilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            return alert("Please enter full name");
        }

        console.log(email, password)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                updateProfile(userAuth.user, {
                    displayName: name,
                    photoURL: ProfilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: ProfilePic,
                        }));
                    });
            }).catch((error) => alert(error));
    }

    const loginToApp = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth,email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                })
                )
            }).catch((error) => alert(error));

    }
    return (
        <div className='login'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2MM3d3wXnnH-eA0UrWsYyXCfBLIPSOY-WAQ&s' alt='' />

            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name (required if registration' type='text' />

                <input value={ProfilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile pic url (optional)' type='text' />

                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />

                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' />


                <button type='submit' onClick={loginToApp}>Sign In</button>

            </form>

            <p>Not a member?{" "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login