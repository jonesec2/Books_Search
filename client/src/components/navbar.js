import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import Saved from "../pages/savedBooks";
import Home from "../pages/Home"

function Navbar() {

   return (
      <div id="top">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to="/">Book Search</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to="savedBooks">Saved Books</Link>
                  </li>
               </ul>
            {/* </div> */}
         </nav>

               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route path="/savedBooks">
                     <Saved />
                  </Route>
               </Switch>
      </div>
   )
}

export default withRouter(Navbar);