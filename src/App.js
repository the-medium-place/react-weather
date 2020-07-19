import React from 'react';
import './App.css';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';


function App() {
  return (

    <Router>
      <Navbar />
      <Jumbotron />
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
      <Footer />
    </Router>
    
  );
}

export default App;
