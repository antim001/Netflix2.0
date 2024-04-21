import {useState,useEffect} from 'react';
import requests from '../Request.js'
import axios from 'axios'
const Main = () => {
    const [movies,setMovies]=useState([])
  const movie=movies[Math.floor(Math.random()*movies.length)]
    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
          setMovies(response.data.results);
        });
      }, []);
    console.log(movie);
   
    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
               <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div> 
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
          <div className='absolute w-full top-[20%] p-4 md:p-8 '>
         <h1 className='txt-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 '>Play</button>
            <button className='border text-white ml-4 border-gray-300 py-2 px-5 '>Watch Later</button>

           </div>
           <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
          </div>
          
           
            </div>
        </div>
    );
};

export default Main;