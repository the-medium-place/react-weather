import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/"]}>
          <Landing />
        </Route>
        <Route exact path={["/search"]}>
          <Search />
        </Route>
        <Route>
          <NotFound />
        </Route>



      </Switch>
    </Router>
    
  );
}

export default App;
