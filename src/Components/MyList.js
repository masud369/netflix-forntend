import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../Pages/Navbar';
import { firebaseAuth } from '../Utils/firbase-config';
import Card from './Card';
import TothemyList from './TothemyList';

const MyList = () => {
    const [movieData,setMovieData] = useState([]);
    const [isScorrled, setIsScorrled] = useState(false);
    const [email,setEmail] = useState(undefined);
    const navigate = useNavigate();
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setEmail(currentUser.email);
        else navigate("/login");
      });
    useEffect(()=>{
        fetch(`https://netflix-2z28.onrender.com/liked/movie?email=${email}`)
        .then(res=>res.json())
        .then(data=>setMovieData(data))
        .catch(err=>console.log(err))
    
    },[movieData])
    // console.log(email);
    window.onscroll = () => {
        setIsScorrled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
    
    return (
        <div>
            <div className='navbar'>
            <Navbar isScorrled={isScorrled} />
        </div>
            {
                movieData.map(movie=>{return <TothemyList key={movie._id}  movie={movie.likedMovies}/>})
            }
            
        </div>
    );
};

export default MyList;