
import Register from "./pages/register/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx" 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    // Link
  } from "react-router-dom";

  import { useContext } from "react";
  import { AuthContext } from "./context/AuthContext";




  function App() {
    const { user } = useContext(AuthContext);
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
        </Switch>
      </Router>
    );
  }
  

export default App;

// function App() {
  // const { user } = useContext(AuthContext);
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           {user ? <Home /> : <Register />}
//         </Route>
//         <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
//         <Route path="/register">
//           {user ? <Redirect to="/" /> : <Register />}
//         </Route>
//         <Route path="/profile/:username">
//           <Profile />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }
