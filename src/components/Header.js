import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { flixLogo } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const navigate = useNavigate();

    useEffect(() => {
        //onAuthStateChanged will be called whenever the auth state changes
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user

                // getting user data from the user object
                const { displayName, email, photoURL, uid } = user;
                const userData = {
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                    uid: uid
                }
                // adding user to the redux store this is a custom action we added in the userSlice to add user
                dispatch(addUser(userData));
                navigate('/browse');

            } else {
                // User is signed out
                // removing user from the redux store
                dispatch(removeUser());
                navigate('/');
            }
        });

        // Cleanup subscription on unmount
        return () => {
            unsubscribe();
        }
    }, [])


    const userSignOut = () => {
        dispatch(removeUser());
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="w-full fixed z-30 px-8 py-2 bg-gradient-to-b from-black to-transparent flex justify-between items-center">
            <img alt="Logo" className="w-40" src={flixLogo} />
            {
                user ? (
                    <div>
                        <button className="text-white px-3 py-1 rounded-lg">{user.displayName}</button>
                        <button className="bg-red-600 text-white px-3 py-1 rounded-lg" onClick={() => { userSignOut() }}>Logout</button>
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    )
}

export default Header;