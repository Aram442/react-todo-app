import React from "react";

function Link() {
  return (
    <div>
      <nav className="flex justify-between items">
        <Link href={"/"}>Logo</Link>
        <ul>
          <Link href={"/auth/login"}>
            <a className="py-2 px-4 text-lg ">join now</a>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Link;
