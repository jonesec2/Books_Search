import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Saved from "../pages/savedBooks";
import Home from "../pages/Home"

function Navbar({ location }) {

   return (
      <div id="top">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav">
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
            >
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route path="/savedBooks">
                     <Saved />
                  </Route>
               </Switch>
            </CSSTransition>
         </TransitionGroup>
      </div>
   )
}

export default withRouter(Navbar);