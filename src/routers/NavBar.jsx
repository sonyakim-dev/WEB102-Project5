import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
