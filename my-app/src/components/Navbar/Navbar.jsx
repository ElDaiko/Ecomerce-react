import React from "react";
import Cart from "./CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
{/*             <a className="navbar-brand" href="/">Bendu</a> */}
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                <Link to = "/itemList">
                    <li className="nav-link">Tees</li>
                </Link>
                <Link to = "/itemList">
                    <li className="nav-link">Shorts</li>
                </Link>
                <Link to = "/itemList">
                    <li className="nav-link">Hoodies</li>
                </Link>
                <li>
                  <a className="nav-link" href="mailto:mirole16@gmail.com?Subject=Yo your clothes are dope but...">Contact</a>
                </li>
              </ul>
              <Cart/>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;