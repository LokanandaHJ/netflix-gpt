import { useEffect } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./Videobackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const nowPlayingMoviesObject = useSelector((store) => store?.movies?.nowPlayingMovies);
    if (!nowPlayingMoviesObject) return; // If nowPlayingMoviesObject is null, return

    const mainMovie = nowPlayingMoviesObject[0];

    return (
        <div className="">
            <VideoTitle title={mainMovie.original_title} overView={mainMovie.overview} />
            <VideoBackground videoId={mainMovie.id} />
        </div>
    )
}

export default MainContainer;