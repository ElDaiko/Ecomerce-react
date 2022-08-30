import React from "react";
import Cart from "./CartWidget";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="google.com">Bendu</a>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="google.com">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="google.com">Features</a>
                </li>
              </ul>
              <Cart/>
              {/*<Form contBuscar="Products"/>*/}
            </div>
          </div>
        </nav>
    )
}

export default Navbar;