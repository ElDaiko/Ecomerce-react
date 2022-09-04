import React from "react";
import Cart from "./CartWidget";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Bendu</a>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Features">Features</a>
                </li>
                <li className="nav-item">
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