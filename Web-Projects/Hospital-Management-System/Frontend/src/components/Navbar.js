import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default Navbar;
