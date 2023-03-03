import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchMovies, getGenres } from '../Store';
import Navbar from './Navbar';
import Slider from '../Components/Slider';
import NotAvailable from '../Components/NotAvailable';
import SelectGenre from '../Components/SelectGenre';

const TVshows = () => {
    
    const [isScorrled, setIsScorrled] = useState(false);
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
    const genres = useSelector((state) => state.netflix.genres);
    const movies = useSelector((state) => state.netflix.movies);
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getGenres());
    }, []);
    useEffect(() => {
      if (genresLoaded) {
        dispatch(fetchMovies({ genres, type: "tv" }));
      }
    }, [genresLoaded]);
    window.onscroll = () => {
      setIsScorrled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };

    return (
      <Container>
        <div className='navbar'>
            <Navbar isScorrled={isScorrled} />
        </div>
        <div className="data"> 
          <SelectGenre genres={genres} type="tv"/>
          {
            movies.length? <Slider movies={movies}/>:<NotAvailable/>
          }
        </div>
        </Container>
    );
};

  const Container = styled.div`
    .data{
      margin-top:8rem;
      .not-available{
        text-align:center;
        color:white;
        margin-top:4rem;
      }
    }
  `;

export default TVshows;