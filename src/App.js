import React, { useState, useEffect } from "react";
import Login from "./auth/Login.jsx";
import SignUp from "./auth/SignUp.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import AddTodos from "./AddTodos.jsx";

function App() {
  const [user, setUser] = useState(null);

  // Listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        // If a user is logged in, show the AddTodos component
        <AddTodos />
      ) : (
        // If no user is logged in, show the Login and SignUp components
        <>
          <Login />
          <SignUp />
        </>
      )}
    </div>
  );
}

export default App;
