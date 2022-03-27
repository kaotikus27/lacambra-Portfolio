import React from "react"
import Nav from "./Pages/Nav"
import Main from "./Pages/Main"
import Footer from "./Pages/Footer"
import About from "./Pages/About"
import Service from "./Pages/Service"
import Contact from "./Pages/Contact"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/Main" exact component={Main} />
          <Route path="/" exact component={Main} />
          <Route path="/About" exact component={About} />
          <Route path="/Service" exact component={Service} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>

    </>
  )
}