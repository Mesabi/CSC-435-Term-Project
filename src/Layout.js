import { Outlet, Link } from "react-router-dom";
import { Button, Checkbox, TitleBar, ThemeProvider } from '@react95/core';

const Layout = () => {
  return (
    <>
    <Button>I Exist!</Button>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
