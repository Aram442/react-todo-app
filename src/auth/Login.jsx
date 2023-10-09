import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
      <h2 className="text-3xl font-medium">Join Today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign with one of the providers</h3>
      </div>
      <div className="flex flex-col gap-3">
        <button className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
          <FcGoogle className="text-2xl" /> Sign in with Google
        </button>
        <button className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
          <AiFillFacebook className="text-2xl" /> Sign with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
