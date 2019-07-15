import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // we create a router element for each route of application, inside these router elements we have defined components. These components are created separately.
    <Router> 
      <Navbar />
      <br/>
    <Route path="/" exact component={ExercisesList} />
    <Route path="/edit/:id" component={EditExercise} />
    <Route path="/create" component={CreateExercise} />
    <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
