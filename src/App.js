import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { SignIn } from "./Registr";
// // import { Step2 } from "./Step2";
// // import { Step3 } from "./Step3";
// // import { Result } from "./Result";
// import { Header } from "./Header";



const About = () => <h1>Главная страница</h1>
// // const Step1 =() => <>Step1</>
// const Step2 =() => <>Step2</>
// const Step3 =() => <>Step3</>
// const Result =() => <>Result</>





function App() {
  return (
    <>
        <Router> 
        <Switch>
          <Route exact path="/" component={SignIn} />  
          <Route path="/about" component={About} />  
        </Switch>
      </Router>
    </>
  );
}

export default App;