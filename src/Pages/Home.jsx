import React from 'react'
import SearchBox from '../components/SearchBox.jsx'
import MovieList from '../components/MovieList.jsx'

function Home({
    fetchMovieData,
    movieData,
}) {
  return (
    <div className='w-full h-13/15 p-5 flex flex-col items-center gap-2  '>
        <SearchBox fetchMovieData={fetchMovieData}/>
        <MovieList movieData={movieData}/>
    </div>
  )
}

export default Home;