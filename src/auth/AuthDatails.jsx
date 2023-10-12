import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function AuthDatails() {
  const [AuthUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);
  return <div>{AuthUser ? <p>Signed In</p> : <p>Sugned Out</p>}</div>;
}

export default AuthDatails;
