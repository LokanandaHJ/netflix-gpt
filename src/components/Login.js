import Header from "./Header";
import { useState, useRef } from "react";
import Validation from "../utils/ValidationLogin";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { loginBackgroundImage } from '../utils/constants';

const Login = () => {

    const dispatch = useDispatch();

    // State to toggle between sign up and sign in
    const [signUp, setSignUp] = useState(false);
    // State to store validation errors
    const [validationError, setValidationError] = useState(null);
    // State to store authentication errors
    const [autheniacationError, setAutheniacationError] = useState(null);

    // References to input fields
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);

    // Handler to toggle between sign up and sign in
    // State to store validation errors
    const [validationError, setValidationError] = useState(null);
    // State to store authentication errors
    const [autheniacationError, setAutheniacationError] = useState(null);

    // References to input fields
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);

    // Handler to toggle between sign up and sign in
    const signUpHandler = () => {
        setSignUp(!signUp);
    };

    // Handler for form submission
    const submitHandler = (e) => {
        // Prevent default form submission
        e.preventDefault();

        // Get values from input fields
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current ? nameRef.current.value : null;

        // Validate input values
        const error = Validation(email, password, name);
        if (error) {
            setValidationError(error);
            return;
        } else {
            setValidationError(null);
        }

        // If sign up is true, create a new user
        if (signUp) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up successfully
                    const user = userCredential.user;
                    setAutheniacationError(null);
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        // Profile updated!
                        dispatch(addUser({ displayName: name, email: email, photoURL: "https://example.com/jane-q-user/profile.jpg", uid: user.uid }));
                    }).catch((error) => {
                        // An error occurred
                    });
                })
                .catch((error) => {
                    // Handle sign up error
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setAutheniacationError(errorCode + " : " + errorMessage);
                });
        } else {
            // If sign up is false, sign in the user
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in successfully
                    const user = userCredential.user;
                    setAutheniacationError(null);
                })
                .catch((error) => {
                    // Handle sign in error
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setAutheniacationError(errorCode);
                });
        }
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img alt="logo" src={loginBackgroundImage} />
            </div>
            <form onSubmit={(e) => { e.preventDefault() }} className="absolute p-8 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90 cursor-pointer">
                <h1 className="font-bold text-3xl p-2">
                    {signUp ? "Sign Up" : "Sign In"}
                    <form onSubmit={(e) => { e.preventDefault() }} className="absolute p-8 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90 cursor-pointer">
                        <h1 className="font-bold text-3xl p-2">
                            {signUp ? "Sign Up" : "Sign In"}
                        </h1>
                        {signUp && (
                            <input
                                ref={nameRef}
                                type="text"
                                placeholder="User name"
                                className="p-3 my-4 w-full bg-gray-700"
                                autoComplete="on"
                            />
                        )}
                        <input
                            type="text"
                            ref={emailRef}
                            placeholder="Email or Phone number"
                            className="p-3 my-4 w-full bg-gray-700"
                            autoComplete="on"
                        />
                        <input
                            type="password"
                            ref={passwordRef}
                            placeholder="Password"
                            className="p-3 my-4 w-full bg-gray-700"
                            autoComplete="on"
                        />
                        <button className="bg-red-600 p-3 my-6 w-full rounded-lg" onClick={submitHandler}>
                            {signUp ? "Sign Up" : "Sign In"}
                        </button>
                        {signUp ? (
                            <p className="text-center">
                                Already have an account?{" "}
                                <span
                                    onClick={signUpHandler}
                                    className="text-blue-500 cursor-pointer"
                                >
                                    Sign In Now
                                </span>
                            </p>
                        ) : (
                            <p className="text-center">
                                New to Netflix?{" "}
                                <span
                                    onClick={signUpHandler}
                                    className="text-blue-500 cursor-pointer"
                                >
                                    Sign Up Now
                                </span>
                            </p>
                        )}
                        {validationError && <p className="text-red-500 text-center">{validationError}</p>}
                        {autheniacationError && <p className="text-red-500 text-center">{autheniacationError}</p>}
                        {signUp && (
                            <input
                                ref={nameRef}
                                type="text"
                                placeholder="User name"
                                className="p-3 my-4 w-full bg-gray-700"
                                autoComplete="on"
                            />
                        )}
                        <input
                            type="text"
                            ref={emailRef}
                            placeholder="Email or Phone number"
                            className="p-3 my-4 w-full bg-gray-700"
                            autoComplete="on"
                        />
                        <input
                            type="password"
                            ref={passwordRef}
                            placeholder="Password"
                            className="p-3 my-4 w-full bg-gray-700"
                            autoComplete="on"
                        />
                        <button className="bg-red-600 p-3 my-6 w-full rounded-lg" onClick={submitHandler}>
                            {signUp ? "Sign Up" : "Sign In"}
                        </button>
                        {signUp ? (
                            <p className="text-center">
                                Already have an account?{" "}
                                <span
                                    onClick={signUpHandler}
                                    className="text-blue-500 cursor-pointer"
                                >
                                    Sign In Now
                                </span>
                            </p>
                        ) : (
                            <p className="text-center">
                                New to Netflix?{" "}
                                <span
                                    onClick={signUpHandler}
                                    className="text-blue-500 cursor-pointer"
                                >
                                    Sign Up Now
                                </span>
                            </p>
                        )}
                        {validationError && <p className="text-red-500 text-center">{validationError}</p>}
                        {autheniacationError && <p className="text-red-500 text-center">{autheniacationError}</p>}
                    </form>
                </div>
                );
};
                );
};

                export default Login;