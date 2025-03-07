import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moviesReducer from './moviewSlice'

const appStore = configureStore({
        reducer: {
                // Add the reducers here with any key name this key name will be used to access the state in the components
                user: userReducer,
                movies: moviesReducer
        }
});

export default appStore;
//in this file multiple slices are added to make one state tree structure and will be used to wrap the app components
//import all the slices that are created and use them in the reducer object