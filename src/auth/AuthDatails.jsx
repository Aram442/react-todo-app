import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function AuthDatails() {
  const [AuthUser, setAuthUser] = useState(null);

  useEffect(() => {
    //----------------------- SIGN OUT ---------------------//
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    //----------------- WORKED TO SIGN OUT ----------------//
    return () => {
      listen();
    };
  }, []);

  //----------------------- SIGN OUT ---------------------//
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out Successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {AuthUser ? (
        <>
          <p>`Signed In as {AuthUser.email}`</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Sugned Out</p>
      )}
    </div>
  );
}

export default AuthDatails;