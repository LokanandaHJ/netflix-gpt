import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { auth } from '../utils/fireBase';
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {

    // useDispatch is used to dispatch actions to the redux store
    const dispatch = useDispatch();

    // useDispatch is used to dispatch actions to the redux store
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
    ])


    // here onAuth change will be acting like event listener
    // for auth state change in firebaseapp we will add user to the redux store
    // if user is logged includes user data else null
    // this will be used to check if user is logged in or not
    // if user is logged in then we will redirect to the browse page
    // else we will show the login page

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body; 