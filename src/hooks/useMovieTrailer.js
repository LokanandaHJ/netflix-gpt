import { useEffect } from "react";
import { tmdbApiOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMainMovieTrailer } from '../utils/moviewSlice';

const useMovieTrailer = (videoId) => {

    const dispatch = useDispatch();

    const getNowPlayingMovieTrailer = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/" + videoId + "/videos?language=en-US",
            tmdbApiOptions
        );
        const data = await response.json();
        const trailer =
            data.results.filter((video) => video.type === "Trailer") ||
            data.results[0];
        dispatch(addMainMovieTrailer(trailer[0]));
    };

    useEffect(() => {
        getNowPlayingMovieTrailer();
    }, []);

}

export default useMovieTrailer;