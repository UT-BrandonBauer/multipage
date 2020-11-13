import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, EditProfile, Posts } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/editprofile" exact component={() => <EditProfile />} />
          <Route path="/Posts" exact component={() => <Posts />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
