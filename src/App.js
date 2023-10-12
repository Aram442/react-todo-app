import React, { useState, useEffect } from "react";
import Login from "./auth/Login.jsx";
import AddTodos from "./AddTodos.jsx";
import SignUp from "./auth/SignUp.jsx";
import AuthDatails from "./auth/AuthDatails.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";

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
        <AddTodos user={user} />
      ) : (
        // If no user is logged in, show the Login and SignUp components
        <>
          <Login />
          <SignUp />
        </>
      )}
      <AuthDatails />
    </div>
  );
}

export default App;
