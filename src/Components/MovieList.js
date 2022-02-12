import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

const MovieList = () => {

    const {movieData} = useSelector ( (state) => state);

  return (
    <div className='movie-list'>
        {
            React.Children.toArray(movieData.map(el => <MovieCard movie={el} />))
        }
    </div>
  )
}

export default MovieList