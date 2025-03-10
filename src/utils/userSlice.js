import { createSlice } from '@reduxjs/toolkit'

// Creating a slice for user state management
const userSlice = createSlice({
    // Name of the slice
    name: 'user',
    // Initial state of the slice
    initialState: null,
    // Reducers to handle actions
    reducers: {
        // Reducer to add a user
        addUser: (state, action) => {
            // Return the payload as the new state
            return action.payload
        },
        // Reducer to remove a user
        removeUser: (state) => {
            // Return null as the new state
            return null
        }
    }
})

// Exporting the actions generated by createSlice
export const { addUser, removeUser } = userSlice.actions
// Exporting the reducer function generated by createSlice
export default userSlice.reducer


// here only slices are created and exported to be used in the appStore.js file
// the slices are used to create a state tree structure that is used to wrap the app components
// we are exporting actions and this actions are imported from here to use wherevr needed
// the reducer function is also exported to be used in the appStore.js file