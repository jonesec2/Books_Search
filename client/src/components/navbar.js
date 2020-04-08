import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Saved from "../pages/savedBooks";
import Home from "../pages/Home"

function Navbar() {

   return (
      <div id="navbar">
         <nav className="navbar navbar-dark bg-primary fixed-top">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to="/">Book Search</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to="savedBooks">Saved Books</Link>
                  </li>
               </ul>
            </div>
         </nav>

         <TransitionGroup>
            <CSSTransition
               key={location.key}
               timeout={{ enter: 300, exit: 300 }}
               classNames={'fade'}
            ></CSSTransition>
            <Switch>
               <Route exact path={["/", "/saved"]}>
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