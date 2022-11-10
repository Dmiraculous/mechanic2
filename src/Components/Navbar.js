import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul class="mainMenu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div class="nav-logo">
            <img src="./assets/about-us/nav-logo.png" alt="logo" />
          </div>

          <div class="nav-right">
            <i class="fa-solid fa-cart-shopping"></i>

            <div class="dropdown">
              <button
                type="button"
                class="btn btn-textiary dropdown-toggle"
                data-toggle="dropdown"
              >
                <i class="fa-regular fa-lg fa-user users"></i>Hi Audu
                <span class="caret"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
