import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, email, password)
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

  return (
    <div className="bg-white shadow-xl p-4 mx-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-4 rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Create Account
      </h1>
      <form onSubmit={signUp} className="flex flex-col gap-4">
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
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
