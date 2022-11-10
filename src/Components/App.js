import React from "react";
import "./Main.scss";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Menu } from "./Menu";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <div className="Content">
        <switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/blog" component={Blog} />

          <Route exact path="/contact" component={Contact} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
