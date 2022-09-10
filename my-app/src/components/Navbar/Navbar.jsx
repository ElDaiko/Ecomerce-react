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
                  <a className="nav-link active" href="/">Bendu</a>
                </li>
                <Link to = "/category/Tees">
                    <li className="nav-link">Tees</li>
                </Link>
                <Link to = "/category/Short">
                    <li className="nav-link">Shorts</li>
                </Link>
                <Link to = "/category/Hoodie">
                    <li className="nav-link">Hoodies</li>
                </Link>
                <li>
                  <a className="nav-link" href="mailto:mirole16@gmail.com?Subject=Yo your clothes are dope but...">Contact</a>
                </li>
              </ul>
              <Link to = "/cart">
                <Cart/>
              </Link>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;