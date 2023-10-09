import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function LinkTo() {
  const [user, loading] = useAuthState(auth);
  return (
    <div>
      <nav className="flex justify-between items-center py-10">
        <Link to={"/"}>Logo</Link>
        <ul>
          <li>
            {!user && (
              <Link
                to="/auth/login"
                className="py-2 px-4 text-lg bg-teal-500 text-white rounded-lg font-medium ml-8"
              >
                join now
              </Link>
            )}
            {user && (
              <div>
                <Link to={"/dashboard"}>
                  <img
                    src={user.photoURL}
                    alt="user image"
                    referrerPolicy="no-referrer"
                    className="w-12 rounded-full"
                  />
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LinkTo;
