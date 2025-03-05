import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    console.log("Current user:", user); // Debugging statement

    const navigate = useNavigate();

    const userSignOut = () => {
        console.log("Signing out..."); // Debugging statement
        dispatch(removeUser());
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful"); // Debugging statement
            navigate("/");
        }).catch((error) => {
            // An error happened.
            console.log('Error in signout', error);
        });
    }

    return (
        <div className="w-full fixed z-30 px-8 py-2 bg-gradient-to-b from-black to-transparent flex justify-between items-center">
            <img alt="Logo" className="w-40" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
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