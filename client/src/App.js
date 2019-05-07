import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import CreateProfile from "./pages/CreateProfile"
import AList from "./pages/AList"
import Query from "./pages/Query"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Login from "./components/login ";
import MyAccount from "./components/MyAccount"
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          
          <Route exact path="/query" component={Query} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/create-profile" component={CreateProfile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/myAccount" component={MyAccount} />
        </Wrapper>
       
      </div>
    </Router>
  );
}

export default App;
