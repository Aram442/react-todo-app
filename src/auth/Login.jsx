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

  const signIn = (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

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
    <div className="bg-white shadow-xl mt-32 p-10 text-gray-700 rounded-lg w-1/2 mx-auto">
      <h2 className="text-3xl font-medium mb-4">Join Today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers</h3>
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
      </div>
    </div>
  );
}

export default Login;
