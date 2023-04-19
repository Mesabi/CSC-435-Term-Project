import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Counter from "./useStates.js"
import ShowCount from "./useStates.js";
import Landing from "./landing.js";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">UseState and UseEffect test</Link>
          </li>
          <li>
            <Link to="/contact">UseContext test</Link>
          </li>
          <li>
            <Link to="/Redux">Redux test</Link>
          </li>
        </ul>
      </nav>
      
      <Outlet />
    </>
  )
};

export default Layout;