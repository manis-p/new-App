
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';




function App() {
  return (

    <Router>

      <div>
        <Navbar />
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/home">
          <News country="in" category="general" pageSize={9} />
        </Route>
        <Route path="/business">
          <News country="in" category="business" pageSize={9} />
        </Route>
        <Route path="/entertainment">
          <News country="in" category="entertainment" pageSize={9} />
        </Route>
        <Route path="/general">
          <News country="in" category="general" pageSize={9} />
        </Route>
        <Route path="/health">
          <News country="in" category="health" pageSize={9} />
        </Route>
        <Route path="/science">
          <News country="in" category="science" pageSize={9} />
        </Route>
        <Route path="/sports">
          <News country="in" category="sports" pageSize={9} />
        </Route>
        <Route path="/technology">
          <News country="in" category="technology" pageSize={9} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
