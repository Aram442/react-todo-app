import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State to store error messages

  const signIn = (e) => {
    e.preventDefault();

    // Reset any previous error messages
    setError(null);

    //------------------ SIGN IN WITH EMAIL & PASSWORD -------------------//
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          // Display the error message to the user
          setError(error.message);
        });
    } catch (error) {
      console.error(error);
    }
  };

  //--------------------- SIGN IN WITH GOOGLE --------------------------//
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white shadow-xl mt-4 p-4 text-gray-700 rounded-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto">
      <h2 className="text-3xl font-medium mb-4">Join Today</h2>
      <div className="py-4">
        <h3 className="py-2 sm:py-4">Sign in with one of the providers</h3>
      </div>
      <div className="flex flex-col gap-3">
        <button
          onClick={GoogleLogin}
          className="bg-gray-700 text-white p-4 w-full font-medium rounded-lg flex items-center justify-center gap-2"
        >
          <FcGoogle className="text-2xl" /> Sign in with Google
        </button>

        <form onSubmit={signIn} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Enter The Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 border rounded-lg"
          />
          <button
            type="submit"
            className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-800"
          >
            Log In
          </button>
        </form>

        {error && (
          <div className="text-red-600 mt-2 text-center">
            The Email & Password Incorrect or Not Exist
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
