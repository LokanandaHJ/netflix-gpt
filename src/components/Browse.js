import Header from "./Header";
import useGetNewMovies from "../hooks/useGetNewMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useGetNewMovies();

    return (
        <>
            <Header />
            <MainContainer />
            {/* <SecondaryContainer /> */}
        </>
    )
}

export default Browse;


// main container
//     - background movie trailer playing
//     - Movie info

// secondary container
//     - movie list * n rows
//     - Card * n 
