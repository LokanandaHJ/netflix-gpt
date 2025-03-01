import Header from "./Header";
import { useState } from "react";

const Login = () => {

    const [signUp, setSignUp] = useState(false);

    const signUpHandler = () => {
        setSignUp(!signUp);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg" />
            </div>
            <form className="absolute p-8 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">
                <h1 className="font-bold text-3xl p-2">{
                    signUp ? "Sign Up" :
                        "Sign In"
                }
                </h1>
                {
                    signUp && <input type="text" placeholder="User name" className="p-3 my-4 w-full bg-gray-700" autoComplete="on" />
                }
                <input type="text" placeholder="Email or Phone number" className="p-3 my-4 w-full bg-gray-700" autoComplete="on" />
                <input type="password" placeholder="Password" className="p-3 my-4 w-full bg-gray-700" autoComplete="on" />
                <button className="bg-red-600 p-3 my-6 w-full rounded-lg">{signUp ? "Sign Up" :
                    "Sign In"}</button>
                {
                    signUp ? <p className="text-center">Already have an account? <span onClick={signUpHandler} className="text-blue-500 cursor-pointer">Sign In Now</span></p> : <p className="text-center">New to Netflix? <span onClick={signUpHandler} className="text-blue-500 cursor-pointer">Sign Up Now</span></p>
                }
            </form>
        </div>
    )
}

export default Login;