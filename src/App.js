import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Login } from "./pages/Registr";




const About = () => <h1>Главная страница</h1>





function App() {
  return (
    <>
        <Router> 
        <Switch>
          <Route exact path="/" component={Login} />  
          <Route path="/about" component={About} />  
        </Switch>
      </Router>
    </>
  );
}

export default App;