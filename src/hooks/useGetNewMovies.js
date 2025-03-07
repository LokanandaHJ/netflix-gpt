import { useEffect } from 'react';
import { tmdbApiOptions } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviewSlice';
import { useDispatch } from 'react-redux';

const useGetNewMovies = () => {

    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        // First await: Wait for the fetch request to complete
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', tmdbApiOptions);
        // Second await: Wait for the response to be parsed as JSON
        const data = await response.json();
        // Dispatch the action to add the now playing movies to the store
        dispatch(addNowPlayingMovies(data.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useGetNewMovies;