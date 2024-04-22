import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { IoMdClose } from "react-icons/io";

const Row = ({ title, fetchURL, rowId }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const [videoPos, setVideoPos] = useState({ x: 0, y: 0 });
    const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        axios.get(fetchURL)
            .then((response) => {
                setMovies(response.data.results);
            });
    }, [fetchURL]);

    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowId);
        slider.scrollLeft -= 500;
    };

    const slideRight = () => {
        let slider = document.getElementById('slider' + rowId);
        slider.scrollLeft += 500;
    };

    const handleShowTrailer = (videoId, posX, posY) => {
        if (isTrailerPlaying && videoRef.current) {
            videoRef.current.internalPlayer.stopVideo();
        }

        setTrailerUrl(videoId);
        setVideoPos({ x: posX, y: posY });
        setIsTrailerPlaying(true);
    };

    const handleCloseTrailer = () => {
        if (videoRef.current) {
            videoRef.current.internalPlayer.stopVideo();
        }
        setTrailerUrl('');
        setIsTrailerPlaying(false);
    };

    const handleOnEnd = (event) => {
        handleCloseTrailer();
    };

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}></MdChevronLeft>
                <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <Movie onShowTrailer={(videoId, posX, posY) => handleShowTrailer(videoId, posX, posY)} item={item} key={id}></Movie>
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}></MdChevronRight>
            </div>
            {trailerUrl && (
                <div className="absolute  md:left-10 w-full h-full z-50">
                    <div className="relative w-full h-full">
                        <YouTube videoId={trailerUrl} opts={opts} className="absolute" style={{ left: videoPos.x, top: videoPos.y }} ref={videoRef} onEnd={handleOnEnd} />
                        <button onClick={handleCloseTrailer} className="absolute top-4  bg-red-700 text-white px-4 py-2 rounded"><IoMdClose/></button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Row;
