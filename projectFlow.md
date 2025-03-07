# Project Structure

## Components

- `Header.js`
- `Browse.js`
- `VideoBackground.js`
- `VideoTitle.js`
- `MainContainer.js`
- `SecondaryContainer.js`

## Hooks

- `useGetNewMovies.js`
- `useMovieTrailer.js`

## Redux

- `moviewSlice.js`

## Utilities

- `constants.js`

# Code Flow

## 1. Header Component (`Header.js`)

- Displays the header with the logo and user information.
- Monitors authentication state changes using `onAuthStateChanged`.
- Updates the Redux store with user information or removes it upon sign-out.

## 2. Browse Component (`Browse.js`)

- Main component for browsing movies.
- Uses the `useGetNewMovies` hook to fetch and store now-playing movies in the Redux store.
- Renders the `Header`, `MainContainer`, and optionally `SecondaryContainer`.

## 3. VideoBackground Component (`VideoBackground.js`)

- Fetches and displays the background video trailer.
- Uses the `useMovieTrailer` hook to fetch the trailer based on the provided `videoId`.
- Retrieves the trailer URL from the Redux store and embeds it in an iframe.

## 4. VideoTitle Component (`VideoTitle.js`)

- Displays the title and overview of the movie.
- Includes "Play" and "More Info" buttons.
- Styled with Tailwind CSS classes.

## 5. MainContainer Component (`MainContainer.js`)

- Displays the main content, including the background video and movie information.
- Likely uses `VideoBackground` and `VideoTitle` components to display the main movie.

## 6. SecondaryContainer Component (`SecondaryContainer.js`)

- Displays additional movie lists.
- Contains multiple rows of movie cards.

## 7. useGetNewMovies Hook (`useGetNewMovies.js`)

- Fetches now-playing movies from the TMDB API.
- Dispatches the `addNowPlayingMovies` action to store the movies in the Redux store.
- Uses `useEffect` to fetch movies when the component mounts.

## 8. useMovieTrailer Hook (`useMovieTrailer.js`)

- Fetches the trailer for a specific movie based on the provided `videoId`.
- Dispatches the `addMainMovieTrailer` action to store the trailer in the Redux store.
- Uses `useEffect` to fetch the trailer when the component mounts.

## 9. Redux Slice (`moviewSlice.js`)

- Manages the state for movies and trailers.
- Initial state includes `nowPlayingMovies` and `mainMovieTrailer`, both initialized as empty arrays.
- Reducers:
  - `addNowPlayingMovies`: Updates the `nowPlayingMovies` state with the fetched movies.
  - `addMainMovieTrailer`: Updates the `mainMovieTrailer` state with the fetched trailer.

# Example Code Flow

## User Visits Browse Page

- `Browse.js` component is rendered.
- `useGetNewMovies` hook fetches now-playing movies and stores them in the Redux store.
- `Header`, `MainContainer`, and optionally `SecondaryContainer` are rendered.

## MainContainer Displays Background Video

- `VideoBackground.js` component fetches the main movie trailer using `useMovieTrailer`.
- Trailer URL is retrieved from the Redux store and embedded in an iframe.

## MainContainer Displays Movie Title and Overview

- `VideoTitle.js` component displays the movie title and overview.
- Includes "Play" and "More Info" buttons.

## User Interacts with Header

- `Header.js` monitors authentication state changes.
- Updates the Redux store with user information or removes it upon sign-out.

# Summary

- The project uses React components, hooks, and Redux for state management.
- Components are responsible for fetching data, updating the Redux store, and rendering UI elements.
- Hooks are used to encapsulate data fetching logic.
- Redux slices manage the state for movies and trailers.
- The project is styled using Tailwind CSS classes.
