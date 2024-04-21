import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import movieTrailer from 'movie-trailer';

const Movie = ({ item, onShowTrailer }) => {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like);
    };

    const handleClick = (movieName) => {
        movieTrailer(movieName || "")
            .then((url) => {
                if (url) {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    const videoId = urlParams.get("v");
                    onShowTrailer(videoId);
                } else {
                    console.log("Trailer not found");
                }
            })
            .catch((error) => {
                console.error("Error fetching trailer:", error);
            });
    };

    return (
        <div 
            className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' 
            onClick={() => handleClick(item?.name || item?.title)}
        >
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>     
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                <p>
                    {like 
                        ? <FaHeart className='absolute top-4 left-4 text-gray-300' onClick={(e) => { e.stopPropagation(); handleLike(); }} /> 
                        : <FaRegHeart className='absolute top-4 left-4 text-gray-300' onClick={(e) => { e.stopPropagation(); handleLike(); }} />}
                </p>
            </div>
        </div>
    );
};

export default Movie;
