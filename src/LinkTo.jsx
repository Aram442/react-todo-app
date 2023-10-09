import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";


function LinkTo() {
  return (
    <div>
      <nav className="flex justify-between items">
        <Link to={"/"}>Logo</Link>
        <ul>
          <li>
            <Link to="/auth/login" className="py-2 px-4 text-lg">
              join now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LinkTo;
