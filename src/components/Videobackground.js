import { useEffect } from "react";
import { tmdbApiOptions } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMainMovieTrailer } from '../utils/moviewSlice';
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ videoId }) => {

    useMovieTrailer(videoId);

    const getNowPlayingMovieTrailerFromStore = useSelector((store) => store?.movies?.mainMovieTrailer);
    if (!getNowPlayingMovieTrailerFromStore) return;

    const trailerId = getNowPlayingMovieTrailerFromStore?.key;
    const trailerString = `https://www.youtube.com/embed/${trailerId}?si=ar0XL_QlOe241dVg`;
    // const trailerString = `https://www.youtube.com/embed/${trailerId}?si=ar0XL_QlOe241dVgQ2Q2gQ&autoplay=1&mute=1`;

    return (
        <div className="">
            <iframe
                className="w-screen aspect-video"
                src={trailerString}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    );
};
export default VideoBackground;
